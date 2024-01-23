<template>
  <QuestionBox :question="questionList" />
</template>
<script>
import { defineComponent } from "vue";
import QuestionBox from "../components/QuestionBox.vue";
import data from "../loadData.json";
export default defineComponent({
  name: "PersonalityTest",
  components: {
    QuestionBox,
  },
  created() {
    this.load();
  },
  data() {
    return {
      questionList: null,
    };
  },
  methods: {
    load() {
      this.questionList = data.data;
    },
  },
});
</script>
