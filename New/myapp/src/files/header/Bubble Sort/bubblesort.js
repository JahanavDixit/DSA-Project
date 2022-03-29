import bubbleSort from './animation';

export default function banimations(arr,resolve) {
    let anim = [];
    bubbleSort(arr,anim,arr.length);
     console.log(anim);
    for(let i  = 0;i<anim.length;i=i+2)
      {
     const arraybars = document.getElementsByClassName('array-bar');
     const [posOne,posTwo] = anim[i];
     const styleOne = arraybars[posOne].style;
     const styleTwo = arraybars[posTwo].style;
     setTimeout(()=>{
      if(i!==0)
      {
         const [One,Two] = anim[i-2]; 
         const prevOne = arraybars[One].style;
         const prevTwo = arraybars[Two].style;
         prevOne.backgroundColor = 'turquoise';
         if(anim[i-1]!==true && i!==anim.length-2)
         prevTwo.backgroundColor = 'turquoise';
      }      
      styleOne.backgroundColor = 'red';
      styleTwo.backgroundColor = 'red';
      [styleOne.height,styleTwo.height] = [styleTwo.height,styleOne.height];
      if(anim[i+1] === true)
      {
        arraybars[anim[i][1]].style.backgroundColor = 'purple';    
      }  
      if(i === anim.length-2)
      {
        for(let k =0;k<arraybars.length;k++)
        {
          arraybars[k].style.backgroundColor = 'purple';
        }
        resolve('Timeout Ended');
      }         
     },i*300);
    }
    
}