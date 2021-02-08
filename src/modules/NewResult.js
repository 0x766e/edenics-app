import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
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
      </Container>
    </>
  );
}
