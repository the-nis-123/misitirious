import styled from "styled-components";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import StoreSideBar from "../components/StoreSideBar";
import SearchForm from "../components/SearchForm";
import { useGetAllProductsQuery } from '../redux/misitiriousApi';
import ProductDetails from "../components/ProductDetails";

function Store() {
  const { activeProduct } = useSelector((state) => state.product);
  const { data } = useGetAllProductsQuery();
  const store = data?.store;
  
  return (
    <PageWrapper>
      <StoreSideBar />
        
      <Wrapper>
        <SearchForm />

        <ProductDetails data={activeProduct}/>
        
        <MainBody>
          <h2>Similar Products</h2>
          <SimilarProducts>
            <If condition={ store && activeProduct?.category}>
              <For each='product' of={store}>
                <If condition={product.category === activeProduct.category}>
                  <ProductCard 
                    image={product.image} 
                    name={product.name} 
                    price={product.price}
                    id={product.id}
                    key={product.id}
                    category={product.category}
                  />
                </If>
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
`

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: inherit;
  height: calc(100vh - 70px);
  width: 100%;
  overflow: hidden;
`
