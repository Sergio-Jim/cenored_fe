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
    <div class="flex flex-row h-5/6">
      <div
        style="
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          margin: 10px;
          border: 2px;
        "
      >
        <div style="display: flex; flex-direction: column; overflow-y: hidden">
          <form action="">
            <div style="display: flex; flex-direction: column">
              <span style="display: flex; font-size: x-large">Profile</span>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                    >Username</label
                  >
                  <input
                    style="width: 400px"
                    class="
                      shadow
                      appearance-none
                      border
                      rounded
                      py-2
                      px-3
                      text-gray-700
                      leading-tight
                      focus:outline-none focus:shadow-outline
                    "
                    id="username"
                    type="text"
                    placeholder="Username"
                    v-model="username"
                  />
                </div>

                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                    >Email</label
                  >
                  <input
                    style="width: 400px"
                    class="
                      shadow
                      appearance-none
                      border
                      rounded
                      py-2
                      px-3
                      text-gray-700
                      leading-tight
                      focus:outline-none focus:shadow-outline
                    "
                    id="email"
                    type="text"
                    placeholder="Email"
                    v-model="recoveryEmail"
                  />
                </div>
              </div>
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
                  w-1/8
                  flex
                  items-center
                  justify-center
                "
                style="height: 40px"
                v-on:click="updateUser"
                type="button"
              >
                <vue-loaders
                  v-if="this.loadingUpdate"
                  name="line-scale"
                  color="black"
                  scale="0.5"
                >
                </vue-loaders>
                <div class="py-2" v-else>Save</div>
              </button>
            </div>
          </form>
          <!-- <div
            style="
              display: flex;
              flex-direction: column;
              margin-top: 30px;
              width: 100%;
            "
          >
            <span style="display: flex; font-size: x-large">Security</span>
            <div style="display: flex; flex-direction: row">
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
                  type="button"
                >
                  <div class="py-2">Change Password</div>
                </button>
              </div>
            </div>
          </div> -->

          <!-- <div
            style="
              display: flex;
              flex-direction: column;
              margin-top: 30px;
              width: 100%;
            "
          >
            <span style="display: flex; font-size: x-large">Danger Zone</span>
            <div style="display: flex; flex-direction: row">
              <div class="flex items-center justify-between">
                <button
                  class="
                    bg-red-600
                    transition-color
                    duration-700
                    transform
                    hover:bg-red-900 hover:text-white
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
                  type="button"
                >
                  <vue-loaders
                    v-if="this.loadingDelete"
                    name="line-scale"
                    color="black"
                    scale="0.5"
                  >
                  </vue-loaders>
                  <div class="py-2" v-else>Clear Surveys</div>
                </button>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <!-- here -->
      <div
        style="
          display: flex;
          flex-direction: column;
          width: 40%;
          border-left: 2px solid;
          min-height: 80%;
        "
      >
        <div>
          <span style="display: flex; margin-left: 8px">Quick Access</span>
          <div
            style="
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              margin-top: 20px;
              margin-left: 8px;
              flex-basis: 50%;
            "
          >
            <div class="button-group">
              <div class="button">
                <a href="https://cenored.com.na/">
                  <div class="link-item active">
                    <img class="link-icon" src="@/assets/home.png" />
                  </div>
                </a>
              </div>
              <div class="flex flex-col">
                <a href="https://cenored.com.na/">
                  <span class="top-span">Home</span>
                </a>
                <span class="bottom-span">Go To Cenored Website</span>
              </div>
            </div>

            <div class="button-group">
              <div class="button">
                <a href="https://cheery-dolphin-48741c.netlify.app/">
                  <div class="link-item active">
                    <img class="link-icon" src="@/assets/survey.png" />
                  </div>
                </a>
              </div>
              <div class="flex flex-col">
                <a href="https://cheery-dolphin-48741c.netlify.app/">
                  <span class="top-span">Survey</span>
                </a>
                <span class="bottom-span">Fill In The Survey</span>
              </div>
            </div>

            <div class="button-group">
              <div class="button">
                <a href="https://www.wow.co.na/">
                  <div class="link-item active">
                    <img class="link-icon" src="@/assets/at-sign.png" />
                  </div>
                </a>
              </div>
              <div class="flex flex-col">
                <a href="https://www.wow.co.na/">
                  <span class="top-span">Contact Us</span>
                </a>
                <span class="bottom-span">Contact Development Team</span>
              </div>
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
import { required, email } from "@vuelidate/validators";

export default {
  name: "Settings",
  data() {
    return {
      loadingUpdate: false,
      loadingDelete: false,
      username: "",
      recoveryEmail: "",
    };
  },
  setup() {
    const toast = useToast();
    return { toast, v$: useVuelidate() };
  },
  created() {
    this.$apollo
      .query({
        query: gql`
          query currentUser {
            currentUser {
              ... on Analyst {
                username
                recoveryEmail
              }
            }
          }
        `,
      })
      .then(({ data }) => {
        this.username = data.currentUser.username;
        this.recoveryEmail = data.currentUser.recoveryEmail;
        console.log(data);
      })
      .catch((err) => {
        this.toast.error(err.message || "Something Went Wrong", {
          timeout: 2000,
        });
      });
  },
  methods: {
    async updateUser() {
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) return;

      this.loadingUpdate = true;
      this.$apollo
        .mutate({
          mutation: gql`
            mutation updateUser($username: String, $recoveryEmail: String) {
              updateUser(username: $username, recoveryEmail: $recoveryEmail)
            }
          `,

          variables: {
            username: this.username,
            recoveryEmail: this.recoveryEmail,
          },
        })
        .then(({ data }) => {
          this.toast.success(data.updateUser);
          this.loadingUpdate = false;
        })
        .catch((err) => {
          this.loadingUpdate = false;
          this.toast.error(err.message || "Something went wrong");
        });
    },
  },
  validations() {
    return {
      username: {},
      recoveryEmail: { email },
    };
  },
};
</script>

<style scoped>
.link-icon {
  width: 20px;
  height: 20px;
}

.link-item {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  color: #193e75;
  /* position: absolute; */
}

.link-item:hover {
  background-color: white;
  transition: 100ms linear;
  box-shadow: 0px 0px 20px gray;
}

.button {
  max-width: 40px;
  position: relative;
}
.top-span {
  display: flex;
  margin-left: 8px;
  font-weight: 600;
  font-size: small;
  color: #193e75;
}
.bottom-span {
  display: flex;
  margin-left: 8px;
  font-size: small;
}

.button-group {
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin: 5px;
}
</style>