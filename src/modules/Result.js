import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import LoadingPopUp from '../components/LoadingPopUp';
import ResultPagination from '../components/ResultPagination';
import WordTable from '../components/WordTable';
import WordTableControl from '../components/WordTableControl';
import Container from 'react-bootstrap/Container';
import ApiContext from '../contexts/ApiContext';
import WordContext from '../contexts/WordContext';

export default function Result(props) {
  const api = useContext(ApiContext);
  const currentWord = useContext(WordContext);

  const [wordAnalysis, setWordAnalysis] = useState([]);
  const [loading, setLoading] = useState(false);
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
        <WordTableControl
          criteria={filterCriteria}
          onCriteriaChange={(criteria) => setFilterCriteria(criteria)}
        />
        <ResultPagination items={wordAnalysis}>
          <WordTable />
        </ResultPagination>
      </Container>
      <LoadingPopUp show={loading} />
    </>
  );
}
