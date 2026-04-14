interface MainNewsProps {
    title: string
    image: string
    altImage: string
    time?: string
}

export default function MainNews({ title, image, altImage, time }: MainNewsProps) {
    return (
        <div className="flex flex-col justify-between w-1/2 bg-black/40 rounded-3xl p-5 group">
            <div className="h-[45vh] w-full">
                <img src={image} alt={altImage} className="object-stretch rounded-2xl w-full h-full opacity-80 group-hover:scale-101 group-hover:opacity-100 transition-all duration-1000 ease-out"/>
            </div>
            <div className="flex">
                <div className="m-5 flex-1 text-3xl text-white/80 group-hover:text-white/100 transition-all duration-500 ease-out">
                    {title}
                </div>
                <div className="m-2 flex items-end text-sm text-white/50">
                    {time}
                </div>
            </div>
        </div>
    )
}