import React from 'react';
import stamp from '../stamp1.jpg';
import '../style.css';
function Envelope(props) {
    return (
         <div className="envelope">
            <section className="fromPerson" >
              <ol>
                  <li>{props.fromPerson.fullName}</li>
                  <li>{props.fromPerson.address}</li>
                  <li>{props.fromPerson.cityStateZip}</li>                  

              </ol>
            </section>
            <section className="toPerson" >
            <ol>
                  <li>{props.toPerson.fullName}</li>
                  <li>{props.toPerson.address}</li>
                  <li>{props.toPerson.cityStateZip}</li>    

            </ol>
            </section>
            <section className="stamp">
              <img src = {stamp} className="stamp-image" />
            </section>
            
        </div>
    )
}

export default  Envelope
            
        