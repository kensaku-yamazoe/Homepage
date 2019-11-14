<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <button class="btn m-5">test</button>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name: 'App',
  components:{
    Header
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.btn{
  width: 200px;
  color:  #e5e5e9;
  border: 1px solid  #e5e5e9;
}
.btn:hover{
  background-color:  #e5e5e9;
  color: white;
  transition: .3s;
}
</style>
