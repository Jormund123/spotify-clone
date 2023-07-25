import { Song } from "@/types"
import { createServerComponentClient} from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers";
import getSongs from "./getSongs";

const getSongsByTitle = async(title: string): Promise<Song[]> =>{
    // CREATING A SERVER COMPONENT FOR SUPABASE CLIENT
    const supabase = createServerComponentClient({cookies: cookies});

    // FETCHING THE SONGS
    if(!title){
        const allSongs = await getSongs();
        return allSongs;
    }
    const{data, error} = await supabase
        .from('songs')
        .select('*')
        .ilike('title', `%${title}%`)
        .order('created_at', {ascending: false});

        if(error){
            console.log(error);
        }
        return (data as any) || [];
}

export default getSongsByTitle;