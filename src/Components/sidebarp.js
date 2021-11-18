 import React from 'react';
 import { PlusSquareFill, XSquareFill } from 'react-bootstrap-icons';
 import { useState } from 'react';
 import character16 from '../images/characters/character16.png';
 import character10 from '../images/characters/character10.png';
 import character11 from '../images/characters/character11.png';
 import character13 from '../images/characters/character13.png';
 import character14 from '../images/characters/character14.png';
 import character12 from '../images/characters/character12.png';
 import character15 from '../images/characters/character15.png';
 
 const Sidebarp = ({close}) => {
  const [characters, setCharacters] = useState([
        { title: 'Darlene Robertson', body: '23 friends', id: 1, image: character16},
        { title: 'Kathryn Murphy', body: '23 friends', id: 2, image: character11},
        { title: 'Jenny Wilson', body: '23 friends', id: 3, image: character10},
        { title: 'Kristin Watson', body: '23 friends', id: 4, image: character13},
        { title: 'Arlene McCoy', body: '23 friends', id: 5, image: character14},
        { title: 'Darrell Steward', body: '23 friends', id: 6, image: character12},
        { title: 'Bessie Cooper', body: '23 friends', id: 7, image: character15}
])



   return (
         <div className="phone-sidebar" id="sidebar-planet">
           <div>
             <div className="d-flex justify-content-end" >
              <XSquareFill onClick={close}  id="p-side-x"/>
             </div>
             <h2 id="sidbar-header">Planet Alpha</h2>
             <p id="sidebar-text">Planet Alpha is a place to be if you if uou live everything related to planets. I know its a bit meta but come see for yourself.</p>
             <p id="sidepp">Population</p>
             <p id="sidepp">234</p>
           </div>
           <div>
             <div className="d-flex flex-row justify-content-between">
               <p id="sidebar-text">CHARACTERS</p>
               <div>
               <PlusSquareFill id="sidebar-plus"/>
               </div>
             </div>
             <div>
               {characters.map((character) => (

                      <div key={character.id}  className="d-flex flex-row my-3">
                           <div  id="sidebar-img-case"> 
                             <img src={character.image} alt="character" id="sidebar-img" className="image-fluid"/>
                           </div>
                           <div className="ms-2 mt-3">
                            <div id="p-title"> {character.title}</div>
                            <div id="p-body">{character.body}</div>
                           </div>
                           
                      </div>
                     
               ))}
              
             </div>
           </div>


         </div>
   )
 }
 
 export default Sidebarp
 