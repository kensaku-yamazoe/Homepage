<template>
    <h1>test2</h1>
</template>


<script>
// jQueryは読み込み済み前提
$(function(){
  $('.btn_menu').click(function(){
    $('nav').toggleClass('open');
    }
  });
})
</script>


<style>
nav {
    width: 312px;
    height: 100%;
    transition: all 0.2s;
    transform: translate(312px);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    background-color: #FFF;
}
nav.open {
    transform: translate(0); 
}
</style>