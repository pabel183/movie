import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export default function useMovie(movieId:string){

    const {data,error,isLoading}= useSWR(movieId?`/api/movies/${movieId}`:null,fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false,
    });

    return {
        data,
        error,
        isLoading
    };

}