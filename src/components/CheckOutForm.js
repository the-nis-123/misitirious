import styled from 'styled-components';

const CheckOutForm = () => {
  return (
    <Column>
      <h3>Payment details</h3>
      <p> Fill out the form below to complete your order </p>

      <h5>Email address</h5>
      <InputWrapper>
        <Input type='text' placeholder='example@gmail.com'/>
      </InputWrapper>

      <h5>card number</h5>
      <InputWrapper>
        <Input type='text' placeholder='VIZA'/>
        <Input type='text' placeholder='' style={{width:'150px'}}/>
        <Input type='text' placeholder='mm/yy'/>
      </InputWrapper>

      <h5>card holder</h5>
      <InputWrapper>
        <Input type='text' placeholder='example@gmail.com'/>
      </InputWrapper>

      <h5>billing address</h5>
      <div>
        <InputWrapper>
          <Input/>
        </InputWrapper>
        <InputWrapper>
          <Input type='text' placeholder='City'/>
          <Input type='text' placeholder='street'/>
        </InputWrapper>
      </div>

      <InputWrapper>
        <Input type='text' placeholder='City'/>
        <Input type='text' placeholder='street'/>
      </InputWrapper>

      <InputWrapper>
        <h4>Sub total</h4>
        <p>$</p>
      </InputWrapper>

      <InputWrapper>
        <h4>VAT</h4>
        <p>$</p>
      </InputWrapper>

      <InputWrapper>
        <h4>Total</h4>
        <p>$</p>
      </InputWrapper>

      <Input type='submit' value='Complete Order' style={{
          backgroundColor:'black', 
          color:'white',
          marginTop:'20px',
          cursor:'pointer'
        }}
      />
    </Column>
  )
}

export default CheckOutForm;

const Column = styled.div`
  background-color:inherit;
  width: 50%;
  padding: 20px;
  h5{
    margin-top: 10px;
    padding: 5px 0;
  }
`

const InputWrapper = styled.section`
  display:flex;
  justify-content: space-between;
  width: 100%;

  h4,p{
    padding: 10px 0;
  }
`
const Input = styled.input`
  border: 1px solid #c2c2c2;
  outline:none;
  width: 100%;
  padding: 10px 20px;
  background-color: white;
`