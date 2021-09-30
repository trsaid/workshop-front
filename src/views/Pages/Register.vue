<template>
 <div class="content">
    <div class="container">
        <div class="row">
            <div class="col m12 l6 s12">
                 <a href="" class="logoC left"></a>
                   <!-- <button class="logoC left" @click="navigate">connexion</button>  -->
            </div>
            <div class="col l5 offset-l1 s12">
                <div class="form Register">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="firstname" type="firstname" class="validate"  placeholder="Firstname">
                            <label for="firstname" ></label>
                        </div>
                        <div class="input-field col s12">
                            <input id="lastname" type="lastname" class="validate"  placeholder="Lastname">
                            <label for="lastname" ></label>
                        </div>
                        <div class="input-field col s12">
                            <input id="username" type="username" class="validate"  placeholder="Username">
                            <label for="username" ></label>
                        </div>
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate"  placeholder="Password">
                            <label for="password" ></label>
                        </div>
                        <div class="input-field col s12">
                            <input id="confirm password" type="confirm password" class="validate"  placeholder="Confirm Password">
                            <label for="confirm password" ></label>
                        </div>
                        <div class="input-field col s12">
                            <input id="phone number" type="phone number" class="validate"  placeholder="Phone number">
                            <label for="phone number" ></label>
                        </div>
                    </div>
                    <div class="row">
                       <div class="col offset-s2 s2">
                           <button class="btn waves-effect waves-light" type="submit" name="action">Valider
                                <!-- <i class="material-icons right">Valider</i> -->
                            </button>
                       </div>
                        <div class="col offset-s3 s3">
                            <button class="btn waves-effect waves-light" @click="onReturn" >Retour 
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
    emits:['master'],
    name: 'v-Register',

    methods: {
        onReturn(){
            this.$emit('navigate','Content');
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
        background: url('../../assets/logoC.png') no-repeat; 
        width: 380px;
        height: 420px;
        background-size: contain;

        }
        .form {
                background: rgba(36, 41, 164, 0.6);
                border-radius: 30px;
                box-sizing: border-box;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                color:white;
            &.Register{
                width: 100%;
                height:640px;
                 padding-top: 30px;

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
}

    
</style>