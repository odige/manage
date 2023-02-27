<template>
  <div id="manage">
    <div class="row ">
      商品管理
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManaGe',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  --bs-gutter-x: 0;
}

#manage {
  min-height: calc(100vh - 46.5px);
  background-color: #ffffff;
}
</style>
