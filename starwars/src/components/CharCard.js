import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,
} from 'reactstrap';

const CharCard = props => {
    const {id,photo, name, location, gender, origin, species, status} = props;
    return (

        <Card key = {id} style ={{
            width: "318px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white"
        }}>
            <CardTitle style={{
                fontWeight:"bolder"
            }}>Rick and Morty</CardTitle>
            <CardImg top width="100%" src={photo} alt={name}/>
            <CardBody>
                <CardText style={{
                    padding: "5px",
                }}><span style={{ color: "blue" }}>{name}</span> resides on {location}, and is from {origin}.  {name}'s gender is {gender}, and is {species}. {name}'s current status is {status}.  </CardText>
            </CardBody>
        </Card>
    )
}

export default CharCard;