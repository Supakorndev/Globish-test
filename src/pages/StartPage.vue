<template>
  <img src="../assets/test.png" alt="" />
  <div style="padding-top: 2%; padding-bottom: 5%">
    <button
      style="
        margin-left: 2%;
        padding: 10px;
        width: 20%;
        background-color: #ffd700;
        border-radius: 10px;
        border: 1px solid black;
      "
      v-on:click="nextPage()"
    >
      เริ่มเลย
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    nextPage() {
      this.$router.push("/question");
    },
  },
};
</script>
