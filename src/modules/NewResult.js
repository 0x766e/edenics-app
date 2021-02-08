import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ApiContext from '../contexts/ApiContext';
import WordContext from '../contexts/WordContext';

export default function NewResult(props) {
  const api = useContext(ApiContext);
  const currentWord = useContext(WordContext);

  const [transcription, setTranscription] = useState([]);
  const [selectedTranscription, setSelectedTranscription] = useState('');
  const [vocalization, setVocalization] = useState([]);

  useEffect(() => {
    api.transcription.fromHebrew(currentWord).then((result) => {
      setTranscription(result);
      setSelectedTranscription(result.length > 0 ? result[0] : '');
    });
  }, [currentWord, api.transcription]);

  useEffect(() => {
    if (selectedTranscription) {
      api.vowels.insertAll(selectedTranscription).then((result) => {
        setVocalization(result);
      });
    }
  }, [selectedTranscription, api.vowels]);

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
            <Form.Check type="checkbox" label="Vowels" />
            <Form.Check type="checkbox" label="Shifts" />
            <Form.Check type="checkbox" label="Metathesis" />
            <Form.Check type="checkbox" label="Nasalization" />
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
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
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
