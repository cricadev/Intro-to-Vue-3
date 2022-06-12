app.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    }
  },
  template: 
    /* html */
  `<p >This product is amazing 
  <br>it's details: {{detailedText}}</p>`,

 computed: {
  detailedText(){
    return this.details;
  }
 }
})