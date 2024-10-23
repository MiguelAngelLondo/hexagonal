export class useeId {
    value: String;
    constructor(value: String) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (this.value.length < 5) {
            throw new Error("No puede ser menor a 5 caracteres");
}
}
}
