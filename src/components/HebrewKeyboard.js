import React from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import layout from 'simple-keyboard-layouts/build/layouts/hebrew';

export default function HebrewKeyboard(props) {
  return <Keyboard {...props} layout={layout} rtl={true} />;
}
