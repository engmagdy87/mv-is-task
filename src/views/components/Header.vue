<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand brand-wrapper" :href="`/${lang}`">
      <img src="../../assets/images/logo.png" alt="mv-is logo" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <select class="custom-select ml-auto" @change="setLang">
        <option value="en" :selected="lang === 'en'">En</option>
        <option value="sp" :selected="lang === 'sp'">Sp</option>
      </select>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["lang", "setLang"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/header.scss";
</style>
