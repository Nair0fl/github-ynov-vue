new Vue({
  el: '.container',
  components: {
  	vuejsDatepicker
  },
  data () {
    return {
      commits: [],
      comptes: ["Nair0fl","Coblestone","Killy85","raphaelCharre","mathiasLoiret","thomaspich","TeofiloJ","Grigusky","Dakistos","mael61","KevinPautonnier","BenoitCochet","sfongue","ClementCaillaud","gfourny","Mokui","LordInateur","AntoineGOSSET","etienneYnov","AlexDesvallees","rudy8530","benjaminbra","mael61","alixnzt"],
      projets:["TanApp", "github-ynov-vue"],
      selectedCompte:[],
      selectedProjet:"",
      datedeb:"",
      datefin:""

    }
  },
  methods: {
    sub: function () {
      this.commits=[]
      this.datedeb=moment(this.datedeb).format("YYYY-MM-DD")
      this.datefin=moment(this.datefin).format("YYYY-MM-DD")
      date=""
      if(this.datedeb!==""){
        date+="&since="+this.datedeb
      }
      if(this.datefin!==""){
        date+="&until="+this.datefin
      }
        for(compte in this.selectedCompte){
          axios
          .get('https://api.github.com/repos/'+this.selectedCompte[compte]+'/'+this.selectedProjet+'/commits?access_token=4f4e03624a7acd7e78166b73b47fc9b8ca2de975'+date)
          .then(response => (this.commits=this.commits.concat(response.data)))}
    },
    card:function(username,repos){
        axios
        .get('https://api.github.com/repos/'+username+'/'+this.selectedProjet+'/readme?access_token=4f4e03624a7acd7e78166b73b47fc9b8ca2de975')
        .then(response => (this.commits=this.commits.concat(response.data)))
    }
  }
})