# Sobre o sistema

O **Sóvarais** é o sistema de gestão da Sóvarais Recife, empresa de instalação e manutenção de varais. Ele organiza o dia a dia da equipe, do primeiro contato com o cliente até a garantia do serviço.

## O que ele resolve

- **Agenda do dia:** as visitas de cada dia num só lugar, com a rota que faz o técnico rodar menos.
- **Nada passa batido:** pedidos atrasados, sem data ou esperando o cliente aparecem sozinhos em "Precisa de atenção".
- **Histórico completo:** tudo o que acontece com um pedido fica registrado, com data e nome de quem fez.
- **Pós-venda:** lembretes para ligar ao cliente no fim da garantia ou na hora da revisão.
- **Pedido impresso:** o técnico sai com o pedido em mãos, com endereço e detalhes do serviço.
- **Acesso por pessoa:** cada usuário vê só o que precisa para o seu trabalho.
- **Assistente com IA:** responde sobre agenda, vendas e clientes, sugere o melhor dia para uma visita e encaixa pedidos na agenda, sempre pedindo confirmação antes de gravar.

## Desenvolvimento

Sistema web desenvolvido sob medida por **Rodrigo Moreira Lima**, do levantamento das necessidades à publicação e manutenção, incluindo esta Central de Ajuda.

## Por dentro

| Parte | Tecnologia |
|---|---|
| Tela (o que você usa no navegador) | Angular |
| Camada de acesso (BFF) | Java 21 e Spring Boot |
| Serviços de pedidos, rotas e login | Java e Spring Boot, um serviço para cada assunto |
| Publicação | Docker e Caddy, com HTTPS |
| Central de Ajuda | VitePress |
| Assistente | Claude, da Anthropic, ligado ao sistema por um servidor MCP |

### Como o Assistente acessa os dados

O Assistente usa o **MCP** (Model Context Protocol), um padrão aberto para ligar uma IA a um sistema. O próprio Sóvarais tem um servidor MCP que oferece só duas ferramentas:

- **consultar**: lê agenda, pendências, vendas, clientes, pedidos, visitas vizinhas e a sugestão de melhor dia;
- **propor ação**: monta um cartão (marcar visitas, cadastrar cliente). Nada é gravado antes de alguém clicar em **Confirmar**.

A cada pergunta, a IA chama essas ferramentas com o acesso da pessoa que perguntou. Por isso o Assistente só vê e faz o que o usuário já poderia fazer pela tela, conforme a [Gestão de usuários](./configuracoes/gestao-usuarios).

O jeito de trabalhar do Assistente fica num arquivo de instruções, em texto: horário da equipe, limite de visitas por técnico, feriados de Recife, ordem das pendências e "receitas" como a de encaixar pedidos na agenda. Para ensinar algo novo, quase sempre basta escrever uma receita, sem mudar o programa.
