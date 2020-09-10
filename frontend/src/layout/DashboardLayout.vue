<template>
  <div class="ml-wrapper" style="padding-left: 0px; padding-right: 0px;">
      <TopNavbar></TopNavbar>
      <Overview></Overview>
  </div>
</template>

<script>
  import TopNavbar from '../views/TopNavbar.vue'
  import Overview from '../views/Overview.vue'
  export default {
    components: {
      TopNavbar,
      Overview,
    },
    methods: {
    },
		created() {
		},
    data() {
      return {

      }
  },
}
</script>
