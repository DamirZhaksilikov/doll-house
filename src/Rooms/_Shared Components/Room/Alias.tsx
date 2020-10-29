export class Alias {
    private isDefault: boolean;
    private value: string

    constructor(value?: string) {
        if(value) {
            this.value = value;
            this.isDefault = false
        } else {
            this.isDefault =true;
            this.value = "";
        }
    }

    public getAlias() {
        return this.isDefault ? "stranger" : this.value;
    }

    public getDefaultStatus() {
        return this.isDefault;
    }
}