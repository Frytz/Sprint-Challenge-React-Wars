// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CharCard from "./CharCard";

//styles
const CharDiv = styled.div`
display:  flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`;

//character cards
const Characters =() => {
   let state = { count: 1};
    const [data, setData] = useState([]);
    const [page, setPage] = useState(state)

//  useEffect(() =>{
//   axios
//   .get(`https://rickandmortyapi.com/api/character/?page=1`)
//   .then(res => {
//     setData(res.data.results)
 
//     console.log(res.data.results)
//   })
//   .catch(err => {
//     console.log("This error has occured", err);
//   })
// },[]);
    useEffect(() => {
        const fetchData = () => {
            axios
                .get('https://rickandmortyapi.com/api/character/?page=' + page)
                .then(res => setData(res.data.results));
        };

        fetchData();
    }, [page]);

return (
<div>
<CharDiv>
    {console.log("data",data)}
        
        {data.map(char => (

            <CharCard key={char.id} id={char.id} photo={char.image} name={char.name} location={char.location.name}
                origin={char.origin.name} species={char.species} status={char.status} gender={char.gender}
            />

        ))}

</CharDiv>

<button>test</button>
</div>
);
}
export default Characters;