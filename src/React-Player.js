import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

import React from 'react'

function ReactPlayer() {
  return (
    <PlayerContainer>
      <ReactPlayer
            width="1000px"
            height="563px"
            url='https://fb.watch/oZ9mRra7eb/'
            controls
            muted
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
          />
    </PlayerContainer>
  )
}

export default ReactPlayer;

const ReactPlayer = styled.div`
    
`;

const PlayerContainer = styled.div`
    background-color: green;
    height: 100vh;
    width: 100vh;    
`;


