import React, { useRef, useState } from 'react';
import HebrewKeyboard from '../components/HebrewKeyboard';
import '../styles.css';

const ICON_KEYBOARD_ACTIVE =
  'https://upload.wikimedia.org/wikipedia/commons/5/5f/Font_Awesome_5_solid_keyboard.svg';
const ICON_KEYBOARD_INACTIVE =
  'https://upload.wikimedia.org/wikipedia/commons/9/9b/Font_Awesome_5_regular_keyboard.svg';

// TODO
const ICON_CLEAR_FIELD =
  'https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg';

export default function Search() {
  const [keyboardActive, setKeyboardActive] = useState(false);
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
      <div className="bar">
        <button
          className="image-button"
          onClick={() => setKeyboardActive(!keyboardActive)}
        >
          <img
            className="keyboard-toggle"
            alt="Toggle virtual keyboard"
            src={keyboardActive ? ICON_KEYBOARD_ACTIVE : ICON_KEYBOARD_INACTIVE}
            title="Toggle Virtual Keyboard"
          />
        </button>

        <input
          className="searchbar"
          placeholder={'Hebrew root'}
          value={inputValue}
          onChange={onChangeInput}
        />
      </div>
      <div className="buttons">
        <button className="button" type="button">
          Search
        </button>
        <button className="button" type="button">
          What's Edenics?
        </button>
      </div>
      {keyboardActive && (
        <HebrewKeyboard
          keyboardRef={(r) => (keyboard.current = r)}
          onChange={onChange}
        />
      )}
    </>
  );
}
