import React from 'react';
import Table from 'react-bootstrap/Table';

export default function WordTable({ items }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Word</th>
          <th>Transformation</th>
        </tr>
      </thead>
      <tbody>
        {items.map(([word, transformations, index]) => (
          <tr>
            <td>{index + 1}</td>
            <td>{word}</td>
            <td>{transformations}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
