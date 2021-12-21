import React from 'react';
// import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import styled from 'styled-components';


function Home() {

    // const logout = () => {
    //     //logout protocol here

    //     //set the page url extention to '/'
    //     window.location.href = '/';
    // };

    return(
        <StyledDiv>
            <header>
                hello world
            </header>
        </StyledDiv>
    )
}

export default Home;

const StyledDiv = styled.div `
width: 100%;
`
