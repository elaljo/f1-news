import styles from "./SelectedTeam.module.css";
export default function SelectedTeam() {
  return (
    <div className={styles.container}>
        <div className={styles.leftPlayer}>
            <div className={styles.playerInfo}>
                <span className={styles.playerNumber} style={{ backgroundImage: "url('/SelectedTeam/Ferrari/LeclercNumber.avif')" }}></span>
            </div>
            <img className={styles.leftPlayerPhoto} src="/SelectedTeam/Ferrari/CharlesLeclerc.avif" alt="Charles Leclerc Photo" />
        </div>
        <div className={styles.rightPlayer}>
            <div className={styles.playerInfo} style={{justifyContent: "end"}}>
                <span className={styles.playerNumber} style={{ backgroundImage: "url('/SelectedTeam/Ferrari/HamiltonNumber.avif')"}}> </span>
            </div>
            <img className={styles.rightPlayerPhoto} src="/SelectedTeam/Ferrari/LewisHamilton.avif" alt="Lewis Hamilton Photo" />
        </div>
    </div>
  );
}