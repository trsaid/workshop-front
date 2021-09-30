<template>
  <div class="content">
        <div class="container">
            <div class="row">
            <div class="col l6 s12">
                
                 <!-- <a href="" class="logoC left"></a> -->
                   <!-- <button class="logoC left" @click="navigate">connexion</button>  -->
            </div>
            <div class="col 14 offset-l2 s12">

            </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
    name: 'v-Connexion',

//     methods:{
//     navigte:function(navigateTo){
//       this.$emit('navigate', 'v-Connexion');
//     }
//   },
}
</script>


<style lang="scss">
.content {
    width: 100%;
    .container {
        width: 100%;

        .logoC {
        background: url('D:/i1/workshop/src/assets/logoC.png') no-repeat; 
        width: 200px;
        height: 165px;
        background-size: contain;

        }


    }

}
    
</style>