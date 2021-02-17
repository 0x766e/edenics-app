import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FilterField from './FilterField';

export default function WordTableControl({ criteria, onCriteriaChange }) {
  const [filterTerm, setFilterTerm] = useState(criteria.filterTerm);

  return (
    <Form inline>
      <Form.Group>
        <FilterField
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
          onFilterClick={() =>
            onCriteriaChange({
              ...criteria,
              filterTerm,
            })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Vowels"
          checked={criteria.vowels}
          onChange={(e) =>
            onCriteriaChange({
              ...criteria,
              vowels: e.target.checked,
            })
          }
        />
        <Form.Check
          type="checkbox"
          label="Shifts"
          checked={criteria.shifts}
          onChange={(e) =>
            onCriteriaChange({
              ...criteria,
              shifts: e.target.checked,
            })
          }
        />
        <Form.Check
          type="checkbox"
          label="Metathesis"
          checked={criteria.scramble}
          onChange={(e) =>
            onCriteriaChange({
              ...criteria,
              scramble: e.target.checked,
            })
          }
        />
        <Form.Check
          type="checkbox"
          label="Nasalization"
          checked={criteria.nasalization}
          onChange={(e) =>
            onCriteriaChange({
              ...criteria,
              nasalization: e.target.checked,
            })
          }
        />
      </Form.Group>
    </Form>
  );
}
