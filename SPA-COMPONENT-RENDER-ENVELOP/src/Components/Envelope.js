import React from 'react';
import StampImage from '../CSS/Stamp.jpg';
import '../CSS/Envelope.css';

function Envelope({ robin, toPerson }) {
	return (
		<main className="envelope">
			<section className="fromPerson">
			<ol className="person">
				<li className="full-name">{robin.fullName}</li>
				<li className="address">{robin.address}</li>
				<li className="state-city-zip">{robin.cityStateZip}</li>
			</ol>
			</section>
			<section className="toPerson">
			<ol className="person">
				<li className="full-name">{toPerson.fullName}</li>
				<li className="address">{toPerson.address}</li>
				<li className="state-city-zip">{toPerson.cityStateZip}</li>
			</ol>
			</section>
			<aside className="stamp">
			<img alt="stamp" className="stamp-image" 
			src={StampImage} />
		</aside>
			
		</main>
	);
}

export default Envelope;



