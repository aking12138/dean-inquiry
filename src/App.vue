<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    sessionStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIwMDk5OTkiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiY29tcGFueSI6ImhpcCIsImV4cCI6MTYzODkyOTg0MSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjI1MzZhZDRjLTdjODgtNDFmNy05YTIwLTdiYjUyYmFmNTA2NCIsImNsaWVudF9pZCI6IkhpcE1hbmFnZXIifQ.unFIWIvK4FoBD6Dh1ik1HBnZk5_n-mWKV79xTpjCo1Q"
    );
    sessionStorage.setItem("name", "009999");
  },
};
</script>
