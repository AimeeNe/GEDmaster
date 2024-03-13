export class Category {
    id: number;
    designation: string;
    description: string;
    imageUrl: string;
    constructor(id: number, name: string, description: string, imageUrl: string) {
        this.id = id;
        this.designation = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
