// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
    Button,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    RadioGroup,
    RadioButton,
    Row,
    Col,
    Input,
    Table,
    TableColumn,
    Dialog,
    Form,
    FormItem,
    Upload,
    Loading,
    Select,
    Option,
    MessageBox,
    Carousel,
    CarouselItem
} from 'element-ui';

import 'element-ui/lib/theme-chalk/display.css';
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import './ajax/api'

Vue.use(VueResource);
Vue.prototype.$ELEMENT = { size: 'small' };
Vue.prototype.$confirm = MessageBox.confirm;

Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Input);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Upload);
Vue.use(Select);
Vue.use(Option);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.use(Loading.directive);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
