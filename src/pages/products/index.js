import styled from "styled-components";
import {useState} from 'react';
import PageContainer from "./PageContainer";
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
    <PageContainer>
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
    </PageContainer>
  )
}

export default StorePage;

const SearchResultsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:15px;
`

const WholeStore = styled.div`
  gap:15px;
`