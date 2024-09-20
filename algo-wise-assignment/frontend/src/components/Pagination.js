import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ count, page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <MuiPagination count={count} page={page} onChange={handleChange} />
  );
};

export default Pagination;
