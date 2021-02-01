import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

export default function Home(props) {
  const [hebrewRoot, setHebrewRoot] = useState('');
  const handleSearchInputChange = (input) => {
    setHebrewRoot(input);
  };
  const triggerSearch = () => {
    if (props.onSearch) {
      props.onSearch(hebrewRoot);
    }
  };

  return (
    <Container className="text-center">
      <Logo />
      <SearchBar
        value={hebrewRoot}
        onChange={handleSearchInputChange}
        onSearch={triggerSearch}
      />
      <Button variant="primary" onClick={triggerSearch}>
        Search
      </Button>
    </Container>
  );
}
