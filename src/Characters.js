
import { Row, Col, Card,  } from 'react-bootstrap';
import { useState } from 'react';
import character1 from './images/characters/character1.png';
import character2 from './images/characters/character2.png';
import character3 from './images/characters/character3.png';
import character4 from './images/characters/character4.png';
import character5 from './images/characters/character5.png';
import character6 from './images/characters/character6.png';
import character7 from './images/characters/character7.png';
import character8 from './images/characters/character8.png';
import character9 from './images/characters/character9.png';
import CharModal from './Components/Modal-char';
import CharSidebar from './Components/charsidebar';

const Characters = () => {
    const [item, setitem] = useState([])

    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
    }; 
  
    const handleOpen = () => {

      setShow(true)
    }

    const [persons, setPersons] = useState([
        { title: 'Brooklyn Simmons', body: '23 friends', id: 1, image: character1,  place: 'Planet alpha', desc:`Brooklyn is a really nice person. She's been living on planet Alpha for the last 10 years.`},
        { title: 'Cameron Williamson', body: '23 friends', id: 2, image: character2, place: 'Planet alpha', desc:`Cameron is a really nice person. He's been living on planet Alpha for the last 10 years.`},
        { title: 'Leslie Alexander', body: '23 friends', id: 3, image: character3, place: 'Planet alpha', desc:`Leslie is a really nice person. She's been living on planet Alpha for the last 10 years.`},
        { title: 'Kristin Watson', body: '23 friends', id: 4, image: character4, place: 'Planet alpha', desc:`Kristin is a really nice person. She's been living on planet Alpha for the last 10 years.`},
        { title: 'Jenny Wilson', body: '23 friends', id: 5, image: character5, place: 'Planet alpha', desc:`Jenny is a really nice person. She's been living on planet Alpha for the last 10 years.`},
        { title: 'Marvin McKinney', body: '23 friends', id: 6, image: character6, place: 'Planet alpha', desc:`Marvin is a really nice person. He's been living on planet Alpha for the last 10 years.`},
        { title: 'Jerome Bell', body: '23 friends', id: 7, image: character7, place: 'Planet alpha', desc:`Jerome is a really nice person. He's been living on planet Alpha for the last 10 years.`},
        { title: 'Guy Hawkins', body: '23 friends', id: 8, image: character8, place: 'Planet alpha', desc:`Guy is a really nice person. He's been living on planet Alpha for the last 10 years.`},
        { title: 'Robert Fox', body: '23 friends', id: 9, image: character9, place: 'Planet alpha', desc:`Robert is a really nice person. He's been living on planet Alpha for the last 10 years.`}
    ])
    
    let newChar = localStorage.getItem('singChar');

    let chat = JSON.parse(newChar);
    console.log(chat);
    //for creating new character
    const [create, setCreate] = useState(false);

    const handleCreate = () => {
        setCreate(true)
    }; 




    return (
        <div>

         <div className="d-flex">
           <div className={show === true? "char-col": "."}>
           <Row xs={1} md={ show === true? 2 : 3 } lg={show === true? 3 : 4} className="g-2">
                {persons.map((person) => (
                <Col id="person-column" >
                
                    <Card key={person.id} id="card-character"  onClick={handleOpen} >
                        <div onClick={() => setitem(person)}>
                                <Card.Img variant="top" src={person.image} id="person-img"/>
                             <Card.Body>
                                <Card.Title  id="p-title">{person.title}</Card.Title>
                                <Card.Text id="p-body">
                                {person.body}
                                </Card.Text>
                           </Card.Body>
                        </div>
                        { create === true? <div>
                        <Card.Img variant="top" src={character7} id="person-img"/>
                             <Card.Body className="bg-white">
                                <Card.Title  id="p-title">{chat.title}</Card.Title>
                                <Card.Text id="p-body">
                                {chat.body}
                                </Card.Text>
                           </Card.Body>
                        </div>: ''}
                       
                   
                   
                    </Card>
                </Col>
                ))}
                 <CharModal create={handleCreate}/>
             </Row>
            </div>  
         
           { show === true? <CharSidebar  close={handleClose} name={item.title} friends={item.body} planet={item.place} desc={item.desc}/> : '' }
        

         </div>
         
      
            
        </div>
    )
}

export default Characters;
