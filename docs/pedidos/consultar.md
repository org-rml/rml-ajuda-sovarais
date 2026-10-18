# Consultar pedidos

A consulta lista todos os pedidos e orçamentos de um período, com a situação de cada um. É por aqui que você encontra um pedido antigo, confere o total vendido no mês ou imprime vários pedidos de uma vez.

**Neste artigo, você vai ver:**

1. [Filtros](#_1-filtros)
2. [A lista de pedidos](#_2-a-lista-de-pedidos)
3. [Ações de um pedido](#_3-acoes-de-um-pedido)
4. [Imprimir vários pedidos](#_4-imprimir-varios-pedidos)

::: info Na prática
No menu lateral, acesse **Cadastros › Pedidos / Orçamentos** e abra a aba **Consultar**.
:::

## 1. Filtros

![Consulta de pedidos](/img/pedidos/consulta.png)

| Filtro | Como funciona |
|---|---|
| **Buscar** | Número do pedido, nome do cliente ou valor total. |
| **Período** | Intervalo de datas. Ao lado, escolha se o período vale pela data de **Emissão** do pedido ou pela data da **Visita**. |
| **Situação** | **Todos**, **Em aberto**, **Finalizado** ou **Cancelado**. O número em cada botão mostra quantos pedidos há no período. |

## 2. A lista de pedidos

Cada linha mostra o número, o cliente, a data de emissão, a data da visita, a situação e o valor total. Clique no título de uma coluna com setinhas para ordenar por ela.

- Datas de visita em **vermelho** já passaram e o pedido ainda não teve baixa.
- A **situação** usa os mesmos nomes da agenda: *Sem data marcada*, *Falta dar baixa*, *Sem nova data*, *Concluído* etc.
- No rodapé aparecem a quantidade de registros, o **total no período** e a escolha de quantos itens mostrar por página.

## 3. Ações de um pedido

Clique nos três pontinhos <span class="botao">⋮</span> no fim da linha.

![Menu de ações do pedido](/img/pedidos/menu-acoes.png)

| Ação | O que faz |
|---|---|
| **Visualizar** | Abre o pedido para conferir, sem editar. |
| **Ver andamento** | Mostra o histórico do pedido: visitas, baixas, contatos e anotações. |
| **Editar** | Abre o cadastro do pedido. Veja [Cadastrar um pedido](./cadastrar#_7-editar-um-pedido). |
| **Duplicar** | Cria um pedido novo com os mesmos dados, para não digitar tudo de novo. |
| **Imprimir** | Gera o pedido impresso. |
| **Finalizar** | Registra que o serviço foi feito (mesma janela do **Foi feito** da agenda). |
| **Remarcar visita** | Marca uma nova data para a visita. |
| **Cancelar pedido** | Cancela o pedido, pedindo o motivo. Ele continua na consulta, com o filtro **Cancelado**. |
| **Excluir pedido** | Apaga o pedido. Use só para pedidos lançados por engano. |

::: tip
Algumas ações ficam apagadas quando não fazem sentido para aquele pedido, por exemplo **Finalizar** num pedido já concluído.
:::

## 4. Imprimir vários pedidos

1. Marque o quadradinho no início das linhas que quer imprimir. O quadradinho do cabeçalho marca todos da página.
2. No rodapé da tela aparece uma barra com a quantidade selecionada.
3. Clique em <span class="botao">Imprimir</span>. Para desmarcar tudo, clique em **Limpar**.

## Veja também

- [Cadastrar um pedido](./cadastrar)
- [Pedidos de um cliente](./por-cliente)
- [Situação e histórico do pedido](./historico)
