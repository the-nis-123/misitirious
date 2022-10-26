import styled from 'styled-components';
import ProductCard from './ProductCard';
import Carousel from './Carousel';

import image5 from '../images/983.jpg';
import image6 from '../images/645.jpg';

const WholeStore = ({data}) => {
  
  return (
    <>
      <PosterOne>
        <Carousel />
      </PosterOne>
      
      <QuickAccess>
        <If condition={ data }>
          <For each='product' of={data.slice(0, 9)}>
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
        <If condition={ data }>
          <For each='product' of={data.slice(9)}>
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
        <Carousel />
      </PosterTwo>

      <Pagination>
       <p>Pagination</p>
      </Pagination>
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
  background-color: var(--primary-color, #f2f2f2);
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

const Pagination = styled.div`
  grid-area: pagination;
  padding: 10px 20px;
`
