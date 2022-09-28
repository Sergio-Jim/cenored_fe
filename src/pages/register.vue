<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      padding: 20px 30px;
    "
  >
    <div
      class="border-b-2"
      style="display: flex; justify-content: center; align-items: center"
    >
      <img src="@/assets/logo.png" style="height: 80px; margin-bottom: 10px" />
    </div>
    <div
      class="
        w-full
        flex flex-col
        space-y-4
        md:flex-row md:space-x-4 md:space-y-0
      "
    >
      <div
        style="
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5%;
        "
      >
        <div
          style="
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
        >
          <h1 class="text-3xl">Customer Satisfaction Survey</h1>
          <br />
          <p class="text-cenoredblue">Dear Valued Customer,</p>
          <br />
          <p class="text-cenoredblue">
            Please take a moment to take our Customer Satisfaction Survey so we
            can
          </p>
          <p class="text-cenoredblue">
            serve you better as we are committed to providing you with the best
            services
          </p>
          <p class="text-cenoredblue">and customer experience possible.</p>
        </div>
      </div>
      <div class="md:w-1/2 sm:w-full">
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5%;
          "
        >
          <div style="margin-top: 15px; display: flex; justify-content: center">
            <div>
              <form
                @submit.prevent="fillSurvey"
                class="rounded px-8 pt-6 pb-8 mb-4"
                style="min-width: 30vw"
              >
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
                    required
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
                    required
                  />
                </div>

                <div class="flex items-center justify-between">
                  <button
                    class="
                      bg-cenoredblue
                      transition-color
                      duration-700
                      transform
                      hover:bg-blue-600 hover:text-black
                      text-white
                      py-2
                      px-4
                      border border-cenoredgreen
                      rounded-lg
                      w-full
                      flex
                      items-center
                      justify-center
                    "
                    style="height: 40px"
                    type="submit"
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
    