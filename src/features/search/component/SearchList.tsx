
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './SearchList.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import MusicData from '../../../models/dataModel';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

interface SearchList {
}


function SearchList(props: any) {
  const [loading, setloading] = useState(10);
  const fetchMoreData = () => {
    setTimeout(() => {
      setloading(loading + 10);
    }, 1000)
  }
  return (
    <InfiniteScroll
      dataLength={loading}
      next={fetchMoreData}
      hasMore={loading<props.resultList.length}
      loader={<h4>Loading...</h4>}
    >
      <div className='cards'>

        {props.resultList.slice(0, loading).map((obj: MusicData) => {
          return (


            <div className='dataListing'>
              <List key={obj.trackId}>
                <a href={obj.previewUrl} >
                  <img src={obj.artworkUrl100} className='images' /> 
                </a>

                <ListItem disablePadding>    <ListItemText sx={{ color:'white' }} primary={obj.artistName} className='artistNames' /></ListItem>

                <ListItem disablePadding >    <ListItemText sx={{ color:'white' }} primary={obj.kind} className='kinds' /></ListItem>

                <a href={obj.previewUrl}  ><PlayCircleOutlineIcon sx={{ fontSize: "50px"  }} className='playButton'/></a>

              </List>



            </div>

          )
        })}


      </div>
    </InfiniteScroll>
  )
}

export default SearchList
