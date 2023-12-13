import { NextResponse } from "next/server";
import Connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    const url = new URL(request.url);
    const username = url.searchParams.get('username');
    try{
        await Connect();

        const posts = await Post.find(username && {username});
        return new NextResponse(JSON.stringify(posts),{status:200});
        console.log(posts);

    }catch(err){

        return new NextResponse('Database ERRor', {status: 500});
    }
    
}


export const POST = async (request) =>{
    const body = await  request.json();
    const newPost = new Post(body);
    console.log(body);
    console.log(newPost);
    try{
        await Connect();
        const savedPost = await newPost.save();
        console.log(savedPost);
        return new NextResponse(" The post has been created");
    }catch(err){
        return new NextResponse("Database Error", {status:500});
    }
}

