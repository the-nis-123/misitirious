import styled from "styled-components";
import {useState} from 'react';

import SideBar from "./SideBar";
import SearchForm from "./SearchForm";
import Store from "./WholeStore";
import SearchResults from "./SearchResults";

import {
  useGetAllProductsQuery, 
  useGetAllSearchResultsQuery 
} from '../../redux/misitiriousApi';

function StorePage() {
  const { data: products } = useGetAllProductsQuery();
  const [query, setQuery] = useState('');
  const data = useGetAllSearchResultsQuery(query);

  return (
    <PageWrapper>
      <SideBar />
        
      <Wrapper>
        <SearchForm setQuery={setQuery}/>

        <If condition={query}>
          <SearchResultsWrapper>
            <SearchResults data={data}/>
          </SearchResultsWrapper>
        </If>

        <If condition={!query}>
          <WholeStore>
            <Store data={products}/>
          </WholeStore>
        </If>
      </Wrapper>
    </PageWrapper>
  )
}

export default StorePage;

const PageWrapper = styled.div`
  height: calc(100% - 5em);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 0.6em;

  @media only screen and (min-width: 640px)  {
    overflow: hidden;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`

const Wrapper = styled.div`
  padding: 1em 0;

  @media only screen and (min-width: 640px)  {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 0.6em;
  }
`

const SearchResultsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:15px;
`

const WholeStore = styled.div`
  gap:15px;
`