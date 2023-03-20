
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import SearchList from './SearchList';
import './SearchBox.css';
import { getSearch } from '../searchSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

function Searchbox() {

  const dispatch = useAppDispatch();
  const searchList = useAppSelector((state: any) => state.search?.searchData?.results);
  const searchStatus = useAppSelector((state: any) => state.search?.status);

  const [inputText, setinputText] = useState('')


  return (


    <div className="Searchbox">
      <Paper
        component="form"
        sx={{ p: '2px 4px', mb: '15px', mt: '20px', ml: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 600 }}
      >

        <IconButton sx={{ p: '10px' }} aria-label="menu">
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          value={inputText}
          onChange={(e) => setinputText(e.target.value)}
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => {
          dispatch(getSearch(inputText));
        }}>
          <SearchIcon />
        </IconButton>
        <CloseIcon sx={{ height: 28, m: 0.5, cursor: 'pointer' }} orientation="vertical" onClick={() => setinputText("")} />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        </IconButton>



      </Paper>


      {searchList?.length > 0 ? (<SearchList resultList={searchList} inputValue={inputText} />) : ''}
      {searchStatus === "pending" ? (<Stack sx={{ width: '100%', color: 'grey.500', mt: 20 }} spacing={2}>
        <LinearProgress color="inherit" />
      </Stack>) : ''}


      {searchList?.length === 0 ? <h2 className='noResult'>'Sorry, no results found!'</h2> : ''}



    </div>


  )
}

export default Searchbox
