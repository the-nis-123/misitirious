import styled from 'styled-components';

const FiveStarRating = () => {
  const rate = 2;

  return (
    <If condition={!isNaN(rate)}>
      <Wrapper>
        <For each='star' of={[...Array(rate)]}>
          <span style={{color:'red'}}>&#9733;</span>
        </For>
        <For each='star' of={[...Array(5 - rate)]}>
          <span>&#9733;</span>
        </For>
      </Wrapper>
    </If>
  )
}

export default FiveStarRating;

const Wrapper = styled.div`
  span{
    display: inline-block;
    margin-right: 7px;
    font-size: 1.6rem;
    color: #cccccc;
  }
`