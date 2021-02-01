import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import HebrewKeyboard from './HebrewKeyboard';
import SearchField from './SearchField';

export default function SearchBar(props) {
  const [keyboardActive, setKeyboardActive] = useState(!!props.keyboardVisible);
  const keyboard = useRef();

  const updateKeyboardOnChange = (event) => {
    const input = event.target.value;
    if (keyboard.curent) {
      keyboard.current.setInput(input);
    }

    if (props.onChange) {
      props.onChange(input);
    }
  };

  const propagateKeyboardChanges = (changes) => {
    if (props.onChange) {
      props.onChange(changes);
    }
  };

  const handleKeyboardClick = () => {
    setKeyboardActive(!keyboardActive);
  };

  const handleKey = (key) => {
    if (key === '{enter}' && props.onSearch) {
      props.onSearch();
    }
  };

  return (
    <Container>
      <SearchField
        {...props}
        keyboardIconActive={keyboardActive}
        onKeyboardButtonClick={handleKeyboardClick}
        onChange={updateKeyboardOnChange}
      />

      {keyboardActive && (
        <HebrewKeyboard
          keyboardRef={(r) => (keyboard.current = r)}
          onChange={propagateKeyboardChanges}
          onKeyPress={handleKey}
        />
      )}
    </Container>
  );
}
