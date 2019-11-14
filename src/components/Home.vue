<template>
<div>
  <h1 class="hello mt-3">{{ msg }}</h1>
  <div class="background">
    <img src="" class="main-img img-fluid">
  </div>

  <div class="container align-items-stretch">
    <div class="row">


      <button class="btn-photo mr-auto ml-auto mb-5" @click="showPhoto = !showPhoto">photo</button>
      <transition name="fade" mode="out-in">
        <div class="content-photo mr-auto ml-auto mb-5" v-if='showPhoto'>
            写真だよ
        </div>
      </transition>

      <button class="btn-movie mr-auto ml-auto mb-5" @click="showMovie = !showMovie">movie</button>
      <transition name="fade">
        <div class="content-movie mr-auto ml-auto mb-5" v-if='showMovie'>
            動画だよ
        </div>
      </transition>


      <button class="btn-design mr-auto ml-auto mb-5" @click="showDesign = !showDesign">design</button>
      <transition name="fade">
        <div class="content-design mr-auto ml-auto mb-5" v-if='showDesign'>
            デザインとか
        </div>
      </transition>


      <button class="btn-programing mr-auto ml-auto mb-5" @click="showPrograming = !showPrograming">programing</button>
      <transition name="fade">
        <div class="content-programing mr-auto ml-auto mb-5" v-if='showPrograming'>
            プログラミング
        </div>
      </transition>

    

    </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome',
      showPhoto: false,
      showMovie: false,
      showDesign: false,
      showPrograming: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.fade-move{
    transition: transform 1.0s;
}
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: .5s;
}
.fade-enter-to{
    opacity: 1;
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active{
    transition: .5s;
}
.fade-leave-to{
    opacity: 0;
}

.slide-enter,
.slide-leave-to{
    opacity: 0;
}
.slide-enter-active{
    animation:slide-in .5s;
    transition: 0.5s;
}
.slide-leave-active{
    animation:slide-in 0.5s reverse;
    transition: 0.5s;
}


@keyframes slide-in {
    from{
        transform: translateX(200px);
    }
    to{
        transform: rotateX(0);
    }
}

button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
}

.container{
  width: 300px;
}

.btn-photo{
  background-color: #6c94ac;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #6c94ac;
  text-decoration-line: none;
  transition: all  0.3s ease;
  min-width: 250px;
  max-width: 350px;
  left: 40%;
}
.btn-photo:hover{
  background-color: white;
  /* background-color: #e5e5e9; */
}

.btn-movie{
  background-color: #9ab4c7;
  height: 50px;
  min-width: 250px;
  max-width: 350px;
  left: 40%;
  line-height: 50px;
  text-align: center;
  color: #9ab4c7;
  text-decoration-line: none;
  transition: all  0.3s ease;
}
.btn-movie:hover{
  background-color: white;
}

.btn-design{
  background-color: #6c8cb4;
  height: 50px;
  min-width: 250px;
  max-width: 350px;
  left: 40%;
  line-height: 50px;
  text-align: center;
  color: #6c8cb4;
  text-decoration-line: none;
  transition: all  0.3s ease;
}
.btn-design:hover{
  background-color: white;
}

.btn-programing{
  background-color: #54749c;
  height: 50px;
  min-width: 250px;
  max-width: 350px;
  left: 40%;
  line-height: 50px;
  text-align: center;
  color: #54749c;
  text-decoration-line: none;
  transition: all  0.3s ease;
}
.btn-programing:hover{
  background-color: white;
}

.hello{
  padding: 150px 0 50px 0;
  color: #e5e5e9;
}
</style>
