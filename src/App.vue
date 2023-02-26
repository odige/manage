<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary bg-body-tertiary sticky-top bg-primary-border-subtle">
      <div>

        <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <i class="bi bi-list"></i>
        </button>
        <a class="navbar-brand m-3" href="#">后台管理</a>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
          id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active text-dark" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item text-dark" href="#">Action</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item text-dark" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>

    <div class="bottm flex-row fixed-bottom">
      <div class="side  d-flex flex-column">
        <div class="box d-flex flex-row position-relative p-1" v-for="view in views" :key="view.name"
          @click="to_(view.id)">
          <h4 class="text-center icon my-2 ms-1"><i :class=view.i></i></h4>
          <p class="text my-auto ps-3 stretched-link click">{{ view.name }}</p>
        </div>
        <div class="box d-flex flex-row mt-auto click">
          <h4 class="text-center icon my-3"><i class="bi bi-indent"></i></h4>
          <p class="text my-auto ps-3 ">退出登录</p>
        </div>
      </div>
    </div>
    <div class="view">
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
      views: [{ i: "bi bi-bag-fill", name: "商品管理", id: "home" },
      { i: "bi bi-tag-fill", name: "TAG管理", id: "tag" },
      { i: "bi bi-box2-fill", name: "订单状态", id: "order" },
      { i: "bi bi-check-circle-fill", name: "结束订单", id: "accomplish" }],
    }
  },
  methods: {
    to_(id) {

      _push(window, id)

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
}

.click {
  cursor: pointer;
}

.side {
  height: 100%;
  width: 220px;
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

.view {
  padding-left:240px;
  
}
</style>
