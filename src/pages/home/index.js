import styled from "styled-components";
import HeroSlider from "./HeroSlider";
import ProductCard from "../../components/ProductCard";
import QuickBuyBlock from "./QuickBuyBlock";
import ProductCategoriesBlock from "./ProductCategoriesBlock";
import TopTrends from "./TopTrends";
import PopularBrands from "./PopularBrands";
import BottomRow from "./BottomRow";
import { useGetAllProductsQuery, useGetGalleryQuery } from '../../redux/misitiriousApi';

function Cart() {
  const { data } = useGetAllProductsQuery();
  const { data: gallery } = useGetGalleryQuery();

  const store = data?.store;
  const carouselData = gallery?.gallery;

  return (
    <Wrapper>
      <HeroSlider />
      <QuickBuyBlock />
      <ProductCategoriesBlock />
      <PopularBrands />
      <MainBody>
        <If condition={ store }>
          <For each='product' of={store.slice(5, 20)}>
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
      </MainBody>
      <TopTrends  />
      <BottomRow />
    </Wrapper>
  )
}

export default Cart;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 5em);
  overflow-y:auto;
  overflow-x:hidden;
  background-color: var(--main-background-color);
`

const MainBody = styled.div`
  grid-area: main;
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  padding: 1em 0.6em;
  
  @media only screen and (min-width: 640px)  {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1000px)  {
    grid-template-columns: repeat(4, 1fr);
  }
`

