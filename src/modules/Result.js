import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import ApiContext from '../contexts/ApiContext';
import WordContext from '../contexts/WordContext';

export default function Result(props) {
  const api = useContext(ApiContext);
  const currentWord = useContext(WordContext);

  const [selectedTab, setSelectedTab] = useState('transcription');
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
      <Container className="mt-5">
        <Tabs
          defaultActiveKey="profile"
          activeKey={selectedTab}
          onSelect={(tab) => setSelectedTab(tab)}
        >
          <Tab eventKey="transcription" title="Transcription">
            <Card>
              <Card.Body>
                <Card.Title>{currentWord}</Card.Title>
                <ListGroup>
                  {transcription.map((t) => (
                    <ListGroup.Item
                      action
                      active={t === selectedTranscription}
                      onClick={() => setSelectedTranscription(t)}
                    >
                      {t.join('')}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                {vocalization.length > 0 && (
                  <Table striped bordered hover>
                    <thead>
                      <th>Vowels</th>
                    </thead>
                    <tbody>
                      {vocalization.map((t) => (
                        <tr>
                          <td>{t.join('')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
