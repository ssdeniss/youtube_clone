import { Box, Stack } from "@mui/system";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((video, index) => (
        <Box key={index}>
          {video?.id?.videoId && <VideoCard video={video} />}
          {video?.id?.channelId && <ChannelCard channel={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
