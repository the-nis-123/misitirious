import styled from 'styled-components';

const SideBar = () => {
  
  return (
    <Wrapper>
     
    </Wrapper>
  )
}

export default SideBar;


const Wrapper = styled.div`
  display: none;

  @media only screen and (min-width: 640px)  {
    display: block;
    background-color: white;
    min-width: 300px;
    overflow-y:auto;
    overflow-x: hidden;

    input{
      margin-right: 10px;
      border:none;
      outline:none;

      :checked{
        background-color: black;
      }
    }

    label{
      color: 	#606060;
      text-transform: capitalize;
      font-size: 0.8rem;
    }
  }
`