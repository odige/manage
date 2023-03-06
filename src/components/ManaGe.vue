<template>
  <div id="manage">
    <div class="row ">
      <div>
        <h5 class="mx-3 my-4">商品管理</h5>
      </div>
      <div class=" col-11 mx-auto">
        <div class="hstack gap-3">
          <select class="form-select option" aria-label="Default select example">
            <option selected><span>id升序</span></option>
            <option value="1"><span>id降序</span></option>
            <option value="2"><span>价格升序</span></option>
            <option value="3"><span>价格降序</span></option>
          </select>
          <div class="input-group ms-auto">
            <input type="text" class=" form-control border-2" placeholder="搜索" v-model="search">
            <span class="input-group-text" style="display: inline;"><i class="bi bi-search"></i></span>
          </div>
          <button type="button" class="btn btn-primary add" title="添加商品" data-bs-toggle="modal"
            data-bs-target="#AddProduct" @click="renovate"><i class="bi bi-brush-fill"></i></button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th class="col">序号</th>
              <th class="col">图片</th>
              <th class="col">名字</th>
              <th class="col">价格</th>
              <th class="col">库存</th>
              <th class="col">状态</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(list, index) in filterList" :key="index" :index="String(index)" class="box click"
              data-bs-toggle="modal" data-bs-target="#Product" @click="revise(list)">
              <th scope="row">{{ index + 1 }}</th>
              <td><img class="rounded"></td>
              <td class="text-truncate" style="max-width: 60px;">{{ list.name }}</td>
              <td class="text-truncate" style="max-width: 60px;">{{ list.price }}</td>
              <td class="text-truncate" style="max-width: 60px;">{{ list.stock }}</td>
              <td v-if="list.status == 1">在售</td>
              <td v-if="list.status == 2">下架</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>

    <div class="modal fade" id="AddProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">添加商品</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label class="mb-2">商品名：</label>
            <input type="product_name" class="form-control rounded mb-3" placeholder="商品名" v-model="newproduct.name">
            <div class="input-group  mb-3">
              <label class="my-auto">标签：</label>
              <input type="Product_subtitle" class="form-control rounded subtitle" v-model="newproduct.subtitle">
            </div>
            <div class="input-group  mb-3">
              <label class="my-auto">价格：</label>
              <input type="Product_price" class="form-control rounded subtitle" placeholder="价格"
                v-model="newproduct.price">
            </div>
            <div class="input-group  mb-4">
              <label class="my-auto">库存：</label>
              <input type="Product_stock" class="form-control rounded subtitle" placeholder="库存数量"
                v-model="newproduct.stock">
            </div>


            <div class="hstack">
              <div class="col-6">
                <h6>添加商品图片</h6>
                <input class="col-12" type="file" id="formFileMultiple" multiple>
              </div>
              <div class="col-6">
                <h6>添加详情图片</h6>
                <input class="col-12" type="file" id="formFileMultiple" multiple>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="addproduct(newproduct)" data-bs-dismiss="modal"
              v-if="btn">添加</button>
            <button type="button" class="btn btn-primary" disabled data-bs-dismiss="modal" v-if="!btn">添加</button>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade" id="Product" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">修改</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label class="mb-2">商品名：</label>
            <input type="reviseproduct_name" class="form-control rounded mb-3" placeholder="商品名"
              v-model="reviseproduct.name">
            <div class="input-group  mb-3">
              <label class="my-auto">标签：</label>
              <input type="reviseproduct_subtitle" class="form-control rounded subtitle" v-model="reviseproduct.subtitle">
            </div>
            <div class="input-group  mb-3">
              <label class="my-auto">价格：</label>
              <input type="reviseproduct_price" class="form-control rounded subtitle" placeholder="价格"
                v-model="reviseproduct.price">
            </div>
            <div class="input-group  mb-4">
              <label class="my-auto">库存：</label>
              <input type="reviseproduct_stock" class="form-control rounded subtitle" placeholder="库存数量"
                v-model="reviseproduct.stock">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="renovate">取消</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="revisep(delproduct)">提交</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" data-bs-toggle="modal"
              data-bs-target="#Del">删除商品</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="Del" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">删除商品</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center my-2 mx-auto">
            确认删除此商品？
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="del(delproduct)">删除</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'ManaGe',
  data() {
    return {
      search: '',
      btn: true,
      delproduct: [],
      reviseproduct: [],
      filterList:[],
      newproduct: {
        name: '',
        subtitle: '',
        mainImage: '',
        subImages: '',
        detail: '',
        price: 0,
        stock: 0,
        status: 1
      },
      product: [{
        id: 1,
        name: 'xxxxxxx',
        subtitle: '',
        mainImage: '',
        subImages: '',
        detail: '',
        price: 250,
        stock: 99,
        status: 1
      }, {
        id: 2,
        name: '1',
        subtitle: '',
        mainImage: '',
        subImages: '',
        detail: '',
        price: 22222222200,
        stock: 9222231231239,
        status: 1
      },]
    }
  },
  methods: {
    revise(list) {
      this.reviseproduct = list
      this.delproduct = list
    },
    renovate() {
      this.newproduct.name = '',
        this.newproduct.subtitle = '',
        this.newproduct.mainImage = '',
        this.newproduct.subImages = '',
        this.newproduct.price = 0
      this.newproduct.stock = 0
      this.filterList = this.product
    },
    revisep(show) {
      let id = this.product.forEach(item => {
        let index = 0
        if (show !== item) {
          index++
        } else {
          return index
        }
      })
      this.product[id] = this.reviseproduct
    },
    del(show) {
      let id1 = this.product.findIndex(item => {
        if (item == show) {
          return true
        }
      });
      this.product.splice(id1, 1);
      this.search = '';
      this.renovate();
    },
  },
  watch: {
    search: {
      immediate: true,
      handler(val) {
        this.filterList = this.product.filter((item) => {
          return item.name.indexOf(val) !== -1
        })
      }
    },
    components: {},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  --bs-gutter-x: 0;
}

.option {
  width: 150px;
}

td {
  height: 100px;
}

#manage {
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
</style>
