import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import xianxi from '@/components/xianxi'
import move from '@/components/move'
import movexx from '@/components/movexx'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';


Vue.use(Mint);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/xianxi',
      name: 'xianxi',
      component: xianxi
    },
    {
      path: '/move',
      name: 'move',
      component: move
    },
     {
      path: '/movexx',
      name: 'movexx',
      component: movexx
    }
  ]
})
