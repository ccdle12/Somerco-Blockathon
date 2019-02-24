<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card
            title="Lager"
            img-src="/beer.png"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            @click="checkoutPage"
          >
            <p>1 pint</p>
          </b-card>
        </b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navigationService from './NavigationService'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  data: function() {
    return {
      title: 'Somerco Beer Shop',
    }
  },

  computed: {
  },

  watch: {
  },

  methods: {
    checkoutPage: function() {
      let searchRequest = { type: 'checkout' }
      navigationService.navigate(this.$router, searchRequest)
    },
  },
} // export default

</script>
