export default {

  // home is a section without childs, set as an empty array
  home: [
  ],

  created: [

    {
      type: 'title',
      txt: 'Cadastro',
      icon: 'fa fa-tag context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Cadastro de Usuário',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Cadastro de Unidades',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Cadastro de Moradores',
      link: '/page',
    },

  ],

  schedule: [

    {
      type: 'title',
      txt: 'Agendas',
      icon: 'fa fa-users context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Lista de Agendas',
      link: '/page',
    },

    // {
    //   type: 'link',
    //   txt: 'List Contacts',
    //   link: '/page',
    // },

    // {
    //   type: 'link',
    //   txt: 'List Newsletters',
    //   link: '/page',
    // },

  ],

  contact: [

    {
      type: 'title',
      txt: 'Contatos',
      icon: 'fa fa-user context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Change Password',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Change Settings',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Logout',
      link: '/page',
    },

    {
      type: 'title',
      txt: 'Change Subscription',
      icon: 'fa fa-credit-card context-menu__title-icon',
    },

    {
      type: 'link',
      txt: 'Plans',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Payment Settings',
      link: '/page',
    },

    {
      type: 'link',
      txt: 'Payment History',
      link: '/page',
    },

  ],

};
