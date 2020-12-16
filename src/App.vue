<template>
  <div id="app">
    <SliderSection></SliderSection>
    <CarouselSection></CarouselSection>
    <ServicesSection></ServicesSection>
    <NewsSection></NewsSection>
    
      <div id="miembros" class="container-fluid">
            <div class="row justify-content-center mb-5">
              <div class="col mt-5" v-for="(miembro, index) of Team" :key="index">
                <TeamCard :member="miembro" ></TeamCard>
              </div>
            </div>
      </div>        

    <FooterSection></FooterSection>

  </div>
</template>

<script>

  import SliderSection from './components/SliderSection.vue'
  import CarouselSection from './components/CarouselSection.vue'
  import ServicesSection from './components/ServicesSection.vue'
  import NewsSection from './components/NewsSection.vue'
  import TeamCard from './components/TeamCard.vue'
  import FooterSection from './components/FooterSection.vue'

  export default {
    name: 'App',
    components:{
      SliderSection,
      CarouselSection,
      ServicesSection,
      NewsSection,
      TeamCard,
      FooterSection
    },
    data(){
      return{
        "Team":    
          [
            {
              codigo: 1 ,
              nombre: "Sebastian Cruz" ,
              descripcion: "Geólogo junior de 24 años de la Universidad Nacional de Colombia, sin experiencia previa en desarrollo de Software.",
              rol: "Github organizer" ,
              image: "https://imgur.com/HPT15um.jpg"
            },
            {
              codigo : 2 ,
              nombre : "Felipe Gil" ,
              descripcion : "Ingeniero de Software de la Institución Universitaria Pascual Bravo; Ingeniero Espacial graduado en Harvard, Genio, domador de Leones en tiempo libre.",
              rol : "Desarrollador frontend" ,
              image : "https://i.imgur.com/cu6n6EW.jpg"
            },
            {
              codigo : 3 ,
              nombre : "Nelson Hurtado" ,
              descripcion : "Ingeniero Electronico, Universidad Santo Tomas 2001, Especialista en Automatizacion y control Industrial. Docente ITC",
              rol : "Desarrollador backend" ,
              image : "https://imgur.com/HooBtnI.jpg"
            }
          ]
      }
    }
  }
</script>

