import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper> 
      <h3>404 Not Found!</h3>
    </Wrapper>
  )
}

export default NotFound;


const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow:hidden;
  display:grid;
  place-items:center;
`