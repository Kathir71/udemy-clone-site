import styles from "../styles/Loaders.module.css";
import { RotatingSquare } from "react-loader-spinner";
export const TrinitySpinner = () => {
    return (
        <div className={styles.container}>
  <svg viewBox="0 0 100 100">
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
          flood-color="#fc6767"/>
      </filter>
    </defs>
    {/* <circle id="spinner" className={styles.spinner} style={{fill:transparent,stroke:#dd2476,stroke-width: 7px,stroke-linecap: round,filter:url(#shadow)," cx="50" cy="50" r="45"}}/> */}
</svg>
</div>
    )
}
export const CircularSpinner = () => {
  return(
    <div className={styles.loader}></div>
  )
}
export const DualSpinner = () => {
  return (
    <div className={styles.ldsDualRing}></div>
  )
}

export const SquareSpinner = () => {
  return (
  <RotatingSquare
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="rotating-square-loading"
  strokeWidth="4"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  )
};