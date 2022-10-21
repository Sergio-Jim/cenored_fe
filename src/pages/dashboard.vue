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
      <img src="@/assets/logo.svg" style="height: 55px; margin-bottom: 10px" />

      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        "
        v-on:click="this.$router.push('/login')"
      >
        <span class="mb-1 cursor-pointer">logout</span>
        <img
          src="@/assets/icon-logout.png"
          style="height: 15px; margin-bottom: 10px"
        />
      </div>
    </div>
    <div style="display: flex; flex-direction: row; height: 100%">
      <div style="width: 100%">
        <div class="col-span-2 p-3 overflow-y-auto">
          <div class="flex flex-row justify-center p-3 rounded-sm">
            <div class="flex">
              <router-link
                to="/dashboard/general"
                :class="[
                  this.$route.path === '/dashboard/general'
                    ? 'text-yellow border-b-4  border-gold'
                    : '',
                ]"
                v-bind:style="{
                  fontWeight:
                    this.$route.path === '/dashboard/general' ? 'bolder' : '',
                }"
              >
                <div class="flex">
                  <span class="tracking-wide">General</span>
                </div>
              </router-link>
            </div>
            <div style="margin: 0px 10px"><span>|</span></div>
            <div class="flex">
              <router-link
                to="/dashboard/settings"
                :class="[
                  this.$route.path === '/dashboard/settings'
                    ? 'border-b-4 border-gold'
                    : '',
                ]"
                v-bind:style="{
                  fontWeight:
                    this.$route.path === '/dashboard/settings' ? 'bolder' : '',
                }"
              >
                <div class="flex items-center justify-center">
                  <span class="tracking-wide">Settings</span>
                </div>
              </router-link>
            </div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardLanding",
};
</script>
