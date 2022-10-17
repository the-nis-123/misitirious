import styled from "styled-components";

import FooterBlock from "../components/Footer";
import ProductCard from "../components/ProductCard";


import {
  useGetAllProductsQuery,
  useGetAllPostersQuery,
  useGetGalleryQuery
} from '../redux/misitiriousApi';

import image1 from '../images/433.png';
import image2 from '../images/675.png';
import image3 from '../images/445.png';
import image4 from '../images/19.png';
import image5 from '../images/983.jpg';
import image6 from '../images/645.jpg';


function Store() {
  const { data: products, error: productsError, isLoading: loadingProducts } = useGetAllProductsQuery();
  
  return (
    <>
      <Wrapper>
        <BlockOne>
          <p>Trending</p>
          <p>Misitirious Essentials</p>
          <p>Fragrance</p>
          <p>Misitirious Kids</p>
          <p>Vintage</p>
          <p>Misitirious Kings</p>
          <p>Misitirious Queens</p>
          <p>Featured</p>
        </BlockOne>
        
        <QuickAccess>
          <ProductCard image={image1} name='Product Name' price='$237.23'/>
          <ProductCard image={image3} name='Product Name' price='$237.23'/>
          <ProductCard image={image4 } name='Product Name' price='$237.23'/>
          <ProductCard image={image2} name='Product Name' price='$237.23'/>
          <ProductCard image={image3} name='Product Name' price='$237.23'/>
        </QuickAccess>

        <BlockThree>
          <If condition={ products }>
            <For each='product' of={products}>
              <ProductCard image={product.image} name={product.name} price='$237.23'/>
            </For>
          </If>
        </BlockThree>

        <BlockTwo>
          <ProductCard image={image5} />
          <ProductCard image={image6} />
        </BlockTwo>

        <BlockFive>
          <ProductCard image={image1} name='Product Name' price='$237.23' />
          <ProductCard image={image1} name='Product Name' price='$237.23'/>
          <ProductCard image={image3} name='Product Name' price='$237.23'/>
          <ProductCard image={image4} name='Product Name' price='$237.23'/>
          <ProductCard image={image1} name='Product Name' price='$237.23'/>
        </BlockFive>
      </Wrapper>
      <FooterBlock />
    </>
  )
}

export default Store;

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


const BlockOne = styled.div`
  grid-area: header;
  padding: 0 30px;
  display: flex;
  align-items: center;
  gap: 10px;

  p{
    border: 1px solid #c2c2c2;
    padding: 7px 20px;
    border-radius: 20px;
    white-space: nowrap;
  }
    
  @media screen and (max-width: 1024px) {
      display:grid;
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 820px) {
      display:grid;
      grid-template-columns: repeat(3, 1fr);
    }
    
  @media screen and (max-width: 680px) {
      display:grid;
    grid-template-columns: repeat(2, 1fr);
  }
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: white;

  section{
    height:100%;
    background-position: center;
    background-size: contain;
    background-repeat:no-repeat;
  }
  
  padding: 20px;
  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }

`

const BlockThree = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: white;
  gap: 10px;
  padding: 20px;

   
 @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(7, 1fr);
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
