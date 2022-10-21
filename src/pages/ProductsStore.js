import styled from "styled-components";

import ProductCard from "../components/ProductCard";
import StoreSideBar from "../components/StoreSideBar";
import SearchForm from "../components/SearchForm";

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
    <PageWrapper>
      <StoreSideBar />
        
      <Wrapper>
        <SearchForm />
        
        <QuickAccess>
          <ProductCard image={image1} name='Product Name' price='$237.23'/>
          <ProductCard image={image3} name='Product Name' price='$237.23'/>
          <ProductCard image={image4 } name='Product Name' price='$237.23'/>
          <ProductCard image={image2} name='Product Name' price='$237.23'/>
          <ProductCard image={image3} name='Product Name' price='$237.23'/>
        </QuickAccess>

        <MainBody>
          <If condition={ products }>
            <For each='product' of={products}>
              <ProductCard 
                image={product.image} 
                name={product.name} 
                price='$237.23'
                id={product.id}
                key={product.id}
              />
            </For>
          </If>
        </MainBody>

        <Poster>
          <ProductCard image={image5} />
          <ProductCard image={image6} />
        </Poster>

        <BottomRow>
          <ProductCard image={image1} name='Product Name' price='$237.23' />
          <ProductCard image={image1} name='Product Name' price='$237.23'/>
          <ProductCard image={image3} name='Product Name' price='$237.23'/>
          <ProductCard image={image4} name='Product Name' price='$237.23'/>
          <ProductCard image={image1} name='Product Name' price='$237.23'/>
        </BottomRow>
      </Wrapper>
    </PageWrapper>
  )
}

export default Store;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
  'search search search search search search'
  'quick quick quick quick quick quick'
  'menu menu menu menu menu menu'
  'main main main main main main'
  'bottom bottom bottom bottom bottom bottom';

  padding: 10px 0;
  overflow-y:auto;
  overflow-x:hidden;
`

const QuickAccess = styled.div`
  grid-area: quick;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
  
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Poster = styled.div`
  grid-area: menu;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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

const MainBody = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
   
 @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(7, 1fr);
  }
`

const BottomRow = styled.div`
  grid-area: bottom;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
  
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }

 @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: inherit;
  height: calc(100vh - 70px);
  width: 100%;
  overflow: hidden;
`