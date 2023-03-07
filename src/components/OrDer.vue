<template>
    <div id="order">
        <div class="row">
            <div>
                <h5 class="mx-3 my-4">订单状态</h5>
            </div>
            <div class=" col-11 mx-auto">
                <div class="hstack gap-3">
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
                <table class="table">
                    <thead>
                        <tr>
                            <th class="col-3">图片</th>
                            <th class="col-3">名字</th>
                            <th class="col-4">发货地址</th>
                            <th class="col-2">状态</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr class="box click" data-bs-toggle="modal" data-bs-target="#Product">
                            <th scope="row"></th>
                            <td><img class="rounded"></td>
                            <td class="text-truncate" style="max-width: 60px;"></td>
                            <td class="text-truncate" style="max-width: 60px;"></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'OrDer',
    data() {
        return {
            order: [
                {
                    "orderNo": 0,
                    "payment": 0,
                    "paymentTypeDesc": "string",
                    "postage": 0,
                    "statusDesc": "string",//状态
                    "paymentTime": "string",//付款时间
                    "sendTime": "string",//发货时间
                    "createTime": "string",//订单创建时间
                    "orderItemVoList": [
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
                    ],
                    "imageHost": "string",
                    "shippingId": 0,//发货编号
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
}</style>
