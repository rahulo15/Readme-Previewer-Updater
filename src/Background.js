const background = document.body;
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
};

setBackgroundColor();
