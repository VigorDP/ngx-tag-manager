import { STData, STPage } from "@delon/abc";

// 页面配置相关
export const query: any = {
  pageNo: 1,
  pageSize: 10
};

export const defaultQuery: any = { ...query };

export const pages: STPage = {
  total: "",
  show: true, // 显示分页
  front: false, // 关闭前端分页，true是前端分页，false后端控制分页
  showSize: true,
  showQuickJumper: true
};

export let total: number = 0;

export let loading: boolean = false;

export let data: STData[] = [];

export let selectedRows: STData[] = [];

export let selectedRow: STData = {};
