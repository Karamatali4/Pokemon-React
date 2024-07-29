import React, { useEffect, useState } from 'react';
import Cards from "./components/cards"

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchingPokemondata = async () => {
    const API = 'https://pokeapi.co/api/v2/pokemon?limit=182';

    try {
      const response = await fetch(API);
      const data = await response.json();
      
      const detailedpokemon = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailresponse = await Promise.all(detailedpokemon);
      setPokemon(detailresponse);
      setLoading(false);
      console.log(detailresponse);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchingPokemondata();
  }, []);

  const searchData = pokemon.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid text-center">
        <h1 className='text-white pt-3 pb-3'>Let's Catch Pokemon</h1>
        <div className="searchPokemon">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Searching Pokemon'
          />
        </div>
        <div className="row mt-5 mb-3">
          {searchData.map((items, index) => {
            return (
              <div className="col-12 col-sm-3 col-md-4 col-lg-3  mb-4  d-flex justify-content-evenly" key={index}>
                <Cards pokemonData={items} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Pokemon;
