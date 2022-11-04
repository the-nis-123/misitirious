import styled from 'styled-components';

const Input = (props) => {
  return (
    <Wrapper {...props}/>
  )
}

export default Input;

const Wrapper = styled.input`
  display: block;
  padding: 1em 2em;
  margin: 0.7em auto;
  border: 1px solid #D8D8D8;
  outline: none;
  border-radius: 3px;
  width: 80%;
  min-width: 250px;
`