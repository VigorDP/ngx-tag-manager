## ngx-img-upload

Ant Design of Angular 中 nz-upload 组件的升级版，初衷是减少该组件的样板代码

### 基本使用

```
npm i ngx-img-upload

// 注册组件
import { ImgUploadComponent } from 'ngx-img-upload';
@NgModule({
  declarations: [
    ImgUploadComponent
  ],
  exports: [
    ImgUploadComponent
  ],
})
// 使用组件
<app-img-upload (getImgUrl)="getImgUrl($event)" [inputUrls]="[selectedRow.idFrontUrl]"></app-img-upload>
```

### 说明

- 输入属性
  number:数字，控制想上传几张图片
  inputUrls: 字符串数组，用已有的图片地址初始化该组件
  action: 字符串，表示上传的接口地址

- 输出属性
  getImgUrl 当图片上传成功时会发出此事件，返回已上传的图片地址
