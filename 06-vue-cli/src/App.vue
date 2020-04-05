<template>
    <div class="container">
        <appHeader></appHeader>
        <hr>
        <div class="row">
            <Servers></Servers> <!-- can also use servers -->
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header, // without -
            Servers, //ES6 shorthand
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
