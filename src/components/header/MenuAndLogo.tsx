import YoutubeIcon from "../../assets/svg/YoutubeIcon.tsx";
import Menu from "./Menu.tsx";

export default function MenuAndLogo(){
    return (
        <div className="flex flex-row items-center gap-4">
            <Menu/>
            <figure
                className="hover:cursor-pointer hover:bg-gray-200 rounded-full p-1 flex flex-row gap-1 items-center">
                <YoutubeIcon/>
                <figcaption className="font-bold text-2xl font-serif">
                    <span>YouTube</span>
                </figcaption>
            </figure>
        </div>
    )
}