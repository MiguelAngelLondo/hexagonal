export class userEmail{
    value:string;
    constructor(value:string){
        this.value = value;
        this.ensureIsValid();


    }
    private ensureIsValid(){
        if (this.value.includes("@") || !this.value.includes(".")) {
            throw new Error("debe contener un @ o un .");
            
        }
    }
}