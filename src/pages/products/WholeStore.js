import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import Carousel from '../../components/carousel/Carousel';
import { useGetGalleryQuery } from '../../redux/misitiriousApi';
import Slide from '../../components/Slides';

const WholeStore = ({data}) => {
  const store = data?.store;

  const { data: gallery } = useGetGalleryQuery();
  const banners = gallery?.gallery;
  const brands = gallery?.brands;

  
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

      <Carousel show={3} infiniteLoop auto={true}>
        <If condition={brands}>
          <For each='slide' of={brands}>
            <Slide key={slide}>
              <img src={slide}  alt=''/>
            </Slide>
          </For>
        </If>
      </Carousel>

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

      <Carousel show={1} infiniteLoop auto={true}>
        <If condition={banners}>
          <For each='slide' of={banners}>
            <Slide key={slide}>
              <img src={slide}  alt=''/>
            </Slide>
          </For>
        </If>
      </Carousel>

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
  gap: 1em;
  padding: 1em 0;

  @media only screen and (min-width: 480px)  {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 800px)  {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1000px)  {
    grid-template-columns: repeat(3, 1fr);
  }
`

