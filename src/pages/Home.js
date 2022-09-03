import { Box } from "@mui/material"
import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from "../components/Dashboard"
import Loader from "../components/Loader"
import GlobalContext from "../context/GlobalContext"

const Home = () => {
  const  { assetsLoaded } = useContext(GlobalContext)
  return (
    <>
    <Box sx={{ display: "flex" }}>
        <Sidebar/>
{assetsLoaded ? <Dashboard /> : <Loader />}

        </Box>
    </>
  )
}

export default Home