
import {QuickSort} from './Quick_sort.js';
const PRIMARY_COLOR = 'turquoise';


export default function Loadanim(temp,quad,ok,resolve)
{
  let getanim = QuickSort(temp,0,temp.length-1);
  let pivotStyle;
  let barOneStyle;
  if(getanim===undefined)
  getanim = QuickSort(temp,0,temp.length-1);
   quad = getanim.anim;
   ok = getanim.piv;
  
  for(let i = 0;i<quad.length;i=i+2)
  {
    const arraybars = document.getElementsByClassName('array-bar');
     setTimeout(() => {
       let a = i;
       const [barOneIdx, barTwoIdx] = quad[a];
       const [prebarOne,prebarTwo] = (a>=2)?quad[a-2]:"no";
       const prepiv = (a>=2)?ok[a/2-1]:"no";
       if(barOneIdx!==-1)
       barOneStyle = arraybars[barOneIdx].style;
       const barTwoStyle = arraybars[barTwoIdx].style;
      if(prepiv !=="no")  
      arraybars[prepiv].style.backgroundColor = PRIMARY_COLOR;  
      if(prebarOne!=="n" && prebarOne!==-1) 
      {
      arraybars[prebarOne].style.backgroundColor = PRIMARY_COLOR;
      arraybars[prebarTwo].style.backgroundColor = PRIMARY_COLOR;
      }
      pivotStyle = arraybars[ok[a/2]].style;
      pivotStyle.backgroundColor = 'yellow'
      if(barOneIdx!==-1)
      {
      barOneStyle.backgroundColor = 'green';
      barTwoStyle.backgroundColor = 'green';
      }
      const [barOne, newHeight] = quad[a];
      const barst = (barOneIdx!==-1)?arraybars[barOne].style:"no";
      const barsp = arraybars[newHeight].style;
      if(quad[a+1]!==false && barst!=="no")
      {  
      barsp.backgroundColor = 'red';
      barst.backgroundColor = 'red';
      [arraybars[barOne].style.height,arraybars[newHeight].style.height] = [arraybars[newHeight].style.height,arraybars[barOne].style.height];
      }
      if(a===quad.length-2)
      {
        barsp.backgroundColor = PRIMARY_COLOR;
        barst.backgroundColor = PRIMARY_COLOR;
        resolve('Done');
      }
    },i*250);
  }
}