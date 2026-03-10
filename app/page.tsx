import SelectedTeam from "@/components/SelectedTeam";
import {Teams} from "../data/SelectedTeams"

export default function Home() {
  return (
    <div>
      <h1>F1 News</h1>
      {Teams.map(team => (
        <SelectedTeam
        key={team.Team}
        team={team}
        />
      ))}
    </div>
  );
}
