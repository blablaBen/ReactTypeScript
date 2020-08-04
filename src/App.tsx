import React from 'react';
import Core from './core/Core';
import styled from 'styled-components';
import '../styles/index.scss';
import SetIndex from './widgets/set-index/SetIndex';

const StyledDiv = styled.div`
    color: blue;
`
class App extends React.Component {
    render() {
        return (
            <div>
                <StyledDiv>Hello from Styled Components</StyledDiv>
                <div className="hello-scss">Hello from React x Typescript Ja SCSS,
            but please be advised that you should try to avoid using SCSS/CSS for styling internal components</div>
                <Core>
                    <SetIndex></SetIndex>
                </Core>
            </div>
        )
    }
}
export default App
