import styled from 'styled-components';

const SearchForm = ({setQuery}) => {
  return (
    <Wrapper>
      <p>search</p>
      < Search onChange={(e)=>setQuery(e.target.value)}/>
    </Wrapper>
  )
}

export default SearchForm;



const Wrapper = styled.div`
  border: 1px solid #cccccc;
  width: 90%;
  margin: 20px auto 0 auto;
  display:flex;
  align-items:center;
  color:grey;
  p{
    padding: 0 20px;
  }
`
const Search = styled.input`
  border-right: none;
  border-left: 1px solid #cccccc;
  border-bottom:none;
  border-top:none;
  outline: none;
  padding: 10px 35px;
  background-color: inherit;
  width: 80%;
`