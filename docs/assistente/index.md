# Assistente

O Assistente responde perguntas sobre os dados do sistema em linguagem do dia a dia e ajuda em tarefas como cadastrar clientes, marcar visitas e encaixar pedidos na agenda. Ele **nunca grava nada sozinho**: sempre mostra um cartão para você conferir e clicar em **Confirmar**.

**Neste artigo, você vai ver:**

1. [Como usar](#_1-como-usar)
2. [O que dá para perguntar](#_2-o-que-da-para-perguntar)
3. [Cadastrar cliente](#_3-cadastrar-cliente)
4. [Marcar e juntar visitas](#_4-marcar-e-juntar-visitas)
5. [Encaixar pedidos na agenda do dia](#_5-encaixar-pedidos-na-agenda-do-dia)
6. [Bom saber](#_6-bom-saber)

::: info Na prática
No menu lateral, clique em **Assistente**, ou use o botão redondo com estrelinhas no canto de baixo das telas.
:::

![Tela do Assistente](/img/inicio/assistente.png)

## 1. Como usar

1. Escreva a pergunta em **Envie uma mensagem...** e aperte **Enter** (ou clique na seta).
2. Se preferir, clique numa das sugestões prontas, como **Quanto vendemos hoje?** ou **Quantas visitas temos amanhã?**.
3. O botão do microfone permite falar a pergunta em vez de digitar.
4. Dá para anexar uma foto ou PDF (ex.: um papel com os dados do cliente) pelo botão **+**.

Digite **/** para ver os comandos prontos:

| Comando | Para que serve |
|---|---|
| `/cadastro` | Cadastrar um cliente com os dados que você escrever. |
| `/juntar` | Procurar pedidos no mesmo prédio para marcar as visitas juntas. |

## 2. O que dá para perguntar

- **Vendas:** "quanto vendemos hoje?", "como está o faturamento desta semana comparado à anterior?".
- **Agenda:** "quantas visitas temos amanhã?". Junto com a resposta aparece um cartão com a agenda do dia.
- **Semana:** "como está a semana?", "qual dia tem folga?". Mostra os dias cheios, os dias com folga e os feriados.
- **Resumo do dia:** "como está meu dia?". Visitas de hoje, o que está em risco e as pendências mais urgentes.
- **Pendências:** "quais pedidos estão atrasados?", "o que eu remarco primeiro?".
- **Um pedido:** "o que aconteceu com o PED-000131?". Conta as tentativas, o motivo de não ter sido feito e o que falta.
- **Melhor dia:** "qual o melhor dia para o PED-000131?", igual ao botão **Sugerir melhor dia** do pedido.
- **Clientes:** "qual o telefone da Ana Souza?", "quem mora na Rua das Flores?".
- **Visitas no mesmo prédio:** "tem pedido no mesmo prédio do PED-000131?".

## 3. Cadastrar cliente

Escreva `/cadastro` seguido dos dados (nome, telefone, CEP, número, complemento) ou mande a foto de um papel com os dados. O Assistente mostra um cartão com o cadastro montado e avisa se já existe cliente com nome parecido. Confira e clique em **Confirmar**.

## 4. Marcar e juntar visitas

Peça, por exemplo:

- "marca a visita do PED-000131 para terça às 10h";
- "tem pedido no mesmo prédio do PED-000131? se tiver, marca junto";
- `/juntar` (sem número), para ver todos os pedidos sem data que têm visita no mesmo prédio ou perto.

O Assistente procura os pedidos vizinhos e mostra um cartão **Marcar visita** (ou **Remarcar visita**) com o pedido, o dia, o horário e o técnico. No cartão também aparecem avisos como:

- quantas visitas o técnico já tem nesse dia;
- se já existe visita no mesmo prédio nesse dia;
- se o horário já está ocupado com o mesmo técnico.

Clique em **Confirmar** para marcar. A visita entra na agenda e fica registrada no histórico do pedido, como se tivesse sido marcada pelo botão **Remarcar**.

::: tip
Para juntar com uma visita que já tem data, o Assistente sugere o horário logo depois da outra visita. Se os dois pedidos estiverem sem data, ele pergunta o dia antes e mostra os dois no mesmo cartão.
:::

## 5. Encaixar pedidos na agenda do dia

Pergunte "tem pedido que dá para encaixar na terça?" ou "ajusta a agenda de amanhã".

1. O Assistente olha as visitas já marcadas no dia.
2. Procura os pedidos **sem data** que ficam no mesmo prédio ou perto dessas visitas.
3. Mostra **um cartão só**, "Visitas para ...", com uma linha por pedido: dia e horário sugerido, técnico e de qual visita ele fica perto.
4. Todas as linhas vêm marcadas. **Desmarque** o que não quiser.
5. Clique em **Confirmar** (o botão mostra quantas visitas serão marcadas).

O sistema marca todas as visitas escolhidas de uma vez e mostra o botão **Abrir agenda**. Cada pedido ganha no histórico uma anotação como "Encaixe: mesmo prédio do PED-000122".

::: warning Ligue para os clientes
O sistema não sabe se o cliente estará em casa. Depois de encaixar, ligue para confirmar o horário. Se não puder, é só remarcar.
:::

::: info
A visita encaixada fica com o técnico do próprio pedido. Se a visita vizinha for com outra pessoa, o cartão avisa; para trocar o técnico, edite o pedido.
:::

## 6. Bom saber

- As respostas são geradas por inteligência artificial a partir dos dados do sistema. **Confira valores importantes** antes de usar em uma decisão.
- Para responder, o Assistente consulta o sistema com o **seu acesso**: ele não vê nada que você não veria pela tela. A pergunta e os dados consultados são enviados à Anthropic, a empresa da IA (Claude), só para gerar a resposta. Veja [Como o Assistente acessa os dados](../sobre#como-o-assistente-acessa-os-dados).
- O Assistente só faz o que o seu usuário tem permissão para fazer. Marcar visitas, por exemplo, exige a mesma permissão de marcar visita pela agenda. Veja [Gestão de usuários](../configuracoes/gestao-usuarios).
- Os cartões valem por 15 minutos. Depois disso, peça de novo.
- O Assistente evita sábado, domingo e feriados de Recife, sugere horários entre 9h e 18h e avisa quando um técnico passa de 6 visitas no dia (8 é o limite).
- Cliente com **marcador de atenção** (ex.: "Não paga"): o Assistente avisa e só prepara a visita depois que você confirmar. O cartão mostra o marcador.
- Há um limite de perguntas por dia. A quantidade restante aparece logo abaixo da caixa de mensagem.
- As conversas ficam guardadas **só no navegador** em que foram feitas. Em outro computador ou celular, a lista começa vazia. Use **Conversas** (no topo) para ver as anteriores e **Nova conversa** para começar outra.
