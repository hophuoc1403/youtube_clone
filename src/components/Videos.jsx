import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

function Videos({ videos, direction }) {
  if (!videos?.length) return "loading....";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={"space-around"}
      gap={2}
    >
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
}

export default Videos;
