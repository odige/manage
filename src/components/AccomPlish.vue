<template>
    <div id="accomplish">
        <div class="row ">
            结束订单
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccomPlish',
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

#accomplish {
    min-height: calc(100vh - 46.5px);
    background-color: #ffffff;
}
</style>
