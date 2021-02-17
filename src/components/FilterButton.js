import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaFilter as IconFilter } from 'react-icons/fa';

export default function FilterdButton(props) {
  return (
    <Button {...props} variant="dark">
      <IconFilter />
    </Button>
  );
}
