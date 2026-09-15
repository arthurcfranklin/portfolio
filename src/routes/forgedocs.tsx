import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const Route = createFileRoute("/forgedocs")({
  component: ForgeDocsPage,
});

function ForgeDocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-20 lg:pt-40">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-violet-500"
              />

              <span>Projeto · 02</span>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end lg:gap-14">
              <div>
                <h1 className="text-6xl font-bold leading-none tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                  ForgeDocs
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  Suíte desktop para processamento de documentos com foco em
                  privacidade, desempenho e operação local.
                </p>
              </div>

              <dl className="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pb-1 lg:pl-8 lg:pt-0">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Plataforma
                  </dt>

                  <dd className="mt-2 text-sm font-medium text-foreground">
                    Desktop · Windows
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
                href="https://github.com/arthurcfranklin/forgedocs"
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
                Python · CustomTkinter
              </p>
            </div>
          </div>
        </section>

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
  id="forgedocs-interface-title"
  className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl"
>
  Interface Principal
</h2>
  </div>

  <figure>
    <div className="overflow-hidden rounded-lg border border-border bg-muted/20">
      <img
        src="/projects/forgedocs/forgedocs-main.png"
        alt="Interface principal do ForgeDocs"
        className="block h-auto w-full"
      />
    </div>

    <figcaption className="mt-4 flex items-center justify-between gap-6 text-xs text-muted-foreground">
      <span>ForgeDocs · Desktop</span>
    </figcaption>
  </figure>
