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
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    background-color: #FAFAFA;
    padding: 0 20px;
  }
`