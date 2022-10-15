import styled from "styled-components";

import FooterBlock from "../components/FooterBlock";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";

import {
  useGetAllProductsQuery,
  useGetAllPostersQuery,
  useGetGalleryQuery
} from '../redux/misitiriousApi';

import image7 from '../images/14.png';
import image8 from '../images/4.png';
import image10 from '../images/116.png';
import image15 from '../images/233.png';
import image22 from '../images/27.png';

function Cart() {

  const { data:products, error: productsError, isLoading: loadingProducts } = useGetAllProductsQuery();
  const { data, error, isLoading } = useGetAllProductsQuery();

  console.log(products);

  return (
    <>
      <Wrapper>
        <HeroSlider />
        
        <QuickAccess>
         <If condition={ products }>
            <For each='product' of={products.slice(0, 5)}>
              <ProductCard image={product.image} productName={product.name} price='$237.23'/>
            </For>
          </If>
        </QuickAccess>

        <BlockTwo >
          <section style={{ backgroundImage: `url(${image7})` }} />
          <section style={{ backgroundImage: `url(${image15})` }} />
          <section  style={{ backgroundImage: `url(${image8})` }}/>
        </BlockTwo>

        <BlockThree>
           <If condition={ products }>
            <For each='product' of={products.slice(5, 17)}>
              <ProductCard image={product.image} productName={product.name} price='$237.23'/>
            </For>
          </If>
        </BlockThree>


        <BlockFour >
          <section style={{ backgroundImage: `url(${image10})` }} />
          <section  style={{ backgroundImage: `url(${image22})` }}/>
        </BlockFour>

        <BlockFive>
           <If condition={ products }>
            <For each='product' of={products.slice(17, 22)}>
              <ProductCard image={product.image} productName={product.name} price='$237.23'/>
            </For>
          </If>
        </BlockFive>
      </Wrapper>
      <FooterBlock />
    </>
  )
}

export default Cart;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
  'header header header header header header'
  'quick quick quick quick quick quick'
  'menu menu menu menu menu menu'
  'main main main main main main'
  'right right right right right right'
  'footer footer footer footer footer footer';

  padding: 20px 10px;
`



const QuickAccess = styled.div`
  grid-area: quick;
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 20px;

  
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const BlockTwo = styled.div`
  grid-area: menu;
  height: 220px;  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;

  section{
    height:100%;
    background-position: center;
    background-size: contain;
    background-repeat:no-repeat;
  }
  
  padding: 20px;

`

const BlockThree = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: white;
  gap: 10px;
  padding: 20px;

   
 @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
 @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const BlockFour = styled.div`
 grid-area: right;
  height: 220px;  
  background-position: center;
  background-size: contain;
  background-repeat:no-repeat;
  background-color: white;
  display:grid;
  grid-template-columns: repeat(2, 1fr);

  section{
    height:100%;
    background-position: center;
    background-size: contain;
    background-repeat:no-repeat;
  }

`

const BlockFive = styled.div`
  grid-area: footer;
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: white;

  
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }

 @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

