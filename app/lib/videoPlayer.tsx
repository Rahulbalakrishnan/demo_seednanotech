import YouTube from "react-youtube";

interface videoType {
  ht: number;
  wd: number;
}

export default function YoutubePlayer({ ht, wd }: videoType) {
  const videoOptions = {
    width: ht,
    height: wd,
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event: any) => {
    event.target.playVideo();
  };

  return (
    <YouTube videoId="ZMQgFUJ5yu0" opts={videoOptions} onReady={onReady} />
  );
}
