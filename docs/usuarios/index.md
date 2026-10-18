# Cadastro de usuários

Cada pessoa que usa o sistema tem o seu próprio usuário, com nome, perfil e senha. Assim o histórico mostra quem fez cada coisa e cada um vê só o que precisa.

**Neste artigo, você vai ver:**

1. [Consultar usuários](#_1-consultar-usuarios)
2. [Cadastrar um usuário](#_2-cadastrar-um-usuario)
3. [Editar, inativar ou excluir](#_3-editar-inativar-ou-excluir)

::: info Na prática
No menu lateral, acesse **Cadastros › Usuários**. A tela tem as abas **Criar** e **Consultar**.
:::

## 1. Consultar usuários

![Consulta de usuários](/img/usuarios/consulta.png)

- **Busca:** por nome, usuário ou perfil.
- **Status:** **Todos**, **Ativos** ou **Inativos**.

## 2. Cadastrar um usuário

![Formulário de usuário](/img/usuarios/formulario.png)

**Dados do usuário**

| Campo | Obrigatório | Para que serve |
|---|---|---|
| **Nome completo** | Sim | Nome da pessoa, com pelo menos 3 letras. |
| **Perfil** | Sim | **Administrador**, **Gerente** ou **Vendedor**. O perfil define as permissões padrão. |

**Acesso**

| Campo | Para que serve |
|---|---|
| **Username** | Nome usado para entrar no sistema, com pelo menos 5 letras. |
| **Senha gerada automaticamente** | O sistema cria uma senha segura. Use os botões ao lado para **ver**, **copiar** ou **gerar outra**. |
| **Configurar senha manualmente** | Ligue para digitar a senha você mesmo (mínimo de 6 caracteres) e confirmar. |

Clique em <span class="botao">Salvar</span> e passe o username e a senha para a pessoa.

::: tip Permissões individuais
Depois de criar o usuário, ajuste o que ele pode ver e fazer em [Gestão de usuários](../configuracoes/gestao-usuarios).
:::

## 3. Editar, inativar ou excluir

Na aba **Consultar**, use os botões da coluna **Ações**:

- **lápis**: editar. Na edição dá para **alterar a senha** do usuário;
- **círculo cortado**: inativar. O usuário inativo não consegue entrar, mas o nome dele continua no histórico;
- **lixeira**: excluir.

::: tip
Quando alguém sai da empresa, prefira **inativar** o usuário.
:::
