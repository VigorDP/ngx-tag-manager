## ngx-tag-manager

Angular 中一种通用业务组件，标签管理器

使用场景：文章分类标签、公告类型标签等

![ngx-tag-manager](./tag-manager.gif)

### 基本使用

```
npm i ngx-tag-manager

// 注册组件
import { TagManagerComponent } from 'ngx-tag-manager';
@NgModule({
  declarations: [
    TagManagerComponent
  ],
  exports: [
    TagManagerComponent
  ],
})
// 使用组件

<button nz-button (click)="showTagManager=true" [nzType]="'primary'">
  <i nz-icon nzType="copy" nzTheme="outline"></i>
  <span>标签管理</span>
</button>

<app-tag-manager [show]="showTagManager" [listApi]="api.getTagList"
  [saveApi]="api.saveTag" [deleteApi]="api.deleteTag" (close)="showTagManager=false"></app-tag-manager>
```

### API

- 输入属性

  show:boolean，控制标签弹窗的显示

  listApi: 标签列表接口

  saveApi: 新增或修改标签接口

  deleteApi: 删除标签接口

- 输出属性

  close 关闭标签弹窗事件
