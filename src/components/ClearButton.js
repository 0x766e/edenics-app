import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaTimes as IconClear } from 'react-icons/fa';

export default function ClearButton(props) {
  return (
    <Button {...props} variant="outline-light" active>
      <IconClear />
    </Button>
  );
}
