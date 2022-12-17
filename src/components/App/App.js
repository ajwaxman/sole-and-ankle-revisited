import React from 'react';
import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { QUERIES, COLORS } from '../../constants';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main` 

  padding: 64px 32px;
  @media ${QUERIES.tabletAndBelow} {
    padding: 48px 32px;
  }
  @media ${QUERIES.phoneAndBelow} {
    padding: 48px 16px;
  }
`;

const GlobalStyles = createGlobalStyle`
  html {
    --white: ${COLORS.white};
    --gray-100: ${COLORS.gray[100]};
    --gray-300: ${COLORS.gray[300]};
    --gray-500: ${COLORS.gray[500]};
    --gray-700: ${COLORS.gray[700]};
    --gray-900: ${COLORS.gray[900]};
    --primary: ${COLORS.primary};
    --secondary: ${COLORS.secondary};
  } 
`

export default App;