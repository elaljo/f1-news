import SubNews from "@/components/SubNews";

export default function News() {
  return (
    <div className="flex gap-30 w-full h-full justify-center items-center p-15">
        <div className="h-50vh] w-[85vh] bg-black/40 rounded-3xl p-5">
            <div className="h-[45vh]">
                <img src="/News/Audi.jpg" alt="News 1 photo" className="object-cover rounded-2xl w-full h-full opacity-80" />
            </div>
            <div className="flex">
                <div className="m-5 flex-1 text-3xl text-white/80">
                    FIRST LOOK: Audi reveal their new car for 2026 F1 season
                </div>
                <div className="m-2 flex items-end text-sm text-white/50">
                    8 hours ago
                </div>
            </div>
        </div>
        <div className="h-[60vh] w-[60vh] flex flex-col justify-between">
            <SubNews title="Antonelli takes pole for Japanese Grand Prix in Mercedes" image="/News/antoneli.jpg" altImage="Antoneli photo" time="3 hours ago"/>
            <SubNews title="F1 News | Miracle of McLaren: Why the true test begins now" image="/News/lando.jpg" altImage="lando photo" time="7 hours ago"/>
            <SubNews title="Ferrari driver Carlos Sainz Jr. has tested positive for COVID-19" image="/News/sainz.jpeg" altImage="sainz photo" time="18 hours ago"/>
        </div>
    </div>
  );
}