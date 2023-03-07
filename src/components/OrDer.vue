<template>
    <div id="order">
        <div class="row">
            <div>
                <h5 class="mx-3 my-4">订单状态</h5>
            </div>
            <div class=" col-11 mx-auto">
                <div class="hstack gap-3 mb-3">
                    <select class="form-select option" aria-label="Default select example">
                        <option selected><span>默认排序</span></option>
                        <option value="1"><span>订单升序</span></option>
                        <option value="2"><span>订单降序</span></option>
                    </select>
                    <div class="input-group ms-auto">
                        <input type="text" class=" form-control border-2" placeholder="搜索" v-model="search">
                        <span class="input-group-text" style="display: inline;"><i class="bi bi-search"></i></span>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="col-2">日期</th>
                            <th class="col-2">图片</th>
                            <th class="col-2">商品</th>
                            <th class="col-4">地址</th>
                            <th class="col-2">状态</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr class="" v-for="list in filterList" :key="list.id">
                            <th scope="row">{{ list.createTime }}</th>
                            <td><img class="rounded"></td>
                            <td class="text-truncate" style="max-width: 60px;">
                                <div class="mb-2">
                                    {{ list.orderItemVoList.productName }}
                                </div>
                                <div class="">
                                    <i class="bi bi-x" style="color: #777;"></i>&nbsp;{{ list.orderItemVoList.quantity }}
                                </div>
                                <div class="text-end">
                                    <i class="bi bi-currency-yen" style="color: #777;"></i>
                                    {{ list.orderItemVoList.currentUnitPrice }}
                                </div>
                            </td>
                            <td class="text-truncate click box" style="max-width: 60px;" title="点击复制">
                                <div class="overflow-x-auto" @click="copyText(list.shippingVo)">
                                    <div class="overflow-x-auto">
                                        收件人：{{ list.receiverName }}
                                    </div>
                                    <div>
                                        联系方式：{{ list.shippingVo.receiverPhone }}
                                    </div>
                                    <div class="overflow-x-auto">
                                        地址：{{ list.shippingVo.receiverProvince }}{{ list.shippingVo.receiverCity }}{{
                                            list.shippingVo.receiverDistrict }}{{ list.shippingVo.receiverAddress }}
                                    </div>
                                </div>
                            </td>
                            <td class="text-truncate position-relative click" style="max-width: 60px;">
                                <div class="mb-3">
                                    {{ list.statusDesc }}
                                </div>
                                <div class="text-end status stretched-link" v-if="list.status == 40" data-bs-toggle="modal"
                                    data-bs-target="#Send" @click="give(list)">
                                    <i class="bi bi-box-seam"></i>发货
                                </div>
                                <div class="text-end status stretched-link" v-if="list.status > 40" data-bs-toggle="modal"
                                    data-bs-target="#Send" @click="delivery(list.shippingId)">
                                    <i class="bi bi-text-paragraph"></i>查看快递号
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="modal fade" id="Send" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel" v-if="model == 0">请输入快递单号</h1>
                            <h1 class="modal-title fs-5" id="exampleModalLabel" v-if="model == 1">快递单号</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center my-2 mx-auto">
                            <div class="input-group  my-3" v-if="model == 0">
                                <label class="my-auto">快递单号：</label>
                                <input type="Product_price" class="form-control rounded subtitle" placeholder="单号"
                                    v-model="shippingId.shippingId">
                            </div>
                            <div class="input-group  my-3" v-if="model == 1">
                                <label class="my-auto">快递单号：</label>
                                {{ shippingId }}
                            </div>
                            <p style="color: #777;" v-if="model == 0">注:提交之后无法更改，请确保输入无误</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                v-if="model == 0">取消</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-if="model == 0"
                                @click="send(shippingId)">确认</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                v-if="model == 1">确认</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'OrDer',
    data() {
        return {
            text:'',
            search: '',
            model: 0,
            shippingId: '',
            filterList: [],
            order: [
                {
                    "orderNo": '1',
                    "payment": 0,
                    "paymentTypeDesc": "string",
                    "postage": 0,
                    "status": 50,
                    "statusDesc": "string",//状态
                    "paymentTime": "string",//付款时间
                    "sendTime": "string",//发货时间
                    "createTime": "string",//订单创建时间
                    "orderItemVoList":
                    {
                        "orderNo": 0,
                        "productId": 0,
                        "productName": "string",
                        "productImage": "string",
                        "currentUnitPrice": 0,//单价
                        "quantity": 0,//数量
                        "totalPrice": 0,//总价
                        "createTime": "string"
                    }
                    ,
                    "imageHost": "string",
                    "shippingId": '123',//发货编号
                    "receiverName": "string",
                    "shippingVo": {
                        "receiverName": "string",
                        "receiverPhone": "string",
                        "receiverMobile": "string",
                        "receiverProvince": "string",
                        "receiverCity": "string",
                        "receiverDistrict": "string",
                        "receiverAddress": "string",
                        "receiverZip": "string"
                    }
                }, {
                    "orderNo": '2',
                    "payment": 0,
                    "paymentTypeDesc": "string",
                    "postage": 0,
                    "status": 40,
                    "statusDesc": "string",//状态
                    "paymentTime": "string",//付款时间
                    "sendTime": "string",//发货时间
                    "createTime": "string",//订单创建时间
                    "orderItemVoList":
                    {
                        "orderNo": 0,
                        "productId": 0,
                        "productName": "string",
                        "productImage": "string",
                        "currentUnitPrice": 0,//单价
                        "quantity": 0,//数量
                        "totalPrice": 0,//总价
                        "createTime": "string"
                    }
                    ,
                    "imageHost": "string",
                    "shippingId": '',//发货编号
                    "receiverName": "string",
                    "shippingVo": {
                        "receiverName": "string",
                        "receiverPhone": "string",
                        "receiverMobile": "string",
                        "receiverProvince": "string",
                        "receiverCity": "string",
                        "receiverDistrict": "string",
                        "receiverAddress": "string",
                        "receiverZip": "string"
                    }
                }

            ]
        }
    },
    methods: {
        copyText(t) {
            this.text="收件人:"+t.receiverName+"\n联系方式:"+t.receiverPhone+"\n地址:"+t.receiverProvince+t.receiverCity+t.receiverDistrict+t.receiverAddress;
            var textarea = document.createElement("textarea");  
            textarea.value = this.text; 
            document.body.appendChild(textarea); 
            textarea.select(); 
            document.execCommand("Copy"); 
            document.body.removeChild(textarea);
        },
        renovate() {
            this.shippingId = ''
        },
        give(obj) {
            this.renovate()
            this.model = 0
            this.shippingId = obj
        },
        send(show) {
            let id1 = this.order.findIndex(item => {
                if (item == show) {
                    return true
                }
            });
            this.order[id1].shippingId = this.shippingId.shippingId
            this.order[id1].status = 50
            this.renovate();
        },
        delivery(id) {
            this.model = 1
            this.shippingId = id
        }
    },
    watch: {
        search: {
            immediate: true,
            handler(val) {
                this.filterList = this.order.filter((item) => {
                    return item.orderNo.indexOf(val) !== -1
                })
            }
        },
        components: {},
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.option {
    width: 150px;
}

.row {
    --bs-gutter-x: 0;
}

td {
    height: 100px;
}

#order {
    min-height: calc(100vh - 46.5px);
    background-color: #ffffff;
}

.form-control {
    border-radius: 2rem;
    border: 2px solid #ced4da;
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

.input-group {
    width: 300px;
}

.subtitle {
    width: 150px;
}

.box:hover {
    background-color: #eeeeee
}

.status {
    color: #777777;
}

.status>i {
    color: #777777;
}

.click:hover>.status {
    color: #40a9ff;
}

.click:hover>.status>i {
    color: #40a9ff;
}
</style>
