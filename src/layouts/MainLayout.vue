<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="navbar">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Enrollment Online
        </q-toolbar-title>

        <div>
            <q-btn class="mr-4" style="background-color: orange">
               <router-link to="/login">Login</router-link>
            </q-btn>
            <q-btn style="background-color: orange;">
               <router-link to="/register">Register</router-link>
            </q-btn>
        </div>
      </q-toolbar>
    </q-header>


    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list class="sidebar">
        <q-item-label
          header
        >
          Enrollment - Online
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
   {
    title: 'Payment',
    caption: `
     Input email & candidate name
    || VA generate
    || Payment receipt
    `,
    icon: 'money',
    link: 'payment'
  },
  {
    title: 'User Id & Verification',
    caption: 'Auto create USER ID, DEFAULT PASSWORD, REGISTRATION NO || change password',
    icon: 'key',
    link: 'verification'
  },
  {
    title: 'Data (Entry) ',
    caption: 'Candidate Data || Document Upload || Data Verification',
    icon: 'chat',
    link: 'data'
  },
  {
    title: 'Test & Result',
    caption: 'Score Entry || Grading || Selection || Announcement',
    icon: 'stats',
    link: 'question'
  },
  {
    title: 'Final Result',
    caption: 'Announcement, Policy, Document Download || Sync to Amatra Edu Finance ||  Sync to Amatra Edu Academic',
    icon: 'message',
    link: 'finalresult'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>


