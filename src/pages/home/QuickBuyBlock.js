import styled from 'styled-components';
import { useGetAllProductsQuery } from '../../redux/misitiriousApi';
import ProductCard from "../../components/ProductCard";

const QuickBuyBlock = () => {

  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <QuickBuy>
      <h2>Top Salers</h2>

      <section>
        <If condition={ data }>
          <For each='product' of={data.store.slice(0, 8)}>
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
  h2{
    padding: 1em 0.6em;
  }

  section{
    padding: 0 0.6em;

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
`