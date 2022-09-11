import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constant";
function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        ></CardMedia>

        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "105px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/video/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography
              variant="subtitle2"
              sx={{ color: "gray", fontWeight: "bold" }}
            >
              {snippet.channelTitle.slice(0, 60) ||
                demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
}

export default VideoCard;
