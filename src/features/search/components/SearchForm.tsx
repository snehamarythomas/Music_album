import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { getSearch } from '../searchSlice';
import { useAppDispatch } from '../../../app/hooks';
function SearchForm() {
  const dispatch = useAppDispatch();

  const [inputText, setinputText] = useState('');
  const onFormSubmit=(e:any) => { 
    e.preventDefault();
    dispatch(getSearch(inputText)); 
  }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', mb: '15px', mt: '20px', ml: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 600 }}
      onSubmit={onFormSubmit}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        data-testid="Search"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" data-testid="Search-button" >
        <SearchIcon />
      </IconButton>
      <IconButton type='button' onClick={() => setinputText("")}>
        <CloseIcon sx={{ height: 28, m: 0.5, cursor: 'pointer' }} orientation="vertical" />

      </IconButton>
    </Paper>
  )
}
export default SearchForm
