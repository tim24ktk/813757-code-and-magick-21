'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 20;
const FONT_HEIGHT = 20;
const BAR_GAP = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = CLOUD_HEIGHT - FONT_GAP - FONT_HEIGHT - GAP - FONT_HEIGHT - FONT_GAP - FONT_HEIGHT - GAP;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = `#000000`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2 + GAP);
  ctx.font = `"PT Mono" 16px`;
};

const getMaxElement = function (elements) {
  let maxElement = elements[0];
  for (let i = 1; i < elements.length; i++) {
    if (elements[i] > maxElement) {
      maxElement = elements[i];
    }
  }
  return maxElement;
};

const getRandomNumber = function (min = 0, max = 100) {
  return Math.random() * (max - min) - min;
};

window.renderStatistics = function (ctx, players, times) {

  let maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#ffffff`);

  for (let i = 0; i < players.length; i++) {

    ctx.fillStyle = players[i] === `Вы` ? `rgba(255, 0, 0, 1)` : `hsl(240, 100%, ` + getRandomNumber() + `%)`;

    ctx.fillRect(
        CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - FONT_GAP,
        BAR_WIDTH,
        (-BAR_HEIGHT * times[i]) / maxTime
    );

    ctx.fillStyle = `#000000`;
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - FONT_GAP - GAP
    );

    ctx.fillText(
        players[i],
        CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT
    );
  }
};
