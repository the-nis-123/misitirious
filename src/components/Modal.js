import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { closeModal } from '../redux/features/authModalSlice';

const Modal = ({children, title}) => {
  const dispatch = useDispatch();

  const handleCloseModal = (e)=>{
    e.stopPropagation();
    dispatch(closeModal());
  }

  return (
    <Overlay>
      <Wrapper>
        <Close onClick={handleCloseModal}>
          <strong>X</strong>
        </Close>

        <section>
          <h2>MISITIRIOUS</h2>
          <h4>{title}</h4>
        </section>

        {children}

        <section>

        </section>
      </Wrapper>
    </Overlay>
  )
}

export default Modal;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  place-items: center;
  background-color: rgba(0,0,0, 0.5);
`

const Wrapper = styled.div`
  position: sticky;
  top: 2em;
  width: 95%;
  max-height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  border: 1px solid grey;
  padding: 2em;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  
  -ms-overflow-style: none; 
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  h2{
    color: var(--primary-color);
    text-align: center;
  }

  h4{
    text-align: center;
    padding: 1em;
  }

  @media only screen and (min-width: 480px)  {
    width: 70%;
  }

  @media only screen and (min-width: 640px)  {
    max-width: 500px;
  }
`

const Close = styled.div`
  width: 2.2em;
  height: 2.2em;
  border-radius: 50%;
  padding: 0.5em;
  display: grid;
  place-items: center;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  background-color: var(--main-background-color);


  :hover{
    cursor: pointer;
    background-color: #c2c2c2;
    color: white;
  }
`