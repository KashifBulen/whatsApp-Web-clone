import React from "react";

import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

import { Box, Typography } from "@mui/material";

const data = [
  {
    name: "Person",
    time: "12:00 PM",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    time: "12:00 PM",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    time: "12:00 PM",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    time: "12:00 PM",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    time: "12:00 PM",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    time: "12:00 PM",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    time: "12:00 PM",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    time: "12:00 PM",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",
    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
  {
    name: "Person",

    phone: "03462278394",
    text: "I'll be in the neighbourhood this week.",
    person: "/user.jpg",
  },
];

export default function ConversationList() {
  return (
    <List
      sx={{
        backgroundColor: "white",
        mb: 0,
        overflow: "auto",
        borderRight: "5px solid gainsboro",
        borderRightWidth: "thin",
        height: "470px",
        
      }}
    >
      {data.map((d, index) => (
        <Box key={d.phone}>
          <ListItem button selected={index === 3}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={d.person} />
            </ListItemAvatar>
            <ListItemText
              primary={d.name === "" ? d.phone : d.name}
              secondary={
                <Tooltip
                  id={d.phone}
                  sx={{ maxWidth: "20rem" }}
                  placement="bottom"
                  enterDelay={1000}
                  title={d.text}
                >
                  <Box
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "15rem",
                    }}
                  >
                    <Typography
                      noWrap
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {d.text}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        padding: "1rem",
                        fontSize: "0.7rem",
                      }}
                    >
                      {d.time}
                    </Typography>
                  </Box>
                </Tooltip>
              }
            />
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
