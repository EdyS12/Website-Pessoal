import styled from "styled-components";

export const MouseContainer = styled.div`
  z-index: 1000;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: 4px solid #835834;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
`;

export default MouseContainer;
