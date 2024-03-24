export interface TodoItem{
    id : number;
    value : string;
    color : string;
    isDone : boolean;
    creationDate : Date;
    EndDate? : Date;
}