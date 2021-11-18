
import { useState } from 'react';
import { Row, Col, Card,  } from 'react-bootstrap';
import PlanModal from './Components/Modal-plan';
import planet1 from './images/planets/planet1.svg';
import planet2 from './images/planets/planet2.svg';
import planet3 from './images/planets/planet3.svg';
import planet4 from './images/planets/planet4.svg';
import planet5 from './images/planets/planet5.svg';
import planet6 from './images/planets/planet6.svg';
import planet7 from './images/planets/planet7.svg';
import planet8 from './images/planets/planet8.svg';
import planet9 from './images/planets/planet9.svg';
import Sidebarp from './Components/sidebarp';


const Tabs = () => {

    const [show, setShow] = useState(false)
    const [planets, setPlanets] = useState([
        { title: 'Planet Alpha', body: 'Pop: 235', id: 1, image: planet9},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 2, image: planet2},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 3, image: planet3},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 4, image: planet6},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 5, image: planet6},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 6, image: planet5},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 7, image: planet1},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 8, image: planet8},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 9, image: planet8},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 10, image: planet4},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 11, image: planet7},
        { title: 'Planet Alpha', body: 'Pop: 235', id: 12, image: planet5}
    ])
  
  const handleClose = () => {
      setShow(false)
  }; 

  const handleOpen = () => {
    setShow(true)
}


    

    return (

        <div>
              <div className="d-flex">

                    <div className={show === true? "char-col": "."}>
                        <Row xs={1} md={show === true? 3 : 4 } className="g-2">

                            {planets.map((planet) => (
                            <Col className="">
                            <Card key={planet.id} id="card" onClick={handleOpen} className="mt-1">
                                    <Card.Img variant="top" src={planet.image} id="planet-img"/>
                                    <Card.Body>
                                        <Card.Title id="p-title">{planet.title}</Card.Title>
                                        <Card.Text id="p-body">
                                            {planet.body}
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                            </Col>
                            ))}
                        <PlanModal /> 
                        </Row>
                    </div>
                    { show === true? <Sidebarp  close={handleClose}/> : '' }


            </div>
        </div>
      
       
    )
}

export default Tabs
