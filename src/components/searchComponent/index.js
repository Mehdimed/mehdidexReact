import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import fuzzysort from 'fuzzysort';


const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const SearchInput = styled.input`
    width: 300px;
    outline: none;
    border: none;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0;
`;

const SearchButton = styled.button`
    margin-left: 5px;
`;

const SearchResults = styled.div`
    position: absolute;
    width: 300px;
    max-height: 90px;
    top: 36px;
    background-color: white;
    overflow-y: auto;
    border: 1px solid black;
`;

const SearchItem = styled.div`
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;

    :hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`;



const SearchComponent = () => {
    const [search, setSearch] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState({});
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const getPokemons = async () => {
        const response = await fetch(process.env.REACT_APP_FETCH_URL +"pokemon");
        const data = await response.json();
        setPokemons(data);
    }

    const filterPokemon = event => {
        setSearch(event.target.value);
        const filteredPokemons = fuzzysort.go(event.target.value, pokemons, {key:'name'})
        setResults(filteredPokemons);
    }

    const selectItem = event => {
        setSearch(event.target.innerText);
        setResults([]);
        setPokemon(pokemons.find(pokemon => pokemon.name === event.target.innerText));
    }

    const findPokemon = event => {
        event.preventDefault();
        navigate(`/pokemon/${pokemon.id}`);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <Container>
            <SearchInput value={search} onChange={filterPokemon}/>
            <SearchButton onClick={findPokemon}>Chercher</SearchButton>
            {(search.length > 1 && results.length > 0) && 
            <SearchResults>
                {results.map((pokemon, index) => {
                    return <SearchItem onClick={selectItem} key={index}>{pokemon.obj.name}</SearchItem>
                })}
            </SearchResults>}
        </Container>
    )
}

export default SearchComponent;