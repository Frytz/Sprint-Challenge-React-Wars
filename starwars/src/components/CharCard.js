import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,
} from 'reactstrap';

const CharCard = props => {
    const {id,photo, name, location, gender, origin, species, status} = props;
    return (

        <Card key = {id} >
            <CardTitle>Rick and Morty</CardTitle>
            <CardImg top width="100%" src={photo} alt={name}/>
            <CardBody>
                <CardText padding= "5px">{name} {location}, {origin} </CardText>
            </CardBody>
        </Card>
    )
}

export default CharCard;