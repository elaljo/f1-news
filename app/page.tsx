import SelectedTeam from "@/components/SelectedTeam";
import {Teams} from "../data/SelectedTeams"

export default function Home() {
  return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "30px", padding: "50px", justifyContent: "center"}}>
    {Teams.map((team) => (
      <SelectedTeam key={team.Team} team={team} />
    ))}
  </div>
  );
}
