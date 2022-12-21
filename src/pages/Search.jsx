import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "../components/Videos";
import { api } from "../utils/api";
import { useParams } from "react-router-dom";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    api(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "#FFFFFF" }}
      >
        Search results for :
        <span style={{ color: "#E62117", marginLeft: "10px" }}>
          {searchTerm}
        </span>
        <div> videos</div>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Search;
