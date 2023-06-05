<template>
  <v-card color="grey darken-3" dark>
    <v-card-text>
      <avatar />
      <div class="text-sm-center iran-sans mb-4 mt-3">
        <h1>
          پوریا <span class="light-blue--text text--lighten-3">اشکوروکیلی</span>
        </h1>
        <span>
          front-end developer
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{ item }">
          <v-chip>


            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>

    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name: 'Sidebar',
  components: { SidebarSection, Avatar },
  data() {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'pooriavakili09@gmail.com',
            },

            {
              name: 'Birth Date',
              icon: 'mdi-cake-variant',
              text: 'jan 25, 1993',
            },
            {
              name: 'Habitation',
              icon: 'mdi-map-marker',
              text: 'Tehran, Iran',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [

            {
              icon: 'mdi-github-circle',
              text: 'github.com/pooriaashkevarvakili',
              link: 'https://github.com/pooriaashkevarvakili',
            },
            {
              icon: 'mdi-web',
              text: 'pooriavakili.ir',
              link: 'https://pooriavakili.ir/'
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'www.linkedin.com/in/pooriavakili/',
              link: 'https://www.linkedin.com/in/pooriavakili/',
            },

          ],
        },
        hobbies: {
          title: 'Skills',
          items: [

            {

              text: 'Html,css',
            },
            {

              text: 'sass,less',
            },
            {

              text: 'javascript',
            },
            {

              text: 'typescript',
            },
            {

              text: 'vuejs',
            },
            {

              text: 'Nuxt',
            },
            {

              text: 'Quasar',
            },
            {

              text: 'Vuetify',
            },
            {

              text: 'Tailwind',
            },
            {

              text: 'bootstrap',
            },
            {

              text: 'Git',
            },
            {

              text: 'Postman',
            },
            {

              text: 'Swagger',
            },
            {

              text: 'Supabase',
            },
            {

              text: 'Vuex',
            },
            {

              text: 'Pinia',
            },
            {

              text: 'Antdesign',
            },
          ],
        },

      },
    }
  },
}
</script>

<style scoped>
.sidebar {
  background: #2e2e2e;
}

.iran-sans {
  font-family: 'IRANSans'
}
</style>
