import { shows } from "./shows";

export class Playlist extends shows{

    showid:number;
    showname:string;
    
    getPlaylist(){
        console.log("YOur  playlist");
    }
    
    }
