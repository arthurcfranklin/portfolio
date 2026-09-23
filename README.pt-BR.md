# Arthur Franklin | Portfólio

Um portfólio profissional moderno com foco em Infraestrutura de TI, Suporte Técnico, Monitoramento, Automação e Desenvolvimento de Software.

Desenvolvido com TanStack Start, React, TypeScript e Tailwind CSS, com processamento server-side do formulário de contato, internacionalização, preferências de tema, páginas legais e uma arquitetura de produção projetada para Cloudflare Workers.

> 🚧 Este projeto está em desenvolvimento ativo e recebe melhorias contínuas.

## Visão Geral

Este repositório contém o código-fonte do meu portfólio profissional.

O projeto funciona como o hub central da minha presença profissional, reunindo minha trajetória, competências técnicas, áreas de atuação, projetos e canais de contato em uma interface responsiva e multilíngue.

Além de apresentar informações profissionais, o portfólio também é desenvolvido como uma aplicação web completa, com componentes reutilizáveis, roteamento baseado em arquivos, funcionalidades server-side, preferências do usuário, interfaces legais e de consentimento, páginas dedicadas de projetos e páginas de sistema personalizadas.

## Funcionalidades

- Interface profissional responsiva
- Temas claro e escuro
- Conteúdo multilíngue
- Preferências persistentes do usuário
- Trajetória profissional e linha do tempo acadêmica
- Competências técnicas agrupadas por área
- Serviços e áreas de atuação
- Projetos em destaque e catálogo completo de projetos
- Páginas dedicadas de projetos
- Formulário de contato processado no servidor
- Verificação com Cloudflare Turnstile
- Envio de e-mails por meio do Resend
- Política de Privacidade, Termos de Uso e Política de Cookies
- Interface de preferências de consentimento
- Páginas personalizadas de sistema e erro
- Metadados de SEO com conteúdo localizado
- Arquitetura de implantação em produção para Cloudflare Workers

## Tecnologias

| Tecnologia | Finalidade |
| --- | --- |
| TanStack Start | Arquitetura full-stack da aplicação React |
| React 19 | Interface do usuário |
| TypeScript | Tipagem estática |
| Vite 8 | Ferramentas de desenvolvimento e build |
| TanStack Router | Roteamento baseado em arquivos |
| TanStack Query | Infraestrutura de gerenciamento de dados |
| Tailwind CSS 4 | Estilização e design responsivo |
| Motion | Animações e transições da interface |
| Lucide React | Ícones da interface |
| Cloudflare Workers | Runtime de produção |
| Cloudflare Turnstile | Verificação do formulário de contato |
| Resend | Envio de e-mails transacionais |

O projeto utiliza **npm** como gerenciador de pacotes.

## Estrutura do Projeto

```text
portfolio/
├── public/
│   ├── favicon-16x16.png
│   ├── favicon-180x180.png
│   ├── favicon-192x192.png
│   ├── favicon-32x32.png
│   ├── favicon-48x48.ico
│   ├── favicon-500x500.png
│   ├── favicon-512x512.png
│   └── preferences-init.js
├── src/
│   ├── components/
│   │   ├── cards/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── legal/
│   │   ├── motion/
│   │   ├── shared/
│   │   └── system/
│   ├── context/
│   ├── data/
│   │   └── locales/
│   ├── hooks/
│   ├── lib/
│   │   └── contact/
│   ├── routes/
│   ├── sections/
│   ├── types/
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
├── .env.example
├── eslint.config.js
├── LICENSE
├── package.json
├── README.md
├── README.pt-BR.md
├── SECURITY.md
├── tsconfig.json
├── vite.config.ts
└── wrangler.jsonc
```

## Internacionalização

O portfólio atualmente oferece suporte a quatro localidades:

- Português — `pt-BR`
- Inglês — `en-US`
- Espanhol — `es-ES`
- Francês — `fr-FR`

O conteúdo localizado abrange a interface principal, assim como metadados de SEO, navegação, informações profissionais, projetos, serviços, conteúdo de contato, páginas legais, interfaces de consentimento e conteúdo do footer.

A estrutura de localização está centralizada em:

```text
src/data/locales/
```

## Infraestrutura de Contato

O formulário de contato utiliza um endpoint server-side implementado em:

```text
/api/contact
```

As solicitações de contato passam por múltiplas etapas de validação antes do envio do e-mail.

