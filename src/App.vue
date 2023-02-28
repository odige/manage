<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary bg-body-tertiary sticky-top bg-primary-border-subtle"
      v-show="!(path === '/')">
      <div>

        <button id="btn" class="navbar-toggler mx-3 d-block-inline d-md-none " type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <i class="bi bi-list"></i>
        </button>
        <a class="navbar-brand m-3">后台管理</a>
        <div class="offcanvas offcanvas-start d-block-inline d-md-none" data-bs-scroll="true" data-bs-backdrop="false"
          tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">后台管理</h5>
            <button type="button" class="btn-close" id="close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div id="body" class="offcanvas-body">
            <div class="side  d-flex flex-column">
              <div class="box d-flex flex-row position-relative p-1" v-for="view in views" :key="view.name"
                @click="to_(view.id)">
                <h4 class="text-center icon my-2 ms-1"><i :class=view.i></i></h4>
                <p class="text my-auto ps-3 stretched-link click">{{ view.name }}</p>
              </div>
              <div class="box d-flex flex-row mt-auto click">
                <h4 class="text-center icon my-3"><i class="bi bi-indent"></i></h4>
                <p class="text my-auto ps-3 " @click="to_('')">退出登录</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>

    <div v-show="!(path === '/')">
      <div class="bottm flex-row fixed-bottom d-none d-md-block">
        <div class="side  d-flex flex-column">
          <div class="box d-flex flex-row position-relative p-1" v-for="view in views" :key="view.name"
            @click="to_(view.id)">
            <h4 class="text-center icon my-2 ms-1"><i :class=view.i></i></h4>
            <p class="text my-auto ps-3 stretched-link click">{{ view.name }}</p>
          </div>
          <div class="box d-flex flex-row mt-auto click" @click="to_('')">
            <h4 class="text-center icon my-3"><i class="bi bi-indent"></i></h4>
            <p class="text my-auto ps-3 ">退出登录</p>
          </div>
        </div>
      </div>
    </div>
    <div class="view" v-show="!(path === '/')">
      <router-view></router-view>
    </div>
    <div v-show="(path === '/')">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { _push } from "@/scripts/page";
export default {
  name: 'App',
  data() {
    return {
      path: '',
      views: [{ i: "bi bi-bag-fill", name: "商品管理", id: "home" },
      { i: "bi bi-tag-fill", name: "TAG管理", id: "tag" },
      { i: "bi bi-box2-fill", name: "订单状态", id: "order" },
      { i: "bi bi-check-circle-fill", name: "结束订单", id: "accomplish" }],
    }
  },
  methods: {
    to_(id) {

      _push(window, id)

    },
  },
  mounted() {
    this.path = this.$route.path
  },

  watch: {
    $route(to) {
      this.path = to.path
    }
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");

#app {
  min-height: 100vh;
  background-color: #eeeeee;
}

i {
  color: #000000;
}

.bottm {
  height: calc(100% - 46.5px);
  width: 200px;
}

.click {
  cursor: pointer;
}

.side {
  height: 100%;
  width: 200px;
  background-color: #ffffff;
  left: 50px;
  transition: all 0.2s;
}

.side>.box>.icon {
  width: 55px;
}

.row {
  background-color: #fff;
  width: 100%;
}

.side>.box:hover {
  background-color: #e9f2f9;
  color: #40a9ff;
}

.side>.box:hover>.icon>i:nth-child(n) {
  color: #40a9ff;
}

@media (min-width: 768px) {
  .view {
    padding-left: 230px;
  }
}

.d-block {
  display: none;
}

#offcanvasNavbar {
  --bs-offcanvas-width: 210px;
}

#body {
  padding: 0px;
}
#btn{
  border:none;
}
#btn>i{
  color: #fff;
}
#btn:focus{
  box-shadow:none;
}
#close:focus{
  box-shadow:none;
}
</style>
