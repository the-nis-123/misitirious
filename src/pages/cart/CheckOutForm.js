import styled from 'styled-components';
import PaymentMethods from './PaymentMethods';

const CheckOutForm = ({subtotal, vat }) => {
  let total = Number(vat) + Number(subtotal);

  return (
    <section style={{marginBottom:'4em'}}>
      <h3>Payment details</h3>
      <p> Fill out the form below to complete your order </p>

      <h5>Email address</h5>
      <InputWrapper>
        <Input type='text' placeholder='example@gmail.com'/>
      </InputWrapper>

      <h5>card number</h5>
      <InputWrapper>
        <PaymentMethods />
        <Input type='text' placeholder='****************' style={{flex:'60%'}}/>
        <Input type='text' placeholder='mm/yy' style={{flex:'20%'}}/>
      </InputWrapper>

      <h5>card holder</h5>
      <InputWrapper>
        <Input type='text' placeholder='Jane Doe'/>
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
        <h4>Sub total</h4>
        <p>${subtotal}</p>
      </InputWrapper>

      <InputWrapper>
        <h4>VAT</h4>
        <p>${vat}</p>
      </InputWrapper>

      <InputWrapper>
        <h4>Total</h4>
        <p>${total.toFixed(2)}</p>
      </InputWrapper>

      <Button type='submit' value='Complete Order' />
    </section>
  )
}

export default CheckOutForm;

const InputWrapper = styled.section`
  display:flex;
  justify-content: space-between;
  width: 100%;

  h4,p{
    padding: 0.6em 0;
  }
`
const Input = styled.input`
  border: 1px solid #D8D8D8;
  outline:none;
  width: 100%;
  padding: 1rem 2rem;
  background-color: white;
`


const Button = styled(Input)`
  background-color: black; 
  color: white;
  margin-top: 1em;
  cursor: pointer;
`