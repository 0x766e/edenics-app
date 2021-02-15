import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import LoadingPopUp from '../components/LoadingPopUp';
import ResultPagination from '../components/ResultPagination';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ApiContext from '../contexts/ApiContext';
import WordContext from '../contexts/WordContext';

const paginate = (array, pageSize, pageNumber) =>
  array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

export default function Result(props) {
  const api = useContext(ApiContext);
  const currentWord = useContext(WordContext);

  const [wordAnalysis, setWordAnalysis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPagesize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState({
    vowels: false,
    shifts: false,
    scramble: false,
    nasalization: false,
  });

  useEffect(() => {
    setLoading(true);
    api
      .analyze(currentWord, filterCriteria)
      .then((result) => {
        setWordAnalysis(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
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
              <th>#</th>
              <th>Word</th>
              <th>Transformation</th>
            </tr>
          </thead>
          <tbody>
            {paginate(wordAnalysis, pageSize, currentPage).map(
              ([word, transformations, index]) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{word}</td>
                  <td>{transformations}</td>
                </tr>
              ),
            )}
          </tbody>
        </Table>
        <ResultPagination />
      </Container>
      <LoadingPopUp show={loading} />
    </>
  );
}
