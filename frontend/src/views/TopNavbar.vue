<template>
  <b-container fluid>
    <b-row style="margin-top:20px; margin-left:30px;" align-v="center" height="80px">
      <!-- AutoML 로고 -->
      <b-col cols="2"> 
        <img src="../assets/icons/auto.png" alt="logo" height="60px" width="60px"/> 
        <img class="img2" src="../assets/icons/automl.png" alt="logo" margin-left="10px"/>
      </b-col>
      <b-nav tabs style="margin-left: -50px;">
        <b-nav-item class="menu" active> Data Loading</b-nav-item>
        <b-nav-item class="menu">Data Preprocessing</b-nav-item>
        <b-nav-item class="menu">Model Training</b-nav-item>
        <b-nav-item class="menu">Model Analysis</b-nav-item>
        <b-nav-item class="menu">Save / Predict</b-nav-item>
       </b-nav>
      <!-- <b-col class="menu" cols="2"> Data Loading
      </b-col>
      <b-col  class="menu" cols="2"> Data Preprocessing
      </b-col>
      <b-col  class="menu" cols="2"> Model Training
      </b-col>
      <b-col  class="menu" cols="2"> Model Analysis
      </b-col>
      <b-col  class="menu" cols="2"> Save / Predict
      </b-col> -->
    </b-row>
  </b-container>
</template>
<script>
  import Vue from 'vue';
  export default {
    components: {
     
    },
    data() {
      return {
       
      }
    }
  }
</script>
<style>
  .img2 {
    margin-left: 10px;
  }

  .menu {
    font-size: 1.3em;
    margin-right: 120px;
    color: black!important;
  }
</style>
