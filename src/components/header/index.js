import styled from "styled-components";
import SearchComponent from "../searchComponent";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    background-color: #e6b5b5;
`;

const Header = () => {
    return (
        <Container>
            Header en cours de développement...
            <SearchComponent />
        </Container>
    )
};

export default Header;