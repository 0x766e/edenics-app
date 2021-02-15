import React from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

export default function Home(props) {
  const containerStyle = { paddingTop: '112px' };
  const spacerStyle = { height: '24px' };

  return (
    <Container style={containerStyle} className="text-center">
      <Logo />
      <div style={spacerStyle} />
      <SearchBar onSearch={props.onSearch} />
    </Container>
  );
}
