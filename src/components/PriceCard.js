import React, {useContext} from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import GlobalContext from "../context/GlobalContext"
import Typography from "@mui/material/Typography"

import { BTC, Light, Ripple, Dash } from "../assets/logo"
import { Grid } from "@mui/material"


const PriceCard = () => {
  const  { assets } = useContext(GlobalContext)
  const Icons = [BTC, Light, Ripple, Dash]
  return (
    <>
    {assets.map((item, index)=> {
      let Icon = Icons[index]
      return (
        <Grid Item sx={{mb:1, '&:last-child': {mb:0}}}>
        <Card key={item.asset_id} sx={{ display: "flex", py:2, px:2 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={5} sx={{textAlign:'center'}}>
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-around' }}>
            <Icon fontSize="large"/> <Typography variant="subtitle1" component={"span"}>{item.name}</Typography>
            </Box>
          </Grid>
          <Grid item xs={7} sx={{textAlign:'right'}}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6">
                  0.000242 BTC
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.price_usd} USD
                </Typography>
              </CardContent>
              
            </Box>
          </Grid>
        </Grid>
      </Card>
      </Grid>)
    })}
      
    </>
  )
}

export default PriceCard
