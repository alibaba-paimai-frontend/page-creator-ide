import { message } from 'antd';

var searchParams = new URLSearchParams(location.search);
export const appId = searchParams.get('appId');
!appId && message.warn('缺少  appId');

export const pageId = searchParams.get('pageId');
!pageId && message.warn('缺少  pageId');

export const API_COMP_TPL =
  'http://gourd.daily.taobao.net/api/component/all/cate/template';

// 通过请求获取 list 列表
export const useLocal = false;
export const URL_PREVIEW = useLocal ? 'http://localhost:9006/gourd2/pi/demo/preview.html' : 'http://gourd.daily.taobao.net/ide-preview' 

/**
 * context menu 部分
 */
export const menuProps = {
  id: 'component-tree',
  name: '组件树右键菜单',
  children: [
    { id: 'createSub', name: '添加组件', icon: 'plus', shortcut: '⌘+Alt+G' },
    {
      id: 'createBlock',
      name: '添加区块',
      icon: 'appstore-o',
      shortcut: '⌘+Alt+B'
    },
    // { id: 'createTmpl', name: '添加模板', icon: 'plus', shortcut: '' },
    { id: 'createUp', name: '前面插入组件', icon: 'arrow-up', shortcut: '' },
    {
      id: 'createDown',
      name: '后面插入组件',
      icon: 'arrow-down',
      shortcut: ''
    },
    {
      id: 'divider',
      name: '分割线',
      icon: 'file',
      type: 'separator'
    },
    { id: 'copy', name: '复制', icon: 'copy', shortcut: '⌘+C' },
    { id: 'paste', name: '粘贴', icon: 'switcher', shortcut: '⌘+V' },
    {
      id: 'divider',
      name: '分割线',
      icon: 'file',
      type: 'separator'
    },
    { id: 'delete', name: '删除', icon: 'delete', shortcut: '⌘+Delete' }
  ]
};
