import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Home = (props) => {
  return (
    <Container>
      TRAVAUX EN COURS...
      {props.children}
    </Container>
  );
}

export default Home;
