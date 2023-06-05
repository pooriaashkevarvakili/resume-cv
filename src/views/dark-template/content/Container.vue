<template>
  <v-card color="grey lighten-4" light>
    <v-card-text>
      <content-section class="iran-sans" title="درباره من">
        سه سال سابقه کار در برنامه نویسی وب،(nuxt,js-vue(end-front دارم. تا کنون با تیم های
        پنج تا پانزده نفر همکاری کرده ام. برای کسب مهارت های جدید اشتیاق دارم و برای
        پیشرفت خود تلاش میکنم
      </content-section>
      <content-section v-if="prouds" title="سابقه کار">
        <v-layout v-for="(proud, i) in prouds" :key="i">

          <v-flex md11 xs9>
            <p>
              <strong>{{ proud.icon }}</strong><br>
              <strong>{{ proud.text }}</strong><br>
              <strong>{{ proud.location }}</strong><br>
              <strong>{{ proud.time }}</strong><br>
              <small>{{ proud.source }}</small><br>
              <a>{{ proud.link }}</a><br>
            </p>
          </v-flex>
        </v-layout>
      </content-section>


    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name: 'MainContent',
  components: { ContentSection },
  data: () => ({
    prouds: [
      {
        icon: 'Frontend developer vuejs nuxtjs',
        text: 'رادار361',
        location: 'ایران /اصفهان',
        source: 'درشرکت رادار361که یک استارتاپ متمرکز بررزرو بلیت قطار،پرواز،اقامتگاه وتوراست،من به طراحی وتوسعه پنل مدیریت بخش مشتری (csr)وبسایت های تجارت الکترونیک  بارندرینگ سمت سرور (ssr) بااستفاده از بوت استرپ ویوجی اس ناکس جی اس پرداختم',
        time: 'شش ماه',
        link: 'https://radar361.com/'
      },
      {
        icon: 'Frontend developer vuejs nuxtjs',
        text: 'رادار361',
        location: 'ایران /اصفهان',
        source: 'درشرکت رادار361که یک استارتاپ متمرکز بررزرو بلیت قطار،پرواز،اقامتگاه وتوراست،من به طراحی وتوسعه پنل مدیریت بخش مشتری (csr)وبسایت های تجارت الکترونیک  بارندرینگ سمت سرور (ssr) بااستفاده از بوت استرپ ویوجی اس ناکس جی اس پرداختم',
        time: 'شش ماه',
        link: 'https://radar361.com/'
      },
      {
        icon: 'mdi-timer-sand',
        text: 'Saved +110 days of time of students, writers and etc!',
        source: '(Delix.ir service usages)',
      },
      {
        icon: 'mdi-account-multiple',
        text: 'Tried to cover small part of 7 people expenses.',
        source: '(My awesome colleagues)',
      },
    ],
    educations: [
      {
        from: '2015',
        to: '2019 (not finished yet)',
        title: 'Bachelor\'s degree, Information Technology',
        location: 'Seraj University',
        description: 'Became a member of University Academic Association of Computer Science',
      },
    ],
    skills: [
      {
        title: 'PHP',
        icon: 'mdi-language-php',
        value: 95,
      },
      {
        title: 'JavaScript',
        icon: 'mdi-language-javascript',
        value: 80,
      },
      {
        title: 'Laravel Framework',
        icon: 'mdi-laravel',
        value: 90,
      },
      {
        title: 'Vue.js Framework',
        icon: 'mdi-vuejs',
        value: 90,
      },
      { divider: true },
      {
        title: 'Ubuntu Server',
        icon: 'mdi-ubuntu',
        value: 70,
      },
      {
        title: 'CentOS Server',
        icon: 'mdi-linux',
        value: 47,
      },
      {
        title: 'Web Application Security',
        icon: 'mdi-shield-lock',
        value: 80,
      },
      {
        title: 'Test Driven Development',
        icon: 'mdi-test-tube',
        value: 26,
      },
      {
        title: 'Continuous Integration / Continuous Delivery',
        icon: 'mdi-truck-fast',
        value: 35,
      },
      {
        title: 'Git',
        icon: 'mdi-git',
        value: 67,
      },
      { divider: true },
      {
        title: 'Hardware Development',
        icon: 'mdi-chip',
        value: 29,
      },
      {
        title: 'C/C++',
        icon: 'mdi-language-cpp',
        value: 38,
      },
      { divider: true },
      {
        title: 'Leadership',
        icon: 'mdi-account-group',
        value: 68,
      },
      {
        title: 'Content Marketing (+340 articles)',
        icon: 'mdi-text',
        value: 96,
      },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}

.progress {
  margin-top: 0.1rem;
}

.iran-sans {
  font-family: 'IRANSans'
}
</style>
