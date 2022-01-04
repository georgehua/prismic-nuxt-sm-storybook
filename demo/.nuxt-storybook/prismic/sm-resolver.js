import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`D:/coding-ground/project demo/prismic-nuxt-sm-storybook/demo/slices/${sliceName}.vue`), import(`D:/coding-ground/project demo/prismic-nuxt-sm-storybook/demo/slices/${sliceName}/index.vue`), import(`D:/coding-ground/project demo/prismic-nuxt-sm-storybook/demo/slices/${sliceName}/index.js`), import(`D:/coding-ground/project demo/prismic-nuxt-sm-storybook/demo/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
