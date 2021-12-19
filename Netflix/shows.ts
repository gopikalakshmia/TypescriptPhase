import {BaseClass} from './basemodel';
import { Addsevice } from './Addservice';

export class shows extends BaseClass{
id:number;
nameofShow:string;
createdDate:Date;
expiryDate:Date;
Description:string;


addNewShows(){
    new Addsevice<shows>().AddnewShows(new shows);
 }

 deleteShows(){
    new Addsevice<shows>().DeleteShows(new shows);
 }

 modifyShows(){
     new new Addsevice<shows>().ModifyShows(new shows);
 }
}