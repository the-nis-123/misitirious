import styled from 'styled-components';
import ProductCard from './ProductCard';

import image5 from '../images/983.jpg';
import image6 from '../images/645.jpg';

const Store = ({data}) => {
  
  return (
    <>
      <QuickAccess>
        <If condition={ data }>
          <For each='product' of={data.slice(0, 5)}>
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
          <For each='product' of={data.slice(5)}>
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

      <Poster>
        <ProductCard image={image5} />
        <ProductCard image={image6} />
      </Poster>

      <Pagination>
       <p>Pagination</p>
      </Pagination>
    </>
  )
}

export default Store;

const QuickAccess = styled.div`
  grid-area: quick;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px 20px;
`

const Poster = styled.div`
  grid-area: poster;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  section{
    height:100%;
    background-position: center;
    background-size: contain;
    background-repeat:no-repeat;
  }
  
  padding: 10px 20px;
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
