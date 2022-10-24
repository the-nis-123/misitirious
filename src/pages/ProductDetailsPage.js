import styled from "styled-components";

import ProductCard from "../components/ProductCard";
import StoreSideBar from "../components/StoreSideBar";
import SearchForm from "../components/SearchForm";
import { useGetAllProductsQuery } from '../redux/misitiriousApi';
import ProductDetaials from "../components/ProductDetaials";

function Store() {
  const { data: products, error: productsError, isLoading: loadingProducts } = useGetAllProductsQuery();
  
  return (
    <PageWrapper>
      <StoreSideBar />
        
      <Wrapper>
        <SearchForm />

        <ProductDetaials />
        
        <MainBody>
          <h2>Similar Products</h2>
          <SimilarProducts>
            <If condition={ products }>
              <For each='product' of={products}>
                <ProductCard 
                  image={product.image} 
                  name={product.name} 
                  price={product.price}
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