import styled from 'styled-components';
import CategoryCard from "./CategoryCard";

import { useGetAllCategoriesQuery } from '../../redux/misitiriousApi';
import Carousel from '../../components/Carousel';


const ProductCategoriesBlock = () => {
  const { data } = useGetAllCategoriesQuery();

  return (
    <ProductCategories>
      <h3>All our product categories</h3>
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

  h3{
    padding: 0 0.6em;
  }
`