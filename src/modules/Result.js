import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ApiContext from '../contexts/ApiContext';
import WordContext from '../contexts/WordContext';

export default function Result(props) {
  const api = useContext(ApiContext);
  const currentWord = useContext(WordContext);

  const [selectedTab, setSelectedTab] = useState('transcription');
  const [transcription, setTranscription] = useState([]);

  useEffect(() => {
    api.transcription
      .fromHebrew(currentWord)
      .then((result) => setTranscription(result));
  }, [currentWord]);

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
                <Table striped bordered hover>
                  <tbody>
                    {transcription.map((t) => (
                      <tr>
                        <td>{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
