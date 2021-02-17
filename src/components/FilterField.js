import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import FilterButton from './FilterButton';

export default function FilterField(props) {
  return (
    <InputGroup>
      <FormControl {...props} type="text" placeholder="Filter" />
      <InputGroup.Append>
        <FilterButton onClick={props.onFilterClick} />
      </InputGroup.Append>
    </InputGroup>
  );
}
