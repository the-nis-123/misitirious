import styled from 'styled-components';
import CategoryCard from "./CategoryCard";

import { useGetAllCategoriesQuery } from '../../redux/misitiriousApi';
import Carousel from '../../components/carousel/Carousel';


const ProductCategories = () => {
  const { data } = useGetAllCategoriesQuery();

  return (
    <Wrapper>
      <h2>All Our Product Categories</h2>
      <Carousel show={4} infiniteLoop auto={false}>
        <If condition={ data }>
          <For each='category' of={data.categories}>
            <CategoryCard key={category.id} image={category.image} name={category.name} />
          </For>
        </If>
      </Carousel>
    </Wrapper>
  )
}

export default ProductCategories;


const Wrapper = styled.div`
  width: 100%;
  padding: 1em 0;

  h2{
    padding: 0 0.6em;
  }
`