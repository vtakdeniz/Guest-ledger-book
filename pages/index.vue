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
    async clearAllRecords(){
        this.messages=[]
        let res=await fetch("http://127.0.0.1:9000/api/comments",{method:'DELETE'})
        if(!res.ok){
            alert('An error occured!!')
        }
        /*let parsed = JSON.stringify(this.messages);
        localStorage.setItem('messages', parsed);*/
    },
    async addItem(data){
        let str=JSON.stringify(data)
        console.log(str)
        let res=await fetch("http://127.0.0.1:9000/api/comment",{method:'POST',body:str,headers: {'Content-Type': 'application/json',},})
        if(res.ok){
            this.messages.push(data);
            return
        }
        alert('An error occured!!')
        /*let parsed = JSON.stringify(this.messages);
        localStorage.setItem('messages', parsed);*/
    }
  },
  async mounted(){
      /*if(localStorage.getItem('messages')){
          this.messages = JSON.parse(localStorage.getItem('messages'));
      }*/
      let comments=await fetch("http://127.0.0.1:9000/api/comments").then(r=>r.json())
      this.messages=comments
  },
  
}
</script>

<style>
body{
  background-color:azure;
}
</style>