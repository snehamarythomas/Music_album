import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import MusicData from '../../../types/MusicData';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import styled from 'styled-components'; 

const DataContainer = styled.div`
    overflow-y: auto;  
    border: 3px solid #45486c;
    width: 225px;
    min-height:270x;
    margin-bottom: 15px;
    height:285px;
    background-color: #45486c;
    border-radius: 25px;
    font-family:  cursive;
    overflow: hidden;
    font-weight: 600;
    &:hover{
      background-color: #31334d;
    }
`;

const Cards = styled.div`
display: flex;
align-items: center;
justify-content:space-evenly;
flex-wrap: wrap;
overflow-y: auto;
    }
`;

const CardImage = styled.img`
width: 225px;
height:130px;
    }
`;
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
      hasMore={loading < props.resultList.length}
      loader={<h4>Loading...</h4>}
    >
      <Cards>

        {props.resultList.slice(0, loading).map((obj: MusicData) => {
          return (
            <DataContainer>
              <List key={obj.trackId}>
                <a href={obj.previewUrl} >
                  <CardImage src={obj.artworkUrl100} />
                </a>

                <ListItem disablePadding>    <ListItemText sx={{color:'white', textAlign:'center', fontFamily: 'cursive', fontWeight: 600}} primary={obj.artistName} /></ListItem>

                <ListItem disablePadding >    <ListItemText sx={{color:'white', textAlign:'center', fontFamily: 'cursive', fontWeight: 600}} primary={obj.kind} /></ListItem>

                <a href={obj.previewUrl}  ><PlayCircleOutlineIcon sx={{ fontSize: "50px", color: 'black', alignItems: 'center', bottom: "5px", fontWeight: 600, ml: "88px", mt: "5px" }} className='playButton' /></a>

              </List>
            </DataContainer>

          )
        })}
      </Cards>
    </InfiniteScroll>
  )
}

export default SearchList
