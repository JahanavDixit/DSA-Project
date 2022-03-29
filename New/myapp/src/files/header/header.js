/* eslint-disable default-case */
/* eslint-disable no-loop-func */
import './header.css'
import { useState,useEffect} from 'react';
import Loadanim from './Quick Sort/quicksort';
import {reset} from './Quick Sort/animations';
import LoadMerge from './Merge Sort/mergesort';
import animation from './Heap Sort/animation';
import banimations from './Bubble Sort/bubblesort';

const PRIMARY_COLOR = 'turquoise';


function Header(){
var[arr,setArr] = useState([]);   
const [size,setsize] = useState(50); 
let[temp,setTemp] = useState([]);
//const[dis,setdis] = useState(false); 

//const disable = useRef();
 useEffect(()=>{         
    ResetArray();
 },[]);

// const disableButton = (flag) =>{
// disable.current.disabled = flag;
// }




const ResetArray=()=>{
         setArr([]);
         setTemp([])
        for(let i=0;i<size;i++)
        {
          let a = randomInterval(5,600);
          setArr(arr=>[...arr,a]);
          setTemp(temp=>[...temp,a]);
        }
        const arraybars = document.getElementsByClassName('array-bar');
        for(let k =0;k<arraybars.length;k++)
        {
          arraybars[k].style.backgroundColor = PRIMARY_COLOR;
        }
}

    const handle = (a,arr)=>{
      switch(a) {
        case 0:
          //merge
          let mer = new Promise(resolve=>LoadMerge(arr,resolve));
          return mer;
          case 1:
          let qui = new Promise(resolve=>Loadanim(arr,[],[],resolve));
          return qui;
          //quick
        case 2:
          let hea = new Promise(resolve=>animation(arr,resolve));
          return hea;
          //heap
        case 3:
          let bsort = new Promise(resolve=>banimations(arr,resolve));
          return bsort;
          //bubble
      }
      }



        return(
          <div>
          <div className="header">
          <p className='row' id="head">
          <p className="col one"> <button onClick={ResetArray}>Generate New Array</button></p>
          <p className="col two">
          <span id='desc'>Change the size of the array</span> 
          <input type="range" min="10" max="50" defaultValue={25} step="1" id="range" onChange={(event)=>{setsize(Math.floor(event.target.value));ResetArray()}}/>
          </p>
          <p className="col three">
          <button id='merge'  onClick={async () =>{await handle(0,arr);}}>Merge Sort</button>
          <button id='quick'  onClick={async() => {await handle(1,temp);reset()}}>Quick Sort</button>
          <button id='heap'   onClick={async() => {await handle(2,arr)}}>Heap Sort</button>
          <button id='bubble' onClick={async() => {await handle(3,arr)}}>Bubble Sort</button>
          </p> 
          </p>
          </div>
          <div className='row'>
          <div className='col'></div>
          <div className="col array-container">
          {
            arr.map((value, idx) => 
            (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}></div>
              ))
            } 
          </div>
          <div className='col'></div>
          </div>
          </div>
          );
}

function randomInterval(max,min){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export default Header;