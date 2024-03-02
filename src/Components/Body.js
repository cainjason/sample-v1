import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';


function Body() {
  return (
    <ContainerBody>
        <h2> body </h2>
        <ReactPlayer
            className="ReactPlayer"
            url='https://fb.watch/oZ9mRra7eb/'
            controls
            muted
            upload
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
          />
    </ContainerBody>
  )
}

export default Body;

const ContainerBody = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: peachpuff;
`;


