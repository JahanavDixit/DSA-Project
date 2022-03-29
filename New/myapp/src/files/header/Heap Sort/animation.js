import sort from './heapsort';

export default function animation(arr,resolve)
{
  let temp = arr;
  
  let anim = sort(temp);
  for(let i  = 0;i<anim.length;i++)
  {
     const arraybars = document.getElementsByClassName('array-bar');
     const [posOne,posTwo] = anim[i];
     const styleOne = arraybars[posOne].style;
     const styleTwo = arraybars[posTwo].style;
     setTimeout(()=>{
         if(i!==0)
         {
            const [One,Two] = anim[i-1]; 
            const prevOne = arraybars[One].style;
            const prevTwo = arraybars[Two].style;
            prevOne.backgroundColor = 'turquoise';
            prevTwo.backgroundColor = 'turquoise';
         }      
      styleOne.backgroundColor = 'red';
      styleTwo.backgroundColor = 'red';
      [styleOne.height,styleTwo.height] = [styleTwo.height,styleOne.height];
      if(i===anim.length-1)
      {
      styleOne.backgroundColor = 'turquoise';
      styleTwo.backgroundColor = 'turquoise';
      resolve('Done');
      } 
     },i*300);
  }
}