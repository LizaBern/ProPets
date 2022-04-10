import React from "react";
import styles from './FoundPetButton.module.css'

export default function FoundPetButton(props) {
    return <button className={styles.FoundPetButton} onClick={props.onSingIn}>
        I found a pet!
    </button>
}