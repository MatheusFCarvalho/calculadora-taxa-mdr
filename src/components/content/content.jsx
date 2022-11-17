import { useState } from 'react';
import Inputs from '../inputs/inputs';
import Results from '../results/results';
import { Container } from './styles';

function Content() {
  const [results, setResults] = useState({
    1: 0, 15: 0, 30: 0, 90: 0
  });
  return (
    <Container>
      <Inputs setResults={setResults} />
      <Results results={results} />
    </Container>
  );
}

export default Content;
