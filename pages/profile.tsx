import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps(context:NextPageContext){
    const session= await getSession(context);

    if(!session){
        return {
            redirect:{
                destination:"/auth",
                permanent:false
            }
        }
    }

    return {
        props:{}
    }
}

const profile=()=>{
    return(
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
            <div className="text-3xl md:text-5xl text-white text-center">
                Who is watching?
            </div>
            </div>
        </div>
    )
}

export default profile;