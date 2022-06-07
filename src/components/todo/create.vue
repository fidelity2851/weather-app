<template>
  <div class="todo_con">
    <div class="container">
      <p class="todo_header">Create New Task.</p>
      <form>
        <div class="todo_form d-flex align-items.center">
          <input
            type="text"
            :v-bind="task"
            class="todo_form_box"
            placeholder="Enter your task..."
            required
          />
          <button @click.prevent="addTask()" type="button" class="todo_form_btn">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateTodo",
  data() {
    return {
        task: '',
    };
  },
  methods: {
      addTask() {
          //
      }
  }
};
</script>

<style>
</style>