import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const watch=()=>{
    const router=useRouter();
    const {movieId}=router.query;

    const {data}= useMovie(movieId as string);
    return(
        <div className="h-screen w-screen bg-black">
            <nav className="
            fixed
            p-4
            w-full
            bg-black
            opacity-70
            flex
            flex-row
            items-center
            z-10
            gap-8
            ">
                <AiOutlineArrowLeft 
                onClick={()=>router.push("/")}
                className="cursor-pointer text-white" size={40} 
                />
                <p className="text-white text-1xl lg:text-3xl font-bold">
                    <span className="font-light">
                        watching:
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video 
            className="h-full w-full"
            autoPlay
            controls
            src={data?.videoUrl}
            ></video>
        </div>
    )
}
export default watch;