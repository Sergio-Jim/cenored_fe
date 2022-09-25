<template>
  <div style="display: flex; height: 100%; overflow-y: auto">
    <div
      style="flex-grow: 1; display: flex; flex-direction: column; margin: 5%"
    >
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <img src="@/assets/logo.png" style="height: 50px" />
      </div>
      <div style="margin-top: 15px; display: flex; justify-content: center">
        <div>
          <form class="rounded px-8 pt-6 pb-8 mb-4" style="min-width: 30vw">
            <br />
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="firstName"
                >First Name</label
              >
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="firstName"
                type="firstName"
                placeholder="First Name"
                v-model="firstName"
              />
            </div>

            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="surname"
                >Surname</label
              >
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="surname"
                type="surname"
                placeholder="Surname"
                v-model="surname"
              />
            </div>

            <div class="flex items-center justify-between">
              <button
                class="
                  bg-gold
                  transition-color
                  duration-700
                  transform
                  hover:bg-yellow-400
                  text-black
                  py-2
                  px-4
                  border border-yellow-400
                  rounded-lg
                  w-full
                  focus:outline-none focus:shadow-outline
                  flex
                  items-center
                  justify-center
                "
                style="height: 40px"
                v-on:click="fillSurvey"
                type="button"
              >
                <vue-loaders
                  v-if="this.loading"
                  name="line-scale"
                  color="black"
                  scale="0.5"
                ></vue-loaders>
                <div v-else>Fill Survey</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    async fillSurvey() {
      this.$router.push("survey");
    },
  },
  computed: {
    firstName: {
      get() {
        return sessionStorage.getItem("firstName");
      },
      set(val) {
        sessionStorage.setItem("firstName", val);
      },
    },
    surname: {
      get() {
        return sessionStorage.getItem("surname");
      },
      set(val) {
        sessionStorage.setItem("surname", val);
      },
    },
  },
};
</script>

<style scoped>
</style>
