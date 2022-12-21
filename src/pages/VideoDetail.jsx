import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { api } from "../utils/api";
import { Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "../components/Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    api(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data)
    );
    api(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  console.log(videoDetail?.items[0]);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography variant="h5" fontWeight="bold" p="20px">
              {videoDetail?.items[0]?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" py={1} px={2}>
              <Link
                to={`/channel/${videoDetail?.items[0]?.snippet?.channelId}`}
              >
                <Typography
                  color="#fff"
                  variant={{ sm: "subtitle1", md: "h6" }}
                >
                  {videoDetail?.items[0]?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }} color="#fff">
                  {parseInt(
                    videoDetail?.items[0]?.statistics?.viewCount
                  ).toLocaleString() + " "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }} color="#fff">
                  {parseInt(
                    videoDetail?.items[0]?.statistics?.likeCount
                  ).toLocaleString() + " "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default VideoDetail;
