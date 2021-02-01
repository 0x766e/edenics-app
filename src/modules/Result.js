import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

export default function Result(props) {
  const [selectedTab, setSelectedTab] = useState('transcription');

  return (
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
              <Card.Title>{props.query}</Card.Title>
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
  );
}
