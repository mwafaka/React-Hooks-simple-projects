import React,{useState} from 'react'

export default function RandomList() {
            const [numbers, setNumbers] = useState([]);
          
            const addNumber = () => {
              setNumbers(nums => [...nums, Math.random()])       
            };
            return (
              <div>
                <h1>Random Numbers</h1>
                <button onClick={addNumber}>Add a Number</button>
                <ul>
                  {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                  ))}
                </ul>
              </div>
            );
}

