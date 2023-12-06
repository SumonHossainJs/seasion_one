import { NextResponse } from "next/server";
import Connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    try{
        await Connect();
        console.log("connected to the Database");
        return new NextResponse("Al hamdulilah", {status:200});
    }catch(err){

        return new NextResponse('Database ERRor', {status: 500});
    }
    
}

