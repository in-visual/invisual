import styled, { css } from "styled-components";
// import { Device } from '../constants/breakpoints';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 0.5rem;
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export { Container, Main };
