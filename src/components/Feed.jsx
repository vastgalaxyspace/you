import React from 'react'
import { useState,useEffect } from 'react'
import {Box ,Stack,Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar />

        <Typography className="copyright"
        variant="body2"
        sx={{mt:1.5,color:'#fff'}}
        >
          &copy; 2021 Instagram from Facebook
        </Typography>

      </Box>
 <Box p={2} sx={{overflowY:'auto' , height:'90vh', flex:2}}>
  <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}} >
   New<span style={{color:'#f31503'}}>Videos</span>

  </Typography>

  <Videos />
 </Box>
     

      </Stack>
  )
}

export default Feed