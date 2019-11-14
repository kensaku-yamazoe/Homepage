<template>

    <div class="container m-5">
        <button class="btn-photo mr-auto ml-auto mb-5" @click="show = !show">
            <div class="box"></div>
        </button>
        <template>
            <div class="box-text mt-5" v-if='show'>テキストだよー</div>
        </template>
    </div>

</template>

<script>
export default {
    name: 'test1',
    data(){
        return{
            show: false
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
}
.box-text{
    height:300px;
    width:300px;
    background-color: rgb(255, 166, 31);
    text-align: center;
}


button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
}


</style>