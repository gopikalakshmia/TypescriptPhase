import {BaseClass} from './basemodel';

 export class Addsevice <T extends BaseClass>{

    AddnewShows(record:T){
        console.log("new show added");
    }

    DeleteShows(record:T){
        console.log(" show deleted");
    }

    ModifyShows(record:T){
        console.log(" showa are Modified");
    }
 }