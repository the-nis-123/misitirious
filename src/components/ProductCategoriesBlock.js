import styled from 'styled-components';
import CategoryCard from "../components/CategoryCard";

import { useGetAllCategoriesQuery } from '../redux/misitiriousApi';


const ProductCategoriesBlock = () => {
  const { data, error, isLoading } = useGetAllCategoriesQuery();

  return (
    <ProductCategories>
      <h3>All our product categories</h3>
      <section>
        <If condition={ data }>
          <For each='category' of={data.categories}>
            <CategoryCard key={category.id} image={category.image} name={category.name} />
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
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-top: 20px;
    max-width: 100vw;
  }
  padding: 20px 10px;

`