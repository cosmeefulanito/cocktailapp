import { useState } from "react";
import  Pagination  from "react-bootstrap/Pagination"
import useBebidas from "../hook/useBebidas";

const Pager = () => {
  const { totalBebidas, handleClickPaginate,paginaACtual,itemPorPagina } = useBebidas()
 

  
  let items = [];
  for (let number = 1; number <= Math.ceil(totalBebidas / itemPorPagina); number++) {
    items.push(
      <Pagination.Item key={number} active={number === paginaACtual} activeLabel onClick={ ()=> {handleClickPaginate(number)}}>
        {number}
      </Pagination.Item>
    );
  }


  return (
    <Pagination>
      {items}
    </Pagination>
  )
}

export default Pager