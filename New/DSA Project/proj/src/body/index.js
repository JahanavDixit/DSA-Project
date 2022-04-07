
import './index.css';
import Header from '../header/index.js';
const PRIMARY_COLOR = 'turquoise';

export default function Body(arr) 
{
	return 
	(
		<>
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