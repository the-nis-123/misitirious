import styled from 'styled-components';
import ProductCard from './ProductCard';
import Carousel from './Carousel';
import { useGetGalleryQuery } from '../redux/misitiriousApi';

const WholeStore = ({data}) => {
  const { data: gallery } = useGetGalleryQuery();

  const store = data?.store;
  const carouselData = gallery?.gallery;
  
  return (
    <>
      <QuickAccess>
        <If condition={ store }>
          <For each='product' of={store.slice(0, 9)}>
            <ProductCard 
              image={product.image} 
              name={product.name} 
              price={product.price}
              id={product.id}
              key={product.id}
            />
          </For>
        </If>
      </QuickAccess>

      <PosterOne>
        <Carousel slideWidth='350px' data={carouselData} />
      </PosterOne>

      <MainBody>
        <If condition={ store }>
          <For each='product' of={store.slice(9)}>
            <ProductCard 
              image={product.image} 
              name={product.name} 
              price={product.price}
              id={product.id}
              key={product.id}
              category={product.category}
            />
          </For>
        </If> 
      </MainBody>

      <PosterTwo>
        <Carousel slideWidth='450px' data={carouselData} />
      </PosterTwo>
    </>
  )
}

export default WholeStore;

const QuickAccess = styled.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px 0;
`

const PosterOne = styled.div`
  padding: 20px 0;
  height: 450px;
  overflow: hidden;
`

const PosterTwo = styled.div`
`

const MainBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px 0;
`
