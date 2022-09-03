import { Grid, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import { DatePicker } from "@mui/x-date-pickers"
import { Box } from "@mui/system"

const DatePickerCom = () => {
  const [firstDate, setFirstDate] = useState(new Date())
  const [secondDate, setSecondDate] = useState(new Date())
  return (
    <>
      <Grid container justifyContent={"center"} alignItems="center" spacing={2}>
        <Grid item>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle1" mr={2}>From</Typography>
            <DatePicker
              value={firstDate}
              components={{
                OpenPickerIcon: KeyboardArrowDownOutlinedIcon,
              }}
              onChange={(newValue) => {
                setFirstDate(newValue)
              }}
              renderInput={(props) => <TextField size="small" {...props} />}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography  variant="subtitle1" mr={2}>to</Typography>

            <DatePicker
              value={secondDate}
              components={{
                OpenPickerIcon: KeyboardArrowDownOutlinedIcon,
              }}
              onChange={(newValue) => {
                setSecondDate(newValue)
              }}
              renderInput={(props) => <TextField size="small" {...props} />}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default DatePickerCom
