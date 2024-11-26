export default function Video(
  src: string | undefined,
  width: string | undefined,
  height: string | undefined
) {
  return (
    <video width={width} height={height} controls preload="none">
      <source src={src} type="video/mp4" />
      <track src={src} kind="subtitles" srcLang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  );
}
