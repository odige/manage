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
          <button type="button" class="btn btn-primary add" title="添加标签" data-bs-toggle="modal"
            data-bs-target="#AddProduct" @click="renovate"><i class="bi bi-brush-fill"></i></button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th class="col-1">ID</th>
              <th class="col-3">图片</th>
              <th class="col-2">名字</th>
              <th class="col-2">价格</th>
              <th class="col-2">库存</th>
              <th class="col-2">操作</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="list in product" :key="list.id">
              <th scope="row">{{ list.id }}</th>
              <td><img class="rounded"></td>
              <td class="text-truncate" style="max-width: 60px;">{{ list.name }}</td>
              <td class="text-truncate" style="max-width: 60px;">{{ list.price }}</td>
              <td class="text-truncate" style="max-width: 60px;">{{ list.stock }}</td>
              <td class="click"><i class="bi bi-pencil-square"></i></td>
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

            <input type="product_name" class="form-control mb-3" placeholder="商品名" v-model="addproduct.name">
            <div class="hstack mx-auto">
              <input type="Product_subtitle" class="form-control me-3 mb-3 subtitle" placeholder="标签"
                v-model="addproduct.subtitle">
              <input type="Product_price" class="form-control me-3 mb-3 ms-auto" placeholder="价格"
                v-model="addproduct.price">
              <input type="Product_stock" class="form-control mb-3 ms-auto" placeholder="库存数量" v-model="addproduct.stock">
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
            <button type="button" class="btn btn-primary" @click="addtag(tag_name)" data-bs-dismiss="modal"
              v-if="btn">添加</button>
            <button type="button" class="btn btn-primary" disabled data-bs-dismiss="modal" v-if="!btn">添加</button>
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
      btn: true,
      addproduct: {
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
      },{
        id: 2,
        name: 'xxxxxxxx',
        subtitle: '',
        mainImage: '',
        subImages: '',
        detail: '',
        price: 22222222200,
        stock: 9222231231239,
        status: 1
      },]
    }
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
</style>
