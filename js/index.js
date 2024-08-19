var barCount = 20;
var initialDateStr = "01 Apr 2017 00:00 Z";

var ctx = document.getElementById("chart").getContext("2d");
ctx.canvas.width = 1400;
ctx.canvas.height = 750;

var barData = getRandomData(initialDateStr, barCount);
function lineData() {
  return barData.map((d) => {
    return { x: d.x, y: d.c };
  });
}

const chart = new Chart(ctx, {
  type: "candlestick",
  data: {
    datasets: [
      {
        label: "BTC/EUR",
        data: barData,
      },
    ],
  },
  options: {
    responsive: true,           
    maintainAspectRatio: false,
  }
});

function randomUpdate() {
  chart.data.datasets[0].data.shift();
  var date = luxon.DateTime.now();
  var data = randomBar(date, chart.data.datasets[0].data[18].c);
  chart.data.datasets[0].data.push(data);
  chart.update();
}

var getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomBar(date, lastClose) {
  var open = +randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
  var close = +randomNumber(open * 0.95, open * 1.05).toFixed(2);
  var high = +randomNumber(
    Math.max(open, close),
    Math.max(open, close) * 1.1
  ).toFixed(2);
  var low = +randomNumber(
    Math.min(open, close) * 0.9,
    Math.min(open, close)
  ).toFixed(2);
  return {
    x: date.valueOf(),
    o: open,
    h: high,
    l: low,
    c: close,
  };
}

function getRandomData(dateStr, count) {
  var date = luxon.DateTime.now();
  date = date.minus({ seconds: 30 });
  var data = [randomBar(date, 30)];
  while (data.length < count) {
    date = date.plus({ seconds: 1 });
    data.push(randomBar(date, data[data.length - 1].c));
  }
  return data;
}

window.setInterval(randomUpdate, 600);
