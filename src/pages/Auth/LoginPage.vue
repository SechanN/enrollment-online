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
                                 <h2 class="text-3xl text-uppercase q-my-none text-weight-regular tes">Login</h2>
                            </div>
                        </div>
                    </q-card-section>
                     <q-card-section>
                        <q-form class="q-gutter-md">
                            <div>
                                <q-input label="Username" name="name" :type="text" v-model="form.name">
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
                                    <router-link class="text-white" to="/register">Belum punya akun?</router-link>
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
            name: '',
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.tes {
    font-family: 'Poppins', sans-serif;
}

.wave {
    position: fixed;
    width: 50%;
    height: 30%;
    left: 0;
    bottom: 0;
    z-index: -1;
}
</style>