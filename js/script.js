// Genera 10 mail tramite api e
// stampale in una lista

var root= new Vue({
el: '#root',

data: {
  mailList:[],

},
mounted: function(){
  for(let i=0; i<10;i++){
  axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (log)=> {
      this.mailList.push(log.data.response);
    });
  }
  console.log( this.mailList);
}

})
