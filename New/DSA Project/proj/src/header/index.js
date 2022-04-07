
import './header.css';

import Body from '../body/index.js';

import Loadanim from '../sp_function/anims.js';

import {useState,useEffect} from 'react';

const PRIMARY_COLOR = 'turquoise';


const RandomInterval = (max,min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




export default function Header()
{
	const [arr,setArr] = useState([]);
	const [temp,setTemp] = useState([]);
	const[size,setSize] = useState(50);

const ResetArray=() =>{

		setArr([]);
		setTemp([]);

        for(let i=0;i<size;i++)
        {
          let a = RandomInterval(5,600);
          setArr(arr=>[...arr,a]);
          setTemp(temp=>[...temp,a]);
        }
        const arraybars = document.getElementsByClassName('array-bar');
        for(let k =0;k<arraybars.length;k++)
        {
          arraybars[k].style.backgroundColor = PRIMARY_COLOR;
        }
}
	// useEffect(()=>{
	// 	ResetArray();
	// 	},[]);

	return (
		<>
		<div className = "main">
		<button id  = "generate" onClick = {ResetArray}> Generete a New Array </button>
		<div>
		<span id="ch">Change the size of the Array</span>
		<input type="range" min="10" max="50" defaultValue={25} step="1" id="range" onChange={(event)=>{setSize(Math.floor(event.target.value));ResetArray(setArr,setTemp,size)}}/>
		</div>
		<button id = "sort" onClick={()=>Loadanim(temp,[],[])}> Perform Quick Sort </button>
		</div>
		<div className = "array-container">
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
		</>
   	);


}

