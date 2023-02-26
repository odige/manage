<template>
    <div id="tag">
        <div class="row">
            <div>
                <h5 class="mx-3 my-4">All Tags</h5>
            </div>
            <div></div>
            <div>b</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaG',
    data() {
        return {
            tags: [
                {
                    "id": 0,
                    "parentId": 0,
                    "name": "鞋子",
                    "status": true,
                    "sortOrder": 0,
                    "createTime": "2023-02-26T06:08:30.706Z",
                    "updateTime": ""
                },
                {
                    "id": 0,
                    "parentId": 0,
                    "name": "裤子",
                    "status": true,
                    "sortOrder": 0,
                    "createTime": "2023-02-26T06:08:30.706Z",
                    "updateTime": ""
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
    --bs-gutter-x: 0;
}

#tag {
    min-height: calc(100vh - 46.5px);
    background-color: #ffffff;
}
</style>
