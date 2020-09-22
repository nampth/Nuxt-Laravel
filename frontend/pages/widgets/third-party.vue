<template>
    <div>
        <script>
            window.fbAsyncInit = function () {
                FB.init({
                    appId: '266546391059558',
                    cookie: true,
                    xfbml: true,
                    version: 'v8.0'
                });

                FB.AppEvents.logPageView();

            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/vi_vn/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>
    </div>
</template>

<script>
    export default {
        name: "ThirdPartyJs"
    }
</script>