import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function NavigationBar(props) {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>

      <Form inline>
        <SearchBar onSearch={props.onSearch} />
      </Form>
    </Navbar>
  );
}
