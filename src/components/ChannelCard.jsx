import { CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../constants/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channel }) => {
  return (
    <Box
      sx={{
        width: { md: "400px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "20px",
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channel?.snippet?.title}
            sx={{
              height: "180px",
              width: "180px",
              backgroundSize: "cover",
              borderRadius: "50%",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: 18, ml: "5px", transform: "translateY(5px)" }}
            />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography variant="">
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
