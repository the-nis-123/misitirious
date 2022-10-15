import styled from 'styled-components';
import CategoryCard from "../components/CategoryCard";

import { useGetAllCategoriesQuery } from '../redux/misitiriousApi';


const ProductCategoriesBlock = () => {
  const { data, error, isLoading } = useGetAllCategoriesQuery();

  return (
    <ProductCategories>
      <h2>All our product categories</h2>
      <section>
        <If condition={ data }>
          <For each='category' of={data}>
            <CategoryCard image={category.image} name={category.name} />
          </For>
        </If>
      </section>
    </ProductCategories>
  )
}

export default ProductCategoriesBlock;


const ProductCategories = styled.div`
  grid-area: category;
  
  section{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-top: 20px;

    
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  padding: 20px;

`