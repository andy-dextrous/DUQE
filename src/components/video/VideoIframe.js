import React from "react"

const VideoIframe = ({ video: { url, title }, width, height, ...props }) => (
  <div className="video">
    <iframe
      src={url}
      title={title || "Talking Spaces"}
      width={width}
      height={height}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      {...props}
    />
  </div>
)
export default VideoIframe
