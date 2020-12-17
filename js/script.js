// Genera 10 mail tramite api e
// stampale in una lista

var root= new Vue({
el: '#root',

data: {
  mailList:[],


},
methods: {
  pushObj: function (element) {
    var newObj= {
      mail:element,
    };
    this.mailList.push(newObj);
  }
},

mounted: function(){
  for(let i=0; i<10;i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (log)=> {
          this.pushObj(log.data.response);
    });
        console.log(this.mailList);
  }

}

})
