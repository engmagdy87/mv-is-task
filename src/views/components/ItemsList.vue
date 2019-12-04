<template>
  <div class="product-section-wrapper my-5">
    <div class="row m-4">
      <div class="col-12 col-md-2">
        <h1>- Attractions</h1>
        <div class="w-100 has-search mt-4">
          <font-awesome-icon
            :icon="['fas', 'search']"
            class="form-control-feedback"
          />
          <input type="text" class="form-control" placeholder="Search" />
        </div>
        <div class="list-group mt-4">
          <a
            v-for="item in items.attractions"
            :key="item.id"
            href="#"
            :class="[
              'list-group-item list-group-item-action p-3',
              activeIndex === item.id ? 'active' : ''
            ]"
            @click="setActiveIndex(item.id)"
            >{{ item.name }}</a
          >
        </div>
      </div>
      <div class="col-12 col-md-10">
        <ItemDetails :info="info.id == activeIndex ? info : 'N/A'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ItemDetails from "./ItemDetails";
import types from "../../store/types";

export default {
  data() {
    return {};
  },
  props: ["items", "info"],
  methods: {
    ...mapMutations({
      setActiveIndex: types.home.mutations.SET_ACTIVE_INDEX
    })
  },
  computed: {
    ...mapState({
      activeIndex: state => state.home.activeIndex
    })
  },
  components: { ItemDetails }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/items-list.scss";
</style>
