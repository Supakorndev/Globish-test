<template>
  <div
    style="
      border: 1px solid black;
      border-radius: 10px;
      background-color: white;
      margin-left: 30%;
      margin-right: 30%;
    "
  >
    <h1>Q7</h1>
    <h2>คุณรู้จัก Globish ผ่านช่องทางใด</h2>
    <div class="choices">
      <div class="choice">
        <input
          type="checkbox"
          id="choice_1"
          name="answer"
          value="Instagram"
          v-model="channel"
        />
        <label for="choice_1">Instagram</label>
      </div>
      <div class="choice">
        <input
          type="checkbox"
          id="choice_2"
          name="answer"
          value="Facebook"
          v-model="channel"
        />
        <label for="choice_2">Facebook</label>
      </div>
      <div class="choice">
        <input
          type="checkbox"
          id="choice_3"
          name="answer"
          value="อื่นๆ โปรดระบุ"
          v-model="channel"
        />
        <label for="choice_3">อื่นๆ โปรดระบุ</label>
      </div>
      <div v-if="choiceBool === true">
        <input
          type="text"
          id="choice_4"
          v-model="other"
          placeholder="อื่นๆ โปรดระบุ"
        />
      </div>
    </div>
    <div style="padding-top: 5%; padding-bottom: 5%">
      <button
        style="
          margin-left: 2%;
          padding: 10px;
          width: 10%;
          background-color: white;
          border-radius: 10px;
          border: 1px solid black;
        "
        type="submit"
      >
        กลับ
      </button>
      <button
        style="
          margin-left: 2%;
          padding: 10px;
          width: 20%;
          background-color: #ffd700;
          border-radius: 10px;
          border: 1px solid black;
        "
        type="submit"
        v-on:click="nextFinalPage()"
      >
        ดูผลลัพธ์
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResultPage",
  components: {},
  created() {
    this.scoreQuery = JSON.parse(this.$route.query.score);
    for (let i = 0; i < Object.values(this.scoreQuery).length; i++) {
      this.scoreTotal += Object.values(this.scoreQuery)[i];
    }
    console.log(this.scoreTotal);
  },
  data() {
    return {
      scoreQuery: {},
      channel: [],
      scoreTotal: 0,
      choiceBool: false,
      other: "",
    };
  },
  methods: {
    nextFinalPage() {
      const finalData = {
        scoreTotal: this.scoreTotal,
        channel: this.channel,
        other: this.other,
      };
      this.$router.push({ path: "/result", query: finalData });
    },
  },
  watch: {
    channel() {
      if (this.channel.indexOf("อื่นๆ โปรดระบุ") > -1) {
        this.choiceBool = true;
      } else {
        this.choiceBool = false;
      }
    },
  },
});
</script>
