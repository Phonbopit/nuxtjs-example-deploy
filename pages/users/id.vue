<template>
  <div>
    <h1>User Slug Detail</h1>

    <p>Slug : {{ id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>

<style></style>
