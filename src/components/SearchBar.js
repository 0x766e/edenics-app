import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import HebrewKeyboard from './HebrewKeyboard';
import SearchField from './SearchField';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [keyboardActive, setKeyboardActive] = useState(!!props.keyboardVisible);
  const keyboard = useRef();

  const updateKeyboardOnChange = (event) => {
    const input = event.target.value;
    setSearchTerm(input);

    if (keyboard.curent) {
      keyboard.current.setInput(input);
    }

    if (props.onChange) {
      props.onChange(input);
    }
  };

  const propagateKeyboardChanges = (changes) => {
    setSearchTerm(changes);

    if (props.onChange) {
      props.onChange(changes);
    }
  };

  const handleKeyboardClick = () => {
    setKeyboardActive(!keyboardActive);
  };

  const triggerSearch = () => {
    if (props.onSearch) {
      props.onSearch(searchTerm);
    }
  };

  const handleKey = (key) => {
    if (key === '{enter}') {
      triggerSearch();
    }
  };

  return (
    <Container>
      <SearchField
        {...props}
        value={searchTerm}
        keyboardIconActive={keyboardActive}
        onKeyboardButtonClick={handleKeyboardClick}
        onChange={updateKeyboardOnChange}
      />

      <Button variant="primary" onClick={triggerSearch}>
        Search
      </Button>

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
