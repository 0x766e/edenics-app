import React from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

import myWorker from './tst.worker';

export default function Home(props) {
  const containerStyle = { paddingTop: '112px' };
  const spacerStyle = { height: '24px' };

  const worker = new myWorker();
  worker.addEventListener('message', (event) => console.log(event.data));
  worker.postMessage('ping');

  return (
    <Container style={containerStyle} className="text-center">
      <Logo />
      <div style={spacerStyle} />
      <SearchBar onSearch={props.onSearch} />
    </Container>
  );
}
