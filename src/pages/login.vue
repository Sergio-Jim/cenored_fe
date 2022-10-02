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
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <img src="@/assets/logo.svg" style="height: 80px; margin-bottom: 10px" />
      <span
        style="cursor: pointer; margin-bottom: 10px"
        v-on:click="this.$router.push('/')"
        >Don't belong here?</span
      >
    </div>
    <div
      style="display: flex; flex-direction: row; height: 100%; margin-top: 20px"
    >
      <div style="width: 100%">
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
              <form class="rounded px-8 pt-6 pb-8 mb-4" style="min-width: 30vw">
                <br />
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                    >username</label
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
                    id="username"
                    type="username"
                    placeholder="username"
                    v-model="username"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                    >Password</label
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
                    id="password"
                    type="password"
                    placeholder="Password"
                    v-model="password"
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
                    v-on:click="login"
                    type="button"
                  >
                    <vue-loaders
                      v-if="this.loading"
                      name="line-scale"
                      color="black"
                      scale="0.5"
                    ></vue-loaders>
                    <div v-else>Login</div>
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
import gql from "graphql-tag";
import { useToast } from "vue-toastification";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "Login",
  setup() {
    const toast = useToast();
    return { toast, v$: useVuelidate() };
  },

  data() {
    return {
      loading: false,
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.loading = true;
      this.$apollo
        .mutate({
          mutation: gql`
            mutation LoginUser($username: String!, $password: String!) {
              loginUser(username: $username, password: $password) {
                token
                status
                message
              }
            }
          `,

          variables: {
            username: this.username,
            password: this.password,
          },
        })
        .then(({ data }) => {
          return data.loginUser;
        })
        .then(({ token, status, message }) => {
          this.loading = false;
          if (status) {
            localStorage.setItem("token", token);
            this.$router.push("/dashboard");
          } else {
            this.toast.error(message);
          }
        })
        .catch((err) => {
          this.loading = false;
          this.toast.error(err.message || "Something went wrong");
        });
    },
  },
  validations() {
    return {
      username: {
        required,
      },
      password: {
        required,
      },
    };
  },
};
</script>