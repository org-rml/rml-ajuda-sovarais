# Cadastrar um pedido

O pedido (ou orçamento) registra o que vai ser feito para o cliente, quando e onde, e quanto custa. É a partir dele que a visita entra na agenda, o técnico recebe o pedido impresso e a equipe acompanha o andamento até o serviço ser concluído.

**Neste artigo, você vai ver:**

1. [Cliente](#_1-cliente)
2. [O que vai ser feito](#_2-o-que-vai-ser-feito)
3. [Quando e onde](#_3-quando-e-onde)
4. [Pagamento e resumo](#_4-pagamento-e-resumo)
5. [Outras informações](#_5-outras-informacoes)
6. [Salvar e imprimir](#_6-salvar-e-imprimir)
7. [Editar um pedido](#_7-editar-um-pedido)

::: info Na prática
No menu lateral, acesse **Cadastros › Pedidos / Orçamentos** e abra a aba **Criar**. O formulário é dividido em passos numerados, de cima para baixo.
:::

## 1. Cliente

![Passos 1 e 2 de um pedido novo](/img/pedidos/novo-cliente-itens.png)

1. Em **Quem é o cliente?**, digite o nome, CPF, e-mail ou telefone e escolha o cliente na lista.
2. Se ele ainda não existir, clique em **Cadastrar cliente novo** (no canto do passo). Depois de salvar o cliente, o sistema volta para o pedido.

Ao escolher o cliente, aparecem:

- o telefone principal e os links **Editar cliente** e **Trocar**;
- os **marcadores de atenção** do cliente, em vermelho, se houver;
- **Pedidos deste cliente**: os pedidos anteriores dele, 5 por página. Use para conferir se o serviço já não foi cadastrado.

![Cliente escolhido, com os pedidos anteriores](/img/pedidos/cliente.png)

## 2. O que vai ser feito

1. Em **Buscar produto ou serviço**, digite o nome ou o código e escolha o item. Os botões <span class="botao">+ Produto</span> e <span class="botao">+ Serviço</span> limitam a busca a um dos tipos.
2. Ajuste a **quantidade**, o **preço** e o **desconto** de cada item, se precisar. Para tirar um item, clique na lixeira.
3. Em **Detalhes do serviço (opcional)**, descreva o que precisa ser feito.

![Itens do pedido](/img/pedidos/itens.png)

::: tip Sai no pedido impresso
O texto de **Detalhes do serviço** sai no pedido impresso, no campo **Observações**. Escreva pensando no técnico que vai ler.
:::

## 3. Quando e onde

![Passo Quando e onde de um pedido novo](/img/pedidos/quando-onde.png)

| Campo | Para que serve |
|---|---|
| **Dia da visita** | Dia em que o técnico vai ao cliente. Os atalhos **Hoje**, **Amanhã** e **A combinar** preenchem rápido. |
| **Horário** | Opcional. Ajuda a montar a rota do dia. |
| **Sugerir melhor dia** | Mostra dias em que já há visitas perto do endereço do cliente. Aparece para quem tem essa permissão. |
| **Vai até o cliente?** | **Sim, no endereço** (visita) ou **Cliente retira na loja**. |
| **Onde vai ser a visita?** | Escolha um dos endereços cadastrados do cliente. |

::: warning Sem data
Deixando **A combinar**, o pedido fica em **Precisa de atenção › Sem data marcada** na agenda até alguém combinar o dia com o cliente.
:::

### Visitas no mesmo prédio

Ao escolher o endereço, o sistema procura outros pedidos no mesmo prédio ou perto dali e mostra até 3 avisos logo abaixo:

- **"Já tem visita no Edifício ..."** ou **"Tem visita a 150 m daqui"**, com o pedido, o técnico e o dia da outra visita.
- Se a outra visita já tem data, clique em <span class="botao">Agendar junto</span>: este pedido é marcado para o mesmo dia, no horário logo depois da outra visita e com o mesmo técnico. O aviso passa a mostrar **Marcado junto**.
- Se o outro pedido também está sem data, o aviso sugere combinar os dois para o mesmo dia, com o link **Abrir pedido**.

::: tip
O [Assistente](../assistente/#_5-encaixar-pedidos-na-agenda-do-dia) também faz essa busca para um dia inteiro e encaixa vários pedidos de uma vez.
:::

## 4. Pagamento e resumo

![Pagamento e resumo do pedido](/img/pedidos/pagamento-resumo.png)

- **Forma de pagamento** e **Condição**: podem ficar para depois. Dá para informar ao editar o pedido ou ao dar baixa no serviço.
- **Frete (R$)**: valor de entrega, se houver.
- **Resumo**: soma de produtos, serviços, descontos e frete. Em **Desconto no total**, escolha **R$** (valor) ou **%** (porcentagem).

## 5. Outras informações

![Outras informações e botões do pedido](/img/pedidos/outras-info.png)

| Campo | Para que serve |
|---|---|
| **Data do pedido** | Data de emissão. Pode ser até o dia da visita. |
| **Vendedor** | Quem fez a venda. |
| **Observações (opcional)** | Anotação interna da equipe. Fica guardada no pedido e **não** aparece no pedido impresso. |

## 6. Salvar e imprimir

- <span class="botao">Salvar</span>: grava o pedido. Se tiver data, ele entra na agenda do dia.
- <span class="botao">Imprimir</span>: gera o pedido impresso para o técnico.
- <span class="botao">Limpar</span>: apaga tudo o que foi preenchido.

## 7. Editar um pedido

Abra o pedido pela [consulta](./consultar) (menu **⋮ › Editar**), pela [agenda](../agenda/) ou pela busca por cliente. Na edição aparecem dois blocos a mais:

- **Andamento do serviço**, no topo: mostra a situação da visita e os botões para registrar o que aconteceu. Veja [Situação e histórico do pedido](./historico).
- Botões no fim do formulário: **Voltar**, **Cancelar** (cancela o pedido), **Imprimir**, **Atualizar** (salva as mudanças) e **Finalizar**.

::: tip Data da visita na edição
Num pedido já salvo, a data da visita não é trocada no passo 3. Para marcar ou remarcar, use os botões do **Andamento do serviço**.
:::

![Passo Quando e onde na edição](/img/pedidos/quando-onde-edicao.png)

## Veja também

- [Consultar pedidos](./consultar)
- [Pedidos de um cliente](./por-cliente)
- [Dar baixa em uma visita](../agenda/dar-baixa)
