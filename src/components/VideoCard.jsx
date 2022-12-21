import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../constants/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "400px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: 180, backgroundSize: "cover" }}
        />
      </Link>
      <CardContent sx={{ background: "#252525", height: 100 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            {snippet?.title?.length > 60 && <>...</>}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/chanel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="#808080">
            {snippet?.channelTitile?.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            {snippet?.channelTitile?.length > 60 && <>...</>}
            <CheckCircle
              sx={{ fontSize: 12, ml: "5px", transform: "translateY(2px)" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
