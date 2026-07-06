# Vinicius Santana — Linguist Landing Page

Landing page profissional, estática, responsiva e bilíngue para **Vinicius Santana**, com foco em tradução técnica, localização e suporte linguístico. O idioma padrão é inglês, com seletor **EN/PT-BR** no cabeçalho.

O projeto foi preparado para GitHub Pages com o subdomínio recomendado:

```txt
linguist.vinisantana.com
```

Também é possível adaptar para `translation.vinisantana.com` ou `profile.vinisantana.com`. Evite `rws.vinisantana.com` para não sugerir que o site é oficial da RWS.

## O que está incluído

- Projeto React + Vite.
- Página bilíngue EN/PT-BR sem backend.
- Header sticky, navegação, CTAs e seletor de idioma.
- Hero profissional com foto otimizada.
- Seções: Services, Expertise, Process, About, Contact e Footer.
- Imagens exportadas em AVIF, WebP e JPG fallback.
- SEO básico: title, meta description, canonical, Open Graph, Twitter card e JSON-LD.
- `robots.txt`, `sitemap.xml`, `CNAME`, favicon placeholder e `site.webmanifest`.
- Workflow opcional do GitHub Actions para deploy no GitHub Pages.
- Pasta `standalone/` com uma versão que pode ser aberta diretamente pelo arquivo `index.html`.

## Estrutura

```txt
.
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── CNAME
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── assets/
│       ├── icons/
│       └── images/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── standalone/
│   └── index.html
└── .github/workflows/pages.yml
```

## Rodar localmente

```bash
npm install
npm run dev
```

Depois abra a URL informada pelo Vite, normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

A versão final de produção será criada em `dist/`.

## Abrir sem servidor local

A pasta `standalone/` contém uma versão empacotada para abrir diretamente no navegador:

```txt
standalone/index.html
```

Depois de alterar textos, contatos ou imagens, gere novamente essa versão:

```bash
npm run build:standalone
```

Use essa pasta apenas para visualização rápida/offline. Para produção, prefira o build Vite em `dist/` ou o deploy via GitHub Actions.

## Publicar no GitHub Pages com GitHub Actions

1. Crie um repositório no GitHub.
2. Envie estes arquivos para a branch `main`.
3. No GitHub, vá em **Settings → Pages**.
4. Em **Build and deployment**, selecione **GitHub Actions**.
5. Faça push para `main`.
6. O workflow `.github/workflows/pages.yml` instalará dependências, executará `npm run build` e publicará a pasta `dist/`.

O arquivo `public/CNAME` já contém:

```txt
linguist.vinisantana.com
```

Durante o build, ele será copiado para `dist/CNAME`.

## Configurar o domínio personalizado

No DNS de `vinisantana.com`, crie um registro do tipo **CNAME**:

```txt
Tipo: CNAME
Host/Nome: linguist
Valor/Target: SEU-USUARIO.github.io
TTL: automático ou 3600
```

Depois, no GitHub:

1. Vá em **Settings → Pages**.
2. Em **Custom domain**, insira `linguist.vinisantana.com`.
3. Salve.
4. Ative **Enforce HTTPS** quando o certificado estiver disponível.

Se usar outro subdomínio, atualize também:

- `public/CNAME`
- `public/sitemap.xml`
- `public/robots.txt`
- `index.html` canonical/OG URL
- `src/App.jsx`, constante `CONTACT.subdomain`

## Substituir contatos e dados profissionais

Abra `src/App.jsx` e altere a constante `CONTACT`:

```jsx
const CONTACT = {
  email: '[INSERT PROFESSIONAL EMAIL]',
  whatsapp: '[INSERT WHATSAPP LINK OR NUMBER]',
  linkedin: '[INSERT LINKEDIN LINK]',
  github: '[INSERT GITHUB OR TECHNICAL PORTFOLIO LINK]',
  languagePair: '[INSERT LANGUAGE PAIR]',
  availability: '[INSERT AVAILABILITY]',
  subdomain: 'linguist.vinisantana.com',
};
```

Sugestões de formato:

```txt
email: 'professional@email.com'
whatsapp: 'https://wa.me/55DDDNUMERO'
linkedin: 'https://www.linkedin.com/in/seu-perfil/'
github: 'https://github.com/seu-usuario'
languagePair: 'English → Brazilian Portuguese / Portuguese → English'
availability: 'Freelance, project-based assignments'
```

Depois atualize também o JSON-LD em `index.html`, especialmente:

```json
"email": "[INSERT EMAIL]",
"sameAs": ["[INSERT LINKEDIN]"]
```

Se for usar a versão offline `standalone/`, gere-a novamente com `npm run build:standalone`.

## Alterar textos EN/PT-BR

Os textos ficam no objeto `content` dentro de `src/App.jsx`:

```jsx
const content = {
  en: { ... },
  pt: { ... },
};
```

Altere os campos equivalentes em inglês e português para manter a experiência bilíngue consistente.

## Substituir fotos

As fotos otimizadas estão em:

```txt
public/assets/images/
```

Arquivos principais:

```txt
vinicius-santana-hero.avif
vinicius-santana-hero.webp
vinicius-santana-hero.jpg
vinicius-santana-about.avif
vinicius-santana-about.webp
vinicius-santana-about.jpg
og-vinicius-santana.jpg
```

Para substituir sem mexer no código, mantenha os mesmos nomes de arquivo e dimensões aproximadas. Para alterar nomes, ajuste os caminhos nos componentes `<picture>` em `src/App.jsx` e os metadados de imagem em `index.html`.

## Serviços opcionais

A seção de serviços **não** inclui MTPE/Post-editing por padrão, porque isso não foi confirmado. Adicione esse serviço apenas se ele for realmente oferecido.

Evite adicionar certificações, clientes, anos de experiência, ferramentas CAT ou afiliações se esses dados não forem confirmados.

## Observação sobre RWS

O site inclui o disclaimer no rodapé:

```txt
This is an independent professional profile and is not an official RWS website.
```

Não use logotipo, cores oficiais, slogans, selos, depoimentos ou qualquer elemento visual da RWS sem autorização.
