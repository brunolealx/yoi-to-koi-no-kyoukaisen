export const initialSceneId = "bedroom-opening";

export const scenes = {
  "bedroom-opening": {
    id: "bedroom-opening",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "A janela do meu quarto reflete metade do meu rosto e metade da cidade. La fora, os predios piscam em silencio, como se a noite tivesse uma vida inteira acontecendo sem mim. Aqui dentro, tudo esta no mesmo lugar de sempre. A cama arrumada. O abajur apagado. O ar parado. Eu tambem.",
    characterImage: "/characters/protagonist.png",
    next: "bedroom-restless",
  },
  "bedroom-restless": {
    id: "bedroom-restless",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "Desbloqueio o celular, vejo as mesmas notificacoes vazias e torno a olhar para a janela. Faz dias que alguma coisa em mim pede movimento. Nao precisa ser grande. So precisa ser meu. Nem que seja uma noite roubada, dessas que deixam perfume na memoria e problema pro dia seguinte.",
    characterImage: "/characters/protagonist.png",
    next: "bedroom-personality",
  },
  "bedroom-personality": {
    id: "bedroom-personality",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "Encosto a testa no vidro frio e penso no tipo de garota que eu pareco ser quando ninguem esta olhando. Ou no tipo que eu gostaria de ter coragem de ser.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "A que se joga primeiro e pensa depois.",
        nextScene: "hallway-pressure",
        effects: { boldness: 2 },
      },
      {
        text: "A que mede cada passo, mesmo quando quer correr.",
        nextScene: "hallway-pressure",
        effects: { caution: 2 },
      },
      {
        text: "A que faz piada para nao admitir que esta com medo.",
        nextScene: "hallway-pressure",
        effects: { boldness: 1, caution: 1 },
      },
    ],
  },
  "hallway-pressure": {
    id: "hallway-pressure",
    background: "/backgrounds/hallway-dark.jpg",
    speaker: "Lina",
    text:
      "Passos atravessam o corredor do outro lado da porta. Pesados, lentos, impossiveis de ignorar. Meu pai nao precisa levantar a voz para ser sentido. Quando ele anda pela casa, tudo parece se endireitar sozinho. Ate a minha respiracao.",
    characterImage: "/characters/protagonist.png",
    next: "father-appearance",
  },
  "father-appearance": {
    id: "father-appearance",
    background: "/backgrounds/hallway-dark.jpg",
    speaker: "Pai",
    text:
      "\"Ainda acordada?\" A pergunta vem curta, seca, sem entrar no quarto. Antes que eu responda, ele completa: \"Nao fica andando pela casa tarde. Sua mae se preocupa.\" Ele fala como se estivesse me protegendo. Eu escuto como se estivesse me lembrando das grades.",
    characterImage: "/characters/father.png",
    next: "mother-call",
  },
  "mother-call": {
    id: "mother-call",
    background: "/backgrounds/home-night.jpg",
    speaker: "Mae",
    text:
      "Pouco depois, a porta abre so o suficiente para o rosto dela aparecer. \"Lina, voce trancou a janela?\" Antes da minha resposta, outra pergunta: \"E esse brilho na sua cara... voce nao estava chorando, ne?\" O cuidado dela sempre chega de maos dadas com a desconfiança.",
    characterImage: "/characters/mother.png",
    next: "mother-follow-up",
  },
  "mother-follow-up": {
    id: "mother-follow-up",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "\"Eu to bem, mae.\" Digo baixo, porque qualquer coisa mais alta vira discussao. Ela continua me olhando por um segundo longo demais, como se eu fosse uma frase que ela ainda nao conseguiu terminar de ler. Quando fecha a porta, o quarto fica em silencio outra vez. Mas nao em paz.",
    characterImage: "/characters/protagonist.png",
    next: "bia-message-preview",
  },
  "bia-message-preview": {
    id: "bia-message-preview",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "O celular vibra na cama, insistente. Tres mensagens seguidas. So de ver o nome da Bia aceso na tela, meu peito muda de ritmo. Com ela, tudo sempre parece a um passo de dar errado. Talvez por isso pareca tao vivo.",
    characterImage: "/characters/protagonist.png",
    next: "bia-contact",
  },
  "bia-contact": {
    id: "bia-contact",
    background: "/backgrounds/home-night.jpg",
    speaker: "Bia",
    text:
      "\"Atende logo, desaparecida.\" A voz dela entra no meu ouvido com um sorriso escondido. \"Tem gente se encontrando mais tarde na rua de baixo. Nada de festa enorme, so a cidade do jeito certo: luz ruim, musica vazando de algum lugar e bebida suficiente pra fazer voce esquecer essa cara de garota presa em filme triste.\"",
    characterImage: "/characters/friend-bia.png",
    next: "bia-pressure",
  },
  "bia-pressure": {
    id: "bia-pressure",
    background: "/backgrounds/home-night.jpg",
    speaker: "Bia",
    text:
      "\"Vem escondida\", ela continua, agora mais baixa, como se a ideia fosse um segredo bonito. \"Eu te encontro na esquina. Se voce desistir, tudo bem. Mas se vier... eu prometo que essa noite nao vai ser igual as outras.\" O jeito que ela fala meu nome faz a promessa soar perigosa.",
    characterImage: "/characters/friend-bia.png",
    next: "tone-choice",
  },
  "tone-choice": {
    id: "tone-choice",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "Meu dedo fica pairando sobre a tela, e eu sinto aquele segundo exato em que uma noite comum pode virar lembranca. Nao e so sair de casa. E sair de mim do jeito que eu tenho vivido.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Se eu for, vou inteira. Sem metade, sem desculpa.",
        nextScene: "tone-bold",
        effects: { boldness: 2, affinity: 1 },
      },
      {
        text: "Eu quero ir, mas preciso fazer isso direito.",
        nextScene: "tone-cautious",
        effects: { caution: 2, affinity: 1 },
      },
      {
        text: "Perfeito. Uma ideia horrivel com voce no comando.",
        nextScene: "tone-ironic",
        effects: { boldness: 1, caution: 1, affinity: 2 },
      },
      {
        text: "Por que parece que voce sempre sabe quando eu estou prestes a explodir?",
        nextScene: "tone-vulnerable",
        effects: { affinity: 2, caution: 1 },
      },
    ],
  },
  "tone-bold": {
    id: "tone-bold",
    background: "/backgrounds/home-night.jpg",
    speaker: "Bia",
    text:
      "\"Agora voce falou bonito.\" Bia ri, satisfeita, como se ja estivesse me vendo descer a rua. \"Pega um casaco, brilho minimo no celular e coragem suficiente pra nao olhar pra tras. O resto eu resolvo quando voce chegar.\"",
    characterImage: "/characters/friend-bia.png",
    next: "post-call-heartbeat",
  },
  "tone-cautious": {
    id: "tone-cautious",
    background: "/backgrounds/home-night.jpg",
    speaker: "Bia",
    text:
      "\"Voce e a unica pessoa que trata uma fuga como estrategia militar.\" Ela da uma risada curta. \"Tudo bem. Faz do seu jeito. So nao pensa tanto a ponto de amanhecer ai dentro. A cidade tambem cansa de esperar.\"",
    characterImage: "/characters/friend-bia.png",
    next: "post-call-heartbeat",
  },
  "tone-ironic": {
    id: "tone-ironic",
    background: "/backgrounds/home-night.jpg",
    speaker: "Bia",
    text:
      "\"E por isso mesmo vai ser uma noite excelente,\" ela responde sem hesitar. \"Voce reclama, eu arrasto, e no fim voce finge que nao gostou. Nosso classico.\" Eu odeio o quanto esse classico me faz sorrir.",
    characterImage: "/characters/friend-bia.png",
    next: "post-call-heartbeat",
  },
  "tone-vulnerable": {
    id: "tone-vulnerable",
    background: "/backgrounds/home-night.jpg",
    speaker: "Bia",
    text:
      "Do outro lado, ela fica quieta por um instante. \"Porque eu te conheco, Lina.\" A resposta vem macia demais. \"E porque toda vez que voce fica assim, alguma parte sua esta pedindo socorro. Vem comigo hoje. Nem que seja so pra respirar sem pedir permissao.\"",
    characterImage: "/characters/friend-bia.png",
    next: "post-call-heartbeat",
  },
  "post-call-heartbeat": {
    id: "post-call-heartbeat",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "Quando a ligacao termina, o quarto parece pequeno de novo. So que agora existe uma fresta aberta dentro de mim. A ideia de sair escondida ainda assusta. Mas ficar tambem. E, pela primeira vez, ficar parece mais triste do que perigoso.",
    characterImage: "/characters/protagonist.png",
    next: "prep-choice",
  },
  "prep-choice": {
    id: "prep-choice",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "Abro a gaveta devagar. O casaco preto desliza pelos meus dedos. Celular, chave, fone, um pouco de perfume escondido na manga, coragem fingida no peito. Coisas pequenas fazem barulho enorme quando estao prestes a virar segredo.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Levar so o essencial. Quanto menos peso, menos chance de errar.",
        nextScene: "mirror-check",
        effects: { boldness: 1, caution: -1 },
      },
      {
        text: "Vestir o casaco, conferir a bateria e planejar cada detalhe.",
        nextScene: "mirror-check",
        effects: { caution: 1 },
      },
      {
        text: "Levar tudo que me faca parecer preparada, mesmo sem estar.",
        nextScene: "mirror-check",
        effects: { caution: 1, affinity: 1 },
      },
      {
        text: "Passar um pouco de perfume. Se for fugir, que seja deixando rastro.",
        nextScene: "mirror-check",
        effects: { boldness: 1, affinity: 1 },
      },
    ],
  },
  "mirror-check": {
    id: "mirror-check",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "Paro diante do espelho antes de abrir a porta. Nao estou exatamente bonita. Estou acordada demais. Viva demais. Meus olhos parecem finalmente dizer alguma coisa que eu vinha engolindo ha semanas.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Sussurrar para mim mesma: \"Hoje eu nao vou pedir permissao.\"",
        nextScene: "escape-plan",
        effects: { boldness: 1 },
      },
      {
        text: "Respirar fundo e lembrar que ainda da tempo de voltar.",
        nextScene: "escape-plan",
        effects: { caution: 1 },
      },
      {
        text: "Mandar uma ultima mensagem pra Bia: \"Se der ruim, a culpa e sua.\"",
        nextScene: "escape-plan",
        effects: { affinity: 1, boldness: 1 },
      },
    ],
  },
  "escape-plan": {
    id: "escape-plan",
    background: "/backgrounds/living-room.jpg",
    speaker: "Lina",
    text:
      "A mao fecha na macaneta do quarto, e tudo desacelera. La fora, a casa respira no escuro. Madeira, eletrodomesticos, memoria, regra. Posso tentar sair pela porta da frente bem devagar, esperar meus pais apagarem de vez ou inventar uma desculpa e apostar na cara limpa. Nenhum plano e seguro. So escolhe um jeito diferente de tremer.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Ir agora, pela porta principal, antes que eu perca a coragem.",
        nextScene: "front-door-route",
        effects: { boldness: 1 },
      },
      {
        text: "Esperar a casa afundar no silencio completo.",
        nextScene: "wait-route",
        effects: { caution: 1 },
      },
      {
        text: "Testar uma desculpa e atravessar a sala como se nada estivesse errado.",
        nextScene: "excuse-route",
        effects: { boldness: 1, caution: 1 },
      },
      {
        text: "Dar uma olhada no corredor primeiro e sentir o terreno.",
        nextScene: "peek-route",
        effects: { caution: 1, boldness: 1 },
      },
    ],
  },
  "peek-route": {
    id: "peek-route",
    background: "/backgrounds/hallway-dark.jpg",
    speaker: "Lina",
    text:
      "Abro a porta do quarto so o bastante para um olho. A sala esta acesa por metades: um abajur esquecido, o reflexo azul da televisao, a luz morna da cozinha entrando pelo piso. Minha mae mexe em alguma coisa na bancada. Meu pai continua sentado, quieto, como se conseguisse ouvir pensamento.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Recuar e esperar mais alguns minutos.",
        nextScene: "wait-route",
        effects: { caution: 1 },
      },
      {
        text: "Aproveitar o momento e sair deslizando pelo corredor.",
        nextScene: "front-door-route",
        effects: { boldness: 1 },
      },
    ],
  },
  "front-door-route": {
    id: "front-door-route",
    background: "/backgrounds/hallway-dark.jpg",
    speaker: "Lina",
    text:
      "Deslizo para o corredor com o coracao batendo no pescoco. O piso frio segura meus passos, mas a madeira perto da sala tem memoria. Cada tabua parece reconhecer meu peso. A televisao continua ligada, baixo demais para distrair, alto o bastante para esconder uma fuga imperfeita.",
    characterImage: "/characters/protagonist.png",
    next: "front-door-stall",
  },
  "front-door-stall": {
    id: "front-door-stall",
    background: "/backgrounds/living-room.jpg",
    speaker: "Pai",
    text:
      "\"Lina.\" Meu nome para no ar antes que eu alcance a porta. Eu travo. Ele nao se vira completamente, so inclina o rosto na minha direcao. \"Vai pegar agua?\" Sao poucas palavras, mas nelas cabe um interrogatorio inteiro.",
    characterImage: "/characters/father.png",
    choices: [
      {
        text: "Responder sem hesitar: \"So um copo e volto.\"",
        nextScene: "front-door-release",
        effects: { caution: 1 },
      },
      {
        text: "Sorrir de lado: \"Nao e crime sentir sede essa hora.\"",
        nextScene: "front-door-release",
        effects: { boldness: 1 },
      },
      {
        text: "Fingir naturalidade e apontar para a cozinha sem dizer muito.",
        nextScene: "front-door-release",
        effects: { caution: 1, boldness: 1 },
      },
    ],
  },
  "front-door-release": {
    id: "front-door-release",
    background: "/backgrounds/living-room.jpg",
    speaker: "Lina",
    text:
      "Dou dois passos na direcao errada so para sustentar a mentira, pego um copo qualquer, molho os labios e volto com a pulsacao explodindo nas maos. Quando encosto na fechadura, giro milimetro por milimetro. A porta cede com um suspiro baixo. O ar frio me encontra primeiro, como se a rua estivesse me puxando pelo pulso.",
    characterImage: "/characters/protagonist.png",
    next: "street-arrival",
  },
  "wait-route": {
    id: "wait-route",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "Apago a luz, sento na beira da cama e espero. O tempo se estica ate ficar cruel. Da sala, os sons vao morrendo um a um: uma gaveta, a louca encostando na pia, um pigarro do meu pai, o clique seco da televisao desligando. Quando a casa finalmente baixa a guarda, meu medo parece mais alto do que antes.",
    characterImage: "/characters/protagonist.png",
    next: "wait-memory",
  },
  "wait-memory": {
    id: "wait-memory",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "No escuro, lembro de quantas vezes deixei a vida passar pela janela so para evitar uma discussao. Talvez eu tenha sido obediente demais. Talvez eu so tenha estado cansada. Hoje as duas coisas doem igual.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Transformar o medo em calma e sair no momento certo.",
        nextScene: "wait-hallway",
        effects: { caution: 1 },
      },
      {
        text: "Usar o silencio como impulso antes que eu mude de ideia.",
        nextScene: "wait-hallway",
        effects: { boldness: 1 },
      },
    ],
  },
  "wait-hallway": {
    id: "wait-hallway",
    background: "/backgrounds/hallway-dark.jpg",
    speaker: "Lina",
    text:
      "Saio do quarto no escuro, guiada pela memoria. O casaco roca de leve na parede. A cozinha ainda guarda cheiro de cafe velho. Piso entre duas tabuas que sempre estalam, contorno a ponta do sofa e alcanco a porta como quem atravessa um sonho sem querer acordar ninguem.",
    characterImage: "/characters/protagonist.png",
    next: "street-arrival",
  },
  "excuse-route": {
    id: "excuse-route",
    background: "/backgrounds/living-room.jpg",
    speaker: "Mae",
    text:
      "\"Vai aonde com casaco essa hora?\" Minha mae me intercepta antes mesmo de eu ensaiar naturalidade. Ela segura um pano de prato nas maos, mas o que aperta mesmo sou eu. \"Lina, voce esta estranha hoje. Aconteceu alguma coisa?\" Cuidado e vigilancia. Com ela, quase sempre sao a mesma frase.",
    characterImage: "/characters/mother.png",
    choices: [
      {
        text: "Dizer que so vou tomar ar na frente de casa.",
        nextScene: "excuse-recovery",
        effects: { caution: 1 },
      },
      {
        text: "Dizer que estou sem sono e preciso andar um pouco.",
        nextScene: "excuse-recovery",
        effects: { boldness: 1 },
      },
      {
        text: "Fazer uma piada para ver se ela baixa a guarda.",
        nextScene: "excuse-recovery",
        effects: { boldness: 1, affinity: 1 },
      },
    ],
  },
  "excuse-recovery": {
    id: "excuse-recovery",
    background: "/backgrounds/home-night.jpg",
    speaker: "Lina",
    text:
      "Ela me mede em silencio, procurando rachaduras na minha resposta. Eu sustento o olhar pelo tempo exato entre parecer inocente e parecer treinada. Por fim, minha mae suspira e manda eu nao demorar. O alivio vem misturado com culpa. Ainda assim, quando viro de costas, o que eu sinto mais forte e vontade de continuar indo.",
    characterImage: "/characters/protagonist.png",
    next: "excuse-exit",
  },
  "excuse-exit": {
    id: "excuse-exit",
    background: "/backgrounds/living-room.jpg",
    speaker: "Lina",
    text:
      "Cruzo a sala sem correr. Nao posso parecer apressada. Nao posso parecer feliz. So quando meus dedos tocam a fechadura percebo que estou sorrindo, pequeno e nervoso, como quem finalmente encontrou uma brecha no proprio destino.",
    characterImage: "/characters/protagonist.png",
    next: "street-arrival",
  },
  "street-arrival": {
    id: "street-arrival",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "A porta fecha atras de mim sem alarde. Por um segundo, fico parada na calcada, como se o mundo precisasse confirmar que eu realmente consegui. Entao a cidade me alcança. O neon se espalha pelo asfalto umido. O vento da noite passa pelo meu rosto como uma mao leve demais para me prender. Eu ainda escuto minha casa nas costas. Mas, na frente, existe rua, erro, beijo talvez, musica distante, Bia me esperando em algum ponto dessa madrugada. Pela primeira vez em muito tempo, o medo e quase bonito.",
    characterImage: "/characters/protagonist.png",
    next: "bia-corner",
  },
  "bia-corner": {
    id: "bia-corner",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Eu sabia que voce vinha.\" Ela esta encostada num poste, casaco aberto, sorriso de quem ja tinha apostado no meu fracasso e na minha coragem ao mesmo tempo. A luz da rua pega no rosto dela de um jeito desonesto. Bonita demais para essa hora. Perigosa demais para o meu equilibrio.",
    characterImage: "/characters/friend-bia.png",
    next: "greeting-choice",
  },
  "greeting-choice": {
    id: "greeting-choice",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Por um instante eu nao sei o que fazer com as maos, com a respiracao, com o jeito que o peito reconhece a presenca dela antes de eu pensar em qualquer frase.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Puxar Bia para um abraco rapido, antes de perder a coragem.",
        nextScene: "bia-first-touch",
        effects: {
          affinity: 2,
          boldness: 1,
          flags: { greetedWarmly: true },
        },
      },
      {
        text: "Erguer uma sobrancelha e fingir que isso e normal.",
        nextScene: "bia-first-touch",
        effects: { affinity: 1, caution: 1 },
      },
      {
        text: "Ficar a meio passo de distancia, observando primeiro.",
        nextScene: "bia-first-touch",
        effects: { caution: 1 },
      },
    ],
  },
  "bia-first-touch": {
    id: "bia-first-touch",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Relaxa.\" Ela toca meu pulso so por um segundo, mas parece tempo demais. \"Voce ja fez a parte mais dificil. Agora e so deixar a noite acontecer.\" O jeito que ela diz isso me faz acreditar, mesmo sabendo que com a Bia as noites nunca acontecem devagar.",
    characterImage: "/characters/friend-bia.png",
    next: "convenience-walk",
  },
  "convenience-walk": {
    id: "convenience-walk",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Seguimos pela calcada lado a lado. Tem carro passando longe, uma risada saindo de algum apartamento alto, o cheiro doce de chuva antiga preso no asfalto. Andar com ela sem precisar explicar nada ja parece um tipo de liberdade.",
    characterImage: "/characters/protagonist.png",
    next: "convenience-choice",
  },
  "convenience-choice": {
    id: "convenience-choice",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Primeira regra da fuga bonita\", ela diz quando para diante da loja de conveniencia da esquina. \"Nao se foge de maos vazias.\" Ela abre a geladeira iluminada e me olha por cima da porta. \"Escolhe.\"",
    characterImage: "/characters/friend-bia.png",
    choices: [
      {
        text: "Uma latinha doce e leve, mais pelo ritual do que pela coragem.",
        nextScene: "convenience-counter",
        effects: {
          affinity: 1,
          flags: { drinkSweet: true },
        },
      },
      {
        text: "A bebida mais forte que parecer minimamente suportavel.",
        nextScene: "convenience-counter",
        effects: {
          boldness: 1,
          flags: { drinkStrong: true },
        },
      },
      {
        text: "Agua e energico. Quero sentir tudo sem borrar as bordas.",
        nextScene: "convenience-counter",
        effects: {
          caution: 1,
          flags: { drinkClear: true },
        },
      },
    ],
  },
  "convenience-counter": {
    id: "convenience-counter",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "Do lado de fora, encostadas na fachada fria da loja, abrimos as latas quase ao mesmo tempo. O som metalico corta a madrugada como um pequeno pacto. Bia me observa antes do primeiro gole. \"Entao me fala a verdade. Voce veio por causa da noite... ou por causa de quem te chamou?\"",
    characterImage: "/characters/friend-bia.png",
    choices: [
      {
        text: "Vim por sua causa. A noite foi o argumento.",
        nextScene: "midnight-crossroads",
        effects: {
          affinity: 2,
          boldness: 1,
          flags: { admittedAttraction: true },
        },
      },
      {
        text: "Vim porque eu precisava respirar longe de casa.",
        nextScene: "midnight-crossroads",
        effects: { caution: 1, boldness: 1 },
      },
      {
        text: "Vim porque a alternativa era morrer de tedio no meu quarto.",
        nextScene: "midnight-crossroads",
        effects: { boldness: 1, affinity: 1 },
      },
    ],
  },
  "midnight-crossroads": {
    id: "midnight-crossroads",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Temos algumas opcoes\", ela diz, andando de costas por alguns passos, como se a rua fosse dela. \"Tem um bar meio escondido tocando musica boa demais pra esse bairro. Tem a ponte, se voce quiser fingir que e personagem principal de filme triste. Ou a gente so anda ate a cidade contar o resto.\"",
    characterImage: "/characters/friend-bia.png",
    choices: [
      {
        text: "Seguir o som da musica. Quero alguma coisa mais viva.",
        nextScene: "bar-entry",
        effects: {
          boldness: 1,
          flags: { choseBarRoute: true },
        },
      },
      {
        text: "Ir para um lugar mais quieto. Quero conseguir ouvir meus pensamentos.",
        nextScene: "bridge-route-intro",
        effects: {
          caution: 1,
          flags: { choseBridgeRoute: true },
        },
      },
      {
        text: "Deixar a Bia escolher por mim desta vez.",
        nextScene: "bia-choice-route",
        effects: { affinity: 1 },
      },
      {
        text: "Andar sem rumo e ver onde a madrugada nos aceita.",
        nextScene: "alley-route-intro",
        effects: {
          boldness: 1,
          caution: 1,
          flags: { choseAlleyRoute: true },
        },
      },
    ],
  },
  "bia-choice-route": {
    id: "bia-choice-route",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "Bia me olha como se estivesse lendo o que eu nao disse. O canto da boca dela sobe um pouco. \"Ta. Entao hoje eu escolho.\"",
    characterImage: "/characters/friend-bia.png",
    conditionalNext: [
      {
        requirements: { affinityMin: 7 },
        nextScene: "river-route-intro",
      },
      {
        requirements: { cautionMin: 6 },
        nextScene: "bridge-route-intro",
      },
      {
        requirements: { boldnessMin: 7 },
        nextScene: "bar-entry",
      },
    ],
    next: "alley-route-intro",
  },
  "bar-entry": {
    id: "bar-entry",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Seguimos o som abafado da bateria ate uma porta estreita, quase invisivel, entre um mercadinho fechado e uma lavanderia. La dentro, luz vermelha baixa, copos brilhando, vozes misturadas. O lugar inteiro parece feito de segredo e calor.",
    characterImage: "/characters/protagonist.png",
    next: "bar-booth",
  },
  "bar-booth": {
    id: "bar-booth",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Nao faz essa cara.\" Bia ri, me puxando para um canto perto do balcao. \"Ninguem aqui quer saber nosso sobrenome.\" Isso ajuda mais do que deveria. Pela primeira vez na noite, eu sinto que meu corpo esta chegando junto com a minha mente.",
    characterImage: "/characters/friend-bia.png",
    next: "bar-choice",
  },
  "bar-choice": {
    id: "bar-choice",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "Ela apoia dois copos pequenos na mesa alta entre nos. \"Brinde de iniciacao\", diz. \"Nao precisa provar nada. So escolhe como quer lembrar disso.\"",
    characterImage: "/characters/friend-bia.png",
    choices: [
      {
        text: "Virar o copo junto com ela e rir do ardor.",
        nextScene: "bar-after-shot",
        effects: { boldness: 2, affinity: 1 },
      },
      {
        text: "Tomar devagar, encarando a noite de frente.",
        nextScene: "bar-after-shot",
        effects: { caution: 1, affinity: 1 },
      },
      {
        text: "Observar primeiro, como se aprender fosse sobreviver.",
        nextScene: "bar-after-shot",
        effects: { caution: 1 },
      },
    ],
  },
  "bar-after-shot": {
    id: "bar-after-shot",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "A musica vibra no meu peito como se estivesse tocando la dentro. Bia fala perto do meu ouvido para vencer o volume, e eu nao presto tanta atencao nas palavras quanto deveria. O celular vibra no bolso. Uma, duas, tres vezes. Casa.",
    characterImage: "/characters/protagonist.png",
    next: "bar-home-message",
  },
  "bar-home-message": {
    id: "bar-home-message",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Na tela, a mensagem da minha mae e curta demais: \"Onde voce esta?\" O mundo fica menor por um segundo. Bia percebe antes de eu esconder o aparelho.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Ignorar e me jogar de volta na musica.",
        nextScene: "bar-rooftop-run",
        effects: {
          boldness: 1,
          caution: -1,
          flags: { ignoredHome: true },
        },
      },
      {
        text: "Responder so com um \"to bem\" e guardar o celular.",
        nextScene: "bar-rooftop-run",
        effects: {
          caution: 1,
          flags: { repliedHome: true },
        },
      },
      {
        text: "Mostrar a tela para a Bia, sem fingir firmeza.",
        nextScene: "bar-rooftop-run",
        effects: {
          affinity: 1,
          caution: 1,
          flags: { showedHomeMessage: true },
        },
      },
    ],
  },
  "bar-rooftop-run": {
    id: "bar-rooftop-run",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Vem.\" Ela segura minha mao sem pedir licenca e me puxa por uma escada estreita no fundo do bar. Saímos num terraco improvisado, com caixas, fios, antenas e a cidade inteira tremendo em volta. O vento aqui em cima e gelado e brutalmente honesto.",
    characterImage: "/characters/friend-bia.png",
    next: "bar-climax",
  },
  "bar-climax": {
    id: "bar-climax",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Longe do ruido, eu ainda sinto a musica dentro do corpo. Bia se apoia no parapeito e me olha como se soubesse que alguma coisa em mim esta no limite. Talvez esteja mesmo. Talvez seja por isso que subir ate aqui pareça igual a confessar alguma coisa.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Puxar Bia mais para perto e admitir que vim por causa dela.",
        nextScene: "romance-check",
        effects: {
          affinity: 2,
          boldness: 1,
          flags: { confessedTonight: true },
        },
      },
      {
        text: "Rir sem folego e pedir para ela fugir comigo ate o amanhecer.",
        nextScene: "reckless-check",
        effects: {
          boldness: 2,
          affinity: 1,
          flags: { confessedTonight: true, choseChaos: true },
        },
      },
      {
        text: "Dizer que preciso de ar antes que o coracao me denuncie.",
        nextScene: "soft-check",
        effects: {
          caution: 1,
          affinity: 1,
          flags: { confessedTonight: true },
        },
      },
    ],
  },
  "bridge-route-intro": {
    id: "bridge-route-intro",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "A ponte fica a poucas quadras dali, meio escondida entre predios e fios. Nao e bonita de perto, mas la de cima a cidade parece uma confissao aberta. Carros passam longe, o rio embaixo segura restos de luz. E quieto do jeito certo. Quieto o bastante para as coisas importantes aparecerem.",
    characterImage: "/characters/protagonist.png",
    next: "bridge-route-talk",
  },
  "bridge-route-talk": {
    id: "bridge-route-talk",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Voce faz silencio como quem carrega tijolo no peito\", ela diz, apoiando os cotovelos no corrimao. Nao tem provocacao na voz agora. So curiosidade e uma paciencia que ela quase nunca mostra para mais ninguem.",
    characterImage: "/characters/friend-bia.png",
    next: "bridge-choice",
  },
  "bridge-choice": {
    id: "bridge-choice",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "O vento bagunca meu cabelo e desmancha um pouco do personagem que eu costumo usar. Talvez a ponte sirva para isso. Para deixar cair o que pesa antes de atravessar.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Contar que em casa tudo parece apertado demais para mim.",
        nextScene: "bridge-bia-response",
        effects: {
          affinity: 1,
          caution: 1,
          flags: { openedUpTonight: true },
        },
      },
      {
        text: "Fazer uma piada e depois deixar a verdade escapar no meio.",
        nextScene: "bridge-bia-response",
        effects: {
          boldness: 1,
          affinity: 1,
          flags: { openedUpTonight: true },
        },
      },
      {
        text: "Nao dizer tudo. So admitir que eu ando cansada de caber.",
        nextScene: "bridge-bia-response",
        effects: {
          caution: 1,
          flags: { openedUpTonight: true },
        },
      },
    ],
  },
  "bridge-bia-response": {
    id: "bridge-bia-response",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Eu sei\", ela diz baixinho, e isso me desmonta mais do que qualquer discurso. \"Nao do jeito que voce sente. Mas eu vejo. Toda vez que voce ri tarde demais ou some cedo demais. Eu vejo, Lina.\" O mundo continua enorme la fora, mas alguma coisa em mim fica menos sozinha.",
    characterImage: "/characters/friend-bia.png",
    next: "bridge-home-call",
  },
  "bridge-home-call": {
    id: "bridge-home-call",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "O celular acende de novo. Casa. Minha garganta fecha antes mesmo de atender. A ponte toda parece prender a respiracao junto comigo.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Atender e dizer que estou na frente de casa tomando ar.",
        nextScene: "bridge-after-call",
        effects: {
          caution: 2,
          flags: { repliedHome: true },
        },
      },
      {
        text: "Silenciar o celular e ficar aqui mais um pouco.",
        nextScene: "bridge-after-call",
        effects: {
          boldness: 1,
          affinity: 1,
          flags: { ignoredHome: true },
        },
      },
      {
        text: "Mostrar a tela para a Bia e admitir que estou tremendo.",
        nextScene: "bridge-after-call",
        effects: {
          affinity: 1,
          caution: 1,
          flags: { showedHomeMessage: true },
        },
      },
    ],
  },
  "bridge-after-call": {
    id: "bridge-after-call",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Depois disso, nenhuma de nos fala por alguns segundos. So o rio correndo escuro la embaixo e a cidade se fingindo indiferente. Bia encosta o ombro no meu, de leve. Nao empurra. Nao exige. So fica. E, por alguma razao, isso quase me faz chorar.",
    characterImage: "/characters/protagonist.png",
    next: "bridge-climax",
  },
  "bridge-climax": {
    id: "bridge-climax",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Talvez a madrugada chegue em pontos como este: o momento em que a gente pode continuar fingindo, ou finalmente dizer alguma coisa que nos mude.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Perguntar se esta noite pode ser a primeira de muitas.",
        nextScene: "soft-check",
        effects: {
          affinity: 2,
          caution: 1,
          flags: { confessedTonight: true },
        },
      },
      {
        text: "Segurar a mao dela e dizer que eu nao queria voltar sozinha.",
        nextScene: "romance-check",
        effects: {
          affinity: 2,
          boldness: 1,
          flags: { confessedTonight: true },
        },
      },
      {
        text: "Dizer que isso ja mudou alguma coisa, mesmo que pare aqui.",
        nextScene: "ending-alone",
        effects: { caution: 1 },
      },
    ],
  },
  "river-route-intro": {
    id: "river-route-intro",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Hoje eu quero te mostrar um lugar\", ela diz, me levando por ruas menores ate o rio. Nao e exatamente bonito, mas a agua segura as luzes da cidade como se soubesse guardar segredo. Tem um banco velho, uma mureta baixa e o tipo de silencio que convida gente perigosa a ficar sincera.",
    characterImage: "/characters/friend-bia.png",
    next: "river-route-talk",
  },
  "river-route-talk": {
    id: "river-route-talk",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Sentamos perto demais para fingir indiferença e longe demais para chamar de intimidade. A lata fria sua na minha mao. Bia olha para frente, mas parece me escutar inteira.",
    characterImage: "/characters/protagonist.png",
    next: "river-choice",
  },
  "river-choice": {
    id: "river-choice",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "A cidade fica linda quando nao exige nada de mim. Talvez seja por isso que eu consiga falar mais aqui. Ou querer falar mais aqui.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Sentar mais perto, como se o frio fosse desculpa suficiente.",
        nextScene: "river-bia-story",
        effects: {
          affinity: 1,
          boldness: 1,
          flags: { stayedClose: true },
        },
      },
      {
        text: "Perguntar por que ela me chamou especificamente.",
        nextScene: "river-bia-story",
        effects: { affinity: 2, caution: 1 },
      },
      {
        text: "Provocar: \"Voce sempre arma essas entradas dramaticas?\"",
        nextScene: "river-bia-story",
        effects: { boldness: 1, affinity: 1 },
      },
    ],
  },
  "river-bia-story": {
    id: "river-bia-story",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Porque com voce eu nunca sei se vou te salvar de uma noite ruim ou estragar sua vida de vez\", ela responde, sorrindo sem me livrar do golpe. Depois suspira, mais sincera. \"E porque eu queria que fosse voce.\" A frase pousa entre nos como se tivesse peso proprio.",
    characterImage: "/characters/friend-bia.png",
    next: "river-climax",
  },
  "river-climax": {
    id: "river-climax",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Minha respiracao muda. O rio continua correndo, a cidade continua longe, mas tudo se aperta nesse banco, nesse segundo, nesse quase que esta cansado de ser quase.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Dizer que eu queria isso ha mais tempo do que devia.",
        nextScene: "romance-check",
        effects: {
          affinity: 2,
          boldness: 1,
          flags: { confessedTonight: true },
        },
      },
      {
        text: "Pedir que ela fique do meu lado, mesmo que devagar.",
        nextScene: "soft-check",
        effects: {
          affinity: 2,
          caution: 1,
          flags: { confessedTonight: true },
        },
      },
      {
        text: "Beijar antes que a coragem decida ir embora.",
        nextScene: "romance-check",
        effects: {
          affinity: 1,
          boldness: 2,
          flags: { confessedTonight: true, startedKiss: true },
        },
      },
    ],
  },
  "alley-route-intro": {
    id: "alley-route-intro",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "A gente segue sem rumo fixo, atravessando ruas menores onde a cidade parece mais honesta. Passamos por maquinas de bebida, letreiros piscando errado, um arcade ainda aberto, um casal discutindo baixo perto de um taxi. Nao existe plano, e pela primeira vez isso me acalma.",
    characterImage: "/characters/protagonist.png",
    next: "alley-route-arcade",
  },
  "alley-route-arcade": {
    id: "alley-route-arcade",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Ta vendo?\" Bia gira no meio da calcada, de bracos abertos. \"A melhor parte da madrugada e que ela nao pede curriculo.\" Eu rio. Talvez porque seja uma boa frase. Talvez porque com ela ate a cidade parece ter senso de humor.",
    characterImage: "/characters/friend-bia.png",
    next: "alley-choice",
  },
  "alley-choice": {
    id: "alley-choice",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Do lado de um arcade quase vazio, a noite oferece pequenas idiotices perfeitas. As melhores, provavelmente.",
    characterImage: "/characters/protagonist.png",
    choices: [
      {
        text: "Puxar Bia para dancar na luz torta do letreiro.",
        nextScene: "alley-laugh",
        effects: { boldness: 2, affinity: 1 },
      },
      {
        text: "Pegar um chaveiro baratissimo na maquina e entregar para ela.",
        nextScene: "alley-laugh",
        effects: {
          affinity: 2,
          flags: { gaveBiaGift: true },
        },
      },
      {
        text: "Sentar na guia da calcada e so observar a cidade ao lado dela.",
        nextScene: "alley-laugh",
        effects: { caution: 1 },
      },
    ],
  },
  "alley-laugh": {
    id: "alley-laugh",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "A gente ri de uma coisa boba e eu demoro um segundo para perceber que o som saiu facil demais. Nao polido. Nao medido. So meu. Bia percebe tambem. E o jeito que ela me olha depois disso e pior do que qualquer bebida.",
    characterImage: "/characters/protagonist.png",
    next: "alley-climax",
  },
  "alley-climax": {
    id: "alley-climax",
    background: "/backgrounds/street-night.jpg",
    speaker: "Bia",
    text:
      "\"Pronto\", ela diz, ainda sorrindo. \"Agora eu reconheco voce.\" Eu deveria perguntar o que isso significa. Em vez disso, so sinto a frase afundar devagar dentro de mim.",
    characterImage: "/characters/friend-bia.png",
    choices: [
      {
        text: "Admitir que isso tudo esta sendo a melhor parte do meu mes.",
        nextScene: "soft-check",
        effects: {
          affinity: 2,
          flags: { confessedTonight: true },
        },
      },
      {
        text: "Desafiar Bia a fazer essa noite ser impossivel de esquecer.",
        nextScene: "reckless-check",
        effects: {
          boldness: 2,
          affinity: 1,
          flags: { confessedTonight: true, choseChaos: true },
        },
      },
      {
        text: "Guardar isso em silencio, como quem protege uma chama pequena.",
        nextScene: "ending-alone",
        effects: { caution: 1 },
      },
    ],
  },
  "romance-check": {
    id: "romance-check",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "O mundo parece esperar pela resposta antes mesmo da Bia abrir a boca.",
    characterImage: "/characters/protagonist.png",
    conditionalNext: [
      {
        requirements: { affinityMin: 8, boldnessMin: 5 },
        nextScene: "ending-kiss",
      },
      {
        requirements: { affinityMin: 7, cautionMin: 6 },
        nextScene: "ending-promise",
      },
    ],
    next: "ending-missed",
  },
  "soft-check": {
    id: "soft-check",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Nem toda coragem chega gritando. Algumas chegam assim, em voz baixa, pedindo para serem levadas a serio.",
    characterImage: "/characters/protagonist.png",
    conditionalNext: [
      {
        requirements: { affinityMin: 7, cautionMin: 5 },
        nextScene: "ending-promise",
      },
      {
        requirements: { affinityMin: 8, boldnessMin: 6 },
        nextScene: "ending-kiss",
      },
    ],
    next: "ending-dawn-parting",
  },
  "reckless-check": {
    id: "reckless-check",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Tem noites que pedem cuidado. Esta claramente quer outra coisa.",
    characterImage: "/characters/protagonist.png",
    conditionalNext: [
      {
        requirements: {
          boldnessMin: 8,
          cautionMax: 4,
          flags: { choseChaos: true },
        },
        nextScene: "ending-reckless",
      },
      {
        requirements: { affinityMin: 8 },
        nextScene: "ending-kiss",
      },
    ],
    next: "ending-dawn-parting",
  },
  "ending-kiss": {
    id: "ending-kiss",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Bia nao responde primeiro com palavras. Ela me observa por um segundo longo, como se quisesse ter certeza de que nao estou fugindo de mim mesma outra vez. Depois encosta a testa na minha, sorri daquele jeito pequeno e perigoso, e me beija. Nao e um beijo apressado nem perfeito. E melhor. Tem gosto de madrugada, de risco e de alguma coisa que vinha querendo nascer ha tempo demais. Quando a gente se separa, a cidade continua la, mas menos importante. \"Agora ferrou\", ela murmura, rindo baixo. Eu rio tambem. Pela primeira vez, a palavra futuro nao assusta tanto.",
    characterImage: "/characters/protagonist.png",
  },
  "ending-promise": {
    id: "ending-promise",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Bia segura minha mao e nao solta. So isso ja muda a temperatura da noite. \"Entao vamos fazer direito\", ela diz, sem ironia, sem pressa. \"Sem voce precisar explodir de uma vez so.\" A gente fica olhando a cidade por mais um tempo, ombro com ombro, como quem acaba de assinar alguma coisa invisivel. Nao e um fim grandioso. E melhor do que isso. E uma promessa pequena, firme, respirando entre os dedos. Quando eu finalmente penso em voltar, nao parece retorno. Parece intervalo.",
    characterImage: "/characters/protagonist.png",
  },
  "ending-reckless": {
    id: "ending-reckless",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Bia me olha como se estivesse esperando essa frase desde a primeira mensagem da noite. Cinco minutos depois, estamos correndo rua abaixo, rindo sem motivo elegante, dividindo o resto da bebida e um folego que nao acompanha. Pegamos carona com a madrugada de bairro em bairro, sem plano, sem prudencia, com a cidade inteira servindo de trilha. Em algum ponto entre um mirante improvisado e a janela embaçada de um taxi, eu entendo que talvez isso de errado amanha. Talvez bastante. Mas esta noite eu finalmente vivi fora da moldura. E, por enquanto, isso basta.",
    characterImage: "/characters/protagonist.png",
  },
  "ending-alone": {
    id: "ending-alone",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "Eu nao digo tudo. Talvez ainda nao consiga. Talvez nem precise. Bia percebe mesmo assim. O sorriso dela nao pesa, nao cobra, nao diminui o que aconteceu. A gente anda mais um pouco e depois ela me deixa na esquina seguinte, com um toque leve no braco e um \"me chama quando chegar\" que soa mais intimo do que deveria. Sigo sozinha por algumas quadras antes de pensar em voltar. A cidade continua enorme, mas eu nao me sinto pequena dentro dela. Nem toda noite precisa terminar em beijo para mudar alguma coisa. Esta mudou.",
    characterImage: "/characters/protagonist.png",
  },
  "ending-missed": {
    id: "ending-missed",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "A resposta da Bia vem num sorriso triste e bonito ao mesmo tempo. Ela toca meu rosto de leve, como quem guarda uma pagina sem rasgar. \"Nao me arrependo de te tirar de casa hoje\", ela diz. \"Mas talvez a gente ainda esteja aprendendo a chegar no mesmo lugar.\" Doi. Mais do que eu queria. So que nao e um tipo de dor vazia. Quando ela encosta o ombro no meu e ficamos olhando a cidade em silencio, eu percebo que algumas noites nao entregam o que a gente quer. Entregam o que nos obriga a continuar.",
    characterImage: "/characters/protagonist.png",
  },
  "ending-dawn-parting": {
    id: "ending-dawn-parting",
    background: "/backgrounds/street-night.jpg",
    speaker: "Lina",
    text:
      "A conversa nao vira beijo nem fuga cinematografica. Vira uma coisa mais rara. Honestidade. Bia escuta, eu escuto, a madrugada vai afinando e o ceu escurece menos a cada minuto. Quando o primeiro sinal de amanhecer aparece entre os predios, ela encosta no meu ombro e diz que vai me cobrar outra noite. Eu acredito. Nao porque foi prometido de um jeito grande, mas porque alguma coisa entre nos finalmente deixou de ser brincadeira. Volto antes do sol nascer por completo, com o coracao confuso, vivo e estranhamente em paz.",
    characterImage: "/characters/protagonist.png",
  },
};
