export class userAt{
    value: Date;
    constructor (value : Date) {
        this.value = value ;
        this.ensureisvalid();

    }
    private ensureisvalid(){
        if (this.value > new Date()){
            throw new Error("No puede ser mayor a la fecha actual");
        }
    }
}