import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { ChannelCard, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight={"92vh"}>
      <Box>
        <div
          style={{
            height: "200px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop={"-90px"} />
      </Box>
      <Box display={"flex"} p="2">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
