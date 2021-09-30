<template>
<div class="Master">
  <section>
    <Header />
  </section>

    <div class="container">


    <!-- <Content /> -->
    <component :is="componentTemplate" @navigate="navigte"/>
 
    </div>


  <section>
    <Footer />
  </section>

</div>
</template>


<script>
import Dashboard from '../views/Pages/Dashboard.vue'
import Header from '../components/Header.vue'
import Content from "../components/Content.vue"
import Footer from "../components/Footer.vue"
import Register from "../views/Pages/Register.vue"


export default {
  
  name: 'master',
  data:function(){
    return  {
      componentToNavigate:''
    }
  },
  methods:{
    navigte:function(navigateTo){
      this.componentToNavigate = navigateTo;
    }
  },
  components: {
    Header,
    Dashboard,
    Footer
    
  },

  computed: {
    componentTemplate:function() {
      if(this.componentToNavigate == 'Dashboard')
        return Dashboard;
      else if(this.componentToNavigate == 'Register')
        return Register;
      else if(this.componentToNavigate == 'Content')
      return Content;
      else
        return Content;

    }

  }
}
</script>

<style lang="scss">
.Master{
  min-height:50vh;
  & > .container{
    min-height: calc(100vh - 150px - 150px);
    display:flex ;
    align-items: center
    ;
  }
}

</style>
