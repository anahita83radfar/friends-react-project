import React from "react";
import styles from "../styles/Avatar.module.css";

// The code taken from the Code Institute moments project
const Avatar = ({ src, heigth = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={heigth}
        width={heigth}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;
