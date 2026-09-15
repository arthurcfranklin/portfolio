import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const Route = createFileRoute("/libraryflow")({
  component: LibraryFlowPage,
});

function LibraryFlowPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-20 lg:pt-40">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-violet-500"
              />
              <span>Projeto · 03</span>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end lg:gap-14">
              <div>
                <h1 className="text-6xl font-bold leading-none tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                  LibraryFlow
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  Sistema web de gestão de bibliotecas desenvolvido com foco em
                  arquitetura de software, persistência de dados e práticas de
                  engenharia.
                </p>
              </div>

              <dl className="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pb-1 lg:pl-8 lg:pt-0">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Versão
                  </dt>

                  <dd className="mt-2 text-sm font-medium text-foreground">
                    v0.5.0-beta
                  </dd>
                </div>

                <div className="mt-6">
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Status
                  </dt>

                  <dd className="mt-2 flex items-center gap-2 text-sm text-foreground">
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-violet-500"
                    />
                    Em desenvolvimento
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/arthurcfranklin/libraryflow"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Github
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.7}
                />
                <span>GitHub</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.7}
                />
              </a>

              <a href="#overview" className="btn-primary">
                <span>Explorar projeto</span>
                <ArrowDown
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.7}
                />
              </a>
            </div>

            <div className="mt-16 border-t border-border pt-6 sm:mt-20">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Stack principal
              </p>

              <p className="mt-3 text-sm text-foreground sm:text-base">
                Python · FastAPI · SQLAlchemy · SQLite
              </p>
            </div>
          </div>
        </section>

        {/* Interface */}
        <section
          aria-labelledby="libraryflow-interface-title"
          className="border-b border-border"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="mb-10 sm:mb-12">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-violet-500"
                />

                <span>Interface</span>
              </div>

              <h2
                id="libraryflow-interface-title"
                className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl"
              >
                Interface Principal
              </h2>
            </div>

            <figure>
              <div className="overflow-hidden rounded-lg border border-border bg-muted/20">
                <img
                  src="/projects/libraryflow/dashboard-dark.png"
                  alt="Dashboard do LibraryFlow"
                  className="block h-auto w-full dark:hidden"
                />

                <img
                  src="/projects/libraryflow/dashboard-light.png"
                  alt="Dashboard do LibraryFlow"
                  className="hidden h-auto w-full dark:block"
                />
              </div>

          <figcaption className="mt-4 flex items-center justify-between gap-6 text-xs text-muted-foreground">
            <span>LibraryFlow · Web</span>
          </figcaption>
        </figure>
          </div>
        </section>

        {/* Visão geral */}
        <section
          id="overview"
          aria-labelledby="libraryflow-overview-title"
          className="border-b border-border"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-24 lg:px-12 lg:py-32">
            <div>
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-violet-500"
                />
                <span>Visão geral</span>
              </div>

              <h2
                id="libraryflow-overview-title"
                className="mt-8 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
              >
                De aplicação acadêmica a sistema web.
              </h2>

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  O LibraryFlow começou como uma aplicação acadêmica executada
                  em terminal e evoluiu para um sistema web voltado à gestão de
                  bibliotecas.
                </p>

                <p>
                  A nova estrutura amplia o projeto para além do exercício
                  inicial, incorporando persistência de dados, separação de
                  responsabilidades e uma arquitetura preparada para a evolução
                  progressiva das funcionalidades.
                </p>
              </div>
            </div>

            <aside>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Detalhes
              </p>

              <dl className="mt-6 border-t border-border">
                <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-border py-5">
                  <dt className="text-sm text-muted-foreground">Tipo</dt>
                  <dd className="text-sm text-foreground">
                    Sistema de gestão
                  </dd>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-border py-5">
                  <dt className="text-sm text-muted-foreground">Status</dt>
                  <dd className="text-sm text-foreground">
                    Em desenvolvimento
                  </dd>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-border py-5">
                  <dt className="text-sm text-muted-foreground">Plataforma</dt>
                  <dd className="text-sm text-foreground">Web</dd>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-border py-5">
                  <dt className="text-sm text-muted-foreground">Versão</dt>
                  <dd className="text-sm text-foreground">v0.5.0-beta</dd>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-border py-5">
                  <dt className="text-sm text-muted-foreground">Ano</dt>
                  <dd className="text-sm text-foreground">2026</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* Evolução */}
        <section
          aria-labelledby="libraryflow-evolution-title"
          className="border-b border-border"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-violet-500"
                  />
                  <span>Evolução</span>
                </div>

                <h2
                  id="libraryflow-evolution-title"
                  className="mt-8 max-w-md text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
                >
                  Do terminal para a web.
                </h2>
              </div>

              <div className="max-w-2xl lg:pt-10">
                <p className="text-base leading-8 text-muted-foreground">
                  A primeira versão do LibraryFlow concentrava a lógica da
                  aplicação em uma experiência de linha de comando. A evolução
                  para a web exigiu reorganizar o projeto em responsabilidades
                  distintas e estabelecer uma base capaz de sustentar novas
                  funcionalidades.
                </p>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Essa transição transformou o projeto em um exercício contínuo
                  de arquitetura e engenharia de software, preservando o domínio
                  original enquanto a implementação se tornou progressivamente
                  mais estruturada.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-y border-border sm:grid-cols-3 lg:mt-20">
              <div className="py-7 sm:pr-8">
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  01
                </span>

                <p className="mt-5 text-lg font-medium text-foreground">
                  Aplicação acadêmica
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Implementação inicial em terminal para estruturar as regras
                  fundamentais do sistema.
                </p>
              </div>

              <div className="border-t border-border py-7 sm:border-l sm:border-t-0 sm:px-8">
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  02
                </span>

                <p className="mt-5 text-lg font-medium text-foreground">
                  Aplicação web
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Migração para FastAPI, interface web e persistência
                  estruturada dos dados.
                </p>
              </div>

              <div className="border-t border-border py-7 sm:border-l sm:border-t-0 sm:pl-8">
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  03
                </span>

                <p className="mt-5 text-lg font-medium text-foreground">
                  Evolução contínua
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Arquitetura, documentação e roadmap passam a orientar o
                  crescimento do projeto.
                </p>
              </div>
            </div>
          </div>
        </section>
                {/* Arquitetura */}
        <section
          aria-labelledby="libraryflow-architecture-title"
          className="border-b border-border"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-violet-500"
                  />
                  <span>Arquitetura</span>
                </div>

                <h2
                  id="libraryflow-architecture-title"
                  className="mt-8 max-w-md text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
                >
                  Responsabilidades bem definidas.
                </h2>

                <p className="mt-8 max-w-md text-base leading-8 text-muted-foreground">
                  A aplicação é organizada em camadas para separar interface,
                  regras de negócio e persistência, reduzindo o acoplamento
                  entre as diferentes responsabilidades do sistema.
                </p>
              </div>

              <div className="lg:pt-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Fluxo da aplicação
                </p>

                <ol className="mt-8 border-t border-border">
                  <li className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-border py-6 sm:grid-cols-[64px_minmax(0,1fr)_180px] sm:items-center">
                    <span className="text-xs tabular-nums text-muted-foreground">
                      01
                    </span>

                    <div>
                      <p className="text-lg font-medium text-foreground">
                        Templates
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Interface renderizada com Jinja2.
                      </p>
                    </div>

                    <span className="hidden text-right text-xs uppercase tracking-[0.16em] text-muted-foreground sm:block">
                      Apresentação
                    </span>
                  </li>

                  <li className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-border py-6 sm:grid-cols-[64px_minmax(0,1fr)_180px] sm:items-center">
                    <span className="text-xs tabular-nums text-muted-foreground">
                      02
                    </span>

                    <div>
                      <p className="text-lg font-medium text-foreground">
                        FastAPI Routes
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Recebem as requisições e coordenam o fluxo HTTP.
                      </p>
                    </div>

                    <span className="hidden text-right text-xs uppercase tracking-[0.16em] text-muted-foreground sm:block">
                      Aplicação
                    </span>
                  </li>

                  <li className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-border py-6 sm:grid-cols-[64px_minmax(0,1fr)_180px] sm:items-center">
                    <span className="text-xs tabular-nums text-muted-foreground">
                      03
                    </span>

                    <div>
                      <p className="text-lg font-medium text-foreground">
                        Services Layer
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Centraliza operações e regras da aplicação.
                      </p>
                    </div>

                    <span className="hidden text-right text-xs uppercase tracking-[0.16em] text-muted-foreground sm:block">
                      Negócio
                    </span>
                  </li>

                  <li className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-border py-6 sm:grid-cols-[64px_minmax(0,1fr)_180px] sm:items-center">
                    <span className="text-xs tabular-nums text-muted-foreground">
                      04
                    </span>

                    <div>
                      <p className="text-lg font-medium text-foreground">
                        SQLAlchemy ORM
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Faz o mapeamento e a comunicação com a camada de dados.
                      </p>
                    </div>

                    <span className="hidden text-right text-xs uppercase tracking-[0.16em] text-muted-foreground sm:block">
                      Persistência
                    </span>
                  </li>

                  <li className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-border py-6 sm:grid-cols-[64px_minmax(0,1fr)_180px] sm:items-center">
                    <span className="text-xs tabular-nums text-muted-foreground">
                      05
                    </span>

                    <div>
                      <p className="text-lg font-medium text-foreground">
                        SQLite
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Armazena de forma persistente os dados da aplicação.
                      </p>
                    </div>

                    <span className="hidden text-right text-xs uppercase tracking-[0.16em] text-muted-foreground sm:block">
                      Dados
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
                      {/* Recursos principais */}
        <section
          aria-labelledby="libraryflow-features-title"
          className="border-b border-border"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="flex items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-violet-500"
                  />
                  <span>Recursos</span>
                </div>

                <h2
                  id="libraryflow-features-title"
                  className="mt-8 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
                >
                  O essencial já em funcionamento.
                </h2>
              </div>
            </div>

            <div className="mt-14 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
              <div className="py-7 sm:pr-8">
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  01
                </span>

                <h3 className="mt-5 text-lg font-medium text-foreground">
                  Gestão de livros
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Cadastro, consulta, edição e exclusão.
                </p>
              </div>

              <div className="border-t border-border py-7 sm:border-l sm:border-t-0 sm:pl-8 lg:px-8">
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  02
                </span>

                <h3 className="mt-5 text-lg font-medium text-foreground">
                  Persistência
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Dados estruturados com SQLAlchemy e SQLite.
                </p>
              </div>

              <div className="border-t border-border py-7 sm:border-t lg:border-l lg:border-t-0 lg:px-8">
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  03
                </span>

                <h3 className="mt-5 text-lg font-medium text-foreground">
                  Dashboard
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Interface administrativa para operação do sistema.
                </p>
              </div>

              <div className="border-t border-border py-7 sm:border-l sm:pl-8 lg:border-t-0">
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  04
                </span>

                <h3 className="mt-5 text-lg font-medium text-foreground">
                  Interface adaptável
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Layout responsivo com temas claro e escuro.
                </p>
              </div>
            </div>
          </div>
        </section>

                {/* Tecnologias */}
        <section
          aria-labelledby="libraryflow-technologies-title"
          className="border-b border-border"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-end lg:gap-20">
              <div>
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-violet-500"
                  />
                  <span>Tecnologias</span>
                </div>

                <h2
                  id="libraryflow-technologies-title"
                  className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em]"
                >
                  Stack do projeto.
                </h2>
              </div>

              <ul className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6 text-base font-medium text-foreground lg:justify-end">
                <li>Python</li>
                <li>FastAPI</li>
                <li>SQLAlchemy</li>
                <li>SQLite</li>
                <li>Jinja2</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </section>

                {/* Interface secundária — imagem temporária */}
        <section
          aria-label="Detalhe da interface do LibraryFlow"
          className="border-b border-border"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <figure>
              <div className="overflow-hidden rounded-lg border border-border bg-muted/20">
                <img
                  src="/projects/libraryflow/dashboard-dark.png"
                  alt="Interface do LibraryFlow"
                  className="block h-auto w-full dark:hidden"
                />

                <img
                  src="/projects/libraryflow/dashboard-light.png"
                  alt="Interface do LibraryFlow"
                  className="hidden h-auto w-full dark:block"
                />
              </div>

              <figcaption className="mt-4 flex items-center justify-between gap-6 text-xs text-muted-foreground">
                <span>Gestão de livros</span>
                <span>LibraryFlow · Web</span>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

              {/* Encerramento */}
        <section aria-labelledby="libraryflow-closing-title">
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20">
              <div>
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-violet-500"
                  />
                  <span>Projeto completo</span>
                </div>

                <h2
                  id="libraryflow-closing-title"
                  className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
                >
                  Explore o LibraryFlow no GitHub.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                  Código-fonte, documentação técnica, histórico de versões e
                  evolução do projeto estão disponíveis no repositório.
                </p>
              </div>

              <a
                href="https://github.com/arthurcfranklin/libraryflow"
                target="_blank"
                rel="noreferrer"
                className="btn-primary shrink-0"
              >
                <Github
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.7}
                />

                <span>Ver no GitHub</span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.7}
                />
              </a>
            </div>
          </div>
        </section>
        
      <Footer />
    </div>
  );
}