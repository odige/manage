<template>
    <div id="tag">
        <div class="row">
            <div>
                <h5 class="mx-3 my-4">All tags</h5>
            </div>
            <div class=" col-11 mx-auto">
                <div class="hstack gap-3">
                    <div class="input-group">
                        <input type="text" class=" form-control border-2" placeholder="搜索">
                        <span class="input-group-text" style="display: inline;"><i class="bi bi-search"></i></span>
                    </div>
                    <div class="vr"></div>
                    <button type="button" class="btn btn-primary add " title="添加标签"><i class="bi bi-brush-fill"></i></button>
                </div>

            </div>
            <div class="col-10 mx-auto text-center ">
                <button type="button" class="btn btn-primary col m-2 rounded-pill " v-for="tag in tags" :key="tag.id">{{tag.name}}</button>
            </div>
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
                    id: 0,
                    parentId: 0,
                    name: "鞋子",
                    status: true,
                    sortOrder: 0,
                    createTime: "2023-02-26T06:08:30.706Z",
                    updateTime: ""
                },
                {
                    id: 0,
                    parentId: 0,
                    name: "裤衩子",
                    status: true,
                    sortOrder: 0,
                    createTime: "2023-02-26T06:08:30.706Z",
                    updateTime: ""
                },{
                    name: "衣服",
                },
                {
                    name: "行李箱",
                },
                {
                    name: "玩具",
                },
                {
                    name: "生活用品",
                },
                {
                    name: "玩具车",
                },
                {
                    name: "模型",
                },
                {
                    name: "潮玩",
                },
                {
                    name: "家电",
                },
                {
                    name: "123",
                },
                {
                    name: "衣2342342服",
                },
                {
                    name: "234",
                },
                {
                    name: "123123·23",
                },
                {
                    name: "31231",
                },
                {
                    name: "1232342",
                },
                {
                    name: "24234234",
                },
                {
                    name: "23423423",
                },
                {
                    name: "212334",
                },
                {
                    name: "234",
                },
                {
                    name: "34",
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

.form-control {
    border-radius: 2rem;
    border: 2px solid #ced4da
}

.form-control:focus {
    border-color: #1976d2;
    box-shadow: none
}

.input-group-text {
    border-radius: 2rem;
    background-color: #eeeeee;
}
.add>i{
    color: white;
}
</style>
