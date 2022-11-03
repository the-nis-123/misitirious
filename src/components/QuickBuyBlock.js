import styled from 'styled-components';
import { useGetAllProductsQuery } from '../redux/misitiriousApi';
import ProductCard from "../components/ProductCard";

const QuickBuyBlock = () => {

  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <QuickBuy>
      <h3>Top Salers</h3>

      <section>
        <If condition={ data }>
          <For each='product' of={data.store.slice(0, 5)}>
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
    </QuickBuy>
  )
}

export default QuickBuyBlock;


const QuickBuy = styled.div`
  grid-area: quickBuy;
  background-color: white;

  h3{
    padding: 20px;
  }

  section{
    max-width: 100vw;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6em;
    padding: 0 0.6em;

    @media only screen and (min-width: 640px)  {
      grid-template-columns: repeat(3, 1fr);
    }

      
    @media only screen and (min-width: 1000px)  {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`