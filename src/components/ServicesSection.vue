<template>
    <div>
        <div id="servicios" class="container-fluid">

            <div class="contenedorServicios">

                <div class="col-sm-6 col-xs-12 col-lg-4 mt-5">

                    <div class="card">

                        <div class="d-flex justify-content-center p-2">

                            <img src="https://i.imgur.com/unjXn54.jpg" alt="Servicio1" width="450px" height="250px">

                        </div>

                        <div class="card-body">

                            <h5 class="card-title">Transporte de Astronautas</h5>

                            <p class="card-text">Viajes para la estacion espacial internacional, aplicando la normatividad mas exigente a nivel galaxia,
                                con el uso de la ultima tecnologia aprobada por la NASA, 100% confiable y en el menor tiempo posible</p>
                            
                            <a href="https://www.spacex.com/" target="_blank" class="btn btn-primary">Ir a Visitar</a>
                        </div>

                    </div>

                </div>

                <div class="col-sm-6 col-xs-12 col-lg-4 mt-5">

                    <div class="card">

                        <div class="d-flex justify-content-center p-2">

                            <img src="https://i.imgur.com/LxY7yGM.jpg" alt="Servicio2" width="450px" height="250px">

                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Turismo Espacial</h5>

                            <p class="card-text">Viajes a la ionosfera en un vuelo suborbital donde se garantiza una 
                                experiencia inolvidable observando la curvatura de la tierra, la oscuridad del espacio exterior y 
                                experimentar microgravedad</p>

                            <a href="https://www.airzerog.com/es/la-experiencia-del-vuelo-air-zero-g/" target="_blank" class="btn btn-primary">Ir a Visitar</a>
                        
                        </div>

                    </div>

                </div>

                <div class="col-sm-6 col-xs-12 col-lg-4 mt-5">

                    <div class="card">

                        <div class="d-flex justify-content-center p-2">

                            <img src="https://i.imgur.com/ozPfIco.jpg" alt="Servicio3" width="450px" height="250px">

                        </div>

                        <div class="card-body">

                            <h5 class="card-title">Experiencia Ultrasensorial</h5>

                            <p class="card-text">Conozca nuestros
                                paquetes de experiencia ultrasensorial del realidad aumentada simulando un viaje espacial suborbital,
                                orbital e interplanetario, visite nuestras instalaciones, denos el placer de hacer realidad sus sueños!
                            </p>

                            <a href="https://varjo.com" target="_blank" class="btn btn-primary">Ir a Visitar</a>

                        </div>

                    </div>

                </div>

            </div>

        </div> 
    </div>
</template>

<script>
    export default {
        name: "Servicios",
    }
</script>

<style scoped>
    .contenedorServicios{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    text-align: justify;
}
</style>