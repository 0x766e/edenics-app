import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaWindowClose as IconClose } from 'react-icons/fa';

export default function KeyboardButton(props) {
  return (
    <Button {...props} variant="link">
      <IconClose />
    </Button>
  );
}
