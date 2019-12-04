<template>
  <div>
    <Header :lang="lang" :setLang="setLang" />
    <ItemsList
      :lang="lang"
      :items="items"
      :info="info"
      v-if="
        items !== null &&
          items !== undefined &&
          info !== null &&
          info !== undefined
      "
    />
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import Header from "../components/Header";
import ItemsList from "../components/ItemsList";
import types from "../../store/types";

export default {
  props: ["routeLang"],
  components: {
    Header,
    ItemsList
  },
  methods: {
    ...mapMutations({
      setLanguage: types.home.mutations.SET_LANGUAGE,
      setInfo: types.home.mutations.SET_INFO,
      setItems: types.home.mutations.SET_ITEMS
    }),
    ...mapActions({
      getInfo: types.home.actions.FETCH_INFO,
      getItems: types.home.actions.FETCH_ITEMS
    }),
    setLang(e) {
      this.selectedLang = e.target.value;
      this.$router.push(this.selectedLang);
      this.setLanguage(this.selectedLang);
      this.setInfo();
      this.setItems();
      window.location.reload();
    }
  },
  computed: {
    ...mapState({
      lang: state => state.home.lang,
      items: state => state.home.items,
      info: state => state.home.info
    })
  },
  mounted() {
    this.getInfo(this.routeLang);
    this.getItems(this.routeLang);
    this.setLanguage(this.routeLang);
  }
};
</script>
