import React from 'react'
import styled from 'styled-components'

const StyledLoading = styled.div`
  margin: 10px auto;
  width: 50px;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 50%;
  text-align: center;
  font-size: 10px;
  display:flex;
  justify-content: space-between;

 div {
  background-color: #333;
  height: 100%;
  width: 6px;
  display: inline-block;
  background-color: #0c2d6d;
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
  background-color: #0c2d6d;
}

.rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
  background-color: #0c2d6d;
}

.rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
  background-color: #0c2d6d;
}

.rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background-color: #0c2d6d;
}

@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes sk-stretchdelay {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
`

 const Loading = () => {
  return (
    <StyledLoading>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </StyledLoading>
  )
}

export default Loading