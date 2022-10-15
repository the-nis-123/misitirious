import styled from "styled-components";
import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd';
import { Heart } from '@styled-icons/feather/Heart';

const ProductCard = ({image, name, price}) => {
  return (
    <>
      <If condition={price !== undefined && name !== undefined}>
        <Wrapper>
          <FlexContainer>
            <p>{ name }</p> 
            <Heart size='20px'/>
          </FlexContainer>

          <Image style={{ backgroundImage: `url(${image})` }} />
          <FlexContainer>
            <BuyIcon>
              <CartAdd size='30px'/>
            </BuyIcon>

            <Price>$293.99</Price>
          </FlexContainer>
        </Wrapper>
      </If>
        
      <If condition={price === undefined || name === undefined}>
        <PosterWrapper>
          <PostImage  style={{ backgroundImage: `url(${image})` }} />
        </PosterWrapper>
      </If>
    </>
  )
}

export default ProductCard;

const Wrapper = styled.div`
  margin-top: 20px;
  vertical-align: middle;
  position: relative;
  width: auto;
  min-height: 350px;
  border-radius: 5px;
  background-color: white;
  padding: 0 20px;
 
`
const PosterWrapper = styled(Wrapper)`
  height: 320px;
`

const Image = styled.div`
  height: 60%;
  width: 100%;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: contain;
  background-position: center;
`

const PostImage = styled(Image)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position:  center;
  position: absolute;
  bottom: 0;
  right: 0;
`

const Price = styled.p`
  font-weight: bold;
  font-size: 1.3em;
`

const FlexContainer = styled.div`
 display:flex;
 justify-content: space-between;
 align-items:center;
 padding: 20px 0;

 p{
  text-transform: capitalize;
 }

 svg{
    :hover{
      cursor:pointer;
      color: red;
    }
 }
`

const BuyIcon = styled.div`
  background-color: #f2f2f2;
  width:50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  svg{
    color: #9d6262;
  }

  :hover{
    cursor:pointer;
    svg{
      color: red;
    }
  }
`