O endpoint verifica a origem da requisição, exige conteúdo JSON, aplica um limite ao tamanho do corpo da requisição, valida os dados enviados, verifica o token do Cloudflare Turnstile e somente então tenta entregar a mensagem.

O envio de e-mails é realizado por meio do Resend.

A implementação do Turnstile também diferencia credenciais locais de teste das credenciais de produção e valida o hostname de produção e a action esperada para o formulário de contato.

## Segurança e Privacidade

Considerações de segurança e privacidade fazem parte da arquitetura da aplicação.

O endpoint de contato inclui:

- Validação de requisições de mesma origem
- Validação de `Content-Type`
- Limites para o tamanho do corpo da requisição
- Validação dos dados enviados
- Verificação com Cloudflare Turnstile
- Validação do hostname do Turnstile em produção
- Validação da action do Turnstile em produção
- Tratamento server-side de secrets
- Envio controlado de e-mails

Configurações sensíveis são acessadas exclusivamente por código server-side e não são intencionalmente expostas ao navegador.

O projeto também inclui interfaces dedicadas para:

- Política de Privacidade
- Termos de Uso
- Política de Cookies
- Preferências de consentimento

Vulnerabilidades de segurança devem ser reportadas de acordo com a política [`SECURITY.md`](SECURITY.md) do repositório, em vez de issues ou discussions públicas.

## Páginas de Sistema

O projeto inclui configurações reutilizáveis de páginas de sistema para estados HTTP e operacionais comuns:

- `401` — Não Autorizado
- `403` — Proibido
- `404` — Não Encontrado
- `500` — Erro Interno do Servidor
- `502` — Bad Gateway
- `503` — Serviço Indisponível
- `504` — Gateway Timeout
- Modo de manutenção

Essas páginas compartilham uma arquitetura comum de páginas de sistema, mantendo conteúdo e apresentação específicos para cada estado.

## Desenvolvimento

### Requisitos

- Node.js
- npm

### Clonar o repositório

```bash
git clone https://github.com/arthurcfranklin/portfolio.git
cd portfolio
```

### Instalar as dependências

```bash
npm install
```

### Configurar o ambiente

Crie um arquivo de ambiente local com base no exemplo fornecido:

```bash
cp .env.example .env
```

Configure as variáveis necessárias:

```env
VITE_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
RESEND_API_KEY=
```

`VITE_TURNSTILE_SITE_KEY` é uma configuração pública de build utilizada pela integração client-side do Turnstile.

`TURNSTILE_SECRET_KEY` e `RESEND_API_KEY` são secrets server-side e não devem ser expostos ao código executado no cliente.

### Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento está configurado para executar em:

```text
http://localhost:3000
```

## Scripts Disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria um build de produção |
| `npm run build:dev` | Cria um build em modo de desenvolvimento |
| `npm run preview` | Executa a pré-visualização da aplicação |
| `npm run lint` | Executa o ESLint |
| `npm run format` | Formata o código com Prettier |
| `npm run cf-typegen` | Gera os tipos do ambiente Cloudflare |

## Build de Produção

Crie um build de produção com:

```bash
npm run build
```

Os builds de produção exigem que `VITE_TURNSTILE_SITE_KEY` esteja configurada. A configuração do Vite rejeita intencionalmente um build de produção quando esse valor está ausente.

Isso impede que um artefato de produção seja gerado sem a configuração pública necessária para a interface de verificação do formulário de contato.

## Implantação

A aplicação está configurada para utilizar o runtime do Cloudflare Workers.

O entrypoint do Worker é:

```text
src/server.ts
```

A configuração do Cloudflare está definida em:

```text
wrangler.jsonc
```

O projeto utiliza a integração do Cloudflare com o Vite em conjunto com a arquitetura server-side do TanStack Start.

Secrets de runtime, como a chave secreta do Turnstile e a API key do Resend, devem ser configurados de forma segura no ambiente de implantação, em vez de serem adicionados ao repositório.

## Segurança

Caso encontre uma vulnerabilidade de segurança no código-fonte ou no portfólio implantado, siga o processo de divulgação responsável descrito em [`SECURITY.md`](SECURITY.md).

Não reporte vulnerabilidades de segurança por meio de issues, discussions ou pull requests públicos.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte [`LICENSE`](LICENSE) para mais detalhes.

---

Desenvolvido por **Arthur Franklin** · [Read in English](README.md) · [Licença MIT](LICENSE)
