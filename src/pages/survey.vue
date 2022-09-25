<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      padding: 20px 20%;
    "
  >
    <form class="rounded px-8 pt-6 pb-8 mb-4 mt-12">
      <div class="flex flex-col">
        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>
              1. Please rate the quality of the services you receive from
              CENORED.
            </p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <input
                id="question1-1"
                type="radio"
                name="question1"
                value="1"
                v-model="question1"
              />
              <label for="question1-1"> 1</label>
              <input
                class="ml-5"
                id="question1-2"
                type="radio"
                name="question1"
                value="2"
                v-model="question1"
              />
              <label for="question1-2"> 2</label>
              <input
                class="ml-5"
                id="question1-3"
                type="radio"
                name="question1"
                value="3"
                v-model="question1"
              />
              <label for="question1-3"> 3</label>
              <input
                class="ml-5"
                id="question1-4"
                type="radio"
                name="question1"
                value="4"
              />
              <label for="question1-4"> 4</label>
              <input
                class="ml-5"
                id="question1-5"
                type="radio"
                name="question1"
                value="5"
                v-model="question1"
              />
              <label for="question1-5"> 5</label>
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2">
            <p>Disappointing</p>
            <p>Exceptional</p>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>2. How well does CENORED service meet your needs?</p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <input
                id="question2-1"
                type="radio"
                name="question2"
                value="1"
                v-model="question2"
              />
              <label for="question2-1"> 1</label>
              <input
                class="ml-5"
                id="question2-2"
                type="radio"
                name="question2"
                value="2"
                v-model="question2"
              />
              <label for="question2-2"> 2</label>
              <input
                class="ml-5"
                id="question2-3"
                type="radio"
                name="question2"
                value="3"
                v-model="question2"
              />
              <label for="question2-3"> 3</label>
              <input
                class="ml-5"
                id="question2-4"
                type="radio"
                name="question2"
                value="4"
                v-model="question2"
              />
              <label for="question2-4"> 4</label>
              <input
                class="ml-5"
                id="question2-5"
                type="radio"
                name="question2"
                value="5"
                v-model="question2"
              />
              <label for="question2-5"> 5</label>
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2">
            <p>Disappointing</p>
            <p>Exceptional</p>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>
              3. How responsive have CENORED been to your questions/concerns
              about our service?
            </p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <input
                id="question3-1"
                type="radio"
                name="question3"
                value="1"
                v-model="question3"
              />
              <label for="question3-1"> 1</label>
              <input
                class="ml-5"
                id="question3-2"
                type="radio"
                name="question3"
                value="2"
                v-model="question3"
              />
              <label for="question3-2"> 2</label>
              <input
                class="ml-5"
                id="question3-3"
                type="radio"
                name="question3"
                value="3"
                v-model="question3"
              />
              <label for="question3-3"> 3</label>
              <input
                class="ml-5"
                id="question3-4"
                type="radio"
                name="question3"
                value="4"
                v-model="question3"
              />
              <label for="question3-4"> 4</label>
              <input
                class="ml-5"
                id="question3-5"
                type="radio"
                name="question3"
                value="5"
                v-model="question3"
              />
              <label for="question3-5"> 5</label>
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2">
            <p>Disappointing</p>
            <p>Exceptional</p>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>
              4. How do you compared to our service to that of our competitors?
            </p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <input
                id="question4-1"
                type="radio"
                name="question4"
                value="1"
                v-model="question4"
              />
              <label for="question4-1"> 1</label>
              <input
                class="ml-5"
                id="question4-2"
                type="radio"
                name="question4"
                value="2"
                v-model="question4"
              />
              <label for="question4-2"> 2</label>
              <input
                class="ml-5"
                id="question4-3"
                type="radio"
                name="question4"
                value="3"
                v-model="question4"
              />
              <label for="question4-3"> 3</label>
              <input
                class="ml-5"
                id="question4-4"
                type="radio"
                name="question4"
                value="4"
                v-model="question4"
              />
              <label for="question4-4"> 4</label>
              <input
                class="ml-5"
                id="question4-5"
                type="radio"
                name="question4"
                value="5"
                v-model="question4"
              />
              <label for="question4-5"> 5</label>
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2">
            <p>Disappointing</p>
            <p>Exceptional</p>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>
              5. On a scale of 1 to 5, how likely are you to recommend CENORED
              to someone else?
            </p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <input
                id="question5-1"
                type="radio"
                name="question5"
                value="1"
                v-model="question5"
              />
              <label for="question5-1"> 1</label>
              <input
                class="ml-5"
                id="question5-2"
                type="radio"
                name="question5"
                value="2"
                v-model="question5"
              />
              <label for="question5-2"> 2</label>
              <input
                class="ml-5"
                id="question5-3"
                type="radio"
                name="question5"
                value="3"
                v-model="question5"
              />
              <label for="question5-3"> 3</label>
              <input
                class="ml-5"
                id="question5-4"
                type="radio"
                name="question5"
                value="4"
                v-model="question5"
              />
              <label for="question5-4"> 4</label>
              <input
                class="ml-5"
                id="question5-5"
                type="radio"
                name="question5"
                value="5"
                v-model="question5"
              />
              <label for="question5-5"> 5</label>
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2">
            <p>Disappointing</p>
            <p>Exceptional</p>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>
              6. On a scale of 1 to 5, how do you rate the correlation between
              CENORED tariffs and services?
            </p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <input
                id="question6-1"
                type="radio"
                name="question6"
                value="1"
                v-model="question6"
              />
              <label for="question6-1"> 1</label>
              <input
                class="ml-5"
                id="question6-2"
                type="radio"
                name="question6"
                value="2"
                v-model="question6"
              />
              <label for="question6-2"> 2</label>
              <input
                class="ml-5"
                id="question6-3"
                type="radio"
                name="question6"
                value="3"
                v-model="question6"
              />
              <label for="question6-3"> 3</label>
              <input
                class="ml-5"
                id="question6-4"
                type="radio"
                name="question6"
                value="4"
                v-model="question6"
              />
              <label for="question6-4"> 4</label>
              <input
                class="ml-5"
                id="question6-5"
                type="radio"
                name="question6"
                value="5"
                v-model="question6"
              />
              <label for="question6-5"> 5</label>
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2">
            <p>Disappointing</p>
            <p>Exceptional</p>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>
              7. How easy is it to engage our staff when you have a query or
              complaint?
            </p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <input
                id="question7-1"
                type="radio"
                name="question7"
                value="1"
                v-model="question7"
              />
              <label for="question7-1"> 1</label>
              <input
                class="ml-5"
                id="question7-2"
                type="radio"
                name="question7"
                value="2"
                v-model="question7"
              />
              <label for="question7-2"> 2</label>
              <input
                class="ml-5"
                id="question7-3"
                type="radio"
                name="question7"
                value="3"
                v-model="question7"
              />
              <label for="question7-3"> 3</label>
              <input
                class="ml-5"
                id="question7-4"
                type="radio"
                name="question7"
                value="4"
                v-model="question7"
              />
              <label for="question7-4"> 4</label>
              <input
                class="ml-5"
                id="question7-5"
                type="radio"
                name="question7"
                value="5"
                v-model="question7"
              />
              <label for="question7-5"> 5</label>
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2">
            <p>Disappointing</p>
            <p>Exceptional</p>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>
              8. How much effort did you put in to access the above assistance?
            </p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <input
                id="question8-1"
                type="radio"
                name="question8"
                value="1"
                v-model="question8"
              />
              <label for="question8-1"> 1</label>
              <input
                class="ml-5"
                id="question8-2"
                type="radio"
                name="question8"
                value="2"
                v-model="question8"
              />
              <label for="question8-2"> 2</label>
              <input
                class="ml-5"
                id="question8-3"
                type="radio"
                name="question8"
                value="3"
                v-model="question8"
              />
              <label for="question8-3"> 3</label>
              <input
                class="ml-5"
                id="question8-4"
                type="radio"
                name="question8"
                value="4"
                v-model="question8"
              />
              <label for="question8-4"> 4</label>
              <input
                class="ml-5"
                id="question8-5"
                type="radio"
                name="question8"
                value="5"
                v-model="question8"
              />
              <label for="question8-5"> 5</label>
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2">
            <p>Disappointing</p>
            <p>Exceptional</p>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>
              9. Which other options are available and you are considering as
              alternative to CENORED and why?
            </p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="question9"
              >
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  py-3
                  px-3
                  text-gray-700
                  leading-tight
                "
                style="width: 50vw"
                id="question9"
                type="text"
                placeholder="question9"
                v-model="question9"
              />
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2 mt-2"></div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>10. What would you improve about CENORED if you could?</p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="question9"
              >
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  py-3
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                style="width: 50vw"
                id="question10"
                type="text"
                placeholder="question10"
                v-model="question10"
              />
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2 mt-2"></div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>11. What is your approximate monthly expenditure to CENORED?</p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="question9"
              >
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  py-3
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                style="width: 50vw"
                id="question11"
                type="text"
                placeholder="question11"
                v-model="question11"
              />
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2 mt-2"></div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>12. Are our offices clean?</p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <input
                id="question112-1"
                type="radio"
                name="question12"
                value="1"
                v-model="question12"
              />
              <label for="question12-1"> 1</label>
              <input
                class="ml-5"
                id="question12-2"
                type="radio"
                name="question12"
                value="2"
                v-model="question12"
              />
              <label for="question12-2"> 2</label>
              <input
                class="ml-5"
                id="question12-3"
                type="radio"
                name="question12"
                value="3"
                v-model="question12"
              />
              <label for="question12-3"> 3</label>
              <input
                class="ml-5"
                id="question12-4"
                type="radio"
                name="question12"
                value="4"
                v-model="question12"
              />
              <label for="question12-4"> 4</label>
              <input
                class="ml-5"
                id="question12-5"
                type="radio"
                name="question12"
                value="5"
                v-model="question12"
              />
              <label for="question12-5"> 5</label>
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2">
            <p>Disappointing</p>
            <p>Exceptional</p>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="flex flex-row mb-2">
            <p>
              13. Please suggest any improvement to our services to help CENORED
              serve you better.
            </p>
          </div>
          <div class="flex flex-row justify-center">
            <p>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="question13"
              >
              </label>
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  py-3
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                style="width: 50vw"
                id="question13"
                type="text"
                placeholder="question13"
                v-model="question13"
              />
            </p>
          </div>
          <div class="flex flex-row justify-evenly border-b-2 mt-2"></div>
        </div>

        <div class="flex flex-col items-center">
          <button
            class="
              bg-gold
              border border-gray-700
              transition-colors
              duration-700
              transform
              hover:bg-yellow-400
              text-gray-700
              px-4
              mty-8
              rounded-lg
            "
            type="button"
            v-on:click="submitSurvey"
          >
            <div class="py-2">Submit</div>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { useToast } from "vue-toastification";

