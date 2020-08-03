import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Character from './Character';

export default function StarWars () {
    const [people, setPeople] = useState ([])


useEffect(() => {
    function getPeople() {
        axios
        .get(`https://swapi.dev/api/people`)
        .then(response => {
        console.log(response.data.results);
        setPeople(response.data.results);
        })
        .catch(error => {console.log("Error Message", error);
          });
    };
getPeople();    
}, []);

return (
    <div className="character">
        {people.map(star => {
            return (
                <Character  key={star.name}  name={star.name} birth_year={star.birth_year} height={star.height} mass={star.mass} eye_color={star.eye_color} hair_color={star.hair_color} gender={star.gender}/>
            );    
        })}
    </div>
);
}