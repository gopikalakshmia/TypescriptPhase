
import {BaseClass} from './basemodel';
import { Addsevice } from './Addservice';

export class Playlist extends BaseClass{

    showid:number;
    showname:string;
    
    getPlaylist(){
        console.log("YOur  playlist");
    }

    addNewShowstoPlaylist(){
       new Addsevice<Playlist>().AddnewShows(new Playlist);
    }

    deleteShowsfromPlaylist(){
        new Addsevice<Playlist>().DeleteShows(new Playlist);
     }
     modifyShowsInPlaylist(){
        new new Addsevice<Playlist>().ModifyShows(new Playlist);
    }
    
    }
