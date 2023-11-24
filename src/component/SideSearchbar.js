import React, { useState } from 'react'
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { experimentalStyled} from '@mui/material/styles'

import FilterListIcon from '@mui/icons-material/FilterList';

const Search = experimentalStyled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 6,
    height:30,
    backgroundColor: '#EDEDED',
     '&:hover': {
        backgroundColor: "#EDEDED",
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
  
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        width: 'auto',
    },

}));

const SearchIconWrapper = experimentalStyled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color:'#6A6B6C',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = experimentalStyled(InputBase)(({ theme }) => ({
    color: 'black',

    fontSize:'0.8rem',
    '& .MuiInputBase-input': {
        padding: theme.spacing(0.9, 0, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

export default function SideBarSearch() {

    const PT = 'Search or start new chat';
    const [placeHolder, setPlaceHolder] = useState(PT);
    const [searchText, setSearchText] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    const onSearchFocus = () => {
        if (searchText === '') {
            setPlaceHolder("");
        }
        setIsFocus(true);
    }

    const onSearchBlur = () => {
        if (searchText === '') {
            setPlaceHolder(PT);
        }
        setIsFocus(false);
    }

    return (
        <Box sx={{ display: "flex", borderLeft: '0px solid gainsboro', borderRightWidth: 'thin', backgroundColor: "#FFFFFF" }}>
           <Box>
        <Search >
                <SearchIconWrapper>
                    {isFocus ? <ArrowBackIcon sx={{fontSize:"1.2rem"}} /> : <SearchIcon sx={{fontSize:"1.1rem"}} />}
                </SearchIconWrapper>
                <StyledInputBase text={searchText} onChange={(e) => setSearchText(e.target.value)}
                    onFocus={onSearchFocus}
                    onBlur={onSearchBlur}
                    placeholder={placeHolder}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
</Box>
            <Box sx={{display:"flex", alignItems:"center", marginRight:'0.5rem'}}>
            <FilterListIcon sx={{fontSize:"1.2rem", color: "#8696A0"}} />
            
            
            </Box>
        </Box>
    )
}