import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-djl-upload',
  templateUrl: './djl-upload.component.html',
  styleUrls: ['./djl-upload.component.scss']
})
export class DjlUploadComponent implements OnInit {
  @ViewChild('preview') preview;

  @Input() files = [];
  @Input() accept: string;
  @Input() url: string;
  @Input() name: string;
  @Input() method = 'post';
  @Input() withCredentials = false;
  @Input() maxSize: string;
  @Input() multiple = true;
  
  @Input() previewWrap: HTMLImageElement;

  @Output() onUpload = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();
  @Output() onProgress = new EventEmitter<any>();

  private progress;
  private showPreview = false;

  constructor(
  ) { }

  ngOnInit() {
  }

  onFileSelect(event) {

    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (this.isValidate(file)) {
        if (this.isImage(file)) {
          file.objectURL = window.URL.createObjectURL(file);
          if (this.previewWrap) {
            // DOM 类型判断
            if (this.previewWrap.nodeName !== 'IMG') {
              this.onError.emit('previewWrap属性DOM类型不为IMG');
              return;
            }
            setTimeout(() => {
              this.setImagePreview(this.previewWrap, file.objectURL);
              this.showPreview = false;
            }, 0);
          } else {
            setTimeout(() => {
              this.setImagePreview(this.preview.nativeElement, file.objectURL);
            }, 0);
            this.showPreview = true;
          }
        }
        this.files.push(file);
      }
    }

    if (this.isValidate) {

    }




    // 将文件存入
    // this.files.push(event.target.files);
    // this.preview.src = $event.target
    this.onSelect.emit({originalEvent: event, files: this.files});

    // 上传文件  1文件验证  1 是否有文件  2  是否是自动上传  具体看primeng的fileupload.js的源码。
    this.upload();
  }

  isValidate(file) {
    // 文件类型验证
    if (this.accept &&  !this.isFileTypeValid(file)) {
      // 注入错误信息
      this.onError.emit('文件类型错误');
      return false;
    }
    // 文件大小验证
    if (this.maxSize && !this.isFileSizeValid(file)) {
      // 注入错误信息
      this.onError.emit(`文件大小超过${this.maxSize}字节`);
      return false;
    }

    return true;
  }

  isFileSizeValid(file) {
    // maxSize 应该是可以支持多种单位，这里以字节为单位
    return this.maxSize > file.size;
  }

  isFileTypeValid(file) {
    // 解析accept
    const acceptList = this.accept.split(',');
    for (let i = 0; i < acceptList.length; i++) {
      const type = acceptList[i].trim();
      let flag = false;
      /*
        1 传递的格式为"image/png, image/jpeg"  file.type === type;
        2 传递".png, .jpg, .jpeg"  this.getFileExtension(file.name) === type;
        3 传递 "image/*" this.getTypeClass(type) === this.getTypeClass(file.type);
      */

      flag = this.isWildcard(type) ? this.getTypeClass(type) === this.getTypeClass(file.type) :
      file.type === type || this.getFileExtension(file.name) === type;
      if (flag) {
        return true;
      }
    }
    return false;
  }

  getFileExtension(fileName) {
    return '.' + fileName.split('.');
  }

  getTypeClass(fileType) {
    return fileType.substring(0, fileType.indexOf('/'));
  }

  isWildcard(fileType) {
    return fileType.indexOf('*') !== -1;
  }

  isImage(file) {
    const fileType = file.type;
    return this.getTypeClass(fileType) === 'image';
  }

  upload() {
    // 生成模拟表单数据  查看相应文档手册
    const formData = new FormData();
    this.files.forEach(file => {
      formData.append(this.name, file, file.name);
    });
    
    // 创建XMLRequest对象

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        this.progress = Math.round((e.loaded * 100) / e.total);
      }

      this.onProgress.emit({originalEvent: e, progress: this.progress});
    });

    xhr.onreadystatechange = (status) => {
      // 上传成功
      if (xhr.readyState === 4) {
        if (xhr.status >= 2 && xhr.status < 3) {
          this.onUpload.emit({originalEvent: xhr, files: this.files});
        } else {
          // 上传失败
          this.files = [];
          // 触发失败钩子
          this.onError.emit({originalEvent: xhr, files: this.files});
        }
      }
    };

    xhr.open(this.method, this.url, true);

    xhr.withCredentials = this.withCredentials;
    xhr.send(formData);

    // 发送并触发相应的钩子
  }

  setImagePreview(imgEl, src) {
    imgEl.src = src;
  }
}
