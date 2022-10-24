import styled from "styled-components";
import {useState} from 'react';

import StoreSideBar from "../components/StoreSideBar";
import SearchForm from "../components/SearchForm";
import Store from "../components/Store";
import SearchResults from "../components/SearchResults";

import {useGetAllProductsQuery, useGetAllSearchResultsQuery } from '../redux/misitiriousApi';

function StorePage() {
  const { data: products } = useGetAllProductsQuery();
  const [query, setQuery] = useState('');
  const data = useGetAllSearchResultsQuery(query);

  return (
    <PageWrapper>
      <StoreSideBar />
        
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

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
  'search search search search search search'
  'main main main main main main';

  padding: 10px 0;
  overflow-y:auto;
  overflow-x:hidden;
`


const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: inherit;
  height: calc(100vh - 70px);
  width: 100%;
  overflow: hidden;
`

const SearchResultsWrapper = styled.div`
  display: grid;
  grid-area:main;
  grid-template-columns: repeat(3, 1fr);
  background-color: inherit;
  width: 100%;
  gap:15px;
  padding: 0 20px;
`

const WholeStore = styled.div`
  grid-template-areas:
  'quick quick quick quick quick quick'
  'poster poster poster poster poster poster'
  'main main main main main main'
  'pagination pagination pagination pagination pagination pagination';
  display: grid;
  grid-area:main;
  grid-template-columns: repeat(3, 1fr);
  background-color: inherit;
  width: 100%;
  gap:15px;
  padding: 0 20px;
`