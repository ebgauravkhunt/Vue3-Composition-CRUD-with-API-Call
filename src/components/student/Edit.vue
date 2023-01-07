<script setup>
import { reactive } from "vue";
const formData = reactive({
  stuname: "",
  email: "",
});
const handleUpdateStudentForm = async () => {
  console.log("Update");
};
</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold text-center text-white">Edit Student</h1>
    </div>
    <form
      @submit.prevent="handleUpdateStudentForm"
      class="w-full"
      id="AddStudentForm"
    >
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuid">ID :</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuid"
            class="border-2 border-gray-200 w-full py-2 px-4"
            readonly
            disabled
          />
        </div>
      </div>
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuname">Name :</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuname"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
          />
        </div>
      </div>
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="email">Email :</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="email"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
          />
        </div>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6"
        >
          Save
        </button>
        <RouterLink :to="{ name: 'List' }">
          <button
            type="button"
            class="bg-emerald-700 text-white font-medium py-2 rounded-md px-6 hover:bg-emerald-800 mr-6"
          >
            Back to Home
          </button></RouterLink
        >
      </div>
    </form>
  </div>
</template>

<style scoped></style>
