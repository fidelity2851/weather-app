<template>
  <div class="todo_cont_con">
    <div
      class="todo_tab_con d-flex align-items-center nav nav-tab"
      id="myTab"
      role="tablist"
    >
      <a
        id="home-tab"
        href="#home"
        class="col active text-decoration-none px-0"
        data-toggle="tab"
        role="tab"
        ><p class="todo_tab">Your Task</p></a
      >
      <a
        id="profile-tab"
        href="#profile"
        class="col text-decoration-none px-0"
        data-toggle="tab"
        role="tab"
      >
        <p class="todo_tab">Done Task</p>
      </a>
    </div>

    <div class="tab-content w-100" id="myTabContent">
      <div
        class="todo_cont tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <p class="todo_error">Finished all your task.</p>
        <div
          class="
            col
            todo_task
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <div class="d-flex align-items-center">
            <input
              class="mr-3"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <p class="todo_text">Wash mummy's clothe</p>
          </div>
          <span
            class="todo_icon d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </div>
      <div
        class="todo_cont tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <p class="todo_error">No completed task yet.</p>

        <div
          class="
            col
            todo_task
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <div class="d-flex align-items-center">
            <input
              class="mr-3"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <p class="todo_text">Wash mummy's clothe</p>
          </div>
          <span
            class="todo_icon d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageTodo",
  data() {
    return {
      ActiveTask: {},
      CompletedTask: {},
    };
  },
  methods: {
    addCompleted() {
        //
    },
    addActive() {
        //
    },
  },
};
</script>

<style>
</style>