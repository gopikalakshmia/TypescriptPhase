
import {BaseClass} from './basemodel';
import { Addsevice } from './Addservice';

export class Playlist extends BaseClass{

    showid:number;
    showname:string;
    
    getPlaylist(){
        console.log("YOur  playlist");
    }

    addNewShows(){
       new Addsevice<Playlist>().AddnewShows(new Playlist);
    }

    deleteShows(){
        new Addsevice<Playlist>().DeleteShows(new Playlist);
     }
     modifyShows(){
        new new Addsevice<Playlist>().ModifyShows(new Playlist);
    }
    
    }
