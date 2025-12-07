type Props = {
  size?: number;
}

export default function Loader({ size }: Props): JSX.Element {
  return (
    <div className="loader-box">
      <span className="loader" style={size ? { width: `${size}px`, height: `${size}px` } : undefined} ></span>
    </div>
  );
}
