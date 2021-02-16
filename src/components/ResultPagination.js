import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const pageSize = 50;
const initialPage = 1;
const paginatorBarLimit = 20;

const paginate = (array, pageSize, pageNumber) =>
  array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

const PaginationBar = ({ pages, currentPage, onPageClick }) => {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {pages.map((_, i) => {
        const pageNumber = i + 1;
        return (
          <Pagination.Item
            active={currentPage === pageNumber}
            onClick={() => onPageClick(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        );
      })}
      <Pagination.Ellipsis />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default function ResultPagination({ children, items }) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  if (!items || items.length === 0) {
    return null;
  }

  const currentItems = paginate(items, pageSize, currentPage);
  const totalPages = Array(Math.ceil(items.length / pageSize)).fill();

  return (
    <>
      <PaginationBar
        pages={totalPages}
        currentPage={currentPage}
        onPageClick={(page) => setCurrentPage(page)}
      />
      {React.cloneElement(children, {
        items: currentItems,
      })}
      <PaginationBar
        pages={totalPages}
        currentPage={currentPage}
        onPageClick={(page) => setCurrentPage(page)}
      />
    </>
  );
}
