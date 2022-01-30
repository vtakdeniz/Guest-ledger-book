<template>
  <div class="container w-screen ">
      <Header/>
      <div class="main-content lg:w-9/12 lg:ml-72 ">
        <Form @addItem="addItem"/>
        <Records @clearAllRecords="clearAllRecords" :messages="messages"/>
        
      </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Form from '../components/Form.vue'
import Records from '~/components/Records.vue'
export default {
  components: {
    Header,
    Form,
    Records
  },
  name: 'IndexPage',
  data(){
    return{
       messages:[]
    }
  },
  methods:{
    clearAllRecords(){
        this.messages=[]
        let parsed = JSON.stringify(this.messages);
        localStorage.setItem('messages', parsed);
    },
    addItem(data){
        this.messages.push(data);
        let parsed = JSON.stringify(this.messages);
        localStorage.setItem('messages', parsed);
    }
  },
  mounted(){
      if(localStorage.getItem('messages')){
          this.messages = JSON.parse(localStorage.getItem('messages'));
      }
  },
  
}
</script>

<style>
body{
  background-color:azure;
}
</style>