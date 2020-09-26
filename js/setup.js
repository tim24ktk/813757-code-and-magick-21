'use strict';

const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];
const ARRAYS_LENGTH = 4;

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

// ф-я получения случайного числа
const getRandomNumber = function (min = 0, max = 100) {
  return Math.random() * (max - min) + min;
};

// ф-я создания массива из 4-х сгенерированных объектов
const createWizard = function () {
  const arrays = [];

  for (let i = 0; i < ARRAYS_LENGTH; i++) {
    const wizardType = {
      name: `` + FIRST_NAMES[Math.round(getRandomNumber(0, FIRST_NAMES.length - 1))] + ` ` + SURNAMES[Math.round(getRandomNumber(0, SURNAMES.length - 1))] + ``,
      coatColor: `` + coatColors[Math.round(getRandomNumber(0, coatColors.length - 1))] + ``,
      eyesColor: `` + eyesColors[Math.round(getRandomNumber(0, eyesColors.length - 1))] + ``
    };
    arrays.push(wizardType);
  }
  return arrays;
};

const createWizards = createWizard();

// ф-я создания персонажа
const renderWizards = function (wizard) {
  const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// ф-я добавления персонажей
const addWizards = function () {
  const setupSimilarList = document.querySelector('.setup-similar-list');
  const fragment = document.createDocumentFragment();
  createWizards.forEach(function fillingBlockWithElement(item) {
    fragment.appendChild(renderWizards(item));
  });
  setupSimilarList.appendChild(fragment);
};
addWizards(createWizard());
