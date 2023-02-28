<template>
    <div id="tag">
        <div class="row">
            <div>
                <h5 class="mx-3 my-4">All tags</h5>
            </div>
            <div class=" col-11 mx-auto">
                <div class="hstack gap-3">
                    <div class="input-group">
                        <input type="text" class=" form-control border-2" placeholder="搜索" v-model="search">
                        <span class="input-group-text" style="display: inline;"><i class="bi bi-search"></i></span>
                    </div>
                    <div class="vr"></div>
                    <button type="button" class="btn btn-primary add" title="添加标签" data-bs-toggle="modal"
                        data-bs-target="#AddTag" @click="renovate"><i class="bi bi-brush-fill"></i></button>
                </div>

            </div>
            <div class="col-10 mx-auto text-center ">
                <button type="button" class="btn btn-primary col m-2 rounded-pill " v-for="tag in filterList" :key="tag.id"
                    data-bs-toggle="modal" data-bs-target="#DelTag" @click="showtag(tag)">{{ tag.name }}</button>
            </div>
        </div>
    </div>

    <div class="modal fade" id="AddTag" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">添加标签</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center mb-5">
                    <input type="tag" class="form-control" placeholder="输入标签" v-model="tag_name">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="addtag(tag_name)"
                        data-bs-dismiss="modal" v-if="btn">添加</button>
                    <button type="button" class="btn btn-primary" disabled data-bs-dismiss="modal" v-if="!btn">添加</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="DelTag" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">tag</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center my-2 mx-auto">
                    <h3>{{ show_tag.name }}</h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        @click="deltag(show_tag)">删除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TaG',
    data() {
        return {
            btn: false,
            search: '',
            show_tag: '',
            tag_name: '',
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
                    id: 1,
                    parentId: 0,
                    name: "裤衩子",
                    status: true,
                    sortOrder: 0,
                    createTime: "2023-02-26T06:08:30.706Z",
                    updateTime: ""
                }, {
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
            ],
            filterList: []
        }
    },
    methods: {
        addtag(Name) {
            var now = new Date();
            this.tags.push({
                name: Name,
                status: true,
                createTime: now,
            });
        },
        renovate() {
            this.tag_name = '';
            this.filterList = this.tags
        },
        showtag(tag) {
            this.show_tag = tag
        },
        deltag(show) {
            let id1 = this.tags.findIndex(item => {
                if (item == show) {
                    return true
                }
            });
            this.tags.splice(id1, 1);
            this.search = '';
            this.renovate();
        },
    },
    watch: {

        search: {
            immediate: true,
            handler(val) {
                this.filterList = this.tags.filter((item) => {
                    return item.name.indexOf(val) !== -1
                })
            }
        },
        components: {},
        
        tag_name(val){
            if(val !== ''){
                this.btn=true
            }else{
                this.btn=false
            }
        }
    },


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

.add>i {
    color: white;
}

.taginput {
    border-color: #e9eaec;
}

.modal-footer {
    border: none;
}
</style>
