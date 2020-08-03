import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import '../styles/index.scss';

const StyledDiv = styled.div`
    color: blue;
`
const App: React.FC = () => {
    return (
        <div>
            <StyledDiv>Hello from Styled Components</StyledDiv>
            <div className="hello-scss">Hello from React x Typescript Ja SCSS,
            but please be advised that you should try to avoid using SCSS/CSS for styling internal components</div>
        </div>
    )
}

const container = document.getElementById('container');
container ? ReactDOM.render(<App />, container) : false;