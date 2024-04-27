import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface FavoriteButtonProps {
    movieId: string,
}
const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    movieId
}) => {

    const {mutate:muteFavorites}=useFavorites();
    const {data:currentUser,mutate}=useCurrentUser();

    const isFavorite=useMemo(()=>{
        let list=currentUser?.favoriteIds||[];

        return list.includes(movieId);
    },[currentUser,movieId]);

    const toggleFavorites=useCallback(async()=>{
        let response;

        if(isFavorite){
            response=await axios.delete("/api/favorite",{data:{movieId}});
        }
        else{
            response=await axios.post("/api/favorite",{movieId});
        }
        const updatedFavorites=response?.data?.favoriteIds;
        mutate({
            ...currentUser,
            favoriteIds:updatedFavorites
        });
        muteFavorites();
    },[movieId,currentUser,mutate,muteFavorites,isFavorite]);

    const Icon=isFavorite?AiOutlineCheck:AiOutlinePlus;
    return (
        <div 
        onClick={toggleFavorites}
        className="
        cursor-pointer
        group/item
        h-6
        w-6
        lg:h-10
        lg:w-10
        border-white
        border-2
        rounded-full
        flex
        justify-center
        items-center
        hover:border-neutral-300
        ">
            <Icon className="text-white" size={25} />
        </div>
    )
}

export default FavoriteButton;