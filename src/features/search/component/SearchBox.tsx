import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { $CombinedState } from 'redux';
import axios from 'axios';
import SearchList from './SearchList';
import './SearchBox.css';
// import {useSelector,useDispatch} from 'react-redux';
import { getSearch } from '../searchSlice';
import { sliderClasses } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';



function Searchbox() {

  const dispatch = useAppDispatch();
  const searchList = useAppSelector((state: any) => state.search?.searchData?.results);
  const searchStatus = useAppSelector((state: any) => state.search?.status);


  // const [list, setlist] = useState<any>([])
  const [inputText, setinputText] = useState('')
  // const [noResults, setnoResults] = useState(false) 


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
      {searchStatus === "pending" ? (<Box sx={{ width: '100%', mt:20 }}>
        <LinearProgress />
      </Box>) : ''}


      {searchList?.length === 0 ? <h2 className='noResult'>'Sorry, no results found!'</h2> : ''}



    </div>


  )
}

export default Searchbox
