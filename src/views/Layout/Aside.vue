<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      collapse-transition
      show-timeout
      hide-timeout
      background-color="#2189d5"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <template v-for="(item, index) in $router.options.routes">
        <template v-if="!item.hidden">
          <el-sub-menu :index="index + ''" :key="index">
            <template #title
              ><i :class="item.iconCls" style="color: white"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="child in item.children">
              <el-menu-item
                :index="child.path"
                :key="child.path"
                v-if="!child.hidden"
                class="el-menu-item-icon"
              >
                <i :class="child.iconCls" style="color: white"></i>
                <span>{{ child.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
