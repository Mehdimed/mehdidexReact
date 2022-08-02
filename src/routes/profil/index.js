import styled from "styled-components";
import PokemonInfos from "../../components/pokemonInfos";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;


const Profil = () => {
  
  return (
    <Container>
      <PokemonInfos/>
    </Container>
  );
}

export default Profil;
