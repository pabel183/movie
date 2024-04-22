import MovieCard from "./MovieCard";
import { isEmpty } from "lodash";

interface MovieListProps{
    data:Record<string, any>[];
    titile:string;
}
const MovieList:React.FC<MovieListProps>=({
    data,
    titile
})=>{
    if(isEmpty(data)){
        return null;
    }

    return(
        <div className="px-4 sm:px-12 mt-4 space-y-8">
            <div>
            <p className="text-white text-sm md:text-xl lg:text-2xl font-semibold">{titile}</p>
            <div className="grid grid-cols-4 gap-2">
                {data.map((movie)=>(
                        <MovieCard key={movie.id} data={movie}/>
                ))}
            </div>
            </div>
        </div>
    )
}

export default MovieList;