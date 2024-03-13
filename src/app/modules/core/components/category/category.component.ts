import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Category} from "../../../../models/Category.model";
import {FileService} from "../../../../services/file.service";
import {FileAsset} from "../../../../models/File.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileSelectEvent, FileUploadEvent} from "primeng/fileupload";

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  layout: 'list'|'grid' = 'list';
  private fileToUpload: any;

  constructor(private router:Router,private fileService:FileService,private fb:FormBuilder) {
  }
  uploadedFiles: any[] = [];
  products!: any[];
  categories: string[] = ['Videos', 'Images', 'Documents', 'Applications', 'Autres']
  files!: FileAsset[];
  addFileForm : FormGroup = this.fb.group({
    fileName: ['',[Validators.required]],
    description: [''],
    fileType: ['',[Validators.required]],
    fileSize: [''],
    fileExtension: ['',[Validators.required]],
    categoryName: [''],
    categoryId: [''],
  });
  ngOnInit() {
    this.products = this.getProductsData().slice(0, 12);
    //this.categories = this.getCategories();
    this.getFiles();
  }
  // This is the method you need to add
  isDialogVisible = false;
  file: FileAsset = new FileAsset(0, '', '', '', '', '', '');
  extentions: string[] = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'jpg', 'jpeg', 'png', 'gif', 'mp3', 'mp4', 'avi', 'flv', 'mkv', 'mov', 'wmv', 'wma', 'wav', 'ogg', 'zip', 'rar', 'tar', '7z', 'gz', 'tgz', 'bz2', 'iso', 'dmg', 'apk', 'exe', 'msi', 'bat', 'sh', 'cmd', 'jar', 'java', 'html', 'css', 'js', 'ts', 'tsx', 'jsx', 'php', 'py', 'rb', 'go', 'c', 'cpp', 'h', 'hpp', 'cs', 'vb', 'vbs', 'vba', 'vb6', 'vbnet', 'swift', 'kotlin', 'scala', 'groovy', 'pl', 'pm', 'tcl', 'r', 'rust', 'dart', 'lua', 'erl', 'hrl', 'sql', 'mysql', 'mssql', 'oracle', 'postgresql', 'sqlite', 'mongodb', 'cassandra', 'couchbase', 'couchdb', 'redis', 'memcached', 'rabbitmq', 'kafka', 'activemq', 'zeromq', 'mqtt', 'amqp', 'stomp', 'soap', 'rest', 'graphql', 'grpc', 'thrift', 'xml', 'json', 'yaml', 'toml', 'ini', 'cfg', 'conf', 'properties', 'yml', 'md', 'rst', 'adoc', 'tex', 'rtf', 'odt', 'ott', 'ods', 'ots', 'odp', 'otp', 'odg', 'otg', 'odf', 'odb', 'odi', 'oxt', 'odm', 'ott', 'oth', 'oti', 'otc', 'otf', 'otm', 'otn', 'otl', 'ots', 'otw', 'otx', 'oty', 'otz', 'ott', 'otu', 'otv', 'otq', 'otk', 'otj', 'otx', 'oty', 'otz']
  goToAssetView(assetId:number) {

    this.router.navigate(['/asset-view']);
  }
  initAddFileForm(){

    this.isDialogVisible = true;
  }

  getFiles(){
    this.fileService.getFiles().subscribe((data:FileAsset[])=>{
      this.files = data;
    });
  }

  getSeverity(product: any):any {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  getCategories():Category[] {
    return [
      new Category(1, 'Documents perso', 'Description documents perso', 'MADS_263_AVL-DRIVE-KV.jpg'),
      new Category(2, 'Images', 'Description images', 'MADS_263_AVL-DRIVE-KV.jpg'),
      new Category(3, 'CV', 'Description CV', 'MADS_263_AVL-DRIVE-KV.jpg'),
      new Category(4, 'Factures', 'Description factures', 'MADS_263_AVL-DRIVE-KV.jpg'),
      new Category(5, 'Contrats', 'Description contrats', 'MADS_263_AVL-DRIVE-KV.jpg'),
      new Category(6, 'Diplomes', 'Description diplomes', 'MADS_263_AVL-DRIVE-KV.jpg'),
      new Category(7, 'Applications', 'Description applications', 'MADS_263_AVL-DRIVE-KV.jpg'),
      new Category(8, 'Autres', 'Description autres', 'MADS_263_AVL-DRIVE-KV.jpg'),


    ];
  }
  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.png',
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
        description: 'Product Description',
        image: 'black-watch.png',
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
        description: 'Product Description',
        image: 'blue-band.png',
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
        description: 'Product Description',
        image: 'blue-t-shirt.png',
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
        description: 'Product Description',
        image: 'bracelet.png',
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
        description: 'Product Description',
        image: 'brown-purse.png',
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
        description: 'Product Description',
        image: 'chakra-bracelet.png',
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
        description: 'Product Description',
        image: 'galaxy-earrings.png',
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
        description: 'Product Description',
        image: 'game-controller.png',
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
        description: 'Product Description',
        image: 'gaming-set.png',
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
        description: 'Product Description',
        image: 'gold-phone-case.png',
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
        description: 'Product Description',
        image: 'green-earbuds.png',
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
        description: 'Product Description',
        image: 'green-t-shirt.png',
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
        description: 'Product Description',
        image: 'grey-t-shirt.png',
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
        description: 'Product Description',
        image: 'headphones.png',
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
        description: 'Product Description',
        image: 'light-green-t-shirt.png',
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
        description: 'Product Description',
        image: 'lime-band.png',
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
        description: 'Product Description',
        image: 'mini-speakers.png',
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
        description: 'Product Description',
        image: 'painted-phone-case.png',
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
        description: 'Product Description',
        image: 'pink-band.png',
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
        description: 'Product Description',
        image: 'pink-purse.png',
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
        description: 'Product Description',
        image: 'purple-band.png',
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
        description: 'Product Description',
        image: 'purple-gemstone-necklace.png',
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
        description: 'Product Description',
        image: 'purple-t-shirt.png',
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
        description: 'Product Description',
        image: 'shoes.png',
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
        description: 'Product Description',
        image: 'sneakers.png',
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
        description: 'Product Description',
        image: 'teal-t-shirt.png',
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
        description: 'Product Description',
        image: 'yellow-earbuds.png',
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
        description: 'Product Description',
        image: 'yoga-mat.png',
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
        description: 'Product Description',
        image: 'yoga-set.png',
        price: 20,
        category: 'Fitness',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 8
      }
    ];
  }



  goToCategoryDetail(categoryId:number) {
    this.router.navigate(['/categories/'+categoryId]);
  }

  addFile() {
    console.log(this.addFileForm.value);
    this.file = this.addFileForm.value;

    this.fileService.addFile(this.file).subscribe(data=>{
      this.fileService.uploadFile(this.fileToUpload,data.id).subscribe((data)=>{
        this.getFiles();
        this.addFileForm.reset();
        this.isDialogVisible = false;
      });

    });

  }
  hideDialog() {
    this.isDialogVisible = false;
  }


  onUpload($event: FileSelectEvent) {
    for(let file of $event.files) {
      this.uploadedFiles.push(file);
    }
    console.log($event);
    this.fileToUpload = $event.files[0];

  }
}
