<template>
  <div>
    <h2>User List</h2>

    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">{{ user.id }}</nuxt-link>
      </li>
    </ul>

    <nuxt-link to="/">Back to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      users: [{ id: 1 }, { id: 2 }, { id: 3 }],
    }
  },
}
</script>
