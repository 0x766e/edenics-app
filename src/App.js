import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootswatch/dist/litera/bootstrap.min.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import useQuery from './hooks/useQuery';
import Home from './modules/Home';
import Result from './modules/Result';

export default function App() {
  const history = useHistory();
  const query = useQuery();

  const handleSearch = (searchTerm) => history.push(`/search?q=${searchTerm}`);
  const extractQuery = () => query.get('q');

  return (
    <Container>
      <Switch>
        <Route path="/search">
          <Result query={extractQuery()} />
        </Route>
        <Route path="*">
          <Home onSearch={handleSearch} />
        </Route>
      </Switch>
    </Container>
  );
}