export default {
  name: "Survey",
  data() {
    return {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      question10: "",
      question11: "",
      question12: "",
      question13: "",
    };
  },
  setup() {
    // Get toast interface
    const toast = useToast();

    // Make it available inside methods
    return { toast };
  },
  methods: {
    submitSurvey() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation createSurvey(
              $firstName: String
              $surname: String
              $question1: String
              $question2: String
              $question3: String
              $question4: String
              $question5: String
              $question6: String
              $question7: String
              $question8: String
              $question9: String
              $question10: String
              $question11: String
              $question12: String
              $question13: String
            ) {
              createSurvey(
                firstName: $firstName
                surname: $surname
                question1: $question1
                question2: $question2
                question3: $question3
                question4: $question4
                question5: $question5
                question6: $question6
                question7: $question7
                question8: $question8
                question9: $question9
                question10: $question10
                question11: $question11
                question12: $question12
                question13: $question13
              ) {
                status
                message
              }
            }
          `,
          variables: {
            firstName: sessionStorage.getItem("firstName"),
            surname: sessionStorage.getItem("surname"),
            question1: this.question1,
            question2: this.question2,
            question3: this.question3,
            question4: this.question4,
            question5: this.question5,
            question6: this.question6,
            question7: this.question7,
            question8: this.question8,
            question9: this.question9,
            question10: this.question10,
            question11: this.question11,
            question12: this.question12,
            question13: this.question13,
          },
        })
        .then(({ data }) => {
          console.log(data);
          return data.createSurvey;
        })
        .then(({ status, message }) => {
          this.isCreating = false;
          if (status) {
            this.toast.success(message);
            sessionStorage.clear();
            localStorage.clear();
            this.$router.push("/");
          } else {
            this.toast.error(message);
          }
        })
        .catch((err) => {
          this.loading = false;
          this.toast.error(err.message || "Something went wrong.");
        });
    },
    clearForm() {
      this.question1 = "";
      this.question2 = "";
      this.question3 = "";
      this.question4 = "";
      this.question5 = "";
      this.question6 = "";
      this.question7 = "";
      this.question8 = "";
      this.question9 = "";
      this.question10 = "";
      this.question11 = "";
      this.question12 = "";
      this.question13 = "";
    },
  },
};
</script>