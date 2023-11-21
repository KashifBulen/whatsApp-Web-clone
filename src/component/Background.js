import { experimentalStyled } from '@mui/material'
import React from 'react'



const MultiColoredDiv = experimentalStyled('div')(
    ({ theme }) => ({
        background: 'linear-gradient(to bottom, #00A884 0%, #00A884 13%, #F0F2F5 3%, #F0F2F5 100%)',
         display: 'flex',
        height: '100%',
        width: '100%',
    })
);
export default function Background(props) {
    return (
        <MultiColoredDiv>
            {props.children}
        </MultiColoredDiv>
    )
}
