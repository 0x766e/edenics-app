import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [hebrewRoot, setHebrewRoot] = useState('');
  const handleSearchInputChange = (input) => {
    setHebrewRoot(input);
  };

  return (
    <Container>
      <Logo />
      <SearchBar value={hebrewRoot} onChange={handleSearchInputChange} />
    </Container>
  );
}
