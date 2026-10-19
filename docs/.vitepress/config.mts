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
      { text: 'Sobre', link: '/sobre' },
      { text: 'Abrir o sistema', link: 'https://sovaraisrecife.cloud' },
    ],
    sidebar: [
      {
        text: 'Primeiros passos',
        items: [
          { text: 'Tela inicial', link: '/inicio/' },
          { text: 'Assistente', link: '/assistente/' },
        ],
      },
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
          { text: 'Consultar pedidos', link: '/pedidos/consultar' },
          { text: 'Pedidos de um cliente', link: '/pedidos/por-cliente' },
          { text: 'Situação e histórico do pedido', link: '/pedidos/historico' },
          { text: 'Lembretes para ligar ao cliente', link: '/pedidos/lembretes' },
        ],
      },
      {
        text: 'Cadastros',
        items: [
          { text: 'Clientes', link: '/clientes/' },
          { text: 'Produtos', link: '/produtos/' },
          { text: 'Serviços', link: '/servicos/' },
          { text: 'Usuários', link: '/usuarios/' },
        ],
      },
      {
        text: 'Relatórios',
        items: [{ text: 'Relatórios', link: '/relatorios/' }],
      },
      {
        text: 'Configurações',
        items: [
          { text: 'Dados da empresa', link: '/configuracoes/dados-empresa' },
          { text: 'Gestão de usuários e permissões', link: '/configuracoes/gestao-usuarios' },
          { text: 'Histórico de registros', link: '/configuracoes/historico' },
        ],
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
      copyright: `Sóvarais © ${new Date().getFullYear()} · Desenvolvido por Rodrigo Moreira Lima`,
    },
  },
})
