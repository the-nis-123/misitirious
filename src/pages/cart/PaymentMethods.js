import styled from 'styled-components';

const PaymentMethods = () => {
  return (
    <Wrapper>
      <option value='visa'> Visa</option>
      <option value='mastercard'> Mastercard</option>
      <option value='paypal'> Paypal</option>
    </Wrapper>
  )
}

export default PaymentMethods;

const Wrapper = styled.select`
  border: 1px solid #D8D8D8;
  outline:none;
  padding: 10px 20px;
  background-color: white;
  flex: 20%;
`