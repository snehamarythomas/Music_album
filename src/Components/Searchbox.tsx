import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react';
import { $CombinedState } from 'redux';
import axios from 'axios';
import SearchList from './SearchList';
import './Searchbox.css';


import { sliderClasses } from '@mui/material';

function Searchbox() {
  const [list,setlist] = useState<any>([])
  const [inputText,setinputText] = useState('')
  const [noResults,setnoResults] = useState(false)
  
  return (
    <div className = "Searchbox">   
     <Paper 
      component="form"
      sx={{ p: '2px 4px', mb: '15px', mt: '20px',ml: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 600 }}
    >
      
      <IconButton sx={{ p: '10px' }} aria-label="menu">    
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        value={inputText}
        onChange = {(e)=>setinputText(e.target.value)}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={()=>{
        axios.get('https://itunes.apple.com/search?term='+inputText+'&limit=20').then((response)=>{
          setlist(response.data.results)
         if(response.data.results.length===0){
          setnoResults(true) 
         }
         else{
          setnoResults(false) 
         }
           
          
        console.log(response.data.results);  
        })  

      }}>
        <SearchIcon/>
      </IconButton>
      <CloseIcon sx={{ height: 28, m: 0.5 }} orientation="vertical" onClick={() => setinputText("")}/> 
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">     
      </IconButton>

      
      
    </Paper>


    {list.length> 0 ? ( <SearchList resultList={list} inputValue={inputText}/>): ''} 

    {noResults ? <h2 className='noResult'>'Sorry, no results found!'</h2> :''}
      
   
       
  </div>
  )
}

export default Searchbox
