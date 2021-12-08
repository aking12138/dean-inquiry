<template>
  <div style="height: 100%">
    <el-container>
      <el-header>
        <layouHeader />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <layoutAside />
        </el-aside>
        <el-main>
          <layoutMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from "./Aside.vue";
import layouHeader from "./Header.vue";
import layoutMain from "./Main.vue";

export default {
  name: "index",
  components: {
    layoutAside,
    layouHeader,
    layoutMain,
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
