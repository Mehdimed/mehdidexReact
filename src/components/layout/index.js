import styled from "styled-components";
import Header from "../header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Layout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
}

export default Layout;
