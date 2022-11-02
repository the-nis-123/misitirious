import styled from "styled-components";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import QuickBuyBlock from "../components/QuickBuyBlock";
import ProductCategoriesBlock from "../components/ProductCategoriesBlock";
import GallerySlide from "../components/GallerySlide";
import AdvertsCarousel from "../components/AdvertsCarousel";
import BottomRow from "../components/BottomRow";
import { useGetAllProductsQuery, useGetGalleryQuery } from '../redux/misitiriousApi';

function Cart() {
  const { data } = useGetAllProductsQuery();
  const { data: gallery } = useGetGalleryQuery();

  const store = data?.store;
  const carouselData = gallery?.gallery;

  return (
    <Wrapper>
      <HeroSlider />
      <QuickBuyBlock />
      <ProductCategoriesBlock />
      <AdvertsCarousel data={carouselData} />
      <MainBody>
        <If condition={ store }>
          <For each='product' of={store.slice(5, 20)}>
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
      <GallerySlide data={carouselData} />
      <BottomRow />
    </Wrapper>
  )
}

export default Cart;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow:auto;
  background-color: var(--main-background-color);
`

const MainBody = styled.div`
  grid-area: main;
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
`

