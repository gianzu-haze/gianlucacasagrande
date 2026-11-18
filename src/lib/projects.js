export const projects = [
  {
    id: 'appa',
    images: [
      {
        alt: 'Schermata iniziale della dashboard previsionale per APPA Trentino',
        src: '/Images/APPA_Homepage.png',
      },
      {
        alt: 'Visualizzazione della dashboard previsionale per il parametro O3',
        src: '/Images/APPA_ModelloO3.png',
      },
      {
        alt: 'Visualizzazione della dashboard previsionale per il parametro PM10 e PM2.5',
        src: '/Images/APPA_ModelloPM.png',
      }
    ],
    documents: [],
    title: 'APPA Trentino',
    categories: ['UX/UI Design'],
    art: 'dashboard',
    description:
      'Progettazione di una dashboard per APPA Trentino.',
    paragraph: `
### Introduzione

La UX Challenge di Trento 2026 è un evento in cui i partecipanti, suddivisi in gruppi e affiancati da un mentore esperto in UX/ UI design, si dedicano alla risoluzione di un caso aziendale attraverso la progettazione di una soluzione dedicata.Al mio gruppo, composto da 6 persone, è stato assegnato il caso di APPA Trentino, l’azienda provinciale responsabile della protezione ambientale.
    
### Il caso

Non siamo partiti da zero, infatti la referente dell’azienda ci ha comunicato di aver già pensato a una soluzione per il suo problema, ma di avere bisogno di un metodo efficace per implementarla.

L’azienda aveva infatti partecipato a un altro evento, la AI challenge, grazie a cui ha ottenuto un agente di Intelligenza Artificiale capace di effettuare previsioni a breve e lungo termine sugli inquinanti atmosferici O3, PM10 e PM2.5.
Sfruttando questa tecnologia, il nostro compito è stato progettare una dashbord che integrasse gli strumenti quotidiani del personale di APPA con il modello predittivo.
Il risultato è un’interfaccia unita e completa, capace di offrire una panoramica dettagliata sul rischio degli inquinanti, l’indicazione delle stazioni di rilevamento impiegate per le previsioni e una stima della loro accuratezza.

### Il processo di design

Non potendo condividere il file Miro che mostra l’intero processo di design, menzionerò brevemente le diverse fasi attraversate:

- Intervista alla referente di APPA per stabilire i criteri necessari e i bisogni del committente;
- Creazione di personas basati sugli impiegati di APPA per mettersi nei panni del cliente della futura interfaccia(con relativi user journey e user flow);
- Analisi di competitor per individuare punti forti e deboli delle varie idee di implementazione;
- Realizzazione di sketch per il brainstorming e le prime idee di interfaccia;
- Prototipazione low - fidelity, con successiva presentazione alla referente APPA;
- Prototipazione high - fidelity attuando le modifiche emerse dal colloquio con successivi test con utenti;
- Attuazione delle ultime modifiche richieste;

Trattandosi di un ente provinciale, eravamo consapevoli di non poter essere troppo creativi durante la progettazione dei componenti.Per questo abbiamo cercato di utilizzare il più possibile gli elementi compresi nel design system “UI kit Italia”. In alcuni casi in cui ciò non è stato possibile, i componenti sono stati realizzati nel modo più fedele possibile ad esso.

### Risultati

Tutti gli elementi di interfaccia e le schermate progettate sono infine state sottoposte al giudizio della referente di APPA e discussi insieme all’azienda, ottenendo approvazione e interesse per una futura implementazione.
Di seguito è possibile consultare il file Figma con i vari prototipi e componenti usati:

[Figma - Dashboard per APPA Trentino](https://www.figma.com/design/5kg2g52HMu266KHBW3xYzI/APPA-Trento-UX-challenge?node-id=54-10&t=GRPbhEcJ7h9FGYKy-1)
`
  },
  {
    id: 'igg',
    images: [{
      alt: 'Applicazione finale per la raccolta di dati georeferenziati',
      src: '/Images/IGG_finale.png',
    }, {
      alt: 'Prototipo di mappa interattiva',
      src: '/Images/IGG_prototipo.png',
    },

    ],
    documents: [],
    title: 'IGG Pisa',
    categories: ['UX/UI Design', 'Sviluppo'],
    art: 'map',
    description:
      'Interfaccia dedicata all’annotazione geografica per i ricercatori di IGG Pisa.',
    paragraph: `
### Introduzione

Collaborando con l’Istituto di Geoscienze e Georisorse di Pisa (IGG) tramite il professor Palmero Aprosio dell’Università di Trento, ho realizzato questa interfaccia per permettere ai ricercatori dell’IGG di salvare annotazioni geografiche personalizzate in merito a entità geografiche menzionate in un corpus di documenti storici relativi alle eruzioni del Vesuvio.

### Il processo di design

Dapprima l’interfaccia è stata ideata con un bozzetto, per poi essere prototipata su Figma e, infine, sviluppata con HTML, CSS e JavaScript. Una volta mostrata e testata con i committenti, è stata pubblicata su Internet con accesso protetto. Viene attualmente usata dai ricercatori per il progetto CorVo (Corpora for Volcanoes).

Per semplificare il lavoro, vista la necessità di offrire un primo prodotto funzionante in tempi brevi, è stato usato il framework Bootstrap. Per la gestione simultanea dei tre linguaggi, invece, è stato impiegato Vue.js. Lo sviluppo si è protratto in itinere: l’applicazione è stata progressivamente arricchita con nuove funzionalità e ottimizzata per offrire un’esperienza utente migliore.

Mi sono occupato anche della parte precedente allo sviluppo dell’interfaccia: l’estrazione di entità geografiche dal corpus di documenti storici CorVo. Per farlo ho usato un codice Python basato su Intelligenza Artificiale Mistral per eseguire una procedura di OCR (Optica Character Recognition) e una di correzione/modernizzazione dei testi analizzati.

### Risultati e riferimenti

L’intero progetto è stato documentato nell’articolo [Extracting volcanological knowledge from historical texts](https://iris.unitn.it/retrieve/73b535ae-05d0-45fb-9367-3bcbabd99360/2026.lt4hala-1.4.pdf), di cui sono co-autore, e presentato al workshop internazionale LT4HALA 2026 a Palma de Mallorca. Il codice sorgente dell’applicazione è disponibile su [Github](https://github.com/corvo-project)
    `
  },
  {
    id: 'meteotrentino',
    images: [{
      alt: 'Prototipo di interfaccia per Meteotrentino - Homepage mobile',
      src: '/Images/Meteotrentino_Mobile1.png'
    },
    {
      alt: 'Prototipo di interfaccia per Meteotrentino - Previsioni settimanali mobile',
      src: '/Images/Meteotrentino_Mobile2.png'
    },
    {
      alt: 'Prototipo di interfaccia per Meteotrentino - Homepage',
      src: '/Images/Meteotrentino1.png'
    },
    {
      alt: 'Prototipo di interfaccia per Meteotrentino - Previsioni settimanali',
      src: '/Images/Meteotrentino2.png'
    },],
    documents: [],
    title: 'Meteotrentino',
    categories: ['UX/UI Design'],
    art: 'weather',
    description:
      'Progetto di redesign dell’interfaccia di Meteotrentino.',
    paragraph: `
### Introduzione

Per questo progetto ho collaborato direttamente con il team di Meteotrentino per affrontare un problema critico: il calo degli utenti attivi sul sito. Io e il mio team di lavoro siamo entrati in contatto con l’azienda grazie al professor Bussolon dell’Università di Trento.

### Il processo di design

Attraverso un’analisi dei commenti social e interviste agli utenti, oltre che grazie a un’analisi competitiva, abbiamo individuato le cause del problema: una navigazione eccessivamente macchinosa all’interno del sito, a causa dell’elevatissimo numero di funzionalità disponibili, una visualizzazione non responsive su mobile, responsabile di alcuni problemi di visualizzazione di dati e grafici e l’assenza in primo piano di funzioni ritenute essenziali, come le previsioni meteo per i giorni successivi. Il nostro obiettivo è stato quindi progettare una soluzione di redesign centrata sull’utente, mobile-first, capace di soddisfare simultaneamente i KPI del committente e le esigenze di fruizione del pubblico, mantenendo i contatti con Meteotrentino e assicurandoci di rispettare i vincoli negoziati. La soluzione proposta è stata presentata ad alcuni membri del team, che stanno attualmente considerando la possibilità di implementarla a seguito di ulteriori modifiche.

### Risultati

Di seguito è possibile consultare i vari componenti e documenti Figma con cui il mio team ha lavorato al progetto. Nelle schede “versione definitiva” e “presentazione” sono disponibili le schermate finali presentate al personale di Meteotrentino, mentre nelle altre pagine del documento si trovano gli elementi di design risultanti dai processi di pensiero individuali e collettivi.

[Figma – Meteotrentino redesign project](https://www.figma.com/design/UKmin2eLqGhwfx2Gi7CQj9/Meteotrentino?node-id=17-2&t=bdKUllhp9mtfwXNc-1)
    `
  },
  {
    id: 'banca-reale',
    images: [{
      alt: 'Call to Action per Banca Reale',
      src: '/Images/BancaReale.png'
    }],
    documents: [],
    title: 'Banca Reale',
    categories: ['UX/UI Design'],
    art: 'type',
    description: 'Progettazione di una Call To Action per Banca Reale.',
    paragraph: `
### Introduzione

Si tratta di un progetto di gruppo dell’evento Business Game che si è svolto a Trento nel 2026. In tale occasione, 3 aziende reali hanno proposto dei casi di business da risolvere, votando infine la soluzione migliore tra quelle proposte dai vari gruppi.

I gruppi di persone sono stati formati casualmente, per offrire la possibilità di sviluppare capacità cooperative con persone sempre diverse e sconosciute.

### Il caso

Cito in particolare il caso di Banca Reale perché, oltre ad essere quello che maggiormente si è avvicinato alle mie competenze, ovvero quello di realizzare un prototipo a seguito di un processo di ragionamento collettivo, è stato quello per cui ho ottenuto una vittoria. Grazie a questo sono stato invitato, insieme al team di lavoro, presso gli uffici di Banca Reale a Torino per una visita di piacere e per fare la conoscenza dei loro spazi comuni e uffici.

Sebbene il risultato si presenti in modo essenziale, il percorso di ragionamento che l’ha generata è stato approfondito e strutturato. La richiesta dell’azienda è stata: “Vogliamo che ogni gruppo progetti una Call To Action da inserire sul sito di Banca Reale per avvicinare i giovani e le nuove generazioni alla nostra realtà, invogliandoli ad aprire un conto, un fondo investimenti, ecc…”.

### Il processo di design

In seguito, siamo stati istruiti sul procedimento da usare per trovare la soluzione vincente, che in ambito UX viene chiamato Affinity Diagram. Anzitutto i membri del gruppo scrivono su dei post-it degli elementi del dominio, individualmente. Poi si sceglie una voce e, a partire da essa, i membri del gruppo cercano di individuare altri elementi simili, associandoli a quello estratto in precedenza. In questo modo si ottengono degli insiemi di elementi rilevanti per il dominio, raggruppati in categorie.

In seconda fase, con il consenso di tutti i membri, si cerca di immaginare quali soluzioni potrebbero soddisfare le categorie individuate. Nel nostro caso, dall’analisi del dominio e del bisogno esplicitato dalla richiesta, è emerso che i più giovani cercano un linguaggio chiaro e semplice, oltre a un sistema che li guidi nelle varie procedure senza nascondere nulla.

### Risultati

La concretizzazione di questo processo di ragionamento ha preso forma nell’immagine qui sotto, dove parole che comunicano ansia e preoccupazione, come pensione, mutuo e futuro, sono racchiuse in uno spazio ristretto per trasmettere un senso di forte stress. A seguire, la frase “Ti fanno venire il mal di testa?” per entrare in empatia con il lettore. La Call To Action sottostante rimanda a una pagina essenziale e semplificata, strutturata per guidare l’utente passo passo nelle operazioni bancarie fondamentali, come l’apertura di un conto, di un fondo investimenti o un piano pensionale.
    `
  },
  {
    id: 'pick-your-poison',
    images: [{
      alt: 'Selezione di ricetta per categoria',
      src: '/Images/PYP_home.png'
    },
    {
      alt: 'Generazione della ricetta selezionata',
      src: '/Images/PYP_caricamento.png'
    },
    {
      alt: 'Visualizzazione della ricetta generata',
      src: '/Images/PYP_ricetta.png'
    }],
    documents: [],
    title: 'Pick your poison',
    categories: ['Sviluppo'],
    art: 'recipe',
    description: 'Sviluppo di un generatore di ricette basato su n-grammi.',
    paragraph: `
### Introduzione

Questa single page application è il risultato di un progetto universitario. L’obiettivo era di programmare un generatore di testo usando come base un dataset e un modello linguistico semplice o complesso.

Il dataset usato contiene numerosissime istruzioni, ingredienti e procedimenti per svariati tipi di ricette. Per semplificare il lavoro, con il mio gruppo abbiamo optato per una soluzione divertente, che genera ricette in modo casuale a partire dalla categoria scelta (per esempio “appetizers and snacks”, “desserts” o “drinks”).

### Informazioni sul codice e la generazione a n-grammi

Per ridurre la dimensione dei dati da analizzare e velocizzare l’esecuzione del processo, abbiamo mantenuto solo i procedimenti delle ricette e gli ingredienti da usare, eliminando la descrizione, il tempo di cottura, e le informazioni nutrizionali.

Il processo quindi prevede che:

- La ricetta da generare venga filtrata per categoria;
- Tutte le istruzioni relative a quella categoria di ricette vengano tokenizzate;
- Il modello a n-grammi venga addestrato a predire la parola successiva basandosi al massimo sulle tre precedenti;
- La generazione avvenga tramite greedy decoding, scegliendo cioè la parola con la probabilità maggiore date le precedenti.

### Risultati

Il greedy decoding, basandosi solo sulla probabilità delle parole successive basata sulle precedenti, spesso fa si che i testi si ripetano o descrivano procedimenti del tutto scollegati. Per questa ragione il sito è puramente ironico e da non considerarsi come un generatore di ricette affidabile.
    `
  },
  {
    id: 'beam',
    images: [{
      alt: 'Schermata principale di B.E.A.M. - smartwatch',
      src: '/Images/BEAM_main.png'
    },
    {
      alt: 'Schermata di gestione dei task di B.E.A.M. - smartwatch',
      src: '/Images/BEAM_attivita.png'
    },
    {
      alt: 'Schermata di blocco concentrazione di B.E.A.M. - smartwatch',
      src: '/Images/BEAM_lock.png'
    },
    {
      alt: 'Assistente vocale di B.E.A.M. - smartwatch',
      src: '/Images/BEAM_beamy.png'
    }],
    documents: [{
      title: 'BEAM - Boosting Efficiency and Attention Management',
      href: '/Documents/B.E.A.M - Boosting Efficiency and Attention Management.pdf'
    }],
    title: 'B.E.A.M',
    categories: ['UX/UI Design'],
    art: 'beam',
    description: 'Progettazione di un’applicazione smartwatch per la gestione dell’ADHD.',
    paragraph: `
### Introduzione

B.E.A.M, acronimo di Boosting Efficiency and Attention Management, è un’applicazione pensata per chi soffre di ADHD in forma lieve e fatica nel completare le attività di tutti i giorni o mantenere la concentrazione.

### Descrizione dell’approccio e della ricerca

Attraverso un approccio basato sul design thinking, lo sviluppo del progetto ha attraversato 4 fasi:

- Comprendere l’utente e le sue esigenze
- Creare un sistema
- Definire le relazioni al suo interno
- Realizzare un’ipotesi progettuale

Dapprima, insieme al mio gruppo di lavoro, mi sono concentrato sull’approfondire l’ADHD nelle sue varie forme: nei bambini e negli adulti, la suddivisione in attention deficit e hyperactivity disorder, i sintomi più frequenti e la categoria di persone che, statisticamente, ne soffre maggiormente.

In seguito, per assicurarci di non sviluppare un prodotto già esistente e non innovativo, che quindi avrebbe portato a uno scarso successo, abbiamo svolto un’analisi competitiva delle soluzioni presenti sul mercato. Questo ci ha permesso di esplorare alcune applicazioni, come “Headspace”, “Focus@will” e altre, e capire i loro punti di forza e le loro debolezze. Così facendo abbiamo stilato una serie di osservazioni contenenti tutto quello che le soluzioni considerate non garantivano, individuando quindi i punti che porterebbero valore aggiunto a una nuova soluzione.

### Risultati

Il prodotto è un’applicazione per smartwatch progettata per accompagnare le persone con ADHD nella gestione della quotidianità. La soluzione agisce su due fronti: alleggerisce il carico cognitivo ricordando le attività essenziali ed esonerando l’utente dagli impegni già completati, e monitora in tempo reale parametri chiave per favorire la concentrazione. Grazie a un set di funzionalità attivabili su misura, l’applicazione garantisce un supporto flessibile e profondo, capace di adattarsi anche ai profili con sintomi più accentuati.

Di seguito è possibile consultare il documento contenente l’intera analisi del caso, i dettagli tecnici dell’applicazione e i prototipi sviluppati.
    `
  },
  {
    id: 'pokesite',
    images: [{
      alt: 'Elenco completo dei Pokémon',
      src: '/Images/Poke_elenco.png'
    },
    {
      alt: 'Pokémon del giorno',
      src: '/Images/Poke_daily.png'
    },
    {
      alt: 'Pokémon preferiti',
      src: '/Images/Poke_preferiti.png'
    },
    {
      alt: 'Squadra personale di Pokémon',
      src: '/Images/Poke_team.png'
    },
    {
      alt: 'Minigioco Who is that Pokémon',
      src: '/Images/Poke_who.png'
    }],
    documents: [],
    title: 'PokéSite',
    categories: ['Sviluppo'],
    art: 'poke',
    description: 'Sviluppo di un sito con catalogo e minigiochi a tema Pokémon.',
    paragraph: `
### Introduzione

Tra i progetti relativi alla mia formazione in programmazione con HTML, CSS e JavaScript, questo è sicuramente uno dei più importanti. Insieme al mio gruppo di lavoro ho realizzato un sito privato, quindi eseguibile solo localmente, con funzionalità di router (con Vue router), per la navigazione in più pagine, gestione di database per il salvataggio di dati dell’utente (con Google Firestore) e uso di un API pubblica (PokéAPI).

### Risultati

Non trattandosi di un progetto svolto su commissione per dei clienti, non è basato su studi, ricerche o necessità di clienti reali. Si divide in 5 pagine, raggiungibili attraverso la barra di navigazione superiore, dove è possibile consultare l’elenco completo di tutti i Pokemon esistenti, visualizzare il Pokemon del giorno, creare una squadra personalizzata, aggiungere i Pokemon alla lista dei preferiti e giocare al minigioco “Who is that Pokemon?” per cercare di indovinarne l’identità a partire da una sagoma oscurata.
    `
  },
  {
    id: 'allready',
    images: [{
      alt: 'Schermata principale, mappa e riepilogo ordine',
      src: '/Images/AllReady_hi1.png'
    },
    {
      alt: 'Menù e schermata di selezione dei piatti',
      src: '/Images/AllReady_hi2.png'
    },
    {
      alt: 'Prototipo low-fidelity 1',
      src: '/Images/AllReady_low1.png'
    },
    {
      alt: 'Prototipo low-fidelity 2',
      src: '/Images/AllReady_low2.png'
    }],
    documents: [],
    title: 'AllReady',
    categories: ['UX/UI Design'],
    art: 'ready',
    description: 'Progettazione di un’applicazione per camerieri.',
    paragraph: `
### Introduzione

Il progetto di AllReady è da considerarsi come uno dei miei primi progetti di design di un prototipo. Per questa ragione non è mai stato testato con utenti reali e il processo di analisi basato su Double Diamond è stato condotto su utenti immaginari e prototipici. Inoltre, l’obiettivo di progetto era quello di imparare a progettare seguendo un design system come Material Design, ragione per cui i colori e l’aspetto estetico del prodotto finale non sono stati modificati.

### Il processo di design

Anzitutto è stato individuato il target dell’applicazione per realizzare un prodotto centrato sull’utente: primariamente i camerieri di un ristorante e secondariamente il responsabile di sala e i cassieri. Il problema da risolvere era “Ottimizzare e velocizzare le prestazioni del servizio in sala, oltre a fare chiarezza sugli incarichi”.

Successivamente sono stati individuati due personas, una lavoratrice stagionale e un lavoratore esperto nel campo della ristorazione, con bisogni differenti. Questi bisogni sono stati tradotti in sette pain points, tra cui “rendere le mansioni più esplicite per rendere il personale più indipendente”, “comunicazione troppo lenta con la cucina” e “difficoltà nel ricordare allergeni e ingredienti delle varie portate”.

Di seguito è stato realizzato un prototipo low-fidelity e discusso con i compagni del corso, in modo da simulare un test con utenti. A seguito dei suggerimenti emersi, è stato sviluppato il prototipo high-fidelity. Infine, dopo alcune piccole modifiche evidenziate dai compagni, è stata raggiunta la versione definitiva dell’applicazione.

### Risultati

Il prodotto risultante è progettato per rispondere in modo mirato alle esigenze e necessità degli utenti, tenendo conto dell’ambiente di lavoro frenetico e fornendo agli impiegati un servizio con cui coordinarsi al meglio.

Di seguito è possibile consultare i documenti Figma contenenti i prototipi low-fidelity, high fidelity e i processi di ragionamento che ha portato il mio gruppo di lavoro a esaminare diverse alternative:

[Figma - Prototipo high-fidelity](https://www.figma.com/design/HuZapUBbm8U2n2uempxk8U/AllReady-Material-Design?node-id=0-1&t=2W7umMfK1WK2hR9b-1)  | 
[Figma - Prototipo low-fidelity](https://www.figma.com/design/v3tQEEkTMoxkQ1PqG9pXSl/AllReady---Design-Concept?node-id=0-1&t=eGrINWGFK1pMPNpv-1)
    `
  },
  {
    id: 'tra-muri-e-materassi',
    images: [],
    documents: [{
      title: 'Tra muri e materassi - Progetto di ricerca etnografica in una palestra di arrampicata indoor',
      href: '/Documents/Tra muri e materassi.pdf'
    }],
    title: 'Tra muri e materassi',
    categories: ['Ricerca'],
    art: 'research',
    description: 'Progetto di ricerca etnografica in una palestra di arrampicata',
    paragraph: `
### Introduzione

Ritengo importante inserire anche questo progetto all’interno del mio portfolio, nonostante non comprenda prototipi o idee innovative di design.

### Il progetto

Si tratta di una ricerca etnografica svolta nel contesto di una palestra di arrampicata a Rovereto (TN), grazie a cui ho potuto per la prima volta immergermi nel mondo della ricerca con gli utenti. Grazie a questa esperienza ho imparato l’importanza di effettuare una ricerca sul campo osservando da lontano, ma anche intervistando direttamente gli attori del contesto per far emergere tutta la conoscenza possibile. In questo modo è possibile comprendere le motivazioni che spingono una persona ad agire in determinati modi e i bisogni che stanno alla base di tali azioni.

### Risultati

Nel seguente documento è possibile consultare l’intera analisi etnografica: dall’osservazione partecipante, alla trascrizione e analisi delle interviste, fino alle conclusioni tratte.
    `
  },
]
