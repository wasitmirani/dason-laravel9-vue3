require('./bootstrap');

require('alpinejs');

import { createApp } from 'vue';

import router from './router'
const app =createApp({
    mounted(){

    }
});



// app.config.globalProperties.$auth_user = JSON.parse(user);
app.config.globalProperties.$filters = {
    elementType(value) {
      switch (value) {
          case 'link':
                return  '<a class="badge rounded-pill badge-dark" href="#">  <i class="fa fa-unlink" ></i> </a>'
           break;
           case 'text':
            return  '<a class="badge rounded-pill badge-dark" href="#">  <i class="fa fa-paragraph" ></i> </a>'
          break;
          default:
              break;
      }
    }
  }

app.use(router).mount('#app');
