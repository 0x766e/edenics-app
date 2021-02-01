import React from 'react';
import Keyboard from 'react-simple-keyboard';
import Draggable from 'react-draggable';
import CloseButton from './CloseButton';
import 'react-simple-keyboard/build/css/index.css';
import './HebrewKeyboard.css';

const hebrew = {
  default: [
    '\u05e7 \u05e8 \u05d0 \u05d8 \u05d5 \u05df \u05dd \u05e4 {bksp}',
    '\u05e9 \u05d3 \u05d2 \u05db \u05e2 \u05d9 \u05d7 \u05dc \u05da \u05e3',
    '\u05d6 \u05e1 \u05d1 \u05d4 \u05e0 \u05de \u05e6 \u05ea \u05e5 {enter}',
    '{space}',
  ],
};

const keyLabels = {
  '{bksp}': '\u232B',
  '{enter}': '\u23CE',
  '{space}': ' ',
};

export default function HebrewKeyboard(props) {
  return (
    <Draggable>
      <div className="keyboard-container">
        <CloseButton onClick={props.onClose} />
        <Keyboard {...props} layout={hebrew} rtl={true} display={keyLabels} />
      </div>
    </Draggable>
  );
}
