import React from "react";
import styles from './LostPetButton.module.css'
import serch from '../../../../assets/loop.png'

export default function LostPetButton(props) {
    return <>
     <button className={styles.LostPetButton} onClick={props.onSingIn}>
        I lost my pet!
    </button>
    <img src={serch} alt="img"  className={styles.loop}/>
    </>
}