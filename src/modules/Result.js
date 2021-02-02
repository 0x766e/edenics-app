import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import WordContext from '../contexts/WordContext';

export default function Result(props) {
  const [selectedTab, setSelectedTab] = useState('transcription');

  return (
    <WordContext.Consumer>
      {(currentWord) => (
        <Container>
          <NavigationBar onSearch={props.onSearch} />
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
                    <thead>
                      <tr>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>2</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Container>
      )}
    </WordContext.Consumer>
  );
}
