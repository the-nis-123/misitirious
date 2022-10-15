import styled from 'styled-components';
import { useGetAllProductsQuery } from '../redux/misitiriousApi';
import ProductCard from "../components/ProductCard";

const QuickBuyBlock = () => {

  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <QuickBuy>
      <h2>Top Salers</h2>

      <section>
        <If condition={ data }>
          <For each='product' of={data.slice(0, 5)}>
            <ProductCard image={product.image} name={product.name} price='$237.23'/>
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

  section{
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    
    @media screen and (max-width: 820px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 680px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`