import MainNews from "@/app/news/components/MainNews";
import SubNews from "@/app/news/components/SubNews";

export default function News() {
  return (
    <div className="flex gap-30 w-full h-full justify-center items-center p-15">
        <MainNews title="FIRST LOOK: Audi reveal their new car for 2026 F1 season" image="/News/Audi.jpg" altImage="News 1 photo" time="8 hours ago"/>
        <div className="h-[60vh] w-[60vh] flex flex-col justify-between">
            <SubNews title="Antonelli takes pole for Japanese Grand Prix in Mercedes" image="/News/antoneli.jpg" altImage="Antoneli photo" time="3 hours ago"/>
            <SubNews title="F1 News | Miracle of McLaren: Why the true test begins now" image="/News/lando.jpg" altImage="lando photo" time="7 hours ago"/>
            <SubNews title="Ferrari driver Carlos Sainz Jr. has tested positive for COVID-19" image="/News/sainz.jpeg" altImage="sainz photo" time="18 hours ago"/>
        </div>
    </div>
  );
}