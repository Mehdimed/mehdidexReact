import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Profil = (props) => {
  return (
    <Container>
      PROFIL EN COURS...
      {props.children}
    </Container>
  );
}

export default Profil;
