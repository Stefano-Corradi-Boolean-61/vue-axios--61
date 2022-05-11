
const app = new Vue({

  el: '#app',


  data : {
   
    flag: false,
    errore:false,
    numeriRandom:[],
    baseUrl: 'https://flynn.boolean.careers/exercises/api/array/integers',
    min:10,
    max:100,
    items:5
  },
  methods:{
    getRandomBtAPI(){
      // compongo la query con la sitassi
      // url ? parametro = x & altroParamatro = y ecc
      // (senza spazi!!)
      axios.get(`${this.baseUrl}?min=${this.min}&max=${this.max}&items=${this.items}`)
      .then(res =>{
        console.log(res.data);
        this.numeriRandom = res.data.response;
      })
    }
  },
  mounted(){
    this.getRandomBtAPI();
    axios.get('https://flynn.boolean.careers/exercises/api/random/boolean')
     // then viene scatentato quando la chiamata è 200 e arriva il dato da remonto
      .then((resp) => {
        // resp data è tutto il contenuto del JSON che arriva.
        // in questo caso il JSON è:
        /*
        
        {
          "success":true,
          "response":false
        }

         di questo JSON mi interessa la proprità response
        */
        console.log(resp.data);
        // salvo nel mio data la proprità reposnse del data del JASON caricato
        this.flag = resp.data.response;
      })
      // catch prende qualsiasi errore
      .catch((error)=>{
        // in caso di errore non mi interessa la reposnse ma
        // gestisco l'errore con un mio output custom
        console.log(error);
        this.errore = true;
      })
  }
});

