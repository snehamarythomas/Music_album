import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './SearchList.css';

interface SearchList{
}


function SearchList(props:any) {

  return (
    <div className='cards'>
    {props.resultList.map((obj:any)=>{
      return(

        
        <div className='dataListing'>
          <List  key={obj.trackId}>
          <a href={obj.previewUrl} >
          <img src={obj.artworkUrl100} className='images' />
          </a>
            
            <ListItem disablePadding>    <ListItemText primary={obj.artistName} className='artistNames'/></ListItem> 
            
            <ListItem disablePadding >    <ListItemText primary={obj.kind} className='kinds'/></ListItem>
           
            <a href={obj.previewUrl} className='links'><ListItem  disablePadding>   <ListItemText className='links' primary='Play in full screen'/></ListItem></a>
 
          </List> 


       
        </div>
        
       ) })}  
   
  
        </div>
  )
}

export default SearchList
