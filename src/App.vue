<template>
  <div dir="rtl">
    <!-- <v-btn color="#5865f2" size="small" variant="flat" @click="printDownload">Print Download</v-btn> -->

    <v-app>

      <v-content>
        <dark-template-container />
      </v-content>
    </v-app>

  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'

import DarkTemplateContainer from '@/views/dark-template/Container'

export default {
  name: 'App',
  components: { DarkTemplateContainer, VueHtml2pdf },
  data() {
    return {}
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf()
    }, printDownload() {
      let w = window.open()
      w.document.write(this.$refs.DownloadComp.$el.innerHTML)
      w.document.close()
      w.setTimeout(function () {
        w.print()
      }, 1000)
    }
  },
}
</script>
<style ></style>