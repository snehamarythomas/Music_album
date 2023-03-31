import SearchList from './SearchList';
import { useAppSelector } from '../../../app/hooks';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const SearchTitle = styled.h2`
text-align: center;
margin-top: 120px; 
color:white;
`;

function Searchbox() {
  const searchList = useAppSelector((state: any) => state.search?.searchData?.results);
  const searchStatus = useAppSelector((state: any) => state.search?.status);

  return (
    <div className="Searchbox">
      <SearchForm />

      {searchList?.length > 0 ? (<SearchList resultList={searchList} />) : ''}
      {searchStatus === "pending" ? (<Stack sx={{ width: '100%', color: 'grey.500', mt: 20 }} spacing={2}>
        <LinearProgress color="inherit" />
      </Stack>) : ''}
      {searchList?.length === 0 ? <SearchTitle>'Sorry, no results found!'</SearchTitle> : ''}  
    </div>
  )
}

export default Searchbox
