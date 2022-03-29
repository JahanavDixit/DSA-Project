import {useState} from 'react';


const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
const hm = frontEndFrameworks.map((number)=><li>{number}</li>);


function New() {
    const list = hm;
    const [state,setState] = useState(0);
    return (
        <div className = "New">
        <button onClick={()=>setState(state+1)}>
        You clicked {state} times ! 
        </button>
        <p>Lol Your mom so fat she cant even fit into a car </p>
        <ul>
        {list}
        </ul>
        </div>
    );
}



export default New;