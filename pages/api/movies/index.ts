import { NextApiRequest,NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    if(req.method!=="GET"){
        res.status(405).end();
    }
    try{
        await serverAuth(req,res);

        const movieList=await prismadb.movie.findMany();

        res.status(200).json(movieList);
    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}