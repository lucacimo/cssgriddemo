var consulting_txt_en = "Before getting your pizzeria started is absolutely necessary to know all the aspects concerning the business, choosing all the right tools, how to manage the relationships with dealers in order to correctly choose high quality products, how to make a great menu and finally choosing the right combination of ingredients to make your personal concept become true. With our skills and our long international experience in the domain we will be able to help you to improve your existing business.";
var consulting_txt_it = "Prima di aprire una pizzeria è necessario conoscere i tanti aspetti di questa professione, dalla scelta delle giuste attrezzature ad un corretto rapporto con fornitori nella scelta delle materie prime, dalla creazione di un nuovo menù alla giusta combinazione degli ingredienti a seconda del concept si andrà a realizzare. \
                         Grazie all'esperienza di oltre 20 anni di attività maturata nel settore, a livello nazionale e internazionale, possiamo aiutarti a migliorare  un'attività già esistente."

var training_txt_en = "The pizza maker and his formation play an important role as much as the customer service. The right balance between all this aspects are the key to make your business really successful. Our goal during the training is to provide you with all the knowledge about the dough preparation, the leavening process , the final baking and how to find the right balance of the ingredients in the recipes. We will provide you also with all the secrets to build the perfect team to get your business up and running in no time.";
var training_txt_it = "Il ruolo del pizzaiolo e la sua formazione sono un elemento fondamentale per il successo della stessa così come il servizio gioca un ruolo predominante. Un giusto equilibrio è la chiave del successo. \
                       Il nostro obiettivo nella fase training non sarà solo l'istruzione del pizzaiolo nella conoscenza degli impasti, lievitazioni, cottura e equilibrio degli ingredienti nelle ricette ma la creazione di una vera squadra di lavoro che sappia lavorare in team."

var startup_txt_en = "Getting your business started is considered to be a very difficult task but with the right training and consulting can become a very easy task. Our goal is to make that happen because the customer satisfaction plays an important role to make your business successful and a happy customer who spreads the word is the best form of advertising for your pizzeria. We will provide you with all the knowledge you need to make a proper marketing campaign and to have the best formation for your staff."
var startup_txt_it = "Iniziare una nuova attività può sembrare un compito arduo ma è strettamente collegato al risultato di un buon lavoro di training e consulting.I clienti che entrano in un locale cercano un'esperienza e tu devi essere in grado di dargliela per farli ritornare e far parlare di te ..Diceva mio padre il passaparola è quello che conta e la miglior pubblicità te la fa il cliente. Le cose sono un po’ cambiate dagli anni 80 ad oggi ma sicuramente senza la tradizione non si costruisce l'innovazione. \
                      Ti daremo gli strumenti per strutturare una buona campagna di marketing, realizzare un'adeguata formazione del personale e giungere al successo."

var resources = {
    en: {
      translation: {
        "discover": "Discover Services",
        "about" : "About",
        "services": "Services",
        "reviews": "Reviews",
        "gallery": "Gallery",
        "contact": "Contact",
        "heading-sub": "Pizza Verace Napoletana Trainer & Consultant",
        "about-me": "About me",
        "about-family": "My Family",
        "consulting": "Consulting",
        "training": "Training",
        "consulting_txt": consulting_txt_en,
        "training_txt": training_txt_en,
        "startup_txt": startup_txt_en,
        "write-review": "Write a review",
        "read-review": "Read all reviews",
        "phone": "Phone",
        "contact-soon": "We will get back to you soon!",
        "contact-me": "Contact me",
        "name": "Name and Surname",
        "msg": "Message",
        "submit-form": "Submit",
        "thanks-msg": "Thanks for contacting us!",
        "contact-msg": "We will get back to you soon!"

      }
    },
    it: {
      translation: {
        "discover": "Scopri Servizi",
        "about": "Chi sono",
        "services": "Servizi",
        "reviews": "Recensioni",
        "gallery": "Galleria",
        "contact": "Contatti",
        "heading-sub": "Pizza Verace Napoletana Formatore & Consulente",
        "about-me": "Su di me",
        "about-family": "La mia famiglia",
        "consulting": "Consulenza",
        "training": "Formazione",
        "consulting_txt": consulting_txt_it,
        "training_txt": training_txt_it,
        "startup_txt": startup_txt_it,
        "write-review": "Scrivi una recensione",
        "read-review": "Leggi le recensioni",
        "phone": "Telefono",
        "contact-soon": "Vi contatteremo il prima possibile!",
        "contact-me": "Contattami",
        "name": "Nome e Cognome",
        "msg": "Messaggio",
        "submit-form": "Invia",
        "thanks-msg": "Grazie per averci contattato!",
        "contact-msg": "Vi risponderemo il prima possibile!"
      }
    }
  }


i18next.init({
    lng: 'en',
    debug: true,
    resources: resources
  }, function(err, t) {
    // init set content
    updateContent();
  });
  
  function updateContent() {
    document.getElementById('discover-btn').innerHTML = i18next.t('discover');
    document.getElementById('about-link').innerHTML = i18next.t('about');
    document.getElementById('services-link').innerHTML = i18next.t('services');
    document.getElementById('reviews-link').innerHTML = i18next.t('reviews');
    document.getElementById('gallery-link').innerHTML = i18next.t('gallery');
    document.getElementById('contact-link').innerHTML = i18next.t('contact');
    document.getElementById('heading-sub').innerHTML = i18next.t('heading-sub');
    document.getElementById('about-me').innerHTML = i18next.t('about-me');
    document.getElementById('about-family').innerHTML = i18next.t('about-family');
    document.getElementById('consulting').innerHTML = i18next.t('consulting');
    document.getElementById('training').innerHTML = i18next.t('training');
    document.getElementById('consulting_txt').innerHTML = i18next.t('consulting_txt');
    document.getElementById('training_txt').innerHTML = i18next.t('training_txt');
    document.getElementById('startup_txt').innerHTML = i18next.t('startup_txt');
    document.getElementById('write-review').innerHTML = i18next.t('write-review');
    document.getElementById('read-review').innerHTML = i18next.t('read-review');
    document.getElementById('phone').innerHTML = i18next.t('phone');
    document.getElementById('contact-soon').innerHTML = i18next.t('contact-soon');
    document.getElementById('contact-me').innerHTML = i18next.t('contact-me');
    document.getElementById('name').placeholder = i18next.t('name');
    document.getElementById('msg').placeholder = i18next.t('msg');
    document.getElementById('submit-form').innerHTML = i18next.t('submit-form');
    document.getElementById('about-foot').innerHTML = i18next.t('about');
    document.getElementById('services-foot').innerHTML = i18next.t('services');
    document.getElementById('reviews-foot').innerHTML = i18next.t('reviews');
    document.getElementById('gallery-foot').innerHTML = i18next.t('gallery');
    document.getElementById('thanks-msg').innerHTML = i18next.t('thanks-msg');
    document.getElementById('contact-msg').innerHTML = i18next.t('contact-msg');
  }

  function changeLng(lng) {
    i18next.changeLanguage(lng);
  }
  
  i18next.on('languageChanged', () => {
    updateContent();
  });