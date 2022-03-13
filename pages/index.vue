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
import axios from 'axios';
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
  created(){
    this.messages=[]
  },
  methods:{
    async clearAllRecords(){
        this.messages=[]
        let res=await axios.delete("http://127.0.0.1:9000/comments").then(
          response=>{
                  if(response.statusText=='OK'){
                      this.messages=[];
                      return
                  }
                  alert('An error occured!!')
            }
        )
        //await fetch("http://127.0.0.1:9000/comments",{method:'DELETE'})
        /*let parsed = JSON.stringify(this.messages);
        localStorage.setItem('messages', parsed);*/
    },
    async addItem(data){
        if (!this.messages){
          this.messages=[]
        }
        let str=JSON.stringify(data)
        let res= await axios.post("http://127.0.0.1:9000/comments",str,{headers: {'Content-Type': 'application/json',}}).then(
          response=>{
                  if(response.statusText=='OK'){
                      this.messages.push(data);
                      return
                  }
                  alert('An error occured!!')
            }
        )
        //await fetch("http://127.0.0.1:9000/comments",{method:'POST',body:str,headers: {'Content-Type': 'application/json',},})
        /*let parsed = JSON.stringify(this.messages);
        localStorage.setItem('messages', parsed);*/
    }
  },
  async mounted(){
      /*if(localStorage.getItem('messages')){
          this.messages = JSON.parse(localStorage.getItem('messages'));
      }*/
      let comments= await axios.get("http://127.0.0.1:9000/comments").then(r=>r.data)
      //await fetch("http://127.0.0.1:9000/comments").then(r=>r.json())
      this.messages=comments
  },
  
}
</script>

<style>
body{
  background-color:azure;
}
</style>