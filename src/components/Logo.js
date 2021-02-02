import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

export default function Logo(props) {
  const style = {
    width: '20%',
    height: 'auto',
  };

  return (
    <Container>
      <Image style={style} src="logo.png" />
      {props.isCompact ? null : <h2>Edenics</h2>}
    </Container>
  );
}
