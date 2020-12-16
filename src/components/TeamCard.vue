<template>

    <div>

        <div class="col mt-5">

            <div class="card text-white bg-dark">

                <div class="d-flex justify-content-center p-2">
                    <img :src="member.image" alt="foto" width="350px" height="250px">
                </div>

                <div class="card-body">
                    <h5 class="card-title ">Team member {{ member.codigo }}</h5>
                    <h5 class="card-title ">{{ member.rol }}</h5>
                    <h5 class="card-title ">{{ member.nombre }}</h5>
                    <p class="card-text"> {{ member.descripcion }} </p>
                </div>

                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>

            </div>

        </div>

    </div>
    
</template>

<script>
    export default {
        name: "ServicesSection",
        props: ['member']
    }
</script>

<style scoped>

</style>
