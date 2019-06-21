import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GameInfo from '@/components/GameInfo'
import Contact from '@/components/Contact'
import Rules from '@/components/Rules'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game_info',
      name: 'Game Information',
      component: GameInfo
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ],
  linkExactActiveClass: 'active'
})
