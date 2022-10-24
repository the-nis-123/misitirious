import React from 'react';
import ProductCard from './ProductCard';

const SearchResults = ({data}) => {
  return (
    <If condition={ data?.data }>
      <For each='product' of={data.data}>
        <ProductCard 
          image={product.image} 
          name={product.name} 
          price={product.price}
          id={product.id}
          key={product.id}
        />
      </For>
    </If>
  )
}

export default SearchResults;