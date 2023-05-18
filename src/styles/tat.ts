import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  justify-content: center;
  align-items: center;
  text-align: start;

  h4 {
    margin-top: 15px;
  }

  a {
    background-color: rgb(60, 60, 60, 0.5);
    color: rgb(20, 20, 20);
    display: flex;
    justify-content: start;
    width: 100%;
    text-align: center;
    font-size: 14pt;
    margin-top: 30px;
    border-radius: 5px;
  }
`;

export const MusicView = styled.div`
  width: 100vw;
  left: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
`;
