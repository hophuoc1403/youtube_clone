import { useState, useEffect } from "react";
import { Box, Typography, useAutocomplete } from "@mui/material";

import { Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    // setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  // console.log(videos);
  return (
    <Box p={2} mb={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} color="white">
        Search result for :{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
