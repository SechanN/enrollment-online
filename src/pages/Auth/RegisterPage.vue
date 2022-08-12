<template>
        <img src="~assets/bg_auth_ppdb.png" class="wave" alt="wave">

        <div class="grid place-items-center h-screen ml-[240px]">
            <!-- <div class="col-0 col-md-6 flex justify-center content-center">
                <img src="~assets/login.svg" alt="login">
            </div> -->
            <div class="w-[50%]">
                <!-- v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width' : '50%' }"  -->
                <q-card class="w-[50%]">
                    <q-card-section>
                        <q-avatar size="103px" class="absolute-center shadow-10">
                            <img src="~assets/avatar.svg" alt="">
                        </q-avatar>
                    </q-card-section>
                    <q-card-section>
                        <div class="q-pt-lg">
                            <div class="col text-h6 ellipsis flex justify-center">
                                 <h2 class="text-3xl  q-my-none text-weight-regular tes font-mono">Register</h2>
                            </div>
                        </div>
                    </q-card-section>
                     <q-card-section>
                        <q-form class="q-gutter-md">
                            <div>
                                <q-input label="First Name" name="first_name" :type="text" v-model="form.first_name">
                                </q-input>
                            </div>
                            <div>
                                <q-input label="Last Name" name="last_name" :type="text" v-model="form.last_name">
                                </q-input>
                            </div>
                            <div>
                                <q-input label="Email" name="last_name" :type="email" v-model="form.email">
                                </q-input>
                            </div>
                            <div class="flex-wrap relative ">
                                <q-input label="Password" :type="form.show === true ? 'text' : 'password'" name="password" v-model="form.password" >
                                </q-input>
                                <q-btn
                                  @click="mata()" icon="visibility" class="text-white absolute top-4 right-0"
                                />
                            </div>
                            <div>
                            <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
                                <div class="text-center q-mt-sm q-gutter-lg">
                                    <router-link class="text-white" to="/login">Sudah punya akun?</router-link>
                                </div>
                            </div>
                        </q-form>
                    </q-card-section>
                </q-card>
            </div>
        </div>

</template>

<script>
import { reactive } from 'vue'
export default {
    name: 'LoginPage',

    setup() {
        const form = reactive ({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            show: false
        });
        const mata = () => {
            form.show = !form.show
        }
        return {
            form,
            mata
        }
    }
}

</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.wave {
    position: fixed;
    width: 50%;
    height: 30%;
    left: 0;
    bottom: 0;
    z-index: -1;
}

.tes {
    font-family: 'Poppins', sans-serif;
}
</style>