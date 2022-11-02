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

const PageWrapper = styled.div`
  background-color: inherit;
  height: calc(100vh - 70px);
  overflow-y:auto;
`

export default Store;

const Wrapper = styled.div`
`

const MainBody = styled.div`
  padding: 0 10px;
`

const SimilarProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px 0;
`
