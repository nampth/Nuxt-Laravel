<template>
    <v-app id="login" class="primary">
        <third-party-js></third-party-js>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4 lg4>
                        <v-card class="elevation-1 pa-3">
                            <v-card-text>
                                <div class="layout column align-center">
                                    <img src="../static/m.png" alt="Vue Material Admin" width="120" height="120">
                                    <h1 class="flex my-4 primary--text">Material Admin Template</h1>
                                </div>
                                <v-form>
                                    <v-text-field append-icon="person" name="login" label="Login" type="text"
                                                  v-model="model.username"></v-text-field>
                                    <v-text-field append-icon="lock" name="password" label="Password" id="password"
                                                  type="password"
                                                  v-model="model.password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn icon @click="loginWithFacebook">
                                    <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                                </v-btn>
                                <!--<v-btn icon>-->
                                    <!--<v-icon color="red">fa fa-google fa-lg</v-icon>-->
                                <!--</v-btn>-->
                                <!--<v-btn icon>-->
                                    <!--<v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>-->
                                <!--</v-btn>-->
                                <v-spacer></v-spacer>
                                <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import ThirdPartyJs from "./widgets/third-party";
    export default {
        components: {ThirdPartyJs},
        layout: 'default',
        data: () => ({
            loading: false,
            model: {
                username: 'admin@example.com',
                password: 'password'
            }
        }),
        mounted() {
            this.handleAccessToken();
        },
        methods: {
            login() {

            },
            loginWithFacebook(){
                this.$auth.loginWith('facebook');
            },
            handleAccessToken(){
                let vm = this;
                let url_string = window.location.href;

                if (url_string.indexOf('access_token=') >= 0) {
                    let token = url_string.match(/access_token[^&]*/);
                    token = token[0].split('=');
                    token = token[1];
                    vm.$axios.post('/auth/login-social', {
                        'access_token': token,
                    }).then(response => {
                        if (response.data && response.data.success) {

                        } else {

                        }
                    }).catch(err => {
                        vm.loggedIn = 0;
                        vm.$auth.logout();
                        // vm.$toast.error('Có lỗi xảy ra. Vui lòng thử lại sau');
                    });
                } else {
                    // vm.$router.push('/');
                }
            }
        }

    }
</script>
<style scoped lang="css">
    #login {
        height: 50%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        z-index: 0;
    }
</style>
