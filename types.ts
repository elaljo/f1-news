export type Player = {
    name: string;
    image: string;
    number: string;
    playerName?: string;
};
export type Team = {
    Team: string;
    background: string;
    leftPlayer: Player;
    rightPlayer: Player;
};