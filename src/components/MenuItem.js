import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import React from 'react'

const MenuItem = ({items}) => {
  return (
    <>
    {items.map((Icon, index)=>{
        return(
        <ListItem key={index} disablePadding sx={{ display: 'block', marginY: 4 }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={"home"} sx={{ opacity: 0 }} />
              </ListItemButton>
              </ListItem>
              )
    })}
        
    </>
  )
}

export default MenuItem