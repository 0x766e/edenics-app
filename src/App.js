import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootswatch/dist/litera/bootstrap.min.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import useQuery from './hooks/useQuery';
import Home from './modules/Home';
import Result from './modules/Result';
import WordContext from './contexts/WordContext';

export default function App() {
  const history = useHistory();
  const handleSearch = (searchTerm) => history.push(`/search?q=${searchTerm}`);

  const query = useQuery();
  const extractQuery = () => query.get('q');

  return (
    <WordContext.Provider value={extractQuery()}>
      <Container>
        <Switch>
          <Route path="/search">
            <Result onSearch={handleSearch} />
          </Route>
          <Route path="*">
            <Home onSearch={handleSearch} />
          </Route>
        </Switch>
      </Container>
    </WordContext.Provider>
  );
}
