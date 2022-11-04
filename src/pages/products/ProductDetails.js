import styled from "styled-components";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import SearchForm from "./SearchForm";
import { useGetAllProductsQuery } from '../../redux/misitiriousApi';
import Details from "./ProductInfoSection";
import PageContainer from "./PageContainer";

const ProductDetails = () => {
  const { activeProduct } = useSelector((state) => state.product);
  const { data } = useGetAllProductsQuery();
  const store = data?.store;
  
  return (
    <PageContainer>
      <SearchForm />

      <Details data={activeProduct}/>
      
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
    </PageContainer>
  )
}

export default ProductDetails;

const MainBody = styled.div`
  padding: 0 0.6em;
`

const SimilarProducts = styled.div`
  display: grid;
  gap: 1em;
  padding: 1em 0;

  @media only screen and (min-width: 480px)  {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 800px)  {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1000px)  {
    grid-template-columns: repeat(3, 1fr);
  }
`
