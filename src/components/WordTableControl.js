import React from 'react';
import Form from 'react-bootstrap/Form';

export default function WordTableControl({ criteria, onCriteriaChange }) {
  return (
    <Form inline>
      <Form.Group>
        <Form.Control type="text" placeholder="Filter" />
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
