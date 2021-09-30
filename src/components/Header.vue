<template>
    <div class="header">
        <div class="container">
            <div class="row">
            <div class="col s12 m12 l12">
                <div class="logo left" >
                    <!-- <h4>LOCKEY</h4> -->
                    <!-- <a href="" class="logo right"></a> -->

                </div>
                 <!-- <a href="" class="logo right"></a> -->
                   <!-- <button @click="navigate">Accueil</button>  -->
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Header',

//   methods:{
//     navigte:function(navigateTo){
//       this.$emit('navigate', 'c-Content');
//     }
//   },
}
</script>

<style lang="scss">
.header {
  width: 100%;
  .container {
    width: 100%;
    max-width: initial;
    height: 150px;
    background: rgba(36, 41, 164, 0.6);
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   
    .row {
        .title {
            h4 {
                line-height: 280%;
            }
            
        }
      .logo {
      background: url('D:/i1/workshop/src/assets/lockey_logo.png') no-repeat; 
      width: 140px;
      height: 165px;
      background-size: contain;
      
    //   @media screen and (max-with:425px){

    //   }
      }
    }
    
  }
}
    
</style>