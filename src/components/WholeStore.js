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
      <PosterOne>
        <Carousel slideWidth='350px' data={carouselData} />
      </PosterOne>
      
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
  grid-area: quick;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px 20px;
`

const PosterOne = styled.div`
  grid-area: poster1;
  padding: 20px 0;
  width: 100%;
  height: 450px;
  overflow: hidden;
`

const PosterTwo = styled(PosterOne)`
  grid-area: poster2;
`

const MainBody = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px 20px;
`
