// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchProducts } from "redux/operations";

import {
  Container,
  // Ul,
  // DivShift,
  // DivPagination,
  // DivPage,
} from './CategoryPage.styled';

import NavBar from 'components/NavBar/NavBar';
import CategoryCart from 'components/CategoryCart/CategoryCart';

import categories from 'assets/json/categories.json';

const CatalogCarsPage = ({category}) => {
  return (
    <>
      <NavBar />
      <Container>
        <ul>
          {categories.length >0 && categories.map(
            item => item.cat_id === categories.cat_parentId && (
              <li key={item.id}>
                <CategoryCart card={item} />
              </li>
            )
          )}
        </ul>
      </Container>
    </>
  );
};

export default CatalogCarsPage;
