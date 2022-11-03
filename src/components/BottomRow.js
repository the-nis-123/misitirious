import styled from 'styled-components';
import ProductCard from './ProductCard';


import {
  useGetAllProductsQuery
} from '../redux/misitiriousApi';

const BottomRow = () => {
  
  const { data:products, error: productsError, isLoading: loadingProducts } = useGetAllProductsQuery();

  return (
    <Wrapper>
      <section>
        <If condition={ products }>
          <For each='product' of={products.store.slice(20, 25)}>
            <ProductCard 
              image={product.image} 
              name={product.name} 
              price={product.price}
              id={product.id}
              key={product.id}
              category={product.category}
            />
          </For>
        </If>
      </section>
    </Wrapper>
  )
}

export default BottomRow;

const Wrapper = styled.div`
  section{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    padding: 1em 0.6em;
    margin-bottom: 30px;

    @media only screen and (min-width: 640px)  {
      grid-template-columns: repeat(3, 1fr);
    }
     
    @media only screen and (min-width: 1000px)  {
      grid-template-columns: repeat(5, 1fr);
    }
  }
 
`
