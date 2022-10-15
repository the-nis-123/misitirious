import styled from "styled-components";

import FooterBlock from "../components/FooterBlock";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import QuickBuyBlock from "../components/QuickBuyBlock";
import ProductCategoriesBlock from "../components/ProductCategoriesBlock";
import AdSection from "../components/AdSection";
import PostersBlock from "../components/PostersBlock";
import BottomRow from "../components/BottomRow";

import {
  useGetAllProductsQuery,
  useGetAllPostersQuery,
  useGetAllCategoriesQuery
} from '../redux/misitiriousApi';


function Cart() {

  const { data:products, error: productsError, isLoading: loadingProducts } = useGetAllProductsQuery();


  return (
    <>
      <Wrapper>
        <HeroSlider />
        <QuickBuyBlock />
        <ProductCategoriesBlock />

        <PostersBlock />

        <MainBody>
           <If condition={ products }>
            <For each='product' of={products.slice(5, 20)}>
              <ProductCard image={product.image} name={product.name} price='$237.23'/>
            </For>
          </If>
        </MainBody>

        <AdSection />

        <BottomRow />
      </Wrapper>
      <FooterBlock />
    </>
  )
}

export default Cart;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
  'hero hero hero hero hero hero'
  'quickBuy quickBuy quickBuy quickBuy quickBuy quickBuy'
  'category category category category category category'
  'poster poster poster poster poster poster'
  'main main main main main main'
  'adSection adSection adSection adSection adSection adSection'
  'bottomRow bottomRow bottomRow bottomRow bottomRow bottomRow';

  padding: 20px 0;
`

const MainBody = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  padding: 20px;
   
 @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

