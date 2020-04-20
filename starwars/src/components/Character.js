// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import CharCard from "./CharCard";

//styles
const CharDiv = styled.div`
display:  flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`;

//character cards
const Characters =() => {
    
    const [data, setData] = useState([]);

//effect
useEffect(() =>{
axios
    .get(`https://rickandmortyapi.com/api/character/?page=1`)
    .then( res => {
        setData(res.data.results)
        console.log("results",res.data.results)
    })
    .catch(err => {
        console.log("Burrp!", err);
    })
},[]);

return (
<CharDiv>
    {console.log("data",data)}
</CharDiv>
);
}
export default Characters;