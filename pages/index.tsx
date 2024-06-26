import Billboard from "@/components/Billboard";
import InfoModel from "@/components/InfoModel";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import useInfoModel from "@/hooks/useInfoModel";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export default function Home() {
  const {data:movies=[]}=useMovieList();
  const {data:favorites=[]}=useFavorites();

  const {isOpen,closeModel}=useInfoModel();

  return (
    <>
      <InfoModel visible={isOpen} onClose={closeModel} />
      <Navbar/>
      <Billboard />
      <div className="pb-40">
        <MovieList data={movies} titile="Trending New"/>
        <MovieList data={favorites} titile="My List"/>
      </div>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext){
  const session=await getSession(context);

  
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }

};

