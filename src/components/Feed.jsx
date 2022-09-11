import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Videos, SideBar } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  // console.log(videos);
  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          width: "max-content",
          height: { sx: "auto", md: "92vh " },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          copyright 2022
        </Typography>
      </Box>

      <Box p={2} mb={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} color="white">
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
