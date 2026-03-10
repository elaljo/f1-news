import styles from "./SelectedTeam.module.css";
import type { Team } from "../types"

type SelectedTeamProps = {
    team: Team;
}

export default function SelectedTeam({team}: SelectedTeamProps) {
  return (
    <div className={styles.container} style={{backgroundImage: `url(${team.background})`}}>
        <div className={styles.leftPlayer}>
            <div className={styles.playerInfo}>
                <span className={styles.playerNumber} style={{ backgroundImage: `url(${team.leftPlayer.number})` }}></span>
            </div>
            <img className={styles.leftPlayerPhoto} src={team.leftPlayer.image} alt={team.leftPlayer.name} />
        </div>
        <div className={styles.rightPlayer}>
            <div className={styles.playerInfo} style={{justifyContent: "end"}}>
                <span className={styles.playerNumber} style={{ backgroundImage: `url(${team.rightPlayer.number})`}}> </span>
            </div>
            <img className={styles.rightPlayerPhoto} src={team.rightPlayer.image} alt={team.rightPlayer.number} />
        </div>
    </div>
  );
}