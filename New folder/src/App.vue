<template>
  <div dir="rtl">
    <v-app>
      <v-content>
        <dark-template-container />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import DarkTemplateContainer from '@/views/dark-template/Container'

export default {
  name: 'App',
  components: { DarkTemplateContainer },
  data() {
    return {}
  },
}
</script>
<style ></style>