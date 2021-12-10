import React, {useState} from 'react'

function Fruit(props) {
    const [color, setColor ] = useState('');
    const chColor = ()=>{ 
        const randomIndex = Math.floor(Math.random() * props.colors.length );
      //  alert(props.colors[randomIndex])
      setColor(props.colors[randomIndex])
      
    }
    return (
        <div>
            <h3 style={{ color:color}}>{props.type} {color}</h3>
            <p><button onClick={props.del}>delete</button> <button onClick={chColor}>change color</button> </p>
        </div>
    )
}

export default Fruit
