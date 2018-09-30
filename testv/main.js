

const NewComponent = {
    name: 'NewComponent',
    data() {
        return {
        myColor:{
        color: '#fab',
    },
    };
},
    template: `
<div>
<h2 :style="myColor">la bamba</h2>
<label for="color"> Change color </label>
<input name="color" id="color" v-model="myColor.color"/>
</div>
`,
}


new Vue({
  el: '#app',
  components:{
      NewComponent,
  },
  data: {
    message: 'Hello Vue!',
    myColor:{
        color: 'pink',
    },
  },
    
    methods:{
        handleClick(){
            alert(`Witam`);
        },
    },
    
template:`
<div>
        <h1 :style="myColor"> {{message}}</h1>
        <button @click="handleClick">Halko</button>
        <NewComponent/>
</div>
`,
    
})

