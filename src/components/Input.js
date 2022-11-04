import styled from 'styled-components';

const Input = (props) => {
  return (
    <Wrapper {...props}/>
  )
}

export default Input;

const Wrapper = styled.input`
  display: block;
  padding: 2em;
  width: 100%;
  margin: 0.7em auto;
  border: 1px solid #D8D8D8;
  outline: none;
  border-radius: 3px;

  @media only screen and (min-width: 480px)  {
    padding: 1em 2em;
    width: 80%;
    min-width: 250px;
  }

`