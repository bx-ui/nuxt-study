<template>
  <div>
    {{ this.$route.params.id }}
  </div>
</template>

<script>
  export default {
    asyncData({params, $axios, error}) {
      console.log(params.id)
    },
  }
</script>

<style lang="scss" scoped>

</style>