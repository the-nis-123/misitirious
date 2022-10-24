import styled from 'styled-components';

const SearchForm = ({setQuery}) => {
  return (
    <Container>
      <Wrapper>
        <p>search</p>
        < Search onChange={(e)=>setQuery(e.target.value)}/>
      </Wrapper>
    </Container>
    
  )
}

export default SearchForm;



const Container = styled.div`
  grid-area:search;
  margin-top: 10px;
`

const Wrapper = styled.div`
  border: 1px solid #c2c2c2;
  width: 90%;
  margin: 0 auto;
  display:flex;
  align-items:center;
  color:grey;
  p{
    padding: 0 20px;
  }
`
const Search = styled.input`
  border-right: none;
  border-left: 1px solid #c2c2c2;
  border-bottom:none;
  border-top:none;
  outline: none;
  padding: 10px 35px;
  background-color: inherit;
  width: 80%;
`