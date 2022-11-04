import styled from 'styled-components';
import { useGetAllProductsQuery } from '../../redux/misitiriousApi';
import ProductCard from '../../components/ProductCard';

const SideBar = () => {
  const { data } = useGetAllProductsQuery();
  const store = data?.store;
  
  return (
    <Wrapper>
      <h3>Top Salers</h3>

      <section>
        <If condition={ store }>
          <For each='product' of={store.slice(13)}>
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
      </section>
    </Wrapper>
  )
}

export default SideBar;


const Wrapper = styled.div`
  display: none;

  @media only screen and (min-width: 640px)  {
    display: block;
    min-width: 300px;
    overflow:auto;
    padding: 1em;

    section{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1em;
    }

    h3{
      padding: 1em 0;
    }
  }
`