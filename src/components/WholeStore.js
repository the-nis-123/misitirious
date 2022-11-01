import styled from 'styled-components';
import ProductCard from './ProductCard';
import Carousel from './Carousel';

const WholeStore = ({data}) => {
  const store = data?.store;
  
  return (
    <>
      <PosterOne>
        <Carousel slideWidth='350px' />
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
            />
          </For>
        </If> 
      </MainBody>

      <PosterTwo>
        <Carousel slideWidth='450px' />
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
