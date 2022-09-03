import { CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from 'react'

const Loader = () => {
  return (
    <>
        <Box sx={{ display: 'flex', flexDirection:'column', width:'100%', height:'100vh', alignItems:'center', justifyContent:'center' }}>
      <CircularProgress />
      <Typography variant="h6" mt={2} color={'primary'}>Loading...</Typography>
    </Box>
    </>
  )
}

export default Loader