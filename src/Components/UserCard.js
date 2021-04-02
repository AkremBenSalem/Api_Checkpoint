import React from 'react'
import { Card, Accordion , Button} from 'react-bootstrap'
import "./UserCard.css"
function UserCard({user}) {
    return (
        <div>
            <Card className="UserCard">
                <Card.Header><span >{user.id}</span></Card.Header>
            <Card.Body>
            <h4> {user.name}</h4>
            <h6> {user.username}</h6>
            <h6> {user.email}</h6>
            <h6> {user.phone}</h6>
            <a href={user.website}> {user.website}</a>
            <Accordion style={{marginTop:'10px' , padding:0}}>
                    <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{margin:0,padding:0}}>
                        Address
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h6>Street : {user.address.street} </h6>
                        <h6>Suite : {user.address.suite} </h6>
                        <h6>City : {user.address.city} </h6>
                        <h6>Zipcode : {user.address.zipcode} </h6>
                        <h6>Geo : {user.address.geo.lat} , {user.address.geo.lng} </h6>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
                </Accordion>
            <Accordion style={{marginTop:'10px' , padding:0}}>
                    <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{margin:0,padding:0}}>
                        Company
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h5 style={{fontStyle:'bold'}}>{user.company.name} </h5>
                        <h6>Catch phrase : "{user.company.catchPhrase}"</h6>
                        <h6>bs : "{user.company.bs}" </h6>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
                </Accordion>
            </Card.Body>
            
            </Card>
        </div>
    )
}

export default UserCard
