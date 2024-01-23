<template>
  <div
    style="
      border: 1px solid black;
      border-radius: 10px;
      background-color: white;
      margin-left: 20%;
      margin-right: 20%;
    "
  >
    <h1>ผลลัพท์ของคุณคือ</h1>
    <div v-if="resultData.scoreTotal >= 131 && resultData.scoreTotal <= 180">
      <img src="../assets/case1.png" alt="" />
    </div>
    <div v-if="resultData.scoreTotal >= 91 && resultData.scoreTotal <= 130">
      <img src="../assets/case2.png" alt="" />
    </div>
    <div v-if="resultData.scoreTotal >= 60 && resultData.scoreTotal <= 90">
      <img src="../assets/case3.png" alt="" />
    </div>
    <div>
      <h3>คุณรู้จัก Globish ผ่าน</h3>
      <h3>{{ channel }} {{ resultData.other }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resultData: {},
      channel: "",
    };
  },
  created() {
    this.resultData = this.$route.query;
    for (let i = 0; i < this.resultData.channel.length; i++) {
      if (this.resultData.channel[i] === "อื่นๆ โปรดระบุ") {
        continue;
      } else {
        this.channel += this.resultData.channel[i] + " ";
      }
    }
  },
};
</script>
