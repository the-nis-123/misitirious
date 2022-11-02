import styled from "styled-components";
import {useState} from 'react';

import StoreSideBar from "../components/StoreSideBar";
import SearchForm from "../components/SearchForm";
import Store from "../components/WholeStore";
import SearchResults from "../components/SearchResults";

import {
  useGetAllProductsQuery, 
  useGetAllSearchResultsQuery 
} from '../redux/misitiriousApi';

function StorePage() {
  const { data: products } = useGetAllProductsQuery();
  const [query, setQuery] = useState('');
  const data = useGetAllSearchResultsQuery(query);

  return (
    <PageWrapper>
      {/* <StoreSideBar /> */}
        
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
  height: calc(100% - 6em);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 10px;
`

const Wrapper = styled.div`
  padding: 10px 0;
  overflow:hidden;
`

const SearchResultsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:15px;
`

const WholeStore = styled.div`
  gap:15px;
`