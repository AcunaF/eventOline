interface VideoPlayerProps {
  src: string;
}

export const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <div>
      {/* <video width="100%" height="auto" controls>
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la etiqueta video.
      </video> */}
    </div>
  );
};
