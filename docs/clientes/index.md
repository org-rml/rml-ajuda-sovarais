# Cadastro de clientes

O cadastro de clientes guarda quem são os clientes da Sóvarais: nome, contatos, endereços e avisos importantes para a equipe. Todo pedido começa por um cliente, então manter esse cadastro em dia evita visita no endereço errado e ligação para o número errado.

**Neste artigo, você vai ver:**

1. [Consultar clientes](#_1-consultar-clientes)
2. [Cadastrar um cliente](#_2-cadastrar-um-cliente)
   - 2.1 [Dados do cliente](#_2-1-dados-do-cliente)
   - 2.2 [Telefones](#_2-2-telefones)
   - 2.3 [Endereços](#_2-3-enderecos)
   - 2.4 [Salvar](#_2-4-salvar)
3. [Editar um cliente](#_3-editar-um-cliente)
4. [Marcadores de atenção](#_4-marcadores-de-atencao)
5. [Inativar ou ativar um cliente](#_5-inativar-ou-ativar-um-cliente)
6. [Excluir um cliente](#_6-excluir-um-cliente)

::: info Na prática
No menu lateral, acesse **Cadastros › Clientes**. A tela tem duas abas: **Criar** e **Consultar**.
:::

## 1. Consultar clientes

Na aba **Consultar** ficam todos os clientes cadastrados.

![Lista de clientes na aba Consultar](/img/clientes/consulta.png)

- **Busca:** digite parte do nome, e-mail, CPF, telefone, CEP, rua ou bairro. A lista filtra enquanto você digita.
- **Status:** escolha entre **Todos**, **Ativos** e **Inativos**.
- **Ordenar:** clique no título da coluna **Cliente** para ordenar por nome.
- **Itens por página:** no rodapé da lista, escolha mostrar 5, 10, 20 ou 50 clientes por página.

Para ver tudo de um cliente sem abrir o cadastro, clique na setinha **›** no início da linha. Aparecem os endereços, os telefones, as observações, os marcadores e quem fez a última alteração, com o link **Ver no histórico**.

![Detalhes de um cliente aberto na lista](/img/clientes/detalhes.png)

::: tip Observações
- Um cliente inativado só aparece na lista com o filtro **Todos** ou **Inativos**.
- Alguns usuários não veem os dados pessoais dos clientes. Para eles, a busca é só por nome e os endereços aparecem como **Endereço oculto**. Isso é definido em [Gestão de usuários](../configuracoes/gestao-usuarios).
:::

## 2. Cadastrar um cliente

Abra a aba **Criar** e preencha os blocos abaixo, de cima para baixo.

### 2.1 Dados do cliente

![Bloco Dados do cliente preenchido](/img/clientes/dados-cliente.png)

| Campo | Obrigatório | Para que serve |
|---|---|---|
| **Nome completo** | Sim | Nome do cliente, com pelo menos 3 letras. |
| **E-mail** | Não | Contato por e-mail. |
| **CPF** | Não | Documento do cliente. O sistema coloca os pontos e o traço sozinho. |
| **Observações internas** | Não | Anotações da equipe sobre o cliente. Não aparecem para o cliente. |
| **Marcadores de atenção** | Não | Avisos curtos que a equipe precisa ver antes de atender. Veja a [seção 4](#_4-marcadores-de-atencao). |

### 2.2 Telefones

O cliente precisa ter **pelo menos um telefone**.

1. Em **Descrição**, diga de quem ou de onde é o número (ex.: Celular, Trabalho, Filha).
2. Digite o telefone.
3. Clique no botão <span class="botao">+</span>. O telefone entra na lista logo abaixo.

Repita para cada número. Para tirar um telefone da lista, clique na lixeira ao lado dele.

![Bloco Telefones com um número adicionado](/img/clientes/telefones.png)

### 2.3 Endereços

O cliente precisa ter **pelo menos um endereço**. É ele que aparece no pedido e na rota do técnico.

1. Em **Descrição**, dê um nome ao endereço (ex.: Principal, Casa da praia).
2. Digite o **CEP**. O sistema preenche **Endereço** e **Bairro** sozinho.
3. Complete o **Endereço** com o número.
4. Em **Tipo de imóvel**, escolha **Casa** ou **Edifício**. Se for edifício, informe o **nome do edifício**.
5. Se houver, preencha o **Complemento** (apto, bloco, torre).
6. Clique em <span class="botao">+ Adicionar</span>.

![Bloco Endereços preenchido, com o tipo Edifício](/img/clientes/endereco.png)

::: warning Atenção
O endereço só entra no cadastro depois de clicar em **Adicionar**. Se você preencher os campos e salvar sem adicionar, o sistema avisa que falta endereço.
:::

### 2.4 Salvar

Clique em <span class="botao">Salvar</span>. Se faltar alguma informação, o sistema avisa qual é:

| Aviso | O que fazer |
|---|---|
| **Telefone obrigatório** | Adicione pelo menos um telefone. |
| **Endereço obrigatório** | Adicione pelo menos um endereço. |
| **CEP obrigatório** | Informe o CEP com 8 dígitos. |
| **Endereço incompleto** | Preencha o endereço ou, se for edifício, o nome do edifício. |

O botão <span class="botao">Limpar</span> apaga tudo o que foi preenchido no formulário.

::: tip Cliente excluído antes
Se você cadastrar um cliente que já foi excluído, o sistema pergunta se quer **reativá-lo** com os dados novos. Confirmando, ele volta para a lista de clientes ativos.
:::

## 3. Editar um cliente

1. Na aba **Consultar**, encontre o cliente.
2. Clique nos três pontinhos <span class="botao">⋮</span> da coluna **Ações**.
3. Clique em **Editar**.
4. Faça as mudanças e clique em <span class="botao">Salvar</span>. Para desistir, clique em **Cancelar**.

![Menu de ações de um cliente](/img/clientes/menu-acoes.png)

Toda alteração fica registrada no **Histórico de registros**, com data e nome de quem fez.

## 4. Marcadores de atenção

Marcadores são avisos curtos que a equipe precisa saber antes de ir ao cliente, como "Cachorro bravo" ou "Ligar antes de ir". Eles aparecem com destaque na lista de clientes e no cadastro do pedido.

Dá para incluir marcadores ao cadastrar o cliente ou depois, sem abrir o cadastro:

1. Na aba **Consultar**, clique nos três pontinhos <span class="botao">⋮</span> do cliente.
2. Clique em **Gerenciar marcadores**.
3. Digite o aviso e aperte **Enter** (ou vírgula). Repita para cada aviso.
4. Para tirar um marcador, clique no **x** dele.
5. Clique em <span class="botao">Salvar marcadores</span>.

![Janela de marcadores de atenção](/img/clientes/marcadores.png)

## 5. Inativar ou ativar um cliente

Inative um cliente que não é mais atendido, mas cujo histórico você quer manter.

1. Na aba **Consultar**, clique nos três pontinhos <span class="botao">⋮</span> do cliente.
2. Clique em **Inativar** e confirme.

O cliente inativo some do filtro **Ativos**, mas continua com todos os pedidos e o histórico. Para voltar a atendê-lo, use o filtro **Inativos**, abra o menu do cliente e clique em **Ativar**.

## 6. Excluir um cliente

1. Na aba **Consultar**, clique nos três pontinhos <span class="botao">⋮</span> do cliente.
2. Clique em **Excluir** e confirme.

::: danger Cuidado
O cliente sai da lista na hora. Se a ideia é só parar de atender, prefira **Inativar**.
:::

## Veja também

- [Cadastrar um pedido](../pedidos/cadastrar)
- [Gestão de usuários e permissões](../configuracoes/gestao-usuarios)
