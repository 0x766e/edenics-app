import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';

export default function Result(props) {
  return (
    <Container>
      <NavigationBar onSearch={props.onSearch} />
      <h4>Result: {props.query}</h4>
    </Container>
  );
}
