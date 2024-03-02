import React from 'react'
// import ReactPlayer from 'react-player';
import styled from 'styled-components';

function Body() {
  return (
    <ContainerBody>
        <h2> body </h2>
      {/* <ReactPlayer /> */}
    </ContainerBody>
  )
}

export default Body;

const ContainerBody = styled.div`
    background-color: gray;
    height: 100vh;
    width: 100vw;
`;
