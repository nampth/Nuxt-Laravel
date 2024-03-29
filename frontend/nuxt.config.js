const pkg = require('./package')


const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    mode: 'spa',

    /*
    ** Headers of the page
    */
    head: {
        title: 'Vue Material Admin Template',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description', name: 'description', content: 'Vue Material Admin Template is a \n' +
                    '    Google Material Design inspired admin dashboard template built with Vue and Vuetify.'
            }
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            }
        ],
        script: [
            {src: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.4/echarts-en.min.js'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#3adced'},

    /*
    ** Global CSS
    */
    css: [
        '~/assets/style/theme.styl',
        '~/assets/style/app.styl',
        'font-awesome/css/font-awesome.css',
        'roboto-fontface/css/roboto/roboto-fontface.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/vuetify',
        '@/plugins/mixins/validation',
        '@/plugins/axios.js',
        '@/plugins/helpers.js',
        '@/plugins/constants.js'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        "@nuxt/http",
        "@nuxtjs/auth",
        "@nuxtjs/axios",
    ],

    /*
    ** Build configuration
    */
    build: {
        transpile: ['vuetify/lib'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
            stylus: {
                import: ["~assets/style/variables.styl"]
            }
        },

        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    },
    /*
     * authenticate
     */

    auth: {
        strategies: {
            facebook: {
                userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
                client_id: '266546391059558',
                scope: ['public_profile', 'email']
            },
        },
        redirect: {
            callback: "/login",
            home: false
        },
    },
    axios: {
        baseURL: 'http://localhost/demo-shop/backend/public/api',
        proxyHeaders: true,
        credentials: true
    },
}