</div>

                {/* Visão geral */}
        <section
          id="overview"
          aria-labelledby="forgedocs-overview-title"
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
                id="forgedocs-overview-title"
                className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
              >
                Documentos processados localmente.
              </h2>

              <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  O ForgeDocs é uma aplicação desktop criada para reunir
                  operações de processamento de documentos em uma única
                  interface.
                </p>

                <p>
                  O projeto prioriza execução local, privacidade e uma estrutura
                  modular preparada para incorporar novas ferramentas de forma
                  progressiva.
                </p>
              </div>
            </div>

            <aside aria-label="Detalhes do projeto">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Detalhes
              </p>

              <dl className="mt-6 border-t border-border">
                <div className="grid grid-cols-[108px_1fr] gap-4 border-b border-border py-5">
                  <dt className="text-sm text-muted-foreground">Tipo</dt>
                  <dd className="text-sm text-foreground">
                    Aplicação desktop
                  </dd>
                </div>

                <div className="grid grid-cols-[108px_1fr] gap-4 border-b border-border py-5">
                  <dt className="text-sm text-muted-foreground">Status</dt>
                  <dd className="text-sm text-foreground">
                    Em desenvolvimento
                  </dd>
                </div>

                <div className="grid grid-cols-[108px_1fr] gap-4 border-b border-border py-5">
                  <dt className="text-sm text-muted-foreground">Plataforma</dt>
                  <dd className="text-sm text-foreground">Windows</dd>
                </div>

                <div className="grid grid-cols-[108px_1fr] gap-4 border-b border-border py-5">
                  <dt className="text-sm text-muted-foreground">Execução</dt>
                  <dd className="text-sm text-foreground">Local</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

                {/* Local-first */}
        <section
          aria-labelledby="forgedocs-local-title"
          className="border-b border-border"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-24">
              <div>
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-violet-500"
                  />

                  <span>Local-first</span>
                </div>

                <h2
                  id="forgedocs-local-title"
                  className="mt-8 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
                >
                  Seus arquivos permanecem com você.
                </h2>
              </div>

              <div className="grid border-t border-border sm:grid-cols-2">
                <div className="border-b border-border py-7 sm:border-r sm:pr-8">
                  <span className="text-xs text-muted-foreground">01</span>

                  <h3 className="mt-5 text-lg font-medium">
                    Processamento local
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    As operações são executadas diretamente no computador.
                  </p>
                </div>

                <div className="border-b border-border py-7 sm:pl-8">
                  <span className="text-xs text-muted-foreground">02</span>

                  <h3 className="mt-5 text-lg font-medium">
                    Privacidade por padrão
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    O processamento não depende do envio de documentos para
                    serviços externos.
                  </p>
                </div>

                <div className="border-b border-border py-7 sm:border-r sm:pr-8">
                  <span className="text-xs text-muted-foreground">03</span>

                  <h3 className="mt-5 text-lg font-medium">
                    Sem dependência de nuvem
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    As ferramentas essenciais permanecem disponíveis sem uma
                    infraestrutura remota.
                  </p>
                </div>

                <div className="border-b border-border py-7 sm:pl-8">
                  <span className="text-xs text-muted-foreground">04</span>

                  <h3 className="mt-5 text-lg font-medium">
                    Operação offline
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    O fluxo principal foi pensado para funcionar no próprio
                    dispositivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* Recursos */}
        <section
          aria-labelledby="forgedocs-features-title"
          className="border-b border-border"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="flex items-end justify-between gap-10">
              <div>
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-violet-500"
                  />

                  <span>Recursos</span>
                </div>

                <h2
                  id="forgedocs-features-title"
                  className="mt-8 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
                >
                  Ferramentas em um só lugar.
                </h2>
              </div>
            </div>

            <div className="mt-14 grid border-y border-border sm:grid-cols-2 lg:grid-cols-5">
              <div className="border-b border-border py-7 sm:border-r sm:pr-6 lg:border-b-0">
                <span className="text-xs text-muted-foreground">01</span>

                <h3 className="mt-5 text-base font-medium text-foreground">
                  Converter
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Conversão entre diferentes formatos de documentos.
                </p>
              </div>

              <div className="border-b border-border py-7 sm:pl-6 lg:border-b-0 lg:border-r lg:pr-6">
                <span className="text-xs text-muted-foreground">02</span>

                <h3 className="mt-5 text-base font-medium text-foreground">
                  Organizar
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Ferramentas para estruturar e organizar arquivos.
                </p>
              </div>

              <div className="border-b border-border py-7 sm:border-r sm:pr-6 lg:border-b-0 lg:pl-6">
                <span className="text-xs text-muted-foreground">03</span>

                <h3 className="mt-5 text-base font-medium text-foreground">
                  Editar
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Operações de edição aplicadas aos documentos.
                </p>
              </div>

              <div className="border-b border-border py-7 sm:pl-6 lg:border-b-0 lg:border-r lg:pr-6">
                <span className="text-xs text-muted-foreground">04</span>

                <h3 className="mt-5 text-base font-medium text-foreground">
                  Otimizar
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Processamento voltado à otimização dos arquivos.
                </p>
              </div>

              <div className="py-7 sm:col-span-2 lg:col-span-1 lg:pl-6">
                <span className="text-xs text-muted-foreground">05</span>

                <h3 className="mt-5 text-base font-medium text-foreground">
                  Segurança
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Recursos voltados à proteção de documentos.
                </p>
              </div>
            </div>
          </div>
        </section>

                {/* Tecnologias */}
        <section
          aria-labelledby="forgedocs-technologies-title"
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
                  id="forgedocs-technologies-title"
                  className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em]"
                >
                  Stack do projeto.
                </h2>
              </div>

              <ul className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6 text-base font-medium text-foreground lg:justify-end">
                <li>Python</li>
                <li>CustomTkinter</li>
              </ul>
            </div>
          </div>
        </section>

                {/* Encerramento */}
        <section aria-labelledby="forgedocs-closing-title">
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
                  id="forgedocs-closing-title"
                  className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
                >
                  Explore o ForgeDocs no GitHub.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                  Código-fonte, documentação técnica e evolução do projeto
                  estão disponíveis no repositório.
                </p>
              </div>

              <a
                href="https://github.com/arthurcfranklin/forgedocs"
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
      </main>
      <Footer />
    </div>
  );
}