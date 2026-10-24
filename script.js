"use strict";

/*
  BANCO AUTORAL DE DEMONSTRAÇÃO

  Cada questão possui:
  id: identificador único;
  materia: nome da matéria;
  pergunta: enunciado;
  alternativas: opções de A até E;
  correta: posição da resposta certa, começando em zero;
  comentarios: explicação de cada alternativa;
  fundamento: referência para estudo;
  fonte: link do fundamento.

  Exemplo:
  correta: 0 significa alternativa A.
  correta: 1 significa alternativa B.
*/

const materias = [
  "Constitucional",
  "Administrativo e Tributário",
  "Penal",
  "Processual Penal",
  "Civil e Empresarial",
  "Processual Civil",
  "Difusos e Coletivos",
  "Criança e Adolescente",
  "Direitos Humanos",
  "Institucional",
  "Filosofia e Sociologia"
];

const questoes = [
  {
    id: "constitucional-1",
    materia: materias[0],
    pergunta:
      "Uma lei pretende excluir da apreciação judicial qualquer lesão " +
      "a direito social. Qual garantia constitucional se opõe diretamente à medida?",
    alternativas: [
      "Inafastabilidade da jurisdição",
      "Anterioridade tributária",
      "Irredutibilidade de vencimentos",
      "Reserva de administração",
      "Anualidade eleitoral"
    ],
    correta: 0,
    comentarios: [
      "A proteção jurisdicional alcança lesões e ameaças a direitos, inclusive sociais.",
      "A anterioridade limita a cobrança de tributos; não assegura acesso ao Judiciário.",
      "A irredutibilidade protege vencimentos, sem resolver a exclusão da tutela judicial.",
      "A reserva de administração trata de atribuições administrativas.",
      "A anualidade eleitoral disciplina mudanças no processo eleitoral."
    ],
    fundamento: "Constituição Federal, art. 5º, XXXV.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  },

  {
    id: "administrativo-1",
    materia: materias[1],
    pergunta:
      "Pessoa sofre dano causado por agente público atuando nessa qualidade. " +
      "Segundo a regra constitucional, a responsabilidade da pessoa jurídica é:",
    alternativas: [
      "Sempre subjetiva, com prova do dolo do agente",
      "Objetiva, assegurado regresso contra o agente em caso de dolo ou culpa",
      "Inexistente quando o agente é servidor efetivo",
      "Exclusiva do agente público",
      "Dependente de condenação criminal prévia"
    ],
    correta: 1,
    comentarios: [
      "A responsabilidade da pessoa jurídica não exige, nessa regra, prova de dolo do agente.",
      "A pessoa jurídica responde objetivamente; o regresso contra o agente exige dolo ou culpa.",
      "O vínculo efetivo do agente não afasta a responsabilidade da pessoa jurídica.",
      "A Constituição prevê responsabilidade da pessoa jurídica, não exclusiva do agente.",
      "A responsabilidade civil não depende, como requisito geral, de condenação criminal anterior."
    ],
    fundamento: "Constituição Federal, art. 37, § 6º.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  },

  {
    id: "penal-1",
    materia: materias[2],
    pergunta:
      "Lei posterior deixa de considerar criminosa determinada conduta. " +
      "Qual é a consequência penal?",
    alternativas: [
      "Manter execução e efeitos penais sem alteração",
      "Aplicar a nova lei apenas a fatos futuros",
      "Cessar execução e efeitos penais da sentença condenatória",
      "Exigir autorização do Ministério Público",
      "Converter automaticamente a prisão em multa"
    ],
    correta: 2,
    comentarios: [
      "A abolição do crime faz cessar a execução e os efeitos penais da condenação.",
      "A lei penal benéfica alcança fatos anteriores, inclusive após o trânsito em julgado.",
      "A abolitio criminis faz cessar a execução e os efeitos penais. Os efeitos civis não são automaticamente eliminados.",
      "A aplicação da lei penal benéfica não exige concordância do Ministério Público.",
      "Não há conversão automática em multa, pois a conduta deixou de ser crime."
    ],
    fundamento: "Código Penal, art. 2º.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm"
  },

  {
    id: "processo-penal-1",
    materia: materias[3],
    pergunta:
      "Um acusado exerce o direito ao silêncio no interrogatório. Esse comportamento:",
    alternativas: [
      "Importa confissão",
      "Pode fundamentar sozinho a condenação",
      "Impede perguntas da defesa em qualquer hipótese",
      "Não importa confissão nem pode prejudicar a defesa",
      "Dispensa a presença do defensor"
    ],
    correta: 3,
    comentarios: [
      "Silenciar é exercício de uma garantia e não equivale a confessar.",
      "O silêncio não pode ser valorado negativamente para fundamentar culpa.",
      "O direito ao silêncio não elimina a possibilidade de o acusado responder à defesa.",
      "O silêncio é garantia de autodefesa e não pode ser interpretado em prejuízo da defesa.",
      "O exercício do silêncio não dispensa a assistência de defensor."
    ],
    fundamento: "Código de Processo Penal, art. 186, parágrafo único.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm"
  },

  {
    id: "civil-1",
    materia: materias[4],
    pergunta:
      "A usucapião extraordinária, na regra geral do Código Civil, exige:",
    alternativas: [
      "Cinco anos e justo título",
      "Quinze anos de posse como seu, sem interrupção nem oposição, independentemente de título e boa-fé",
      "Dez anos e registro de promessa de compra",
      "Somente pagamento do IPTU",
      "Posse de imóvel público por vinte anos"
    ],
    correta: 1,
    comentarios: [
      "Cinco anos e justo título não correspondem à regra geral da usucapião extraordinária.",
      "O prazo geral é de quinze anos de posse qualificada. Há possibilidade de redução nas condições do parágrafo único do art. 1.238.",
      "O prazo geral é de quinze anos, sem exigência de registro de promessa de compra.",
      "O IPTU pode integrar a prova, mas não substitui os requisitos da posse e do prazo.",
      "Imóveis públicos não podem ser adquiridos por usucapião."
    ],
    fundamento: "Código Civil, art. 1.238.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm"
  },

  {
    id: "processo-civil-1",
    materia: materias[5],
    pergunta:
      "Para a concessão da tutela de urgência, o CPC exige, em regra:",
    alternativas: [
      "Trânsito em julgado",
      "Somente alegação de injustiça",
      "Confissão do réu",
      "Probabilidade do direito e perigo de dano ou risco ao resultado útil do processo",
      "Prova de má-fé da parte contrária"
    ],
    correta: 3,
    comentarios: [
      "A tutela de urgência pode ser concedida antes da decisão definitiva.",
      "A alegação genérica de injustiça não demonstra os requisitos legais.",
      "A confissão não é requisito geral para a tutela de urgência.",
      "O art. 300 exige elementos que evidenciem a probabilidade do direito e o perigo de dano ou risco ao resultado útil.",
      "A má-fé da parte contrária não é requisito geral dessa tutela."
    ],
    fundamento: "Código de Processo Civil, art. 300.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm"
  },

  {
    id: "coletivos-1",
    materia: materias[6],
    pergunta:
      "Consumidores sofrem prejuízos individuais decorrentes da mesma origem. " +
      "Qual categoria do CDC corresponde à situação?",
    alternativas: [
      "Direitos difusos por definição",
      "Direitos individuais homogêneos",
      "Direitos políticos",
      "Direitos exclusivamente empresariais",
      "Direitos indisponíveis sem origem comum"
    ],
    correta: 1,
    comentarios: [
      "Prejuízos individuais de origem comum não se tornam, por isso, direitos difusos.",
      "A origem comum caracteriza direitos individuais homogêneos.",
      "O caso envolve tutela de consumo e não exercício de direitos políticos.",
      "O enquadramento decorre da natureza dos direitos e da origem comum.",
      "A alternativa exclui a origem comum, elemento que caracteriza os direitos individuais homogêneos."
    ],
    fundamento: "Código de Defesa do Consumidor, art. 81, parágrafo único, III.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm"
  },

  {
    id: "eca-1",
    materia: materias[7],
    pergunta:
      "A carência de recursos materiais da família é, por si só, motivo " +
      "suficiente para perda ou suspensão do poder familiar?",
    alternativas: [
      "Sim, sempre",
      "Sim, por decisão do Conselho Tutelar",
      "Não; a pobreza isoladamente não basta",
      "Sim, quando a criança tem menos de doze anos",
      "Sim, se houver pedido da escola"
    ],
    correta: 2,
    comentarios: [
      "O ECA afasta a carência material como motivo suficiente, por si só.",
      "O Conselho Tutelar não decreta a perda do poder familiar.",
      "A falta de recursos materiais não basta para perda ou suspensão do poder familiar. A família deve receber proteção e apoio.",
      "A idade da criança não transforma a pobreza em fundamento suficiente.",
      "O pedido da escola não substitui os pressupostos legais."
    ],
    fundamento: "Estatuto da Criança e do Adolescente, art. 23.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm"
  },

  {
    id: "direitos-humanos-1",
    materia: materias[8],
    pergunta:
      "A Convenção Americana sobre Direitos Humanos assegura à pessoa " +
      "acusada, entre as garantias mínimas:",
    alternativas: [
      "Obrigação de confessar",
      "Direito de não depor contra si nem se declarar culpada",
      "Recurso apenas se autorizado pela acusação",
      "Ausência de assistência linguística",
      "Julgamento secreto obrigatório"
    ],
    correta: 1,
    comentarios: [
      "A Convenção protege contra a autoincriminação e não impõe confissão.",
      "O direito de não depor contra si nem se declarar culpado integra as garantias judiciais.",
      "O direito de recorrer não depende de autorização da acusação.",
      "Há garantia de assistência de tradutor ou intérprete quando necessária.",
      "A publicidade é a regra convencional, com as ressalvas previstas no próprio tratado."
    ],
    fundamento: "Convenção Americana sobre Direitos Humanos, art. 8.2.g.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/decreto/d0678.htm"
  },

  {
    id: "institucional-1",
    materia: materias[9],
    pergunta:
      "Qual conjunto apresenta princípios institucionais da Defensoria Pública?",
    alternativas: [
      "Hierarquia judicial, subordinação e dependência",
      "Unidade, indivisibilidade e independência funcional",
      "Oportunidade, anualidade e anterioridade",
      "Territorialidade, seletividade e contributividade",
      "Sigilo absoluto, vitaliciedade e delegação"
    ],
    correta: 1,
    comentarios: [
      "A Defensoria não se submete à hierarquia judicial.",
      "Unidade, indivisibilidade e independência funcional são os princípios institucionais previstos na Constituição e na LC 80/1994.",
      "Esses conceitos não correspondem ao conjunto de princípios institucionais da Defensoria.",
      "Seletividade e contributividade não integram o rol de princípios institucionais da Defensoria.",
      "Essa combinação não corresponde ao rol previsto na legislação."
    ],
    fundamento: "Constituição Federal, art. 134, § 4º; LC 80/1994, art. 3º.",
    fonte:
      "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp80.htm"
  },

  {
    id: "filosofia-1",
    materia: materias[10],
    pergunta:
      "Qual relação entre autor e obra está correta?",
    alternativas: [
      "Achille Mbembe — A República",
      "Platão — Necropolítica",
      "Hans Kelsen — A verdade e as formas jurídicas",
      "Michel Foucault — A verdade e as formas jurídicas",
      "Delgado e Stefancic — Teoria geral do direito e do Estado"
    ],
    correta: 3,
    comentarios: [
      "A República é uma obra de Platão.",
      "Necropolítica é uma obra de Achille Mbembe.",
      "A verdade e as formas jurídicas é de Michel Foucault.",
      "A relação está correta: Michel Foucault é o autor de A verdade e as formas jurídicas.",
      "Teoria geral do direito e do Estado é de Hans Kelsen."
    ],
    fundamento: "Referências bibliográficas das obras mencionadas.",
    fonte: ""
  }
];

/* Elementos da interface */

const $ = (seletor) => document.querySelector(seletor);

const letras = ["A", "B", "C", "D", "E"];
const CHAVE = "dpe-sp-quiz-v1";

let respostas = {};
let prioridades = {};
let fila = [];
let indice = 0;
let corrigida = false;

/* Tratamento seguro do texto inserido na página */

function escapar(valor) {
  return String(valor).replace(/[&<>"']/g, (caractere) => {
    const entidades = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entidades[caractere];
  });
}

/* Validação do progresso salvo ou importado */

function validarDados(dados) {
  if (!dados || typeof dados !== "object") {
    throw new Error("Arquivo inválido.");
  }

  const respostasValidas = {};
  const prioridadesValidas = {};

  for (const questao of questoes) {
    const resposta = dados.respostas?.[questao.id];

    if (
      Number.isInteger(resposta) &&
      resposta >= 0 &&
      resposta < questao.alternativas.length
    ) {
      respostasValidas[questao.id] = resposta;
    }
  }

  for (const materia of materias) {
    const prioridade = dados.prioridades?.[materia];

    if (prioridade === 1 || prioridade === 2) {
      prioridadesValidas[materia] = prioridade;
    }
  }

  return {
    respostas: respostasValidas,
    prioridades: prioridadesValidas
  };
}

function carregar() {
  try {
    const texto = localStorage.getItem(CHAVE);

    if (!texto) return;

    const dados = validarDados(JSON.parse(texto));

    respostas = dados.respostas;
    prioridades = dados.prioridades;
  } catch {
    $("#mensagem").textContent =
      "Não foi possível recuperar o progresso salvo.";
  }
}

function salvar() {
  try {
    localStorage.setItem(
      CHAVE,
      JSON.stringify({
        versao: 1,
        respostas,
        prioridades
      })
    );
  } catch {
    $("#mensagem").textContent =
      "O navegador não permitiu salvar. Exporte seu progresso.";
  }
}

/* Estatísticas */

function atualizarEstatisticas() {
  const feitas = questoes.filter(
    (questao) => Number.isInteger(respostas[questao.id])
  );

  const certas = feitas.filter(
    (questao) => respostas[questao.id] === questao.correta
  );

  $("#totalQuestoes").textContent = questoes.length;
  $("#respondidas").textContent = feitas.length;
  $("#acertos").textContent = certas.length;

  $("#aproveitamento").textContent = feitas.length
    ? `${Math.round((certas.length / feitas.length) * 100)}%`
    : "0%";
}

/* Cartões das matérias */

function renderizarMaterias() {
  $("#materias").innerHTML = materias.map((materia, numero) => {
    const banco = questoes.filter(
      (questao) => questao.materia === materia
    );

    const feitas = banco.filter(
      (questao) => Number.isInteger(respostas[questao.id])
    );

    const certas = feitas.filter(
      (questao) => respostas[questao.id] === questao.correta
    );

    const prioridade = prioridades[materia] || 1;

    return `
      <article class="materia">
        <span class="selo">
          Prioridade pessoal ${prioridade}
        </span>

        <h3>${escapar(materia)}</h3>

        <p>
          ${banco.length} questão(ões) · 1 ponto por acerto
        </p>

        <p>
          ${feitas.length} respondida(s) ·
          ${certas.length} acerto(s)
        </p>

        <label>
          Minha prioridade

          <select
            data-prioridade="${numero}"
            aria-label="Prioridade de ${escapar(materia)}"
          >
            <option value="1" ${prioridade === 1 ? "selected" : ""}>
              1 — Regular
            </option>

            <option value="2" ${prioridade === 2 ? "selected" : ""}>
              2 — Reforçar
            </option>
          </select>
        </label>

        <button
          class="botao"
          type="button"
          data-materia="${numero}"
        >
          Responder questões
        </button>
      </article>
    `;
  }).join("");
}

$("#materias").addEventListener("click", (evento) => {
  const botao = evento.target.closest("[data-materia]");

  if (!botao) return;

  $("#filtroMateria").value =
    materias[Number(botao.dataset.materia)];

  $("#somenteErros").checked = false;

  iniciarTreino();

  $("#areaQuiz").scrollIntoView({
    behavior: "auto",
    block: "start"
  });
});

$("#materias").addEventListener("change", (evento) => {
  const seletor = evento.target.closest("[data-prioridade]");

  if (!seletor) return;

  const materia = materias[Number(seletor.dataset.prioridade)];

  prioridades[materia] = Number(seletor.value);

  salvar();

  // Atualiza somente o selo, preservando o foco do seletor.
  seletor.closest(".materia").querySelector(".selo").textContent =
    `Prioridade pessoal ${prioridades[materia]}`;
});

/* Preparação do treino */

function iniciarTreino() {
  const materia = $("#filtroMateria").value;
  const apenasErros = $("#somenteErros").checked;

  fila = questoes.filter((questao) => {
    const correspondeMateria =
      materia === "todas" || questao.materia === materia;

    const resposta = respostas[questao.id];

    const correspondeErro =
      !apenasErros ||
      (
        Number.isInteger(resposta) &&
        resposta !== questao.correta
      );

    return correspondeMateria && correspondeErro;
  });

  indice = 0;

  $("#tituloQuiz").textContent =
    materia === "todas" ? "Todas as matérias" : materia;

  renderizarQuestao();
}

function renderizarQuestao() {
  corrigida = false;

  $("#feedback").innerHTML = "";
  $("#proxima").hidden = true;
  $("#conferir").hidden = fila.length === 0;
  $("#conferir").disabled = false;

  $("#barraProgresso").max = Math.max(fila.length, 1);
  $("#barraProgresso").value = indice;

  if (!fila.length) {
    $("#contador").textContent = "Nenhuma questão";

    $("#questao").innerHTML = `
      <h3>Nenhuma questão disponível neste filtro.</h3>
      <p>
        Escolha outra matéria ou desmarque
        “Somente questões que errei”.
      </p>
    `;

    return;
  }

  const questao = fila[indice];

  $("#contador").textContent =
    `${indice + 1} de ${fila.length}`;

  $("#questao").innerHTML = `
    <span class="selo">${escapar(questao.materia)}</span>

    <p>Questão autoral · 1 ponto por acerto</p>

    <h3 id="enunciado">${escapar(questao.pergunta)}</h3>

    <fieldset class="alternativas" aria-describedby="enunciado">
      <legend>Escolha uma alternativa:</legend>

      ${questao.alternativas.map((alternativa, numero) => `
        <label class="alternativa" data-opcao="${numero}">
          <input
            type="radio"
            name="resposta"
            value="${numero}"
          >

          <span>
            <strong>${letras[numero]}.</strong>
            ${escapar(alternativa)}
          </span>
        </label>
      `).join("")}
    </fieldset>
  `;
}

/* Correção com explicações */

$("#conferir").addEventListener("click", () => {
  if (corrigida || !fila.length) return;

  const selecionada = document.querySelector(
    'input[name="resposta"]:checked'
  );

  if (!selecionada) {
    $("#feedback").textContent =
      "Selecione uma alternativa antes de conferir.";

    return;
  }

  const questao = fila[indice];
  const marcada = Number(selecionada.value);
  const acertou = marcada === questao.correta;

  respostas[questao.id] = marcada;
  corrigida = true;

  document.querySelectorAll(
    'input[name="resposta"]'
  ).forEach((input) => {
    input.disabled = true;
  });

  document.querySelector(
    `[data-opcao="${questao.correta}"]`
  ).classList.add("correta");

  if (!acertou) {
    document.querySelector(
      `[data-opcao="${marcada}"]`
    ).classList.add("errada");
  }

  $("#feedback").innerHTML = `
    <h2>
      ${
        acertou
          ? "Você acertou!"
          : `Você marcou ${letras[marcada]}.
             A correta é ${letras[questao.correta]}.`
      }
    </h2>

    ${
      acertou
        ? ""
        : `
          <div class="explicacao erro">
            <h3>Por que sua alternativa está errada?</h3>

            <p>
              <strong>
                ${letras[marcada]} —
                ${escapar(questao.alternativas[marcada])}
              </strong>
            </p>

            <p>${escapar(questao.comentarios[marcada])}</p>
          </div>
        `
    }

    <div class="explicacao">
      <h3>Entenda a resposta correta</h3>

      <p>
        <strong>
          ${letras[questao.correta]} —
          ${escapar(questao.alternativas[questao.correta])}
        </strong>
      </p>

      <p>
        ${escapar(questao.comentarios[questao.correta])}
      </p>

      <p>
        <strong>Fundamento:</strong>
        ${escapar(questao.fundamento)}
      </p>

      ${
        questao.fonte
          ? `
            <a
              href="${escapar(questao.fonte)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar fundamento
            </a>
          `
          : ""
      }
    </div>

    <details>
      <summary>Ver comentário de todas as alternativas</summary>

      ${questao.alternativas.map((alternativa, numero) => `
        <p>
          <strong>
            ${letras[numero]} — ${escapar(alternativa)}
          </strong>
          <br>
          ${escapar(questao.comentarios[numero])}
        </p>
      `).join("")}
    </details>
  `;

  $("#conferir").disabled = true;
  $("#proxima").hidden = false;

  $("#proxima").textContent =
    indice === fila.length - 1
      ? "Concluir treino"
      : "Próxima questão";

  $("#barraProgresso").value = indice + 1;

  salvar();
  atualizarEstatisticas();
  renderizarMaterias();
});

/* Avanço e conclusão */

$("#proxima").addEventListener("click", () => {
  if (!corrigida) return;

  if (indice < fila.length - 1) {
    indice++;
    renderizarQuestao();
    return;
  }

  const total = fila.length;

  const certas = fila.filter(
    (questao) => respostas[questao.id] === questao.correta
  ).length;

  $("#questao").innerHTML = `
    <h3>Treino concluído!</h3>

    <p>
      Você acertou <strong>${certas} de ${total}</strong>
      questão(ões) deste treino.
    </p>

    <p>
      Use os filtros para estudar outra matéria
      ou revisar as questões que errou.
    </p>
  `;

  $("#feedback").innerHTML = "";
  $("#conferir").hidden = true;
  $("#proxima").hidden = true;
  $("#contador").textContent = "Concluído";
});

/* Filtros */

$("#filtroMateria").addEventListener("change", iniciarTreino);
$("#somenteErros").addEventListener("change", iniciarTreino);

$("#treinarTodas").addEventListener("click", () => {
  $("#filtroMateria").value = "todas";
  $("#somenteErros").checked = false;

  iniciarTreino();

  $("#areaQuiz").scrollIntoView({
    behavior: "auto",
    block: "start"
  });
});

/* Exportação */

$("#exportar").addEventListener("click", () => {
  const dados = {
    versao: 1,
    exportadoEm: new Date().toISOString(),
    respostas,
    prioridades
  };

  const arquivo = new Blob(
    [JSON.stringify(dados, null, 2)],
    { type: "application/json" }
  );

  const endereco = URL.createObjectURL(arquivo);
  const link = document.createElement("a");

  link.href = endereco;
  link.download = "progresso-defensoria.json";

  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(endereco), 1000);

  $("#mensagem").textContent =
    "Progresso exportado. Guarde o arquivo para importar em outro aparelho.";
});

/* Importação */

$("#importar").addEventListener("change", async (evento) => {
  const arquivo = evento.target.files[0];

  if (!arquivo) return;

  try {
    if (arquivo.size > 1000000) {
      throw new Error("Arquivo muito grande.");
    }

    const texto = await arquivo.text();
    const dados = validarDados(JSON.parse(texto));

    respostas = dados.respostas;
    prioridades = dados.prioridades;

    salvar();
    atualizarEstatisticas();
    renderizarMaterias();
    iniciarTreino();

    $("#mensagem").textContent =
      "Progresso importado com sucesso.";
  } catch {
    $("#mensagem").textContent =
      "Não foi possível importar. Escolha um arquivo de progresso válido.";
  }

  evento.target.value = "";
});

/* Limpeza */

$("#limpar").addEventListener("click", () => {
  const confirmou = window.confirm(
    "Deseja apagar todas as respostas e prioridades deste navegador?"
  );

  if (!confirmou) return;

  respostas = {};
  prioridades = {};

  salvar();
  atualizarEstatisticas();
  renderizarMaterias();
  iniciarTreino();

  $("#mensagem").textContent = "Progresso apagado.";
});

/* Inicialização */

for (const materia of materias) {
  const opcao = document.createElement("option");

  opcao.value = materia;
  opcao.textContent = materia;

  $("#filtroMateria").appendChild(opcao);
}

carregar();
atualizarEstatisticas();
renderizarMaterias();
iniciarTreino();
