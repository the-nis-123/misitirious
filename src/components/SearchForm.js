import styled from 'styled-components';

const SearchForm = () => {
  return (
    <Wrapper>
      <p>search</p>
      < Search />
    </Wrapper>
  )
}

export default SearchForm;


const Wrapper = styled.div`
  grid-area:search;
  border: 1px solid #c2c2c2;
  display:flex;
  align-items:center;
  color:grey;
  p{
    padding: 0 20px;
  }
`
const Search = styled.input`
  border-right: 1px solid #c2c2c2;
  border-left: 1px solid #c2c2c2;
  border-bottom:none;
  border-top:none;
  outline: none;
  padding: 10px 35px;
  background-color: inherit;
  width: 80%;
`