import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/api";
import { Box } from "@mui/system";
import ChannelCard from "../components/ChannelCard";
import Videos from "../components/Videos";

const Chanel = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  console.log(videos);
  useEffect(() => {
    api(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    api(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(7,2,91,1) 0%, rgba(0,183,221,1) 100%)",
          zIndex: 10,
          height: "300px",
        }}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div style={{ transform: "translateY(-100px)" }}>
          <ChannelCard channel={channelDetail} />
        </div>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default Chanel;
