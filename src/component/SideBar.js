import React, { useState } from "react";
import { Avatar, Box,  Divider, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SideBarSearch from "./SideSearchbar";
import ConversationList from "./ConversationList";
import SideBarHeader from "./SideBarHeader";
import Chat from "./Chat";


import EditIcon from '@mui/icons-material/Edit';

export default function SideBar() {
  const [isProfileOpen, setProfileOpen] = useState(false);
 
  return (
    <Box sx={{ display: "flex",  }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#ededed",
          width: "400px",
        }}
      >
        {/*display left side content*/}
        <SideBarHeader openProfile={setProfileOpen}  />
        <Divider />
        <SideBarSearch />
        <Divider />
        <ConversationList />
      </Box>

      {/*display right side content*/}
      <Box sx={{width:"100%"}}>
        <Chat />
        
      </Box>
      {isProfileOpen && (
        <Box
          boxShadow={2}
          zIndex="tooltip"
          position="absolute"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100% - 38px)",
            backgroundColor: "#ededed",
            width: "390px",
          }}
        >
          <Box
            pt={7.6}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#008069",
            }}
          >
            <Box
              sx={{
                ml: 2,
                marginTop: "auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton onClick={() => setProfileOpen(false)}>
                <ArrowBackIcon sx={{ color: "#ffffff" }} />
              </IconButton>
              <Typography
                component="h1"
                color="#ffffff"
                sx={{ fontSize: "16px", marginTop: "0.6rem", marginLeft: "20px" , fontWeight:"600"}}
              >
                Profile 
              </Typography>
            </Box>

            
          </Box>
          <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", p:"1.5rem"}}>
            <Avatar sx={{ width: 185, height: 185 }} src="bg.png"/>
            </Box>

            <Box sx={{ backgroundColor:"white", height:"11%"}}>
          <Box>
          <Typography
                component="h1"
                
                sx={{ fontSize: "0.80rem", marginTop: "7px", marginLeft: "20px",  color:"#008069"}}
              >
                Your name
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                component="h1"
                sx={{ fontSize: "0.80rem", marginTop: "7px", marginLeft: "20px", color: "gray", flex: 1 }}
              >
                Raees Ali
              </Typography>
              <IconButton sx={{mr:"1.4rem"}}>
                <EditIcon sx={{fontSize:"1.2rem"}} />
              </IconButton>
            </Box>
          </Box>

            
            </Box>

            <Box sx={{ height:"11%"}}>
            <Box>
            <Typography
                  component="h1"
                  
                  sx={{ fontSize: "0.80rem", marginTop: "7px", marginLeft: "20px",  color:"gray", fontFamily:"sans-serif"}}
                >
                This is not your username or pin. This name will be visible to your WhatsApp contacts
                </Typography>
               
            </Box>
  
              
              </Box>
              
            <Box sx={{ backgroundColor:"white", height:"11%"}}>
           
            <Box>
            <Typography
                  component="h1"
                  
                  sx={{ fontSize: "0.80rem", marginTop: "7px", marginLeft: "20px",  color:"#008069"}}
                >
                  About
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        component="h1"
        sx={{ fontSize: "0.80rem", marginTop: "7px", marginLeft: "20px", color: "gray", flex: 1 }}
      >
        Available
      </Typography>
      <IconButton sx={{mr:"1.4rem"}}>
        <EditIcon sx={{fontSize:"1.2rem"}} />
      </IconButton>
    </Box>
            </Box>
  
              
              </Box>
        </Box>
      )}
    </Box>
  );
}
