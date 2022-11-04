import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';


import {
  useGetAllProductsQuery
} from '../../redux/misitiriousApi';

const BottomRow = () => {
  
  const { data:products, error: productsError, isLoading: loadingProducts } = useGetAllProductsQuery();

  return (
    <Wrapper>
      <h2>Trending Right Now</h2>

      <section>
        <If condition={ products }>
          <For each='product' of={products.store.slice(17, 25)}>
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
    padding: 1em 0.6em;

    @media only screen and (min-width: 480px)  {
      display:grid;
      gap: 1em;
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 640px)  {
      grid-template-columns: repeat(3, 1fr);
    }
     
    @media only screen and (min-width: 1000px)  {
      grid-template-columns: repeat(4, 1fr);
    }
  }
 
  h2{
    padding: 1em 0.6em 0 0.6em;
  }
`
