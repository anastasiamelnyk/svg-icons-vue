import Page from '@components/Page';
import Sidebar from '@components/Sidebar';
import IconInline from '@components/IconInline';
import Icon from '@components/Icon';

export default {
  install (Vue) {
    Vue.component('Page', Page);
    Vue.component('Sidebar', Sidebar)
    Vue.component('IconInline', IconInline);
    Vue.component('Icon', Icon);
  }
}
