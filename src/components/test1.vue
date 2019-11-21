<template>
<div class="container m-5">

        <div class="box col-4" @click="$event.target.classList.toggle('slide')">クリック</div>
        <div class="box-text col-4" v-move v-if='show'>テキストだよー</div>

</div>

</template>

<script>
export default {
    name: 'test1',
    data(){
        return{
            show: true
        }
    }
}
</script>


<style scoped>
.container{
    display: flex;

}
.box{
    height:300px;
    width:300px;
    background-color: blanchedalmond;
    z-index: 5;

}
.box-text{
    height:300px;
    width:300px;
    background-color: rgb(255, 166, 31);
    text-align: center;
    z-index:1;
}


.slide{
    transform: translateX(100%);
    transition: transform 1s;
}


</style>