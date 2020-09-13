<template>
  <b-container fluid>
    <b-row style="margin-top:20px; margin-left:30px;" align-v="center" height="80px">
      <!-- AutoML 로고 -->
      <b-col cols="2"> 
        <img src="../assets/icons/auto.png" alt="logo" height="60px" width="60px"/> 
        <img class="img2" src="../assets/icons/automl.png" alt="logo" margin-left="10px"/>
      </b-col>
      <b-nav tabs style="margin-left: -50px;">
        <b-nav-item
          v-for="(item, idx) in items"
          class="menu"
          :key="idx"
          :active="item.state"
          @click="menuclick(idx)"
          v-model="step"
        > 
          {{item.caption}}
        </b-nav-item>
       </b-nav>
    </b-row>
  </b-container>
</template>
<script>
  import Vue from 'vue';
  export default {
      data() {
      return {
        items: [
          { caption: 'Data Loading', state: true },
          { caption: 'Data Preprocessing', state: false },
          { caption: 'Model Training', state: false },
          { caption: 'Model Analysis', state: false },
          { caption: 'Save / Predict', state: false }
        ],
        step: 0,
      }
    },
    methods: {
      menuclick(idx){
        if(this.step!=idx) {
          this.items[this.step].state = false;
          this.step = idx;
          this.items[this.step].state = true;
        }
      }
    },
  }
</script>
<style>
  .img2 {
    margin-left: 10px;
  }

  .nav-link {
    color: black!important;
  }

  .nav-link.active {
    color: #4B89DC!important;
  }

  .menu {
    font-size: 1.3em;
    margin-right: 120px;
  }

  
</style>
