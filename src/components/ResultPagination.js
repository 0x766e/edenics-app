import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const pageSize = 50;
const visibleItems = 5;

// TODO Move out
const range = (from, to) =>
  Array.from(new Array(to - from), (x, i) => i + from);

const paginate = (array, pageSize, pageNumber) =>
  array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

const visiblePages = (pages, currentPage, visibleItems) =>
  range(currentPage - visibleItems, currentPage)
    .filter((x) => x > 0)
    .concat(
      range(currentPage, currentPage + visibleItems).filter((x) => x <= pages),
    );

const PaginationBar = ({ pages, currentPage, onPageClick }) => {
  return (
    <Pagination>
      <Pagination.First onClick={() => onPageClick(1)} />
      <Pagination.Prev
        onClick={() => {
          if (currentPage > 1) {
            onPageClick(currentPage - 1);
          }
        }}
      />

      {visiblePages(pages, currentPage, visibleItems).map((pageNumber) => {
        return (
          <Pagination.Item
            active={currentPage === pageNumber}
            onClick={() => onPageClick(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        onClick={() => {
          if (currentPage < pages) {
            onPageClick(currentPage + 1);
          }
        }}
      />
      <Pagination.Last onClick={() => onPageClick(pages)} />
    </Pagination>
  );
};

export default function ResultPagination({
  children,
  items,
  currentPage,
  onCurrentPageChange,
}) {
  if (!items || items.length === 0) {
    return null;
  }

  const currentItems = paginate(items, pageSize, currentPage);
  const totalPages = Math.ceil(items.length / pageSize);

  return (
    <>
      <PaginationBar
        pages={totalPages}
        currentPage={currentPage}
        onPageClick={(page) => onCurrentPageChange(page)}
      />
      {React.cloneElement(children, {
        items: currentItems,
      })}
      <PaginationBar
        pages={totalPages}
        currentPage={currentPage}
        onPageClick={(page) => onCurrentPageChange(page)}
      />
    </>
  );
}
