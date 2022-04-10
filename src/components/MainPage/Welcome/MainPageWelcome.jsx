import React from "react";
import styles from "./MainPageWelcome.module.css";
import cat from "../../../assets/cat-png-17.png";
import LostPetButton from "./Buttons/LostPetButton";
import FoundPetButton from "./Buttons/FoundPetButton";

export default function MainPageWelcome(props) {
  return (
    <div className={styles.welcome}>
      <div className={styles.infoBox}>
        <span className={styles.text}>Welcome to your pawfessional community</span>
        <LostPetButton onSingIn={props.onSingIn}/>
        <FoundPetButton onSingIn={props.onSingIn}/>
      </div>
      <div className={styles.imageBox}>
        <img src={cat} alt="catImg" />
      </div>
    </div>
  );
}
