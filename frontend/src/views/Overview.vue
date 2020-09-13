<template>
  <div style="margin-top: 30px;">
    <!-- 좌측 Main -->  
    <div class="leftmain" fluid style=" margin-left: 70px;">
      <b-row class="step" style="margin-left: 0px;">데이터 가져오기</b-row>
      <b-form-group style="margin-top: 15px; font-size: 1.1em;">
        <b-form-radio v-model="loadmethod" value="A" style="margin-bottom: 15px;">Minio에서 데이터 가져오기</b-form-radio>
        <b-form-radio v-model="loadmethod" value="B">컴퓨터에서 파일 업로드</b-form-radio>
      </b-form-group>

      <!-- 컴퓨터에서 파일 업로드할 경우 -->
      <div v-if="loadmethod=='B'"> 
        <b-form-file
        style="width:500px;"
        size="sm"
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file..."
        no-drop="true"
        accept=".csv"/>
        <div v-if="file!=null"  style="margin-left:435px; margin-top: 5px;">
          <b-button size="sm" variant="white" class="custombtn">가져오기</b-button>
        </div>
      </div>
    </div>

    <!-- 우측 Main -->
    <div class="rightmain">
      <b-row style="font-size:1.2em; font-weight:bolder;">Result</b-row>
  

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
        loadmethod: '',
        file: null,
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
