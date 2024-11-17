import  React from 'react';
import Pagination from '@mui/material/Pagination';
import P from "./Pogination.module.css"

export default function BasicPagination({ setPage}) {

   function handlePage(p,n) {
       setPage(n);
   }

  return (
    <div className={P.pasition}>
      <Pagination onChange={handlePage} count={10} color="primary" />
    </div>
  );
}
