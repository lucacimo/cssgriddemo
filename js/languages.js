var addShowMore = function (lng) {
  // Configure/customize these variables.
  var showChar = 300;  // How many characters are shown by default
  var ellipsestext = "...";

  var moretext = "";
  var lesstext = "";

  if (lng == 'en') {
    moretext = "Show more";
    lesstext = "Show less";
  }

  if (lng == 'it') {
    moretext = "Mostra di più";
    lesstext = "Mostra di meno";
  }

  $('.section-paragraph').each(function() {
      var content = $(this).html();

      if(content.length > showChar) {

          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

          var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

          $(this).html(html);
      }

  });

  $(".morelink").click(function(){
      if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
      } else {
          $(this).addClass("less");
          $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
  });
}

var consulting_txt_en = "Before getting your pizzeria started is absolutely necessary to know all the aspects concerning the business, choosing all the right tools, how to manage the relationships with dealers in order to correctly choose high quality products, how to make a great menu and finally choosing the right combination of ingredients to make your personal concept become true. With our skills and our long international experience in the domain we will be able to help you to improve your existing business.";
var consulting_txt_it = "Prima di aprire una pizzeria è necessario conoscere i tanti aspetti di questa professione, dalla scelta delle giuste attrezzature ad un corretto rapporto con fornitori nella scelta delle materie prime, dalla creazione di un nuovo menù alla giusta combinazione degli ingredienti a seconda del concept che si andrà a realizzare. Grazie all'esperienza di oltre 20 anni di attività maturata nel settore, a livello nazionale e internazionale, possiamo aiutarti a migliorare  un'attività già esistente."

var training_txt_en = "The pizza maker and his formation play an important role as much as the customer service. The right balance between all these aspects are the key to make your business really successful. Our goal during the training is to provide you with all the knowledge about the dough preparation, the leavening process , the final baking and how to find the right balance of the ingredients in the recipes. We will provide you also with all the secrets to build the perfect team to get your business up and running in no time.";
var training_txt_it = "Il ruolo del pizzaiolo e la sua formazione sono un elemento fondamentale per il successo della vostra attività, così come il servizio gioca un ruolo predominante. Un giusto equilibrio tra questi fattori è la chiave del successo. Il nostro obiettivo nella fase training non sarà solo la formazione del pizzaiolo nella conoscenza degli impasti, lievitazioni e cottura della pizza, ma anche nel trovare il giusto equilibrio degli ingredienti nelle ricette e la creazione di una vera e propria squadra di lavoro."

var startup_txt_en = "Getting your business started is considered to be a very difficult task but with the right training and consulting can become a very easy task. Our goal is to make that happen providing you with all the knowledge you need to make a proper marketing campaign and to have the best formation for your staff. The customer satisfaction plays an important role to make your business successful and a happy customer who spreads the word is the best form of advertising for your pizzeria."
var startup_txt_it = "Iniziare una nuova attività può sembrare un compito arduo ma con un buon lavoro di formazione e consulenza può diventare un compito facilmente realizzabile. La nostra missione è quella di rendere questa fase il più agevole possibile offrendonti gli strumenti per strutturare una buona campagna di marketing e realizzare un'adeguata formazione del personale. La soddisfazione del cliente gioca un ruolo fondamentale e il passaparola è la migliore forma di pubblicità possibile." 

