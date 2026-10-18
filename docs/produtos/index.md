# Cadastro de produtos

O cadastro de produtos guarda os itens vendidos pela Sóvarais (varais, kits, acessórios), com preço, estoque e o valor da instalação. Os produtos aparecem na busca de itens do [pedido](../pedidos/cadastrar).

**Neste artigo, você vai ver:**

1. [Consultar produtos](#_1-consultar-produtos)
2. [Cadastrar um produto](#_2-cadastrar-um-produto)
3. [Editar, inativar ou excluir](#_3-editar-inativar-ou-excluir)

::: info Na prática
No menu lateral, acesse **Cadastros › Produtos**. A tela tem as abas **Criar** e **Consultar**.
:::

## 1. Consultar produtos

![Consulta de produtos](/img/produtos/consulta.png)

- **Busca:** por código, descrição ou categoria.
- **Status:** **Todos**, **Ativos** ou **Inativos**.
- Clique no título **Preço** para ordenar.
- A coluna **Estoque** mostra a quantidade atual.

## 2. Cadastrar um produto

Abra a aba **Criar** e preencha:

![Formulário de produto](/img/produtos/formulario.png)

**Dados do produto**

| Campo | Obrigatório | Para que serve |
|---|---|---|
| **Código** | Automático | Gerado pelo sistema ao salvar. |
| **Descrição** | Sim | Nome do produto, com pelo menos 3 letras (ex.: Varal de teto retrátil 2m). |
| **Categoria** | Não | Agrupa produtos parecidos (ex.: Varal de teto, Acessórios). |
| **Unidade** | Sim | Como o produto é vendido (unidade, metro etc.). |
| **Preço de venda** | Sim | Valor que entra no pedido. |
| **Preço de custo** | Não | Quanto custa para a empresa. |

**Estoque e instalação**

| Campo | Para que serve |
|---|---|
| **Estoque atual** | Quantidade disponível. |
| **Estoque mínimo** | Quantidade mínima desejada, para saber quando comprar mais. |
| **Necessita instalação** | Ligue se o produto precisa ser instalado pela equipe. |
| **Preço de instalação** | Valor cobrado pela instalação, quando houver. |
| **Observações** | Anotações internas sobre o produto. |
| **Status** | Ligado = ativo. Produtos inativos não aparecem na busca do pedido. |

Clique em <span class="botao">Salvar</span>.

## 3. Editar, inativar ou excluir

Na aba **Consultar**, use os botões da coluna **Ações**:

- **lápis**: editar o produto. Depois das mudanças, clique em <span class="botao">Atualizar</span>;
- **círculo cortado**: inativar (ou ativar de novo);
- **lixeira**: excluir.

::: tip
Prefira **inativar** um produto que saiu de linha. Ele some da busca do pedido, mas os pedidos antigos continuam mostrando o item.
:::
