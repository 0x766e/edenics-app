import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function NavigationBar(props) {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <Logo isCompact />
      </Navbar.Brand>

      <SearchBar isCompact onSearch={props.onSearch} />
    </Navbar>
  );
}
