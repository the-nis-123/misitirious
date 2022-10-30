import styled from "styled-components";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import QuickBuyBlock from "../components/QuickBuyBlock";
import ProductCategoriesBlock from "../components/ProductCategoriesBlock";
import SliderBlock from "../components/SliderBlock";
import PostersBlock from "../components/PostersBlock";
import BottomRow from "../components/BottomRow";
import { useGetAllProductsQuery } from '../redux/misitiriousApi';

function Cart() {
  const { data } = useGetAllProductsQuery();

  return (
    <Wrapper>
      <HeroSlider />
      <QuickBuyBlock />
      <ProductCategoriesBlock />
      <PostersBlock />
      <MainBody>
        <If condition={ data }>
          <For each='product' of={data.slice(5, 20)}>
            <ProductCard 
              image={product.image} 
              name={product.name} 
              price={product.price}
              id={product.id}
              key={product.id}
            />
          </For>
        </If>
      </MainBody>
      <SliderBlock />
      <BottomRow />
    </Wrapper>
  )
}

export default Cart;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow:auto;
  background-color: var(--main-background-color);
`

const MainBody = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  padding: 20px;
`