var about_me_txt_it = "Gennaro Langella nasce a San Giorgio a Cremano (Napoli) nel 1981 da una famiglia di quattro generazioni di pizzaioli napoletani. Inizia a fare i primi passi nel mondo della pizza all’età di tredici anni nella storica pizzeria di famiglia che vanta una lunga tradizione nel mondo della pizza verace napoletana, grazie anche alla collaborazione con le varie associazioni. All’età di ventiquattro anni inizia la sua carriera anche in ambito internazionale e lavora in quattro diversi continenti, diffondendo l’arte della pizza verace napoletana nel mondo. Ultimo di quattro fratelli, grazie a suo padre maestro sul lavoro e nella vita, ha avuto la fortuna di collaborare con i più grandi professionisti del settore arricchendo il suo bagaglio professionale, anche al di là  della scuola di famiglia, trasformandolo nell'uomo e il professionista che è oggi. Attualmente svolge l’attività di istruttore presso l’Associazione Verace Pizza Napoletana per i corsi di base e di specializzazione. È inoltre formatore e consulente per startup."
var about_me_txt_en = "Gennaro Langella was born in San Giorgio a Cremano (Napoli) in 1981. He belongs to a family with an history of four generation of neapolitan pizza makers. His long journey starts when he was thirteen working in the pizzeria owned by his family. When he was twenty-four he starts his international career travelling  and working in four different continents he contributed to spread the art of the neapolitan pizza in the world. He is the youngest in the family and his father helped him to grow not only as a person but he gave him the chance to work with the most skilled people in the field enriching his knowledge and become a great professional. Nowadays he works as instructor at “Associazione Pizza Verace Napoletana” and he is a trainer and consultant for startups."


var history_txt_it = "Una storia e una tradizione che iniziano nel lontano 1933 quando Michele, nonno di Gennaro, inizia a fare il garzone in una pizzeria vicino casa per poi arrivare a lavorare nella pizzeria Castiello, tutt’ora di proprietà della famiglia Langella nel quartiere limitrofo di San Giovanni a Teduccio. Qui muove i suoi primi passi nel mondo della pizza, Antonio, padre di Gennaro che inizia la professione quasi per gioco fino a farne una vera e propria passione. Fin da giovane lavora per le più in prestigiose pizzerie dell’epoca contribuendo a far conoscere l’arte del pizzaiolo napoletano in Italia e nel mondo. Nella seconda parte della sua carriera, grazie al suo spiccato ingegno, si dedica alla costruzione di forni in stile antico, arte acquisita da giovane da Domenico de Turris, mastro fornaio specializzato nella costruzione di forni. Ha partecipato a numerosi eventi internazionali tra i quali ricordiamo quello come testimonial nel 2007 a Bruxelles per il riconoscimento del marchio Stg che stabilisce l’autenticità della pizza napoletana e delle sue origini."
var history_txt_en = "The Langella family history and tradition starts in 1933 when Michele, Gennaro’s grandfather starts working in a local pizzeria. In a few years he manages to start his own business where Antonio, Gennaro’s father starts getting familiar with the art of the neapolitan pizza. Since he was young he works for the most important and popular pizzerias, contributing to spread the art of the neapolitan pizza in Italy and in the world. In the second part of his long career, he works as an artisan manufacturing traditional pizza ovens, an art he learned when he was younger from the master Domenico de Turris. He took part to many international events like the one in 2007 in Bruxelles where pizza verace napoletana got the STG certification (Traditional Specialty Guaranteed)."

var quotation_it = "Nata a Napoli la pizza e i suoi artigiani hanno conquistato il mondo. Io sono un artigiano, un umile pizzaiolo il cui sogno é sempre stato quello di far conoscere e trasmettere l’arte del pizzaiolo napoletano."
var quotation_en = "Neapolitan pizza and the art of the neapolitan pizza makers conquered the world. I am an artisan, an humble pizza maker with the dream to spread the art of the neapolitan pizza in the world."

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
        "contact-msg": "We will get back to you soon!",
        "about-me-text": about_me_txt_en,
        "history-text": history_txt_en,
        "quotation":  quotation_en

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
        "contact-msg": "Vi risponderemo il prima possibile!",
        "about-me-text": about_me_txt_it,
        "history-text": history_txt_it,
        "quotation":  quotation_it
      }
    }
  }

  i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
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
    document.getElementById('about-me-text').innerHTML = i18next.t('about-me-text');
    document.getElementById('history-text').innerHTML = i18next.t('history-text');
    document.getElementById('quotation').innerHTML = i18next.t('quotation');

    if(window.innerWidth <= 860) { 
      addShowMore(i18next.language);
    }
  }

  function changeLng(lng) {
    i18next.changeLanguage(lng);
  }
  
  i18next.on('languageChanged', () => {
    updateContent();
  });

  