import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FilterField from './FilterField';

export default function WordTableControl({ criteria, onCriteriaChange }) {
  const [filterTerm, setFilterTerm] = useState(criteria.filterTerm);
  const [commitedFilter, setCommitedFilter] = useState(false);

  const commitFilterTerm = () => {
    setCommitedFilter(true);
    onCriteriaChange({
      ...criteria,
      filterTerm,
    });
  };

  if (commitedFilter && filterTerm !== criteria.filterTerm) {
    setFilterTerm('');
    setCommitedFilter(false);
  }

  return (
    <Form inline>
      <Form.Group>
        <FilterField
          highlight={commitedFilter}
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
          onFilterClick={commitFilterTerm}
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
