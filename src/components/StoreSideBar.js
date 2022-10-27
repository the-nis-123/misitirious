import styled from 'styled-components';
import SideBarSectionWrapper from './SideBarSectionWrapper';

const StoreSideBar = () => {
  const products = [
    {name:"Apparel", label:"Apparel"},
    {label:"Footware", name:'footware'},
    {label:"Beauty, Fragrance and Cosmetics", name:'beauty'},
    {label:"Accessories"},
    {label:"Jewellery"}
  ]
  
  const price = [
    {name:'a', price:'$50 - $100'}, 
    {name:'b', price:'100 - $250'}, 
    {name:'c', price:'$250 - $600'},
    {name:'d', price:'$600  - $1000'},
    {name:'e', price:'1000+'}
  ];
  
  const brands = ['gucci', 'louis vuitton', 'polo', 'dior', 'givenchy', 'fend', 'tom ford'];
  const categories = ['kids', 'boys', 'girls', 'men', 'women'];

  return (
    <SideBar>
      <SideBarSectionWrapper title='Products'>
        <For each='item' of={products}>
          <Input label={item.label} key={item.name} name={item.name}/>
        </For>
      </SideBarSectionWrapper>

      <SideBarSectionWrapper title='Price'>
        <For each='item' of={price}>
          <Input label={item.price} key={item.name} name={item.name}/>
        </For>
      </SideBarSectionWrapper>

      <SideBarSectionWrapper title='Categories'>
        <For each='item' of={categories}>
          <Input label={item} key={item} name={item}/>
        </For>
      </SideBarSectionWrapper>

      <SideBarSectionWrapper title='Partner Brands'>
        <For each='item' of={brands}>
          <Input label={item} key={item} name={item}/>
        </For>
      </SideBarSectionWrapper>
    </SideBar>
  )
}

export default StoreSideBar;

const Input = ({name,label}) => {
  return(
    <section>
      <input type="checkbox" name={name} value={name} />
      <label htmlFor={name}>{label}</label>
    </section>
  )
}

const SideBar = styled.div`
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
`