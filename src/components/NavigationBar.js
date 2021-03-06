import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function NavigationBar(props) {
  return (
    <Navbar
      sticky="top"
      style={{
        backgroundColor: 'white',
      }}
    >
      <Navbar.Collapse>
        <Navbar.Brand href="/">
          <Logo isCompact />
        </Navbar.Brand>
        <Form inline>
          <SearchBar
            isCompact
            onSearch={props.onSearch}
            value={props.searchTerm}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
