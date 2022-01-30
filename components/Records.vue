<template>
  <div class="container w-full bg-yellow-200 ">
      <div :key="i" v-for="(message,i) in this.messages" >
          <Record :message="message"/>
      </div>
      <button @click="clearAllRecords" class="m-10 bg-red-600 p-2 rounded text-white font-bold">Clear all messages</button>
  </div>    
</template>

<script>
import Record from './Record.vue';
export default {
    name:'Records',
    props:['title','messages'],
    components:{
        Record
    },
    data(){
        return {
        }
    },
    methods:{
        clearAllRecords(){
            this.$emit('clearAllRecords');   
        }
    }
}
</script>

<style>

</style>