import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import KeyboardButton from './KeyboardButton';
import SearchButton from './SearchButton';

export default function SearchField(props) {
  const onKeyboardButtonClick = () => {
    if (props.onKeyboardButtonClick) {
      props.onKeyboardButtonClick();
    }
  };

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <KeyboardButton
          keyboardIconActive={props.keyboardIconActive}
          onClick={onKeyboardButtonClick}
        />
      </InputGroup.Prepend>
      <FormControl {...props} type="text" placeholder="Hebrew root" />
      <InputGroup.Append>
        <SearchButton onClick={props.onSearchClick} />
      </InputGroup.Append>
    </InputGroup>
  );
}
