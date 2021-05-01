<template>
  <div class="hello">
    <p class="lead">{{ name }} | {{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "main",
  props: {
    name: String,
    title: String,
  },
};
</script>
