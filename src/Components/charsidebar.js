import React from 'react';
import { XSquareFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import character16 from '../images/characters/character16.png';
import character8 from '../images/characters/character8.png';
import character14 from '../images/characters/character14.png';
import character12 from '../images/characters/character12.png';
import character5 from '../images/characters/character5.png';
import character2 from '../images/characters/character2.png';


const CharSidebar = ({close, name, friends, planet, desc}) => {


 const [characters, setCharacters] = useState([
       { title: 'Eleanor Pena', body: '23 friends', id: 1, image: character12},
       { title: 'Brooklyn Simmons', body: '23 friends', id: 2, image: character16},
       { title: 'Kristin Watson', body: '23 friends', id: 3, image: character8},
       { title: 'Cody Fisher', body: '23 friends', id: 4, image: character2},
       { title: 'Courtney Henry', body: '23 friends', id: 5, image: character14},
       { title: 'Annette Black', body: '23 friends', id: 6, image: character5}
])
 


  return (
        <div className=" px-4 phone-sidebar"  id="sidebar-planet">
          <div>
            <div className="d-flex justify-content-end" >
             <XSquareFill onClick={close}  id="p-side-x"/>
            </div>
            <div>
            
               <div>
                   <h2 id="sidbar-header" className="px-2">{name}</h2>
                   <p id="sidebar-text phone-sidebar">{desc}</p>
                   <div className="d-flex flex-row justify-content-between">
                       <p id="sidepp">{planet}</p>
                       <p id="sidepp">{friends}</p>
                   </div>
               </div>

                
            </div>
            
          </div>
          <div>
            <div className="d-flex flex-row justify-content-between">
              <p id="sidebar-text">Friends</p>
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

export default CharSidebar;
