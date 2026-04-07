import SelectedTeam from "@/components/SelectedTeam";
import { Teams } from "../../data/SelectedTeams";

export default function Drivers() {
  return (
    <div className="flex flex-wrap justify-center gap-12 p-12">
      {Teams.map((team, index) => (
        <SelectedTeam
          key={team.Team}
          team={team}
          itemIndex={index}
          delayStep={0.1}
        />
      ))}
    </div>
  );
}