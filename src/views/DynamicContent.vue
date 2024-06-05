<template>

  <div class="main-content">

    <div class="main-content__top">

        <h1 class="main-content__title">
          {{sectionName}}
        </h1>

    </div>

    <div class="main-content__body">
        This <strong>{{sectionName}}</strong> page, is dynamic for the sake of simplicity.
        <div v-if="sectionName === 'cadastro-de-usuario'">
          <cadastro-usuario/>
        </div>
    </div>

  </div>

</template>

<script>

import startCase from 'lodash/startCase';
import cadastroUsuario from '@/components/users/userGrid.vue';

export default {

  name: 'dynamicContent',

  computed: {

    sectionName() {
      console.log(this.$route.params.sectionSlug);
        return startCase(this.$route.params.sectionSlug);
    }

  },

  components: {
    cadastroUsuario
  }

}

</script>
