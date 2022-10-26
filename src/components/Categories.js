import styled from "styled-components";
import Card from "./Card";
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';


const Categories = () => {
  return (
    <Wrapper>
      <Card />
      <Card/>
      <Card/>
      <Card/>
    </Wrapper>
  )
}

export default Categories;

const Wrapper = styled.section`
  width: 100%;
  height: 100px;
  display:flex;
  gap: 20px;
`;