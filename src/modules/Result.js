import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ApiContext from '../contexts/ApiContext';
import WordContext from '../contexts/WordContext';

export default function Result(props) {
  const api = useContext(ApiContext);
  const currentWord = useContext(WordContext);

  const [wordAnalysis, setWordAnalysis] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    vowels: false,
    shifts: false,
    scramble: false,
    nasalization: false,
  });

  useEffect(() => {
    api.analyze(currentWord, filterCriteria).then((result) => {
      setWordAnalysis(result);
    });
  }, [filterCriteria, currentWord, api]);

  return (
    <>
      <NavigationBar searchTerm={currentWord} onSearch={props.onSearch} />
      <Container>
        <h1>Root: {currentWord}</h1>
        <Form inline>
          <Form.Group>
            <Form.Control type="text" placeholder="Filter" />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Vowels"
              checked={filterCriteria.vowels}
              onChange={(e) =>
                setFilterCriteria({
                  ...filterCriteria,
                  vowels: e.target.checked,
                })
              }
            />
            <Form.Check
              type="checkbox"
              label="Shifts"
              checked={filterCriteria.shifts}
              onChange={(e) =>
                setFilterCriteria({
                  ...filterCriteria,
                  shifts: e.target.checked,
                })
              }
            />
            <Form.Check
              type="checkbox"
              label="Metathesis"
              checked={filterCriteria.scramble}
              onChange={(e) =>
                setFilterCriteria({
                  ...filterCriteria,
                  scramble: e.target.checked,
                })
              }
            />
            <Form.Check
              type="checkbox"
              label="Nasalization"
              checked={filterCriteria.nasalization}
              onChange={(e) =>
                setFilterCriteria({
                  ...filterCriteria,
                  nasalization: e.target.checked,
                })
              }
            />
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Word</th>
              <th>Transformation</th>
            </tr>
          </thead>
          <tbody>
            {wordAnalysis.map(([word, transformations]) => (
              <tr>
                <td>{word}</td>
                <td>{transformations}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Container>
    </>
  );
}
