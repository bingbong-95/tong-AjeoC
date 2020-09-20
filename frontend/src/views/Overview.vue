<template>
  <div style="margin-top: 30px;">
    <!-- 좌측 Main -->  
    <div class="leftmain" fluid style=" margin-left: 70px;">
     <b-calendar id="ex-disabled-readonly" v-model="selectedDate"/>
    </div>
    {{this.selectedDate}}

    <!-- 우측 Main -->
    <div class="rightmain">
  

    </div>
  </div>

</template>
<script>
  // import Vue from 'vue';
  export default {
    components: {
     
    },
    data() {
      return {
        selectedDate:''
      }
    },
    created() {
      this.getCurrentDate()
    },
    methods: {
      getCurrentDate: function() {
        const CurrentDate = new Date();
        const month = CurrentDate.getMonth() + 1 >= 10 ? CurrentDate.getMonth() + 1 : '0' + (CurrentDate.getMonth() + 1)    
        const date = CurrentDate.getFullYear()+'-'+(month)+'-'+CurrentDate.getDate();
        console.log(date);
        this.selectedDate = date;
      }
    }
  }
</script>
<style>
  .step {
    font-weight: bold;
    font-size: 1.3em;
  }

  .custombtn {
    color: #BDBDBD!important;
    padding: 0;
    background-color: white!important; 
    border-color: white!important;
    padding: 0px;
  }

  .custombtn:focus {
    outline: none;
  }

  .leftmain {
    float:left;
    width: 600px;
  }

  .rightmain {
    float:left;
    width: 1000px;
  }

</style>
