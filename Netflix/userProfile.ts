import { IUserIntrestedShows } from "./IUserIntresedShows";
import { Playlist } from "./Playlist";
import { shows } from "./shows";


export class userprofile extends  Playlist  {
    name:string;
    userId:number;
    Recentlywatched:string[];
    IntresetedShows:string[];
    continueWatching:string[];

    showsforUser:IUserIntrestedShows;

    showsForUser(){
        var shows=new shows();
        this.showsforUser.getrecentlywatchedshows();
        this.getPlaylist();
        
    }
}