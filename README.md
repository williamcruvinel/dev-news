# 📰 Dev News

O **Dev News** é um portal fictício de notícias desenvolvido com foco educacional para aplicar, na prática, conceitos modernos de desenvolvimento frontend utilizando **Next.js, React, TypeScript e Tailwind CSS**.

O projeto simula um ambiente real de construção de um portal jornalístico digital, priorizando **componentização, tipagem, performance, responsividade e experiência do usuário**.

---

## 🚀 Demonstração

O Dev News apresenta:

* Página inicial com manchete principal
* Listagem de notícias organizadas em categorias
* Cards reutilizáveis
* Página individual de notícia dinâmica
* Layout responsivo para diferentes dispositivos

---

## 🎯 Objetivo do Projeto

O projeto tem como finalidade consolidar conhecimentos em:

* Estruturação de aplicações com Next.js (App Router)
* Criação de componentes reutilizáveis em React
* Tipagem estática com TypeScript
* Estilização moderna e responsiva com Tailwind CSS
* Organização de layout em portais de conteúdo
* Boas práticas de desenvolvimento frontend

---

## 🧱 Funcionalidades

### 🧭 Header

* Logotipo do portal
* Menu de navegação por categorias
* Layout adaptável (desktop e mobile)

### 📰 Hero Section

* Manchete principal em destaque
* Imagem ilustrativa
* Chamada para leitura

### 🧩 Seção de Notícias

* Grid responsivo de cards
* Informações resumidas
* Navegação para página individual

### 📄 Página de Notícia

* Conteúdo completo
* Layout de leitura
* Navegação de retorno

### 🦶 Footer

* Informações institucionais
* Links úteis
* Redes sociais
* Direitos autorais

---

## ⚙️ Tecnologias Utilizadas

* **Next.js (App Router)** → Estrutura e renderização
* **React** → Componentização
* **TypeScript** → Tipagem estática
* **Tailwind CSS** → Estilização utilitária
* **Lucide React** → Ícones
* **Google Fonts** → Tipografia

---

## 🧠 Conceitos Aplicados

### React & Next.js

* Componentização
* Renderização de listas
* Rotas dinâmicas
* Server e Client Components
* Organização de pastas no App Router

### Tailwind CSS

* Layout com Flexbox e Grid
* Responsividade mobile-first
* Microinterações
* Hierarquia visual

### Boas Práticas

* Separação entre dados e apresentação
* Componentes pequenos e reutilizáveis
* Tipagem clara
* Código legível e escalável

---

## 📁 Estrutura do Projeto

```
src/
 ├── app/
 │    ├── page.tsx
 │    ├── brasil/
 │    │      └── page.tsx
 │    ├── esportes/
 │    │      └── page.tsx
 │    ├── mundo/
 │    │      └── page.tsx
 │    ├── tecnologia/
 │    │      └── page.tsx
 │    ├── noticia/
 │    │      └── [id]/
 │    │            └── page.tsx
 │
 ├── components/
 │    ├── Header
 │    ├── BackButton
 │    ├── Footer
 │    ├── Hero
 │    ├── NewsCard
 │    └── NewsSection
 │
 ├── data/
 │    └── news.ts
 │
 ├── types/
 │    └── news.ts
```

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar repositório

```bash
git clone https://github.com/williamcruvinel/dev-news.git
```

### 2️⃣ Acessar pasta

```bash
cd dev-news
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Executar projeto

```bash
npm run dev
```

### 5️⃣ Abrir no navegador

```
http://localhost:3000
```

---

## 🎓 Aprendizados Obtidos

Durante o desenvolvimento deste projeto foi possível:

* Criar uma aplicação frontend moderna com Next.js
* Trabalhar com rotas dinâmicas
* Aplicar boas práticas de UI e UX
* Desenvolver layouts responsivos
* Utilizar TypeScript para maior segurança
* Estruturar um projeto escalável

---

## 👨‍💻 Autor

Projeto desenvolvido por **WILLIAM CRUVINEL** como prática de desenvolvimento frontend e evolução profissional na stack React + Next.js.

---

## 📄 Licença

Este projeto possui finalidade educacional e pode ser utilizado para estudos e portfólio.
