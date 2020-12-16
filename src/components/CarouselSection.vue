<template>
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
            </ol>

            <div class="carousel-inner">

                <div class="carousel-item active">

                    <img src="https://i.imgur.com/S5yvT00.jpg" alt="slider1" width="100%" height="670px">

                </div>

                <div class="carousel-item">

                    <img src="https://i.imgur.com/XyRiMvk.jpg" alt="slider2" width="100%" height="670px">
                    
                </div>

                <div class="carousel-item">

                    <img src="https://i.imgur.com/lo2AXxm.jpg" alt="slider3" width="100%" height="670px">

                </div>

            </div>

            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>

            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

        </div>
    </div>
</template>

<script>
    export default {
        name: "CarouselSection",
    }
</script>

<style scoped>

</style>