# Dados da empresa

Aqui ficam os dados que saem no pedido impresso e nos relatórios: logotipo, razão social, endereço, telefones e chave PIX. Também é onde se controlam as renovações (domínio, servidor, certificados etc.).

**Neste artigo, você vai ver:**

1. [Cabeçalho](#_1-cabecalho)
2. [PIX](#_2-pix)
3. [Renovações](#_3-renovacoes)

::: info Na prática
No menu lateral, acesse **Configurações › Dados da empresa**. Só administradores, ou quem eles liberarem, alteram estes dados.
:::

## 1. Cabeçalho

![Aba Cabeçalho](/img/config/empresa-cabecalho.png)

- **Logotipo:** clique em **Trocar imagem** (PNG ou JPG, até 300 KB). Ele sai no pedido impresso e nos relatórios.
- **Identificação:** razão social e CNPJ (opcional).
- **Endereço e contato:** rua, bairro, CEP, cidade, estado e telefones.
- **Usar este endereço também como saída da rota:** a [rota do técnico](../agenda/rota-do-dia) começa neste endereço. Se a empresa mudar de lugar, a saída da rota muda junto.

O quadro **Assim sai no pedido impresso** mostra na hora como vai ficar. Use **Ver pedido de exemplo** para conferir o pedido inteiro.

::: info
A mudança vale para os pedidos impressos daqui para frente, inclusive quando você reimprimir um pedido antigo.
:::

## 2. PIX

![Aba PIX](/img/config/empresa-pix.png)

1. Em **Tipo de chave**, escolha **Telefone**, **CPF / CNPJ**, **E-mail** ou **Aleatória**.
2. Digite a **Chave**. O sistema avisa se ela é válida.
3. Em **Quem recebe**, preencha o **Favorecido** (até 25 letras, como aparece no app do banco), o **Banco** (opcional) e a **Cidade do favorecido** (até 15 letras).
4. Em **Sair no pedido**, escolha se a chave sai no pedido impresso, com ou sem QR Code.
5. Clique em <span class="botao">Salvar alterações</span>.

::: danger Antes de salvar, teste com o celular
O QR Code da prévia é de verdade. Abra o app do banco, aponte para ele e confira se aparece o nome certo de quem recebe. Uma chave errada manda o dinheiro para outra conta.
:::

## 3. Renovações

![Aba Renovações](/img/config/empresa-renovacoes.png)

Lista o que a empresa precisa renovar de tempos em tempos (domínio do site, servidor, certificado digital, alvará...).

**Para cadastrar uma renovação**, preencha em **Nova renovação**:

| Campo | Para que serve |
|---|---|
| **O que é** | Nome da renovação. |
| **Site onde se renova** | Opcional. Link para a página de pagamento. |
| **Vence em** | Data de vencimento. |
| **Avisar** | Quanto tempo antes o sistema deve avisar. |
| **Valor pago** | Opcional. Quanto custou. |
| **Renova a cada** | De quanto em quanto tempo se repete. |
| **Anotação** | Opcional. Ex.: com qual login entrar, qual cartão usar. |

Clique em <span class="botao">+ Adicionar</span>.

No dia do aviso, a renovação aparece no **sino**, junto com os clientes para ligar. Depois de pagar, clique em **Renovei**: o sistema guarda o valor e passa o vencimento para o próximo período.

::: tip
O cadeado do site (certificado HTTPS) se renova sozinho e não precisa entrar nesta lista.
:::
