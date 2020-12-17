// Genera 10 mail tramite api e
// stampale in una lista

var root= new Vue({
el: '#root',

data: {
  mailList:[],


},
methods: {
  // pushObj: function (element) {
  //   var newObj= {
  //     mail:element,
  //     message:
  //   };
  //   this.mailList.push(newObj);
  // }
},

mounted: function(){
  for(let i=0; i<10;i++){
    var newObj = {};
    var self = this;

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (log)=> {

          axios.get('https://flynn.boolean.careers/exercises/api/random/sentence').then( (log2)=> {

              self.mailList.push({
                mail: log.data.response,
                message: log2.data.response
              });
          });
    });


        //console.log(this.mailList);
  }

}

})
