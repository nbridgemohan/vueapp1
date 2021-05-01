<template>
  <div class="home">
    <img class="profile-pic" alt="profilepic" src="../assets/profilepic.jpg" />
    <Main name="Nicholas Bridgemohan" title="Full Stack Developer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    Main,
  },
};
</script>
