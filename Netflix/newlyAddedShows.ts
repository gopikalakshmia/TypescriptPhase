import { shows } from "./shows";

export class newlyAddedshows extends shows{

    showid:number;
    showname:string;
    
    getrecentlywatchedshows(){
        console.log("Newly watched shows");
    }
    
    }
