import styled from "styled-components";

import ProductCard from "../components/ProductCard";
import StoreSideBar from "../components/StoreSideBar";
import SearchForm from "../components/SearchForm";
import { useGetAllProductsQuery } from '../redux/misitiriousApi';

import image5 from '../images/983.jpg';
import image6 from '../images/645.jpg';


function Store() {
  const { data: products, error: productsError, isLoading: loadingProducts } = useGetAllProductsQuery();
  
  return (
    <PageWrapper>
      <StoreSideBar />
        
      <Wrapper>
        <SearchForm />

        <ProductInfo>
          <ProductCard image={image5} />
          <ProductCard image={image6} />
        </ProductInfo>
        
        <MainBody>
          <h2>Similar Products</h2>
          <SimilarProducts>
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
          </SimilarProducts>
        </MainBody>
      </Wrapper>
    </PageWrapper>
  )
}

export default Store;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
  'search search search search search search'
  'product product product product product product'
  'main main main main main main';

  padding: 10px 0;
  overflow-y:auto;
  overflow-x:hidden;
`

const ProductInfo = styled.div`
  grid-area: product;
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
  padding: 20px;
`

const SimilarProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(7, 1fr);
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