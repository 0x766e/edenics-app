import React from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

export default function Home(props) {
  return (
    <Container className="text-center">
      <Logo />
      <SearchBar onSearch={props.onSearch} />
    </Container>
  );
}
