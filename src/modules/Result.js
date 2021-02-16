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
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState({
    vowels: false,
    shifts: false,
    scramble: false,
    nasalization: false,
  });

  const handleSearch = (searchTerm) => {
    setCurrentPage(1);
    setFilterCriteria({
      vowels: false,
      shifts: false,
      scramble: false,
      nasalization: false,
    });

    if (props.onSearch) {
      props.onSearch(searchTerm);
    }
  };

  const handleCriteriaChange = (criteria) => {
    setFilterCriteria(criteria);
    setCurrentPage(1);
  };

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
      <NavigationBar searchTerm={currentWord} onSearch={handleSearch} />
      <Container>
        <h1>Root: {currentWord}</h1>
        <WordTableControl
          criteria={filterCriteria}
          onCriteriaChange={handleCriteriaChange}
        />
        <ResultPagination
          items={wordAnalysis}
          currentPage={currentPage}
          onCurrentPageChange={(page) => setCurrentPage(page)}
        >
          <WordTable />
        </ResultPagination>
      </Container>
      <LoadingPopUp show={loading} />
    </>
  );
}
