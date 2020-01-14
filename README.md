## 1.0.4 (2020-01-14)


### Features

* **弹窗文案控制:** 新增弹窗文案控制 ([a6188f8](https://github.com/fengyinchao/ngx-tag-manager/commit/a6188f8d6bf61840d0f1edde05a971213edfae21))



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

<app-tag-manager [show]="showTagManager" label="标签" [listApi]="api.getTagList"
  [saveApi]="api.saveTag" [deleteApi]="api.deleteTag" (closeEvent)="showTagManager=false"></app-tag-manager>
```

### API

- 输入属性

  show:boolean，控制标签弹窗的显示

  label: 弹窗文案控制，默认“标签”，如果用于岗位管理，则传入“岗位”,弹窗文案会变为岗位管理，新增岗位等等

  listApi: 标签列表接口

  saveApi: 新增或修改标签接口

  deleteApi: 删除标签接口

- 输出属性

  closeEvent 关闭标签弹窗事件
