import final from './animations';
const ANIMATION_SPEED_MS = 250;
const PRIMARY_COLOR = 'turquoise';
//const SECONDARY_COLOR = 'red';


export default function LoadMerge(arr,resolve)
{
const animations = final(arr);
for (let i = 0; i < animations.length; i++) {
  const arrayBars = document.getElementsByClassName('array-bar');
  const isColorChange = i % 3 !== 2;
  if (isColorChange) {
    const [barOneIdx, barTwoIdx] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    const color = i % 3 === 0 ? 'green' : PRIMARY_COLOR;
    setTimeout(() => {
      barOneStyle.backgroundColor = color;
      barTwoStyle.backgroundColor = color;
    }, i * ANIMATION_SPEED_MS);
  } else {
    setTimeout(() => {
      const [barOneIdx, newHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
     //const barOneStyle = arrayBars[barTwoIdx].style;
      barOneStyle.height = `${newHeight}px`;
      if(i === animations.length-1)
      resolve('Completed the timeout');
    }, i * ANIMATION_SPEED_MS);
  }
}
}