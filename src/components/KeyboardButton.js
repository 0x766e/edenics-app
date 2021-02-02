import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaKeyboard as IconKeyboardActive } from 'react-icons/fa';
import { FaRegKeyboard as IconKeyboardInactive } from 'react-icons/fa';

export default function KeyboardButton(props) {
  return (
    <Button {...props} variant="outline-light" active>
      {props.keyboardIconActive ? (
        <IconKeyboardActive />
      ) : (
        <IconKeyboardInactive />
      )}
    </Button>
  );
}
