<template>
    <div id="NewsSection" class="row mt-md-5 mt-sm-5 mt-xs-5">

        <div class="col-lg-6 col-xs-12" v-for="(notis, index) of noticias" :key="index">

            <div class="contenedorNoti">

                <div class="p-3">

                    <img :src="notis.image" alt="imagen noticias" height="175">

                </div>

                <div ckass="p-2">
                    <div class="contenedorNoticias">

                        <h5>{{ notis.title }}</h5>

                        <p>
                            <br>
                            {{ notis.description }}
                        </p>

                    </div>
                    

                </div>

            </div>

            <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">

                <a :href="notis.url" target="_blank" class="btn btn-outline-info">Info</a>
                
            </div>
            
        </div>

     </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: "NewsSection",
        data(){
            return{
                noticias: null
            }
        },
        mounted(){
            axios.get('https://gnews.io/api/v4/search?q=nasa&token=96a0b9668eb23dedcb3bc6e8c2712e0c&lang=es')
            .then(response => {
                (this.noticias = response.data.articles.slice(0,4))
            })
        }
    }
</script>

<style scoped>

    h1{
    margin: 50px;
    text-align: center;
    }

    .contenedorNoti{
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .contenedorNoticias{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contenedor{
    margin: 50px;
    margin-left: 20%;
    margin-right: 20%;
    }

    .imgnot{
    display: block;
    margin: auto;
    }

    .parrafonot{
    padding-top: 20px;
    font-size: larger;
    text-align: justify;
    margin-left: 8%;
    margin-right: 8%;
    }

    .imgnot{
    width: 40em;
    height: 35em;
    align-items: center;
    }

    .titlenot{
    text-align: center;
    font-size: 40x;
    color: black;
    padding: 20px;
    font-style: oblique;
    }
</style>