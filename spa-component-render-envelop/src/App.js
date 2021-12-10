import React from 'react'
import Envelope from './components/Envelope'
export default function App() {
    const fromPerson = {
        fullName: 'Julian Perge',
        address: '123 Blank Street',
        cityStateZip: 'Columbus, OH 43203',
      };
      
      const toPerson = {
        fullName: 'Perge Julian',
        address: '321 Blank Street',
        cityStateZip: 'San Francisco, CA 43204',
      };
    return (
        <div>
          <Envelope  fromPerson = {fromPerson} toPerson={toPerson}  />
        </div>
    )
}
