import "./index.css";

export const LOAD_STATUS = {
  PROGRESS: "progress",
  SUCCESS: "success",
  ERROR: "error",
};

export function Alert({ message, status = "default" }) {
  return <div className={`alert alert--${status}`}>{message}</div>;
}

export function Loader() {
  return <div className="loader"></div>;
}

export function Skeleton() {
  return (
    <div className="sceleton">
      <div className="sceleton_item"></div>
      <div className="sceleton_item"></div>
      <div className="sceleton_item"></div>
    </div>
  );
}
