import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'pt-BR',
  title: 'Ajuda Sóvarais',
  description: 'Manuais e perguntas frequentes do sistema Sóvarais.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#4f46e5' }],
  ],
  themeConfig: {
    siteTitle: 'Sóvarais · Ajuda',
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Perguntas frequentes', link: '/faq' },
      { text: 'Abrir o sistema', link: 'https://sovaraisrecife.cloud' },
    ],
    sidebar: [
      {
        text: 'Agenda',
        items: [
          { text: 'Como funciona a agenda', link: '/agenda/' },
          { text: 'Dar baixa em uma visita', link: '/agenda/dar-baixa' },
          { text: 'Precisa de atenção', link: '/agenda/precisa-de-atencao' },
          { text: 'Organizar a rota do dia', link: '/agenda/rota-do-dia' },
          { text: 'Imprimir os pedidos do dia', link: '/agenda/imprimir' },
        ],
      },
      {
        text: 'Pedidos',
        items: [
          { text: 'Cadastrar um pedido', link: '/pedidos/cadastrar' },
          { text: 'Situação e histórico do pedido', link: '/pedidos/historico' },
          { text: 'Lembretes para ligar ao cliente', link: '/pedidos/lembretes' },
        ],
      },
      {
        text: 'Clientes',
        items: [{ text: 'Cadastro de clientes', link: '/clientes/' }],
      },
      {
        text: 'Usuários',
        items: [{ text: 'Gestão de usuários e permissões', link: '/usuarios/' }],
      },
      {
        text: 'Dúvidas',
        items: [{ text: 'Perguntas frequentes', link: '/faq' }],
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
          modal: {
            displayDetails: 'Mostrar detalhes',
            resetButtonTitle: 'Limpar busca',
            backButtonTitle: 'Fechar busca',
            noResultsText: 'Nada encontrado para',
            footer: { selectText: 'abrir', navigateText: 'navegar', closeText: 'fechar' },
          },
        },
      },
    },
    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    lastUpdated: { text: 'Atualizado em', formatOptions: { dateStyle: 'short' } },
    darkModeSwitchLabel: 'Aparência',
    lightModeSwitchTitle: 'Usar tema claro',
    darkModeSwitchTitle: 'Usar tema escuro',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Voltar ao topo',
    notFound: {
      title: 'Página não encontrada',
      quote: 'Esse endereço não existe ou o artigo mudou de lugar. Use a busca ou volte ao início.',
      linkText: 'Voltar ao início',
    },
    footer: {
      message: 'Dúvida que não está aqui? Fale com o suporte.',
      copyright: 'Sóvarais Recife',
    },
  },
})
