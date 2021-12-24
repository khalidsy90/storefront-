import React from 'react';
import Categories from './Category';
import Products from './Products';
import ActiveCategory from './current-category';


const StoreFront = () => {
  return (
    <>
    <Categories />
    <ActiveCategory />
    <Products />
    </>
  )
}

export default StoreFront;