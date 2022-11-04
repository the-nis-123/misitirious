import styled from 'styled-components';

const AuthForm = ({children, ...props}) => {
  
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

export default AuthForm;

const Wrapper = styled.form`
  margin: 0 auto;
  width: 100%;

  input:last-of-type{
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
  }

  label{
    text-align: center;
    display: block;
    padding: 1em 0;

    span{
      font-weight: bold;
      text-decoration: underline;
      display: inline-block;
      margin: 0 0.5em;

      :hover{
        color: var(--primary-color);
        cursor: pointer;
      }
    }
  }
`