<template>
  <div>
    <div class="row" v-if="info !== 'N/A'">
      <div class="col-12 col-md-5">
        <h2 class="pb-3">{{ info.name }}</h2>
        <div class="pb-4">
          <font-awesome-icon
            v-for="i in info.rate"
            :key="i"
            :icon="['fas', 'star']"
            class="text-warning mr-1"
            size="lg"
          />
          <span class="reviews ml-3">{{ info.reviews }} Reviews</span>
        </div>
        <p class="description">{{ info.description }}</p>
      </div>
      <div class="col-12 col-md-7">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div
            class="carousel-inner"
            role="listbox"
            style=" width:100%; height: 500px;position: relative; !important;"
          >
            <div
              v-for="(file, index) in media"
              :key="index"
              :class="['carousel-item', index === 0 ? ' active' : '']"
            >
              <img
                :src="`http://www.mvegypt.com/egypt/public/${file.item}`"
                v-if="file.type === 'image'"
                class="d-block"
                alt="pahros image"
              />
              <iframe
                v-if="file.type === 'video'"
                :src="file.video"
                class="ytVideo"
                id="ytVideo"
              ></iframe>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
            @click="prevNavClicked"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
            @click="nextNavClicked"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="thumbnails-wrapper">
          <a
            data-target="#carouselExampleFade"
            v-for="(file, index) in media"
            :data-slide-to="index"
            href="#"
            class="thumbnail"
            :key="index"
            @click="resetYoutubeVideo"
          >
            <img
              :src="`http://www.mvegypt.com/egypt/public/${file.item}`"
              class="gallery-img"
              alt="..."
            />
          </a>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <h2>
        <strong>Oops 😔</strong>
      </h2>
      <h2>There was a problem, Please try again!</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["info"],
  computed: {
    ...mapState({
      media: state => state.home.media
    })
  },
  methods: {
    resetYoutubeVideo() {
      document.getElementById("ytVideo").src = document.getElementById(
        "ytVideo"
      ).src;
    },
    prevNavClicked() {
      this.resetYoutubeVideo();
    },
    nextNavClicked() {
      this.resetYoutubeVideo();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/item-details.scss";
</style>
