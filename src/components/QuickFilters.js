import styled from 'styled-components';

const QuickFilters = () => {
  return (
     <Wrapper>
      <p>Trending</p>
      <p>Misitirious Essentials</p>
      <p>Fragrance</p>
      {/* <p>Misitirious Kids</p>
      <p>Vintage</p>
      <p>Misitirious Kings</p>
      <p>Misitirious Queens</p>
      <p>Featured</p> */}
    </Wrapper>
  )
}

export default QuickFilters;


const Wrapper = styled.div`
  grid-area: filters;
  padding: 0 30px;
  display: flex;
  align-items: center;
  gap: 10px;

  p{
    border: 1px solid #c2c2c2;
    padding: 7px 20px;
    border-radius: 20px;
  }
    
  @media screen and (max-width: 1024px) {
      display:grid;
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 820px) {
      display:grid;
      grid-template-columns: repeat(3, 1fr);
    }
    
  @media screen and (max-width: 680px) {
      display:grid;
    grid-template-columns: repeat(2, 1fr);
  }
`