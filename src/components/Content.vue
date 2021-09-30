<template>
 <div class="content">
    <div class="container">
        <div class="row">
            <div class="col m12 l6 s12">
                 <a href="" class="logoC left"></a>
                   <!-- <button class="logoC left" @click="navigate">connexion</button>  -->
            </div>
            <div class="col l5 offset-l1 s12">
                <div class="form Connect">

                     <i class="large material-icons">account_circle</i>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate"  placeholder="Email">
                            <label for="email" ></label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                                <input id="password" type="password" class="validate" placeholder="Password">
                                <label for="password" aria-placeholder="password"></label>
                        </div>
                       
                    </div>
                   <div class="row">
                       <div class="col offset-s2 s2">
                           <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                <!-- <i class="material-icons right">Valider</i> -->
                            </button>
                       </div>
                        <div class="col offset-s3 s3">
                            <button class="btn waves-effect waves-light" @click="onRec" >Register 
                                <!-- <i class="material-icons right">Valider</i> -->
                            </button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>

export default {
    emits:['navigate'],
    name: 'c-Content',

    methods: {
        onRec(){
            this.$emit('navigate','Register');
        }

    }
}
</script>

<style lang="scss">
.content {
    width: 100%;
    .container {
        width: 100%;
        // .mat-form-field-outline,
        // .mat-form-field-empty.mat-form-field-label,
        // .mat-form-field-label,
        // .mat-form-field-underline,
        // .mat-input-element,
        ::placeholder {
            color: black !important;
        }
        .logoC {
        background: url('D:/i1/workshop/src/assets/logoC.png') no-repeat; 
        width: 380px;
        height: 420px;
        background-size: contain;

        }
        .Connect {
            width: 100%;
            height:420px;

            .row {
                .input-field  {
                    .validate {
                        background-color: white;
                        border-radius: 15px;
                        height:50px;
                        width: 60%;
                        text-align: center;
                        font-weight: bold;
                       
                        

                    }
                    
                }
            }
        }
    }
}

    
</style>