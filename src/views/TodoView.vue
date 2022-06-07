<template>
  <div class="weather_cont">
    <!-- Create Todo -->
    <CreateTodo />

    <!-- Manage Todo -->
    <ManageTodo />
  </div>
</template>

<script>
import CreateTodo from "../components/todo/create.vue";
import ManageTodo from "../components/todo/manage.vue";

export default {
  components: { ManageTodo, CreateTodo },
};
</script>

<style>
</style>