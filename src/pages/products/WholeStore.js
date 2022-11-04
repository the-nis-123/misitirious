import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import Carousel from '../../components/carousel';
import { useGetGalleryQuery } from '../../redux/misitiriousApi';

const WholeStore = ({data}) => {
  const { data: gallery } = useGetGalleryQuery();
  const store = data?.store;
  const carouselData = gallery?.gallery;
  
  return (
    <>
      <Section>
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
      </Section>

      <Carousel slideWidth='350px' data={carouselData} />

      <Section>
        <If condition={ store }>
          <For each='product' of={store.slice(9, 25)}>
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
      </Section>

      <Carousel slideWidth='450px' data={carouselData} />

      <Section>
        <If condition={ store }>
          <For each='product' of={store.slice(25)}>
            <ProductCard 
              image={product.image} 
              name={product.name} 
              price={product.price}
              id={product.id}
              key={product.id}
            />
          </For>
        </If>
      </Section>
    </>
  )
}

export default WholeStore;


const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  padding: 1em 0;

  @media only screen and (min-width: 640px)  {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 800px)  {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1000px)  {
    grid-template-columns: repeat(3, 1fr);
  }
`

