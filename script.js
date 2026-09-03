/* ==========================================================================
   DeFI — Deutsch-Freunde Institut
   Main script v2.0 — Restructured & readable
   ========================================================================== */
(() => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. FRENCH TRANSLATIONS DICTIONARY
     -------------------------------------------------------------------------- */
  const fr = {
    'Home': 'Accueil',
    'Programs': 'Programmes',
    'Pathways': 'Parcours',
    'Why DeFI': 'Pourquoi DeFI',
    'Testimony': 'T\u00e9moignages',
    'Contact': 'Contact',
    'Your guided pathway to Germany.': 'Votre parcours accompagné vers l\u2019Allemagne.',
    'Visit us': 'Nous trouver',
    'Talk to us': 'Nous contacter',
    'About Deutsch-Freunde Institut': '\u00c0 propos de Deutsch-Freunde Institut',
    'German is the vehicle. Germany is the destination.': 'L\u2019allemand est le v\u00e9hicule. L\u2019Allemagne est la destination.',
    'A school built around clear next steps.': 'Une \u00e9cole construite autour d\u2019\u00e9tapes claires.',
    'Transparent': 'Transparent',
    'Personal': 'Personnel',
    'Prepared': 'Pr\u00e9par\u00e9',
    'Vocational training pathway': 'Parcours de formation professionnelle',
    'Make sense of Ausbildung.': 'Comprendre l\u2019Ausbildung.',
    'Clarity before commitment.': 'La clart\u00e9 avant l\u2019engagement.',
    'Understand the route': 'Comprendre le parcours',
    'Train in German': 'Se former en allemand',
    'Plan your next step': 'Planifier la prochaine \u00e9tape',
    'Ask about Ausbildung': 'Se renseigner sur l\u2019Ausbildung',
    'Contact DeFI': 'Contacter DeFI',
    'Let\u2019s discuss your next step.': 'Parlons de votre prochaine \u00e9tape.',
    'Visit or get in touch.': 'Venez nous voir ou contactez-nous.',
    'Phone & WhatsApp': 'T\u00e9l\u00e9phone et WhatsApp',
    'Email': 'E-mail',
    'Message us on WhatsApp': '\u00c9crire sur WhatsApp',
    'German examination preparation': 'Pr\u00e9paration aux examens d\u2019allemand',
    'Turn preparation into confidence.': 'Transformez votre pr\u00e9paration en confiance.',
    'Practice with a purpose.': 'S\u2019entra\u00eener avec un objectif.',
    'Ask about exam preparation': 'Se renseigner sur la pr\u00e9paration aux examens',
    'Your route, made clear': 'Votre parcours, clairement d\u00e9fini',
    'There is more than one way to Germany.': 'Il existe plusieurs chemins vers l\u2019Allemagne.',
    'Study in Germany': '\u00c9tudier en Allemagne',
    'Explore study pathway': 'D\u00e9couvrir le parcours \u00e9tudes',
    'Explore Ausbildung': 'D\u00e9couvrir l\u2019Ausbildung',
    'Work in Germany': 'Travailler en Allemagne',
    'Explore career pathway': 'D\u00e9couvrir le parcours professionnel',
    'Programs at DeFI': 'Programmes DeFI',
    'Learn German with your future in mind.': 'Apprenez l\u2019allemand en pensant \u00e0 votre avenir.',
    'Beginner to advanced': 'D\u00e9butant \u00e0 avanc\u00e9',
    'German courses A1\u2013C1': 'Cours d\u2019allemand A1\u2013C1',
    'Focused practice': 'Pratique cibl\u00e9e',
    'Exam preparation': 'Pr\u00e9paration aux examens',
    'Clear next steps': '\u00c9tapes claires',
    'Germany orientation': 'Orientation Allemagne',
    'Start your free assessment': 'Commencer mon \u00e9valuation gratuite',
    'Explore our programs \u2192': 'D\u00e9couvrir nos programmes \u2192',
    'A clear next step': 'Une prochaine \u00e9tape claire',
    'What is your Germany goal?': 'Quel est votre objectif en Allemagne ?',
    'Study': '\u00c9tudes',
    'Work': 'Travail',
    'We help you understand the right route before you commit.': 'Nous vous aidons \u00e0 comprendre le bon parcours avant de vous engager.',
    'German language training': 'Formation en langue allemande',
    'Personal guidance': 'Accompagnement personnalis\u00e9',
    'Support across borders': 'Soutien entre deux pays',
    'Find your route': 'Trouvez votre voie',
    'Germany holds more than one opportunity.': 'L\u2019Allemagne offre plus d\u2019une opportunit\u00e9.',
    'Build the language and preparation you need for an academic future.': 'Construisez les comp\u00e9tences linguistiques et la pr\u00e9paration n\u00e9cessaires \u00e0 votre projet acad\u00e9mique.',
    'Understand vocational training, language requirements, and your next steps.': 'Comprenez la formation professionnelle, les niveaux de langue requis et vos prochaines \u00e9tapes.',
    'Get realistic guidance on preparing for a skilled-work future in Germany.': 'Recevez des conseils r\u00e9alistes pour pr\u00e9parer votre avenir professionnel en Allemagne.',
    'Learn more \u2192': 'En savoir plus \u2192',
    'Everything under one roof': 'Tout sous un m\u00eame toit',
    'Preparation you can trust.': 'Une pr\u00e9paration en toute confiance.',
    'German courses A1 to C1': 'Cours d\u2019allemand A1 \u00e0 C1',
    'Practical, progressive lessons for beginners through advanced learners.': 'Des cours pratiques et progressifs, du niveau d\u00e9butant \u00e0 avanc\u00e9.',
    'Build confidence with focused practice and guidance for your German exam.': 'Gagnez en confiance gr\u00e2ce \u00e0 une pratique cibl\u00e9e et un accompagnement pour votre examen d\u2019allemand.',
    'Academic & visa orientation': 'Orientation acad\u00e9mique et visa',
    'Clear, honest support as you prepare your academic and visa documents.': 'Un accompagnement clair et honn\u00eate lors de la pr\u00e9paration de vos documents acad\u00e9miques et de visa.',
    'Free first step': 'Premi\u00e8re \u00e9tape gratuite',
    'Let\u2019s map your Germany pathway.': 'Tra\u00e7ons votre parcours vers l\u2019Allemagne.',
    'Take our short assessment. Tell us your goal and current German level; a DeFI counsellor will guide your next step.': 'Faites notre courte \u00e9valuation. Indiquez votre objectif et votre niveau actuel ; un conseiller DeFI vous guidera pour la suite.',
    'Your name': 'Votre nom',
    'Your goal': 'Votre objectif',
    'Select an option': 'Choisissez une option',
    'Study in Germany': '\u00c9tudier en Allemagne',
    'Work in Germany': 'Travailler en Allemagne',
    'Learn German': 'Apprendre l\u2019allemand',
    'Get my guidance': 'Recevoir mon orientation',
    'The DeFI difference': 'La diff\u00e9rence DeFI',
    'Transparent guidance. Personal support. Real preparation.': 'Des conseils transparents. Un soutien personnel. Une pr\u00e9paration concr\u00e8te.',
    'We do not promise visas, admissions, or jobs. We provide the language training and clear, personal preparation to help you move forward with confidence.': 'Nous ne promettons ni visa, ni admission, ni emploi. Nous proposons la formation linguistique et une pr\u00e9paration claire et personnalis\u00e9e pour vous aider \u00e0 avancer avec confiance.',
    'Visit DeFI': 'Visiter DeFI',
    'Find us in Simbock / Mendong.': 'Trouvez-nous \u00e0 Simbock / Mendong.',
    'Open in Google Maps': 'Ouvrir dans Google Maps',
    'Your guided pathway to Germany.': 'Votre parcours accompagn\u00e9 vers l\u2019Allemagne.',
    'Student testimonials': 'T\u00e9moignages d\u2019\u00e9tudiants',
    'Hear from students who started here.': '\u00c9coutez les \u00e9tudiants qui ont commenc\u00e9 ici.',
    'Read all testimonials \u2192': 'Lire tous les t\u00e9moignages \u2192',
    'Study pathway \u2014 B2': 'Parcours \u00e9tudes \u2014 B2',
    'Ausbildung pathway \u2014 B1': 'Parcours Ausbildung \u2014 B1',
    'Exam preparation \u2014 B1 passed': 'Pr\u00e9paration examens \u2014 B1 r\u00e9ussi',
    'See all student testimonials': 'Voir tous les t\u00e9moignages',
    'Frequently asked questions': 'Questions fr\u00e9quemment pos\u00e9es',
    'Your questions about German courses at DeFI.': 'Vos questions sur les cours d\u2019allemand \u00e0 DeFI.',
    'Start your journey': 'Commencez votre parcours',
    'Ready to write your own success story?': 'Pr\u00eat \u00e0 \u00e9crire votre propre histoire de r\u00e9ussite ?',
    'Join students at DeFI in Yaound\u00e9 who are building their German language skills and preparing for study, Ausbildung, or work in Germany. Take your free assessment today.': 'Rejoignez les \u00e9tudiants \u00e0 DeFI \u00e0 Yaound\u00e9 qui d\u00e9veloppent leurs comp\u00e9tences en allemand et se pr\u00e9parent pour les \u00e9tudes, l\u2019Ausbildung ou le travail en Allemagne. Faites votre \u00e9valuation gratuite d\u00e8s aujourd\u2019hui.',
    'Story of progress and preparation.': 'Histoires de progression et de pr\u00e9paration.',
    'What our students say': 'Ce que disent nos \u00e9tudiants',
    'Read all student testimonials': 'Voir tous les t\u00e9moignages',
    'Back to homepage': 'Retour \u00e0 l\u2019accueil',
    'Page not found': 'Page non trouv\u00e9e',
    'The page you are looking for does not exist or has been moved.': 'La page que vous recherchez n\u2019existe pas ou a \u00e9t\u00e9 d\u00e9plac\u00e9e.'
  };

  /* --------------------------------------------------------------------------
     2. ENCODING FIX
     -------------------------------------------------------------------------- */
  const clean = (s) => s
    .replaceAll('A1\u00e2\u0080\u0093C1', 'A1\u2013C1')
    .replaceAll('A1\u00e2\u0080\u201dC1', 'A1\u2013C1')
    .replaceAll('Yaound\u00c3\u00a9', 'Yaound\u00e9')
    .replaceAll('Entr\u00c3\u00a9e', 'Entr\u00e9e')
    .replaceAll('March\u00c3\u00a9', 'March\u00e9')
    .replaceAll('\u00e2\u0080\u0099', '\u2019')
    .replaceAll('\u00e2\u0080\u201d', '\u2014')
    .replaceAll('\u00e2\u0086\u0092', '\u2192');

  /* --------------------------------------------------------------------------
     3. LANGUAGE STATE
     -------------------------------------------------------------------------- */
  let lang = localStorage.getItem('defi-language') || 'en';

  /* --------------------------------------------------------------------------
     4. LOCALISE FUNCTION — applies language to the whole page
     -------------------------------------------------------------------------- */
  const localise = (next) => {
    lang = next;
    document.documentElement.lang = lang;

    // Elements with data-en / data-fr attributes
    document.querySelectorAll('[data-en]').forEach((el) => {
      el.innerHTML = clean(lang === 'fr' ? el.dataset.fr : el.dataset.en);
    });

    // Text nodes picked up by the walker
    document.querySelectorAll('[data-i18n-en]').forEach((el) => {
      el.textContent = lang === 'fr' ? el.dataset.i18nFr : el.dataset.i18nEn;
    });

    // Toggle button labels
    document.querySelectorAll('.language-toggle').forEach((btn) => {
      btn.textContent = lang === 'en' ? 'FR' : 'EN';
    });

    // Page title
    if (lang === 'fr') {
      document.title = 'DeFI | Votre parcours vers l\u2019Allemagne';
    } else {
      document.title = document.body.dataset.title || document.title;
    }

    localStorage.setItem('defi-language', lang);
  };

  /* --------------------------------------------------------------------------
     5. TEXT NODE WALKER — catches untranslated bare text
     -------------------------------------------------------------------------- */
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((n) => {
    const el = n.parentElement;
    const key = n.nodeValue.trim();
    if (!key || el.closest('script, style') || el.dataset.en) return;

    const en = clean(key);
    if (fr[key] || fr[en]) {
      el.dataset.i18nEn = en;
      el.dataset.i18nFr = fr[key] || fr[en];
      el.textContent = lang === 'fr' ? el.dataset.i18nFr : en;
    } else if (en !== key) {
      n.nodeValue = n.nodeValue.replace(key, en);
    }
  });

  /* --------------------------------------------------------------------------
     6. ENSURE LANGUAGE TOGGLE EXISTS in every nav
     -------------------------------------------------------------------------- */
  document.querySelectorAll('.nav-links').forEach((nav) => {
    if (!nav.querySelector('.language-toggle')) {
      const btn = document.createElement('button');
      btn.className = 'language-toggle';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Switch language');
      nav.append(btn);
    }
  });

  /* --------------------------------------------------------------------------
     7. EVENT LISTENERS — language toggle, mobile menu
     -------------------------------------------------------------------------- */
  document.querySelectorAll('.language-toggle').forEach((btn) => {
    btn.addEventListener('click', () => localise(lang === 'en' ? 'fr' : 'en'));
  });

  document.querySelectorAll('.menu-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const open = btn.parentElement.querySelector('.nav-links').classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
  });

  // Apply language on load
  localise(lang);

  /* --------------------------------------------------------------------------
     8. ASSESSMENT FORM — validation + confirmation
     -------------------------------------------------------------------------- */
  const form = document.querySelector('#assessment-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = data.get('name')?.trim();
      const goal = data.get('goal');

      // Simple validation
      let valid = true;
      form.querySelectorAll('input, select').forEach((field) => {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      if (!valid) return;

      const msg = lang === 'fr'
        ? `Merci, ${name}. Un conseiller DeFI vous aidera \u00e0 choisir votre prochaine \u00e9tape.`
        : `Thank you, ${name}. A DeFI counsellor will help you choose your next step.`;

      document.querySelector('#form-message').textContent = msg;
      form.reset();
    });
  }
})();
