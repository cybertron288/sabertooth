import React from "react"
import { styled } from "@mui/material/styles"
import MuiDrawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import CssBaseline from "@mui/material/CssBaseline"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded"
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded"
import HelpRoundedIcon from "@mui/icons-material/HelpRounded"
import MenuItem from "./MenuItem"

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})



const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...{
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  },
}))

const Sidebar = () => {
  return (
    <>
      <CssBaseline />

      <Drawer variant="permanent">
        <List sx={{marginTop : {sx: 0, sm:8 }}}>
          <MenuItem items={Icons} />
        </List>
      </Drawer>
     
    </>
  )
}

export default Sidebar

const Home = () => <HomeRoundedIcon />

const Dashboard = () => <ViewQuiltRoundedIcon />

const Setting = () => <SettingsRoundedIcon />

const Info = () => <HelpRoundedIcon />

const Icons = [Home, Dashboard, Setting, Info]
