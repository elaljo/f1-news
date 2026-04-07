"use client";

import styles from "./SelectedTeam.module.css";
import type { Team } from "../types";
import { motion } from "framer-motion";

type SelectedTeamProps = {
  team: Team;
  itemIndex?: number;
  delayStep?: number;
  manualDelay?: number;
};

export default function SelectedTeam({
  team,
  itemIndex = 0,
  delayStep = 0.2,
  manualDelay,
}: SelectedTeamProps) {
  const delay = manualDelay ?? itemIndex * delayStep;

  return (
    <motion.div
      className={styles.container}
      style={{ backgroundImage: `url(${team.background})` }}
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
    >
      <div className={styles.leftPlayer}>
        <div className={styles.playerInfo}>
          <span
            className={styles.playerNumber}
            style={{ backgroundImage: `url(${team.leftPlayer.number})` }}
          ></span>
        </div>
        <img
          className={styles.leftPlayerPhoto}
          src={team.leftPlayer.image}
          alt={team.leftPlayer.name}
        />
      </div>
      <div className={styles.rightPlayer}>
        <div className={styles.playerInfo} style={{ justifyContent: "end" }}>
          <span
            className={styles.playerNumber}
            style={{ backgroundImage: `url(${team.rightPlayer.number})` }}
          >
            {" "}
          </span>
        </div>
        <img
          className={styles.rightPlayerPhoto}
          src={team.rightPlayer.image}
          alt={team.rightPlayer.number}
        />
      </div>
    </motion.div>
  );
}