<template>
  <div
    v-if="questionRender !== null"
    style="
      border: 1px solid black;
      border-radius: 10px;
      background-color: white;
      margin-left: 30%;
      margin-right: 30%;
    "
  >
    <h1>{{ questionRender[step].name }}</h1>
    <h2>{{ questionRender[step].question }}</h2>
    <div class="choices">
      <div
        class="choice"
        v-for="(item, index) in questionRender[step].choice"
        :key="index"
        style="
          border: 1px solid black;
          border-radius: 10px;
          padding: 10px;
          margin-left: 30%;
          margin-right: 30%;
          margin-top: 2%;
        "
      >
        <input
          type="radio"
          :id="'choice_' + (index + 1)"
          name="answer"
          :value="item.score"
          v-model="scoreResult"
        />
        <label for="choice_1">{{ item.choice_ques }}</label>
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
        v-on:click="previousQuestion()"
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
        v-on:click="nextQuestion()"
      >
        ต่อไป
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questionRender: null,
      step: 0,
      scoreResult: 0,
      scoreMap: {},
    };
  },
  props: ["question"],
  mounted() {
    this.questionRender = this.question;
  },
  watch: {
    question() {
      this.questionRender = this.question;
    },
    // scoreMap() {
    //   console.log(this.scoreMap);
    // },
  },
  methods: {
    nextQuestion() {
      if (this.step < 5) {
        this.scoreMap = {
          ...this.scoreMap,
          ["no" + this.step]: this.scoreResult,
        };
        this.step += 1;
        document.getElementById("choice_1").checked = false;
        document.getElementById("choice_2").checked = false;
        document.getElementById("choice_3").checked = false;
      } else {
        this.scoreMap = {
          ...this.scoreMap,
          ["no" + this.step]: this.scoreResult,
        };
        this.$router.push({
          path: "/channel",
          query: { score: JSON.stringify(this.scoreMap) },
        });
      }
    },
    previousQuestion() {
      if (this.step > 0) {
        this.step -= 1;
      }
    },
  },
};
</script>
