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
import {fetchAllComments,postComment,deleteAllComments} from '../Api'
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
        let res=await deleteAllComments()
    },
    async addItem(data){
        if (!this.messages){
          this.messages=[]
        }
        
        let res= await postComment(data,undefined)
        this.messages.push(data)
    }
  },
  async mounted(){
     let comments= await fetchAllComments()
     this.messages=comments
  },
  
}
</script>

<style>
body{
  background-color:azure;
}
</style>