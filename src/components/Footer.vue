<template>
 <div class="footer">
        <div class="container">
            <div class="row">
            <div class="col s12 m12 l12">
            </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name: 'c-Footer'
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  .container {
    width: 100%;
    max-width: initial;
    height: 150px;
    background: rgba(36, 41, 164, 0.6);;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   
    .row {
      .logo {
      background: url('../assets/logo.png') no-repeat; 
      width: 200px;
      height: 165px;
      background-size: contain;
      
    //   @media screen and (max-with:425px){

    //   }
      }
    }
    
  }
}
  
</style>