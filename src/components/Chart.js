// import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { Box, Grid, Typography } from "@mui/material"
import DatePickerCom from "./Datepicker"

import React from "react"
import MainChart from "./MainChart"


const Chart = () => {
  return (
    <>
      <Grid container width={"100%"} height={"100%"} direction="column">
        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          paddingX={4}
          xs={2}
          
        >
          <Grid item>
            <Typography variant="h6">
            Statistics
            </Typography>
            </Grid>
          <Grid item>
            <DatePickerCom />
          </Grid>
        </Grid>
        <Grid item xs={10} >
          <Box sx={{height:'100%'}}>
          <MainChart />
          </Box>
        
        </Grid>
      </Grid>
    </>
  )
}

export default Chart
