"use client";

import styles from "./SelectedTeam.module.css";
import type { Team } from "../types";
import { motion } from "framer-motion";
import { useHoverColorStore } from "../store/hoverColorStore";


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
  const setHoverColor = useHoverColorStore((state) => state.setHoverColor);
  const teamHoverColorMap: Record<string, string> = {
    Ferrari:
      "radial-gradient(circle at top left, var(--ferrari), transparent 40%)",
    Haas:
      "radial-gradient(circle at center left, var(--haas), transparent 50%)",
    McLaren:
      "radial-gradient(circle at bottom left, var(--mclaren), transparent 50%)",
    "Red Bull Racing":
      "radial-gradient(circle at top right, var(--redbull), transparent 50%)",
    "Racing Bull":
      "radial-gradient(circle at center right, var(--racingbull), transparent 50%)",
      Mercedes:
        "radial-gradient(circle at bottom right, var(--mercedes), transparent 50%)",
  };
  const hoverColor = teamHoverColorMap[team.Team];
  return (
    <motion.div className="h-[22vh] overflow-hidden flex justify-end items-end rounded-xl"
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
    >

    <div
      className={styles.container}
      style={{ backgroundImage: `url(${team.background})` }}
      onMouseEnter={() => setHoverColor(hoverColor)}
      onMouseLeave={() => setHoverColor(null)}
      >
      <div className={`${styles.leftPlayer} group`}>
        <div className={styles.playerInfoLeft}>
          <span
            className={styles.playerNumber}
            style={{ backgroundImage: `url(${team.leftPlayer.number})` }}
            ></span>
            <img className={styles.playerName} src={team.leftPlayer.playerName} alt={team.leftPlayer.name} />
        </div>
        <img
          className={styles.leftPlayerPhoto}
          src={team.leftPlayer.image}
          alt={team.leftPlayer.name}
          />
      </div>
      <div className={styles.rightPlayer}>
        <div className={styles.playerInfoRight}>
          <img className={styles.playerNumber} src={team.rightPlayer.number} alt={team.rightPlayer.number} />
          <img className={styles.playerNameRight} src={team.rightPlayer.playerName} alt={team.rightPlayer.name} />
        </div>
        <img
          className={styles.rightPlayerPhoto}
          src={team.rightPlayer.image}
          alt={team.rightPlayer.number}
          />
      </div>
    </div>
    </motion.div>
  );
}