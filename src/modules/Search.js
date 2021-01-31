import React, { useRef, useState } from 'react';
import HebrewKeyboard from '../components/HebrewKeyboard';
import '../styles.css';

export default function Search() {
  const [inputValue, setInputValue] = useState('');
  const keyboard = useRef();

  const onChange = (input) => {
    setInputValue(input);
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInputValue(input);
    keyboard.current.setInput(input);
  };

  return (
    <>
      <input
        placeholder={'Hebrew root'}
        value={inputValue}
        onChange={onChangeInput}
      />
      <HebrewKeyboard
        keyboardRef={(r) => (keyboard.current = r)}
        onChange={onChange}
      />
    </>
  );
}
