import styled from "styled-components";
import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd';
import { Heart } from '@styled-icons/feather/Heart';

const ProductCard = ({image, productName, price}) => {
  return (
    <>
      <If condition={price !== undefined && productName !== undefined}>
        <Wrapper>
          <Image style={{ backgroundImage: `url(${image})` }} />
          <Head>
            <p>product name</p> 
            <Heart size='20px'/>
          </Head>
          <Price>$293.99</Price>

          <BuyIcon>
            <CartAdd size='30px'/>
          </BuyIcon>
        </Wrapper>
      </If>
        
      <If condition={price === undefined || productName === undefined}>
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
  min-height: 250px;
  border-radius: 5px;
  border: solid 1px #ebebeb;
  background-color: white;
  padding: 20px;
 
`
const PosterWrapper = styled(Wrapper)`
  height: 320px;
`

const Image = styled.section`
  height: 60%;
  width: 50%;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: contain;
  background-position: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const PostImage = styled(Image)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position:  0 0;
  position: absolute;
  bottom: 0;
  right: 0;
`

const Price = styled.p`
  position: absolute;
  bottom: 100px; 
  left: 30px;
  font-weight: bold;
  font-size: 1.3em;
`

const Head = styled.section`
 display:flex;
 justify-content: space-between;

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

const BuyIcon = styled.section`
  background-color: #f2f2f2;
  position:absolute;
  bottom: 30px;
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