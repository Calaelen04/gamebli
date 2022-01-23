<template>
  <form>
    <div>Login</div>
    <div @click="isDisplaySubtitle">{{ text }}</div>
    <div v-if="isDisplay">Plus plus plus</div>
    <div>{{ upperName }}</div>
    <input type="text" v-model="ploup" />
    <div>{{ transformDate(new Date()) }}</div>
    ____________________________
    <div>
      <InviteForm v-model:name="inviteName" v-model:email="inviteEmail" />
      <div>
        <div>{{ inviteName }}</div>
        <div>{{ inviteEmail }}</div>
      </div>
    </div>
  </form>

  <!-- <div>Amount: {{ amount }}</div>
  <button @click="increaseAmount()">Increase Capacity</button> -->
</template>

<script>
import { ref, computed } from "@vue/reactivity";
import { watchEffect, watch } from "@vue/runtime-core";
// watchEffect watch
import transformDate from "../utils/transformDate";
import InviteForm from "../components/InviteForm.vue";

export default {
  name: "Test",
  props: {
    title: String,
  },
  components: { InviteForm },
  setup(props) {
    // data
    let text = ref("Blablablabalbalbal");

    let isDisplay = ref(false);

    // computed
    const name = "author";
    const upperName = computed(() => {
      return name.toUpperCase() + " VUE_3";
    });

    // methods
    function isDisplaySubtitle() {
      console.log("ICI", isDisplay);
      // text.value = "Plop";
      isDisplay.value = !isDisplay.value;
    }

    const amount = ref(3);
    function increaseAmount() {
      amount.value += 1;
    }

    const ploup = ref("");
    watchEffect(() => {
      console.log(ploup.value);
    });
    watch(ploup, (newVal, oldVal) => {
      console.log(`${newVal} ${oldVal}`);
    });
    watchEffect(() => {
      console.log(props);
      console.log(props.title);
    });

    const inviteName = ref("name");
    const inviteEmail = ref("invite");

    return {
      text,
      isDisplay,
      isDisplaySubtitle,
      amount,
      increaseAmount,
      upperName,
      ploup,
      transformDate,
      inviteName,
      inviteEmail
    };
  },
};
</script>