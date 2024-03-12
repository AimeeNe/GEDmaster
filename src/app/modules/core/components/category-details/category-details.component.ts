import { Component } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {Location} from "@angular/common";
import {File} from "../../../../models/File.model";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {
  fileDialog: boolean = false;



  selectedfiles!: any[] | null;
  selectedFiles!: File[] | null;

  submitted: boolean = false;

  statuses!: any[];
  files:File[] = [];
  file!: File;

  constructor( private messageService: MessageService, private confirmationService: ConfirmationService,private _location: Location) {}

  ngOnInit() {
    //this.files = this.getfilesData();
    this.files = this.getFiles();

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  openNew() {
    this.file = {
      ...new File(0, '', '', '', '', '', '', ''),
    };
    this.submitted = false;
    this.fileDialog = true;
  }

  deleteSelectedFiles() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected files?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.files = this.files.filter((val) => !this.selectedfiles?.includes(val));
        this.selectedfiles = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'files Deleted', life: 3000 });
      }
    });
  }

  editFile(file: any) {
    this.file = { ...file };
    this.fileDialog = true;
  }

  deleteFile(file: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + file.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.files = this.files.filter((val) => val.id !== file.id);
        this.file = {
          ...new File(0, '', '', '', '', '', '', ''),
        };
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'file Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.fileDialog = false;
    this.submitted = false;
  }

  savefile() {
    this.submitted = true;

    if (this.file.name?.trim()) {
      if (this.file.id) {
        this.files[this.findIndexById(this.file.id)] = this.file;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'file Updated', life: 3000 });
      } else {
        this.file.id = this.createId();
        this.file.fileUrl = 'file-placeholder.svg';
        this.files.push(this.file);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'file Created', life: 3000 });
      }

      this.files = [...this.files];
      this.fileDialog = false;
      this.file = {
        ...new File(0, '', '', '', '', '', '', ''),
      };
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): number {
    let id = 0;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      id = Math.floor(Math.random() * chars.length);

    return id;
  }

  getSeverity(status: string): 'success' | 'warning' | 'danger'  {
    switch (status) {
      case 'SYNCED':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
        default:
        return 'danger';
    }
  }

  getFiles():File[]{
    return [
      new File(1, 'file1', 'file1 description', 'pdf.png', 'file1Type', 'file1Size', 'file1Extension', 'file1Name'),
      new File(2, 'file2', 'file2 description', 'csv-file.png', 'file2Type', 'file2Size', 'file2Extension', 'file2Name'),
      new File(3, 'file3', 'file3 description', 'doc.png', 'file3Type', 'file3Size', 'file3Extension', 'file3Name'),
      new File(4, 'file4', 'file4 description', 'pdf.png', 'file4Type', 'file4Size', 'file4Extension', 'file4Name'),
      new File(5, 'file5', 'file5 description', 'csv-file.png', 'file5Type', 'file5Size', 'file5Extension', 'file5Name'),
      new File(6, 'file6', 'file6 description', 'txt-file.png', 'file6Type', 'file6Size', 'file6Extension', 'file6Name'),
      new File(7, 'file7', 'file7 description', 'txt-file.png', 'file7Type', 'file7Size', 'file7Extension', 'file7Name'),
      new File(8, 'file8', 'file8 description', 'csv-file.png', 'file8Type', 'file8Size', 'file8Extension', 'file8Name'),
      new File(9, 'file9', 'file9 description', 'pdf.png', 'file9Type', 'file9Size', 'file9Extension', 'file9Name'),
      new File(10, 'file10', 'file10 description', 'txt-file.png', 'file10Type', 'file10Size', 'file10Extension', 'file10Name'),
      new File(11, 'file11', 'file11 description', 'doc.png', 'file11Type', 'file11Size', 'file11Extension', 'file11Name'),
      new File(12, 'file12', 'file12 description', 'csv-file.png', 'file12Type', 'file12Size', 'file12Extension', 'file12Name'),
      new File(13, 'file13', 'file13 description', 'pdf.png', 'file13Type', 'file13Size', 'file13Extension', 'file13Name'),
      new File(14, 'file14', 'file14 description', 'doc.png', 'file14Type', 'file14Size', 'file14Extension', 'file14Name'),
      new File(15, 'file15', 'file15 description', 'txt-file.png', 'file15Type', 'file15Size', 'file15Extension', 'file15Name'),
      new File(16, 'file16', 'file16 description', 'pdf.png', 'file16Type', 'file16Size', 'file16Extension', 'file16Name'),
      new File(17, 'file17', 'file17 description', 'pdf.png', 'file17Type', 'file17Size', 'file17Extension', 'file17Name'),
      new File(18, 'file18', 'file18 description', 'doc.png', 'file18Type', 'file18Size', 'file18Extension', 'file18Name'),
      new File(19, 'file19', 'file19 description', 'txt-file.png', 'file19Type', 'file19Size', 'file19Extension', 'file19Name'),
      new File(20, 'file20', 'file20 description', 'doc.png', 'file20Type', 'file20Size', 'file20Extension', 'file20Name'),
      new File(21, 'file21', 'file21 description', 'doc.png', 'file21Type', 'file21Size', 'file21Extension', 'file21Name'),
      new File(22, 'file22', 'file22 description', 'txt-file.png', 'file22Type', 'file22Size', 'file22Extension', 'file22Name'),
      new File(23, 'file23', 'file23 description', 'csv-file.png', 'file23Type', 'file23Size', 'file23Extension', 'file23Name'),
      new File(24, 'file24', 'file24 description', 'doc.png', 'file24Type', 'file24Size', 'file24Extension', 'file24Name'),
      new File(25, 'file25', 'file25 description', 'csv-file.png', 'file25Type', 'file25Size', 'file25Extension', 'file25Name'),
      new File(26, 'file26', 'file26 description', 'pdf.png', 'file26Type', 'file26Size', 'file26Extension', 'file26Name'),
      new File(27, 'file27', 'file27 description', 'txt-file.png', 'file27Type', 'file27Size', 'file27Extension', 'file27Name'),
      new File(28, 'file28', 'file28 description', 'txt-file.png', 'file28Type', 'file28Size', 'file28Extension', 'file28Name'),
      new File(29, 'file29', 'file29 description', 'txt-file.png', 'file29Type', 'file29Size', 'file29Extension', 'file29Name'),
      new File(30, 'file30', 'file30 description', 'doc.png', 'file30Type', 'file30Size', 'file30Extension', 'file30Name'),
    ]
  }
  getfilesData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'file Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'file Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'file Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'file Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'file Description',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'file Description',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        description: 'file Description',
        image: 'chakra-bracelet.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        description: 'file Description',
        image: 'galaxy-earrings.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        description: 'file Description',
        image: 'game-controller.jpg',
        price: 99,
        category: 'Electronics',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 4
      },
      {
        id: '1009',
        code: 'cm230f032',
        name: 'Gaming Set',
        description: 'file Description',
        image: 'gaming-set.jpg',
        price: 299,
        category: 'Electronics',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 3
      },
      {
        id: '1010',
        code: 'plb34234v',
        name: 'Gold Phone Case',
        description: 'file Description',
        image: 'gold-phone-case.jpg',
        price: 24,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1011',
        code: '4920nnc2d',
        name: 'Green Earbuds',
        description: 'file Description',
        image: 'green-earbuds.jpg',
        price: 89,
        category: 'Electronics',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1012',
        code: '250vm23cc',
        name: 'Green T-Shirt',
        description: 'file Description',
        image: 'green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 74,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1013',
        code: 'fldsmn31b',
        name: 'Grey T-Shirt',
        description: 'file Description',
        image: 'grey-t-shirt.jpg',
        price: 48,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 3
      },
      {
        id: '1014',
        code: 'waas1x2as',
        name: 'Headphones',
        description: 'file Description',
        image: 'headphones.jpg',
        price: 175,
        category: 'Electronics',
        quantity: 8,
        inventoryStatus: 'LOWSTOCK',
        rating: 5
      },
      {
        id: '1015',
        code: 'vb34btbg5',
        name: 'Light Green T-Shirt',
        description: 'file Description',
        image: 'light-green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 34,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1016',
        code: 'k8l6j58jl',
        name: 'Lime Band',
        description: 'file Description',
        image: 'lime-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 12,
        inventoryStatus: 'INSTOCK',
        rating: 3
      },
      {
        id: '1017',
        code: 'v435nn85n',
        name: 'Mini Speakers',
        description: 'file Description',
        image: 'mini-speakers.jpg',
        price: 85,
        category: 'Clothing',
        quantity: 42,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1018',
        code: '09zx9c0zc',
        name: 'Painted Phone Case',
        description: 'file Description',
        image: 'painted-phone-case.jpg',
        price: 56,
        category: 'Accessories',
        quantity: 41,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1019',
        code: 'mnb5mb2m5',
        name: 'Pink Band',
        description: 'file Description',
        image: 'pink-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1020',
        code: 'r23fwf2w3',
        name: 'Pink Purse',
        description: 'file Description',
        image: 'pink-purse.jpg',
        price: 110,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1021',
        code: 'pxpzczo23',
        name: 'Purple Band',
        description: 'file Description',
        image: 'purple-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 6,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1022',
        code: '2c42cb5cb',
        name: 'Purple Gemstone Necklace',
        description: 'file Description',
        image: 'purple-gemstone-necklace.jpg',
        price: 45,
        category: 'Accessories',
        quantity: 62,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1023',
        code: '5k43kkk23',
        name: 'Purple T-Shirt',
        description: 'file Description',
        image: 'purple-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 5
      },
      {
        id: '1024',
        code: 'lm2tny2k4',
        name: 'Shoes',
        description: 'file Description',
        image: 'shoes.jpg',
        price: 64,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1025',
        code: 'nbm5mv45n',
        name: 'Sneakers',
        description: 'file Description',
        image: 'sneakers.jpg',
        price: 78,
        category: 'Clothing',
        quantity: 52,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1026',
        code: 'zx23zc42c',
        name: 'Teal T-Shirt',
        description: 'file Description',
        image: 'teal-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 3,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1027',
        code: 'acvx872gc',
        name: 'Yellow Earbuds',
        description: 'file Description',
        image: 'yellow-earbuds.jpg',
        price: 89,
        category: 'Electronics',
        quantity: 35,
        inventoryStatus: 'INSTOCK',
        rating: 3
      },
      {
        id: '1028',
        code: 'tx125ck42',
        name: 'Yoga Mat',
        description: 'file Description',
        image: 'yoga-mat.jpg',
        price: 20,
        category: 'Fitness',
        quantity: 15,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1029',
        code: 'gwuby345v',
        name: 'Yoga Set',
        description: 'file Description',
        image: 'yoga-set.jpg',
        price: 20,
        category: 'Fitness',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 8
      }
    ];
  }

  goBack() {
   this._location.back();
  }
}
