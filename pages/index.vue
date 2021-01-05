<template>
  <div class="container">
    <h1>Index Page</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  layout: "block",
  head() {
    return {
      title: "首页"
    }
  },
  async asyncData({error, $axios}) {
    let { code, data } = await $axios.$get("http://192.168.8.32:8080/iap2-chart/home/rate")
    if(code == 0) {
      return { data }
    }
    error({statusCode:400,message:"数据查询失败"});
  },
}
</script>
