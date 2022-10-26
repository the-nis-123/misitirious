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
          <For each='product' of={data.slice(0, 5)}>
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
    </QuickBuy>
  )
}

export default QuickBuyBlock;


const QuickBuy = styled.div`
  grid-area: quickBuy;
  padding: 20px;
  background-color: white;

  section{
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
`