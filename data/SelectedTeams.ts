import type { Team } from "../types"

export const Teams: Team[] = [
{
    Team: "Ferrari",
    background: "/SelectedTeam/Ferrari/Ferraribackground.png",
    leftPlayer: {
        name: "Charles Leclerc",
        image: "/SelectedTeam/Ferrari/CharlesLeclerc.avif",
        number: "/SelectedTeam/Ferrari/LeclercNumber.avif"
    },
    rightPlayer:{
        name: "Lewis Hamilton",
        image: "/SelectedTeam/Ferrari/LewisHamilton.avif",
        number: "/SelectedTeam/Ferrari/HamiltonNumber.avif"
    }
},

{
    Team: "Red Bull Racing",
    background: "/SelectedTeam/RedBull/RedBullBackground.png",
    leftPlayer: {
        name: "Isack Hadjar",
        image: "/SelectedTeam/RedBull/IsackHadjar.avif",
        number: "/SelectedTeam/RedBull/HadjarNumber.avif"
    },
    rightPlayer:{
        name: "Max Verstappen",
        image: "/SelectedTeam/RedBull/MaxVerstappen.avif",
        number: "/SelectedTeam/RedBull/MaxNumber.avif"
    }
}
]