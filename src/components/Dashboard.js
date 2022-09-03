import { Box } from "@mui/system"
import React from "react"
import Navbar from "./Navbar"
import { Grid, Stack, Typography } from "@mui/material"
import PriceCard from "./PriceCard"
import Chart from "./Chart"
import BarChart from './BarChart'

const Dashboard = () => {
 
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Navbar />
        <Box sx={{ p: 3 }}>
          <Typography paragraph>
            <Typography component="span" sx={{ color: "#9F6CCC" }}>
              Welcome Back,
            </Typography>{" "}
            <Typography component="span" variant="h5">
              Ravi Patel
            </Typography>
          </Typography>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid
              item
              xs={3}
              container
              direction="column"
              justifyContent={"space-around"}
            >
         
                <PriceCard />

             
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  bgcolor: "#2C2C32",
                  borderRadius: "1.2em",
                }}
              >
                <Chart />
              </Box>
            </Grid>
            <Grid item spacing={2} container direction={"column"} xs={3}>
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    bgcolor: "#2C2C32",
                    borderRadius: "1.2em",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Stack>
                    <Typography variant="h6">Total Balance</Typography>
                    <Typography variant="h4">$ 4585563</Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={9}>
             
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    bgcolor: "#2C2C32",
                    borderRadius: "1.2em",
                   
                  }}
                >
                   <Typography variant="h6" textAlign={'left'} padding={4}>Top most</Typography>
                  <Box sx={{
                    display: 'flex',
                    justifyContent:'center'
                }}>

                  
                  <BarChart percentage={85} />
                  <BarChart percentage={15} />
                  <BarChart percentage={70} />
                  <BarChart percentage={45} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard
