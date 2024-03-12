export class File{
   id: number;
    name: string;
    description: string;
    fileUrl: string;
    fileType: string;
    fileSize: string;
    fileExtension: string;
    filename: string;
    categoryName: string;
    categoryId: number;
  inventoryStatus: string = 'SYNCED';

    constructor(id: number, name: string, description: string, fileUrl: string, fileType: string, fileSize: string, fileExtension: string, filename: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.fileUrl = fileUrl;
        this.fileType = fileType;
        this.fileSize = fileSize;
        this.fileExtension = fileExtension;
        this.filename = filename;
    }

}
