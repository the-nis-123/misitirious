import styled from 'styled-components';
import ProductCard from './ProductCard';


import {
  useGetAllProductsQuery,
  useGetAllPostersQuery,
  useGetAllCategoriesQuery
} from '../redux/misitiriousApi';

const BottomRow = () => {
  
  const { data:products, error: productsError, isLoading: loadingProducts } = useGetAllProductsQuery();

  return (
    <Wrapper>
      <section>
        <If condition={ products }>
          <For each='product' of={products.slice(20, 25)}>
            <ProductCard 
              image={product.image} 
              name={product.name} 
              price='$237.23'
              id={product.id}
              key={product.id}
            />
          </For>
        </If>
      </section>
    </Wrapper>
  )
}

export default BottomRow;

const Wrapper = styled.div`
  grid-area: bottomRow;
  padding: 20px;

  section{
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
 
`
