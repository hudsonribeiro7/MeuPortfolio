# 🌑 Hudson Ribeiro — Portfólio Pessoal

> Landing page pessoal com estética **Liquid Midnight** — dark mode profundo, formas orgânicas e micro-interações que tornam a página viva.

---

## 📸 Preview

![Preview da landing page](https://i.ibb.co/0pX3Zkqk/kling-20251028-Elements-780-2.png)

---

## 🚀 Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica |
| **CSS3** | Animações, Bento Grid, layout responsivo |
| **JavaScript Vanilla** | Cursor, scroll reveal, carousel drag, parallax |
| **Google Fonts** | Syne (display) + DM Mono (corpo) |

Sem frameworks. Sem dependências. Abre direto no navegador.

---

## 📁 Estrutura de Arquivos

```
portfolio/
├── index.html     # Estrutura e conteúdo
├── style.css      # Todo o visual (12 seções comentadas)
├── script.js      # Interatividade (5 módulos comentados)
└── README.md      # Este arquivo
```

---

## ✨ Funcionalidades

- **Cursor customizado** com ponto coral e ring com lag suave
- **Hero líquido** com foto de bordas orgânicas animadas e blobs de luz ambiente
- **Scroll reveal** progressivo com delays escalonados
- **Skills carousel** com drag no desktop e swipe no mobile
- **Parallax** nas imagens da seção Sobre
- **Bento Grid** no portfólio (card principal ocupa 7 colunas)
- **Formulário** com feedback visual no envio
- **Noise overlay** sutil para profundidade analógica
- **Totalmente responsivo** — breakpoints em 900px e 480px

---

## ⚡ Como Usar

**1. Clone ou baixe os arquivos**
```bash
git clone https://github.com/hudsonribeiro7/portfolio.git
```

**2. Abra no navegador**
```bash
# Sem servidor necessário — basta abrir:
open index.html

# Ou use a extensão Live Server no VS Code
```

---

## 🎨 Paleta de Cores

```css
--coral:  #FF6B47   /* Acento principal */
--green:  #00FF94   /* Acento de ação   */
--bg:     #080808   /* Fundo principal  */
--bg2:    #0e0e0e   /* Fundo alternado  */
--bg3:    #141414   /* Cards            */
--text:   #E8E8E8   /* Texto principal  */
--dim:    #666666   /* Texto secundário */
```

---

## 📐 Tipografia

| Fonte | Peso | Uso |
|---|---|---|
| **Syne** | 700, 800 | Títulos e headings |
| **DM Mono** | 300, 300 italic | Corpo e UI |

---

## 📱 Responsividade

| Breakpoint | Comportamento |
|---|---|
| `> 900px` | Layout completo — grid, bento, foto hero à direita |
| `≤ 900px` | Coluna única, foto hero aparece acima do texto, imagens do About empilhadas |
| `≤ 480px` | Tipografia reduzida, botões em largura total |

---

## 🔧 Personalizações Rápidas

**Trocar cor principal:**
```css
/* em style.css linha ~25 */
--coral: #FF6B47; /* substitua pelo hex desejado */
```

**Atualizar link do WhatsApp:**
```html
<!-- em index.html, seção #contact -->
<a href="https://wa.me/55XXXXXXXXXXX?text=Olá%20Hudson!" target="_blank">
```

**Adicionar novo projeto no portfólio:**
```html
<!-- em index.html, dentro de .portfolio-grid -->
<div class="p-card reveal">
  <img src="URL_DA_IMAGEM" alt="Nome do Projeto">
  <div class="p-card-info">
    <div class="p-card-title">Nome do Projeto</div>
    <div class="p-tech">Tecnologia · Tecnologia</div>
    <a href="URL" class="btn-sm">Ver →</a>
  </div>
</div>
```

**Adicionar skill no carousel:**
```html
<!-- em index.html, dentro de #skillsTrack -->
<div class="skill-card">
  <img src="URL_DA_IMAGEM" alt="Nome" class="skill-img">
  <div class="skill-body">
    <div class="skill-name">Nome da Skill</div>
    <div class="skill-desc">Descrição curta do que você faz.</div>
  </div>
</div>
```

---

## 📬 Contato

**Hudson Ribeiro**
- 📍 Florianópolis – SC
- 📞 [(48) 99143-7105](https://wa.me/5548991437105)
- ✉️ hudsonriberio7@gmail.com
- ⌥ [github.com/hudsonribeiro7](https://github.com/hudsonribeiro7)

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para se inspirar na estrutura, mas mantenha o crédito se usar partes do código.

---

<p align="center">Feito com 🖤 e muito CSS por Hudson Ribeiro</p>
