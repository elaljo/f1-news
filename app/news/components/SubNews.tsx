interface SubNewsProps {
    title: string
    image: string
    altImage: string
    time?: string
}

export default function SubNews({ title, image, altImage, time }: SubNewsProps) {
    return (
        <div className="bg-black/40 rounded-3xl p-3 flex gap-5 h-[15vh] group">
            <div className="flex justify-center items-center w-[30vh]">
                <img src={image} alt={altImage} className="rounded-3xl w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-[1.05]" />
            </div>
            <div className="flex flex-col py-4 justify-between">
                <div className="text-white/80 text-xl group-hover:text-white/100 transition-all duration-300">
                    {title}
                </div>
                <div className="text-white/50 text-sm flex justify-end items-end pr-2">
                    {time}
                </div>
            </div>
        </div>
    )
}