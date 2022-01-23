<template>
  <form>
    <div>
      <label for="name">Name</label>
      <input type="text" :value="name" @input="update($event.target.value, 'name')" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" :value="email" @input="update($event.target.value, 'email')" />
    </div>
  </form>
</template>
<script>
export default {
  props: {
    name: String,
    email: String,
  },
  setup(props, { emit }) {
    const updateName = (value) => {
      emit("update:name", value);
    };
    const updateEmail = (value) => {
      emit("update:email", value);
    };

    const update = (value, propLabel) => {
      emit(`update:${propLabel}`, value);
    };
    return { updateName, updateEmail, update };
  },
};
</script>