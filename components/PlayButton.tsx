import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps{
    movieId:string;
}

const PlayButton:React.FC<PlayButtonProps>=({
    movieId
})=>{
    const route=useRouter();
    return(
        <button 
        onClick={()=>route.push(`/watch/${movieId}`)}
        className="
        cursor-pointer
        bg-white
        rounded-md
        py-1 lg:py-2
        px-2 lg:px-4
        w-auto
        text-xs lg:text-lg
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
        >
            <BsFillPlayFill size={25} className="mr-1" />
            play
        </button>
    )
}

export default PlayButton;