<template>
  <div class="container w-screen ">
      <Header/>
      <div class="main-content lg:w-9/12 lg:ml-72 ">
        <Form/>
        <Records/>
        
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
  methods:{

  }
}
</script>

<style>
body{
  background-color:azure;
}
</style>