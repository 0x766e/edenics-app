import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaSearch as IconSearch } from 'react-icons/fa';

export default function KeyboardButton(props) {
  return (
    <Button {...props} variant="primary" active>
      <IconSearch />
    </Button>
  );
}
