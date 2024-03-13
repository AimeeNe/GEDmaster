export class FileAsset {
    id: number;
    fileName: string;
    description: string;
    fileUrl: string;
    fileType: string;
    fileSize: string;
    fileExtension: string;
    categoryName: string;
    categoryId: number;
    inventoryStatus: string = 'SYNCED';

    constructor(id: number, description: string, fileUrl: string, fileType: string, fileSize: string, fileExtension: string, filename: string) {
        this.id = id;
        this.fileName = filename;
        this.description = description;
        this.fileUrl = fileUrl;
        this.fileType = fileType;
        this.fileSize = fileSize;
        this.fileExtension = fileExtension;
    }

}
