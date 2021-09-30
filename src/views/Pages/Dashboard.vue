<template>
<div class="dashboard">
    <header class="header">
        <div class="row">
            <div class="col s12 m12 l12">
                <div class="col offset-s1 s11">
                    <button class="btn waves-effect waves-light deco right" >Log Out
                    </button>
                    <div class="profile left">
                        <a href="" class="picto">Welcome</a>
                    </div>
                </div>
            </div>
        </div>
    </header>

  <div class="container">
      <Carousel/>
    
  </div>


   <footer>
       <Footer />
   
  </footer>
</div>
    
</template>

<script>
import Footer from "../../components/Footer.vue"
import Carousel from "../../components/Carousel.vue"

 
export default {
    name: 'v-Dashboard',

    data() {
        return  {

        }
    },

    components : {
        Footer,
        Carousel
    },
    methods : {
        
    },
    
}
</script>



<style lang="scss">

.dashboard{
  min-height:50vh;
  & > .container{
    min-height: calc(100vh - 150px - 150px);
    display:flex ;
    text-align: center;
    align-items: center;
    ;
  }
}
.header {
    width: 100%;
    max-width: initial;
    height: 150px;
    background: rgba(36, 41, 164, 0.6);
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .row {
        .name {

        }
        .deco {
            text-align: center;
            align-items: center;
            margin-top: 40px;

        }
        .profile {
            text-align: center;
            align-items: center;
            margin-top: 40px;
        

        }
        .picto {
            font-weight: 100;
            font-size: xx-large;
        }
    }
    
}
    
</style>