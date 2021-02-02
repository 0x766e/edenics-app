import React, { useRef, useState } from 'react';
import HebrewKeyboard from './HebrewKeyboard';
import SearchField from './SearchField';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState(props.value);
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
    if (props.onSearch && !!searchTerm) {
      props.onSearch(searchTerm);
    }
  };

  const handleKeyboardKey = (event) => {
    if (event.charCode === 13) {
      triggerSearch();
    }
  };

  const handleVirtualKKeyboardKey = (key) => {
    if (key === '{enter}') {
      triggerSearch();
    }
  };

  return (
    <>
      <SearchField
        {...props}
        value={searchTerm}
        keyboardIconActive={keyboardActive}
        onKeyboardButtonClick={handleKeyboardClick}
        onChange={updateKeyboardOnChange}
        onKeyPress={handleKeyboardKey}
        onSearchClick={triggerSearch}
      />

      {keyboardActive && (
        <HebrewKeyboard
          keyboardRef={(r) => (keyboard.current = r)}
          onChange={propagateKeyboardChanges}
          onClose={handleKeyboardClick}
          onKeyPress={handleVirtualKKeyboardKey}
        />
      )}
    </>
  );
}
