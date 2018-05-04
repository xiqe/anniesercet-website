<template>
  <div id="app">
    <header-tpl/>
    <nuxt/>
    <footer-tpl/>
  </div>
</template>

<script>
  import 'assets/less/reset.less'
  import 'assets/less/static.less'
  import 'assets/less/index.less'
  import 'assets/less/header.less'
  import 'assets/less/footer.less'
  import 'assets/less/mobile.css'

  import HeaderTpl from '~/components/header'
  import FooterTpl from '~/components/footer'

  export default {
    components: {
      HeaderTpl,
      FooterTpl
    }
  }
</script>
