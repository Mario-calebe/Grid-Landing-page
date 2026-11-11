# Caderno de erros

Anotações do que eu aprendi resolvendo erros, com as minhas palavras.

---

## 11/11/2026 — Função chamada dentro do argumento de outra

**Contexto:** troquei o `fetch` com `.then` por `async/await` e separei o código em `buscarDados()` e `iniciarContagem()`. Achei que, para chamar a contagem, eu precisaria chamar a busca de dados em outro lugar também, e acabei fazendo o `fetch` duas vezes.

**O que eu aprendi:**
Quando uma função tem como argumento outra função, a função de dentro será executada primeiro. Pois tanto na matemática quanto na programação, parênteses indicam prioridade. E o argumento enviado também será executado em uma chamada de função.

---

## 11/11/2026 — O `try` não precisa estar em volta do `throw`

**Contexto:** tirei o `try/catch` do `buscarDados()` e deixei só o `if` + `throw`. O `try/catch` ficou no `iniciarContagem()`, em volta do `await dados`. No teste com o arquivo inexistente, apareceu um erro só, com a minha mensagem.

**O que eu aprendi:**
Um campo try não precisa necessariamente estar em volta de um throw. O throw pode chegar nele e, quando chegar, o alarme será apitado. Assim como um ladrão sai da cela, mas quando chega no portão principal, os guardas o avistam.
