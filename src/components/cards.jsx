import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards({ pokemonData }) {
  return (
    <Card  style={{ width: '18rem',backgroundColor:'rgb(240 253 244)'}} className='cards'>
      <Card.Img variant="top" className='imgPokemon imd-fluid' src={pokemonData.sprites.other.dream_world.front_default} />
      <Card.Body>
        <Card.Title style={{textTransform:" capitalize"}}>{pokemonData.name}</Card.Title>
        <Card.Text>
          <button className='btn'> {
            pokemonData.types.map((items) => items.type.name).join(", ")
            }</button>
        </Card.Text>
      </Card.Body>
      
      <div className="box1">
        <p>Height:<span>{pokemonData.height} </span> </p>
        <p>Width:<span> {pokemonData.weight}</span> </p>
        <p>Speed: <span> {pokemonData.stats[5].base_stat}</span> </p>
      </div>

            

            <div className="box1">
            <p>Experience: <br /><span>{pokemonData.base_experience} </span> </p>
        <p>Attack: <br /><span> {pokemonData.stats[1].base_stat}</span> </p>
        <p>abilities: <br /><span> {pokemonData.abilities.map((items) => items.ability.name)
          .slice(0,1)
          .join(", ")}</span> </p>

      </div>
            
      
      
    </Card> 
  );
}

export default Cards;
