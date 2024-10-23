export class userName{
    value:String;
    constructor(value:String){
        this.value = value;
        this.ensureIsValid();
    }
    private ensureIsValid(){
        if(this.value.length < 5){
            throw new Error("debe contener al menos 5 caracteres");
        }
    }
}
