<template>
    <div class="carousel">
            <div class="carousel-item  card"  href="#one!">
                    <h4>{{title}}</h4>
                    <div class="description_logo">
                        <a href="" class="logoKey left"></a>
                            <div class="row" >
                                <label for="password" class="col s9 label" >Mot de passe  :</label>
                                <div class="input-field col s9 right">
                                    <i class="material-icons prefix  right">visibility</i>
                                    <input id="icon_prefix" type="password" class="validate" placeholder="**********">
                                </div>
                            </div>
                    </div>
            </div>
             <!-- <div class="carousel-item  card" href="#two!">

            </div>
             <div class="carousel-item  card" href="#three!">

            </div>
             <div class="carousel-item  card" href="#four!">

            </div>
             <div class="carousel-item  card" href="#five!">

            </div> -->

    
        <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
        <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
        <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
        <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
    </div>
</template>

<script>
  $(document).ready(function(){
    $('.carousel').carousel();
  });
  
export default {
    name: 'c-Carousel',

    data()  {
        return   {
            title:'title'
            
        }
    },

    

    
}
</script>

<style lang="scss">
.carousel {
    .carousel-item {
        width: 400px;
        height: 380px;
        cursor: pointer;

        & .card {
        background: rgba(36, 41, 164, 0.6);
        border: solid 10px;
        box-sizing: border-box;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        color:grey;
        } 
        .description_logo {
            margin-top: 80px;
        }

        .logoKey{
            background: url('D:/i1/workshop/src/assets/netflix.png') no-repeat; 
            width: 68px;
            height: 90px;
            background-size: cover;

        }
       

        .label {
            color: #2429A4;
            font-weight: bold;
            text-decoration: underline;
            font-size: large;
        }
        .input-field  {
            .prefix {
                margin-left: 230px;

            }

        }
        
        .validate {
            background-color: #C4C4C4 ;
        }

    }  
    
}

    
</style>