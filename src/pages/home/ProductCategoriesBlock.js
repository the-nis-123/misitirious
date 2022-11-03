import styled from 'styled-components';
import CategoryCard from "./CategoryCard";

import { useGetAllCategoriesQuery } from '../../redux/misitiriousApi';
import Carousel from '../../components/Carousel';


const ProductCategoriesBlock = () => {
  const { data } = useGetAllCategoriesQuery();

  return (
    <ProductCategories>
      <h2>All Our Product Categories</h2>
      <Carousel>
        <If condition={ data }>
          <For each='category' of={data.categories}>
            <CategoryCard key={category.id} image={category.image} name={category.name} />
          </For>
        </If>
      </Carousel>
    </ProductCategories>
  )
}

export default ProductCategoriesBlock;


const ProductCategories = styled.div`
  width: 100%;
  padding: 1em 0;

  h2{
    padding: 0 0.6em;
  }
`