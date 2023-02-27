<template>
    <div id="order">
        <div class="row">
            订单状态
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrDer',
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

#order {
    min-height: calc(100vh - 46.5px);
    background-color: #ffffff;
}
</style>
