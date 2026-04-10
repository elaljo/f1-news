interface SubNewsProps {
    title?: string
    image?: string
    altImage?: string
    time?: string
}

export default function SubNews({ title, image, altImage, time }: SubNewsProps) {
    return (
        <div className="bg-black/40 rounded-xl p-2 flex gap-5">
            <div>
                <img src={image} alt={altImage} className="w-55 h-25 rounded-md" />
            </div>
            <div className="py-4">
                {title}
            </div>
        </div>
    )
}