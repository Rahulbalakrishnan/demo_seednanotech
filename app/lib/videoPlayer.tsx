import YouTube from "react-youtube";

interface videoType {
  ht: number;
  wd: number;
}

export default function YoutubePlayer({ ht, wd }: videoType) {
  const videoOptions = {
    width: wd,
    height: ht,
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  const onReady = (event: any) => {
    event.target.playVideo();
  };

  return (
    <YouTube videoId="ZMQgFUJ5yu0" opts={videoOptions} onReady={onReady} />
  );
}
