import type { Locale, NavigationPageId } from "../i18n/config";

export const navigationOrder: NavigationPageId[] = ["home", "prices", "info", "contact"];

export const content = {
  de: {
    skipLink: "Zum Inhalt springen",
    navigationLabel: "Hauptnavigation",
    nav: {
      home: "Startseite",
      prices: "Preise",
      info: "FAQ",
      contact: "Kontakt",
    },
    actions: {
      whatsapp: "Per WhatsApp anfragen",
      call: "Anrufen",
      email: "E-Mail schreiben",
      prices: "Alle Preise ansehen",
      categoryPrices: "Preise ansehen",
      contact: "Kontakt aufnehmen",
      external: "Externer Link",
      pdf: "PDF öffnen",
    },
    home: {
      metaTitle: "Beglaubigte Übersetzungen Deutsch–Rumänisch | Otto Schuster",
      metaDescription:
        "Beglaubigte Übersetzungen Deutsch ↔ Rumänisch durch den öffentlich bestellten und beeidigten Urkundenübersetzer Otto Schuster.",
      title: "Beglaubigte Übersetzungen Rumänisch ↔ Deutsch",
      intro:
        "Urkunden, Diplome, Gerichtsbeschlüsse und persönliche Dokumente übersetze ich korrekt in beide Sprachrichtungen – mit Beglaubigung und über 30 Jahren Erfahrung.",
      portraitAlt: "Otto Schuster, öffentlich bestellter und beeidigter Urkundenübersetzer",
      credentialKicker: "Seit 1993 öffentlich bestellt und beeidigt",
      credentialTitle: "Ihr Übersetzer: Otto Schuster",
      credentialText: "Dipl.-Ing. Maschinenbau · Dipl.-Gewerbelehrer · Deutsch und Rumänisch",
      proofPoints: [
        "Öffentlich bestellt und beeidigt",
        "Seit 1993 persönlich für Sie da",
        "Bundesweit bei Behörden akzeptiert – keine weiteren Beglaubigungen nötig",
        "Meist in 2–4 Arbeitstagen",
        "Wir können uns auch auf Rumänisch unterhalten",
      ],
      categories: {
        eyebrow: "Was ich übersetze",
        title: "Von der Geburtsurkunde bis zum Diplom",
        intro:
          "Viele häufig benötigte Dokumente haben einen festen Preis. Für umfangreichere Unterlagen erhalten Sie ein persönliches Angebot.",
        items: [
          { icon: "certificate", priceCategory: "civil", title: "Standesurkunden", text: "Geburt, Heirat, Tod, Namensänderung und Familienstand" },
          { icon: "graduation", priceCategory: "education", title: "Diplome & Zeugnisse", text: "Schule, Ausbildung, Studium und Qualifikationen" },
          { icon: "id", priceCategory: "identity", title: "Ausweis & Führerschein", text: "Identitäts-, Reise-, Melde- und Aufenthaltsdokumente" },
          { icon: "scale", priceCategory: "legal", title: "Gericht & Verträge", text: "Beschlüsse, Verträge und andere juristische Unterlagen" },
          { icon: "signature", priceCategory: "legal", title: "Vollmachten", text: "Vollmachten, Erklärungen und vorbereitete Dokumente" },
          { icon: "medical", priceCategory: "other", title: "Medizinische Dokumente", text: "Befunde, Bescheinigungen und weitere Fachunterlagen" },
          { icon: "location", priceCategory: "moldova", title: "Republik Moldau", text: "Urkunden, Diplome, Apostillen und Legalisierungen" },
          { icon: "document", priceCategory: "other", title: "Weitere Dokumente", text: "Arbeitsbücher, Zweitfertigungen und individuelle Aufträge" },
        ],
      },
      process: {
        eyebrow: "So funktioniert es",
        title: "In drei klaren Schritten zur Übersetzung",
        exampleLabel: "So sieht zum Beispiel eine Übersetzung aus",
        items: [
          {
            title: "Dokumente senden",
            text: "Schicken Sie gut lesbare Fotos oder PDFs per WhatsApp oder E-Mail. Post und ein persönlicher Besuch sind ebenfalls möglich. Ihre Originale brauche ich nicht - diese wird die Behörde sehen wollen.",
          },
          {
            title: "Preis & Termin erhalten",
            text: "Sie bekommen von mir mein Angebot zu Preis und weiteren Infos.",
          },
          {
            title: "Übersetzung erhalten",
            text: "Die beglaubigte Übersetzung kommt per Post. In der Regel sende ich zusätzlich eine digitale PDF-Kopie.",
          },
        ],
      },
      biography: {
        imageAlt: "Blick vom Cristianu Mare im Postăvarul-Gebirge auf das Bucegi-Gebirge",
        imageCaption:
          "Munții Bucegi, gesehen vom Cristianu Mare im Postăvarul-Gebirge. Eine Landschaft zwischen den Sprachen und Lebensstationen.",
        eyebrow: "Sprachlich zuhause in beiden Ländern",
        title: "Erfahrung, die Sprache und Lebenswirklichkeit verbindet",
        paragraphs: [
          "Als Rumäniendeutscher ist Deutsch meine Muttersprache. Bis zum Abitur besuchte ich deutschsprachige Schulen; Rumänisch war von der zweiten Klasse an fester Bestandteil meines Unterrichts.",
          "Mein fünfjähriges Maschinenbaustudium absolvierte ich in rumänischer Sprache. Dadurch beherrsche ich beide Sprachen auch in fachlichen und formellen Zusammenhängen sicher.",
          "1990 siedelte ich mit meiner Familie nach Deutschland über. Am 25. Mai 1993 wurde ich vom Präsidenten des Landgerichts Offenburg zum öffentlich bestellten und beeidigten Urkundenübersetzer für Rumänisch ernannt.",
          "Neben meiner Übersetzungstätigkeit arbeitete ich seit 1997 als wissenschaftlicher Lehrer an den Beruflichen Schulen Schramberg. Präzision, Verständlichkeit und persönliche Verantwortung prägen bis heute meine Arbeit.",
        ],
      },
      credentials: {
        eyebrow: "Nachprüfbare Qualifikation",
        title: "Zulassung als Übersetzer",
        intro: "Sie können mich in der offiziellen Datenbank für Übersetzer und Dolmetscher finden.",
        link: {
          label: "Justiz-Dolmetscher-Datenbank",
          href: "https://www.justiz-dolmetscher.de/Recherche/de/Person/Details/43746",
        },
      },
      closing: {
        eyebrow: "Direkter Kontakt",
        title: "Schicken Sie Ihr Dokument einfach per WhatsApp",
        text: "Sie bekommen mein Angebot zu Preis, Dauer und weitere Infos",
      },
    },
    pricePage: {
      metaTitle: "Preise für beglaubigte Übersetzungen | Otto Schuster",
      metaDescription: "Aktuelle Nettopreise für beglaubigte Übersetzungen Deutsch–Rumänisch, gültig seit 25.08.2025.",
      eyebrow: "aktuell seit 25.08.2025",
      title: "Preise",
      intro:
        "Viele Standardurkunden haben einen festen Preis. Für alle weiteren Dokumente berechne ich Ihnen gerne mein Angebot.",
      facts: [
        "Alle Beträge sind Nettopreise",
        "19 % Mehrwertsteuer kommen hinzu",
        "Beglaubigung im Preis enthalten",
        "Versand in Deutschland: 3 €",
        "Bezahlung per Vorkasse auf meine IBAN",
      ],
      net: "+ MwSt.",
      quote: "Persönliches Angebot",
      free: "kostenlos",
      categories: {
        civil: "Standesurkunden",
        identity: "Ausweis & Aufenthalt",
        education: "Bildung & Qualifikation",
        employment: "Beruf & Arbeit",
        legal: "Gericht & Erklärungen",
        apostille: "Apostillen & Legalisierungen",
        moldova: "Republik Moldau",
        other: "Weitere Leistungen",
      },
    },
    infoPage: {
      metaTitle: "FAQ zu beglaubigten Übersetzungen | Otto Schuster",
      metaDescription: "Antworten auf häufige Fragen zu Originalen, Bearbeitungszeit, Beglaubigung, Apostille und digitalen Kopien.",
      eyebrow: "Gut zu wissen",
      title: "Häufige Fragen",
      items: [
        {
          question: "Brauchen Sie das Original?",
          answer:
            "Für ein Angebot reichen gut lesbare Fotos oder PDF-Dateien. Ob die spätere Beglaubigung anhand des Originals erforderlich ist, hängt vom Dokument und der empfangenden Stelle ab. Ich kläre das vor Auftragserteilung mit Ihnen.",
        },
        {
          question: "Werden Ihre Übersetzungen in ganz Deutschland akzeptiert?",
          answer:
            "Meine beglaubigten Übersetzungen werden grundsätzlich bei deutschen Behörden und bei den Auslandsvertretungen Rumäniens in Deutschland verwendet. Die endgültige Entscheidung trifft immer die jeweilige empfangende Stelle.",
        },
        {
          question: "Wie lange dauert eine Übersetzung?",
          answer:
            "Üblicherweise benötige ich 2–4 Arbeitstage. Umfang, Fachgebiet, Postlaufzeit und aktuelle Auslastung können den Termin beeinflussen; Sie erhalten vorab eine persönliche Einschätzung.",
        },
        {
          question: "Was ist der Unterschied zwischen Beglaubigung und Apostille?",
          answer:
            "Mit meiner Beglaubigung bestätige ich die Richtigkeit und Vollständigkeit der Übersetzung. Eine Apostille bestätigt die Echtheit einer öffentlichen Urkunde und wird von einer zuständigen Behörde erteilt – nicht vom Übersetzer.",
        },
        {
          question: "Ist eine deutsche Übersetzung automatisch in Rumänien gültig?",
          answer:
            "Nicht in jedem Verfahren. Bitte fragen Sie die empfangende Behörde, das Konsulat oder die Botschaft nach den konkreten Anforderungen. Gern unterstütze ich Sie bei der Klärung auf Rumänisch.",
        },
        {
          question: "Erhalte ich auch eine digitale Kopie?",
          answer:
            "Ja. Zusätzlich zur gehefteten und gestempelten Postsendung verschicke ich in der Regel eine digitale PDF-Kopie per E-Mail oder WhatsApp.",
        },
        {
          question: "Kann ich später eine Zweitfertigung bekommen?",
          answer:
            "Ja, auch nach vielen Jahren. Eine Zweitfertigung ist laut aktueller Preisliste ab 12 € netto möglich; notwendige Anpassungen stimmen wir vorher ab.",
        },
      ],
    },
    contactPage: {
      metaTitle: "Kontakt | Übersetzungsbüro Schuster",
      metaDescription: "Otto Schuster direkt per WhatsApp, Telefon oder E-Mail erreichen und Dokumente für ein Übersetzungsangebot senden.",
      eyebrow: "Direkt mit mir sprechen",
      title: "Am schnellsten geht es per WhatsApp",
      intro:
        "Senden Sie gut lesbare Fotos oder PDFs Ihrer Dokumente. Ich antworte persönlich mit Preis, benötigten Unterlagen und voraussichtlichem Termin.",
      whatsappTitle: "Dokumente per WhatsApp senden",
      whatsappText: "Einfach schreiben – ich antworte schnell und persönlich.",
      phoneTitle: "Telefon",
      phoneText: "Anrufe bitte möglichst nach 14:00 Uhr. Davor bin ich nicht immer erreichbar.",
      emailTitle: "E-Mail",
      emailText: "Für PDFs und ausführlichere Anfragen.",
      addressTitle: "Büro & Postanschrift",
      addressText: "Persönliche Termine bitte vorher telefonisch vereinbaren.",
      prepare: {
        eyebrow: "Damit ich schnell antworten kann",
        title: "Was Sie für ein Angebot senden sollten",
        items: [
          "Gut lesbare Fotos oder vollständige PDF-Dateien aller Seiten",
          "Gewünschte Sprachrichtung: Deutsch nach Rumänisch oder umgekehrt",
          "Wofür und in welchem Land die Übersetzung verwendet wird",
          "Falls bekannt: Termin und Vorgaben der empfangenden Stelle",
          "Ob Sie Originale, beglaubigte Kopien oder Apostillen besitzen",
        ],
      },
      card: {
        title: "Visitenkarte",
        alt: "Aktuelle Visitenkarte des Übersetzungsbüros Schuster mit Kontaktdaten und Leistungsübersicht",
      },
      connect: {
        eyebrow: "Direkt verbinden",
        title: "QR-Codes ohne Umleitung",
        text: "Jeder Code führt direkt zum angegebenen Ziel. Auf dem Smartphone können Sie stattdessen einfach den normalen Link verwenden.",
        items: [
          { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/4917662712091" },
          { id: "facebook", label: "Facebook", href: "https://www.facebook.com/uebersetzer.otto.schuster" },
          { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ottoschuster.de" },
          { id: "google", label: "Google-Bewertung", href: "https://search.google.com/local/writereview?placeid=ChIJ9wTZ8Qy4kEcRnmhw8CX44C8" },
        ],
      },
    },
    footer: {
      claim: "Beglaubigte Übersetzungen Deutsch ↔ Rumänisch – persönlich seit 1993.",
      contact: "Kontakt",
      legal: "Rechtliches",
      imprint: "Impressum",
      privacy: "Datenschutz",
      rights: "Alle Rechte vorbehalten.",
    },
    notFound: {
      metaTitle: "Seite nicht gefunden | Übersetzungsbüro Schuster",
      eyebrow: "Fehler 404",
      title: "Diese Seite wurde nicht gefunden",
      text: "Vielleicht wurde die Adresse geändert. Von der Startseite erreichen Sie alle Informationen, Preise und Kontaktmöglichkeiten.",
      home: "Zur deutschen Startseite",
      other: "La pagina în limba română",
    },
  },
  ro: {
    skipLink: "Sari la conținut",
    navigationLabel: "Navigație principală",
    nav: {
      home: "Acasă",
      prices: "Prețuri",
      info: "FAQ",
      contact: "Contact",
    },
    actions: {
      whatsapp: "Solicită prin WhatsApp",
      call: "Sună",
      email: "Scrie un e-mail",
      prices: "Vezi toate prețurile",
      categoryPrices: "Vezi prețurile",
      contact: "Ia legătura",
      external: "Link extern",
      pdf: "Deschide PDF",
    },
    home: {
      metaTitle: "Traduceri autorizate germană–română | Otto Schuster",
      metaDescription:
        "Traduceri autorizate germană ↔ română realizate de traducătorul public autorizat Otto Schuster.",
      title: "Traduceri autorizate germană ↔ română",
      intro:
        "Traduc acte, diplome și documente personale în ambele sensuri – cu certificare, comunicare directă și peste 30 de ani de experiență.",
      portraitAlt: "Otto Schuster, traducător public autorizat pentru limba română",
      credentialKicker: "Autorizat și depunând jurământul din 1993",
      credentialTitle: "Traducătorul dumneavoastră: Otto Schuster",
      credentialText: "Inginer diplomat · profesor diplomat · germană și română",
      proofPoints: [
        "Traducător public autorizat",
        "Serviciu personal din 1993",
        "Acceptat de autorități în Germania – nu sunt necesare alte legalizări",
        "De regulă în 2–4 zile lucrătoare",
        "Putem vorbi și în limba română",
      ],
      categories: {
        eyebrow: "Ce traduc",
        title: "De la certificatul de naștere la diplomă",
        intro:
          "Multe documente uzuale au un preț fix. Pentru documentele voluminoase primiți o ofertă personală.",
        items: [
          { icon: "certificate", priceCategory: "civil", title: "Acte de stare civilă", text: "Naștere, căsătorie, deces, schimbarea numelui și stare civilă" },
          { icon: "graduation", priceCategory: "education", title: "Diplome și certificate", text: "Școală, formare profesională, studii și calificări" },
          { icon: "id", priceCategory: "identity", title: "Acte și permis", text: "Identitate, călătorie, domiciliu și ședere" },
          { icon: "scale", priceCategory: "legal", title: "Instanță și contracte", text: "Hotărâri, contracte și alte documente juridice" },
          { icon: "signature", priceCategory: "legal", title: "Procuri", text: "Procuri, declarații și documente pregătite" },
          { icon: "medical", priceCategory: "other", title: "Documente medicale", text: "Rapoarte, adeverințe și alte documente de specialitate" },
          { icon: "location", priceCategory: "moldova", title: "Republica Moldova", text: "Acte, diplome, apostile și legalizări" },
          { icon: "document", priceCategory: "other", title: "Alte documente", text: "Cărți de muncă, duplicate și solicitări individuale" },
        ],
      },
      process: {
        eyebrow: "Cum funcționează",
        title: "Trei pași simpli până la traducere",
        exampleLabel: "Iată cum arată, de exemplu, o traducere",
        items: [
          {
            title: "Trimiteți documentele",
            text: "Trimiteți fotografii clare sau fișiere PDF prin WhatsApp ori e-mail. Sunt posibile și trimiterea prin poștă sau predarea personală.",
          },
          {
            title: "Primiți prețul și termenul",
            text: "Vă răspund personal cu informații clare despre preț, acte necesare și durata estimată.",
          },
          {
            title: "Primiți traducerea",
            text: "Traducerea autorizată sosește prin poștă. De regulă trimit suplimentar și o copie digitală PDF.",
          },
        ],
      },
      biography: {
        imageAlt: "Vedere de pe Cristianu Mare din Munții Postăvarul spre Munții Bucegi",
        imageCaption:
          "Munții Bucegi văzuți de pe Cristianu Mare din Munții Postăvarul – un peisaj între limbile și etapele unei vieți.",
        eyebrow: "Acasă în ambele limbi",
        title: "Experiență care leagă limba de realitatea vieții",
        paragraphs: [
          "Ca german din România, limba germană este limba mea maternă. Până la bacalaureat am urmat școli cu predare în limba germană, iar româna a făcut parte din programa mea din clasa a doua.",
          "Am absolvit cinci ani de studii de inginerie mecanică în limba română. De aceea stăpânesc ambele limbi și în contexte de specialitate și oficiale.",
          "În 1990 m-am stabilit cu familia în Germania. La 25 mai 1993 am fost numit de președintele Tribunalului Regional Offenburg traducător public autorizat pentru limba română.",
          "Din 1997 am lucrat și ca profesor la școlile profesionale din Schramberg. Precizia, claritatea și responsabilitatea personală îmi definesc activitatea până astăzi.",
        ],
      },
      credentials: {
        eyebrow: "Calificare verificabilă",
        title: "Autorizare ca traducător",
        intro: "Mă puteți găsi în baza de date oficială pentru traducători și interpreți.",
        link: {
          label: "Baza de date a justiției",
          href: "https://www.justiz-dolmetscher.de/Recherche/de/Person/Details/43746",
        },
      },
      closing: {
        eyebrow: "Contact direct",
        title: "Trimiteți documentul simplu prin WhatsApp",
        text: "Primiți direct de la Otto Schuster o estimare personală privind prețul, actele necesare și termenul.",
      },
    },
    pricePage: {
      metaTitle: "Prețuri pentru traduceri autorizate | Otto Schuster",
      metaDescription: "Prețuri nete actuale pentru traduceri autorizate germană–română, valabile din 25.08.2025.",
      eyebrow: "Actuale din 25.08.2025",
      title: "Prețuri",
      intro:
        "Multe acte standard au un preț fix. Pentru toate celelalte documente vă calculez cu plăcere o ofertă.",
      facts: [
        "Toate sumele sunt prețuri nete",
        "Se adaugă TVA de 19 %",
        "Certificarea este inclusă în preț",
        "Expediere în Germania: 3 €",
        "Plata în avans prin transfer bancar",
      ],
      net: "+ TVA",
      quote: "Ofertă personală",
      free: "gratuit",
      categories: {
        civil: "Stare civilă",
        identity: "Identitate și ședere",
        education: "Educație și calificări",
        employment: "Profesie și muncă",
        legal: "Instanță și declarații",
        apostille: "Apostile și legalizări",
        moldova: "Republica Moldova",
        other: "Alte servicii",
      },
    },
    infoPage: {
      metaTitle: "Întrebări frecvente despre traduceri autorizate | Otto Schuster",
      metaDescription: "Răspunsuri la întrebări frecvente despre originale, termenul de realizare, certificare, apostilă și copii digitale.",
      eyebrow: "Bine de știut",
      title: "Întrebări frecvente",
      items: [
        {
          question: "Aveți nevoie de original?",
          answer:
            "Pentru ofertă sunt suficiente fotografii clare sau fișiere PDF. Dacă traducerea finală trebuie certificată după original depinde de document și de instituția destinatară. Clarific acest lucru cu dumneavoastră înainte de comandă.",
        },
        {
          question: "Traducerile sunt acceptate în toată Germania?",
          answer:
            "Traducerile mele autorizate sunt folosite în mod normal la autoritățile germane și la reprezentanțele României din Germania. Decizia finală aparține întotdeauna instituției destinatare.",
        },
        {
          question: "Cât durează traducerea?",
          answer:
            "De regulă am nevoie de 2–4 zile lucrătoare. Volumul, domeniul, durata poștei și gradul de ocupare pot influența termenul; primiți în prealabil o estimare personală.",
        },
        {
          question: "Care este diferența dintre certificare și apostilă?",
          answer:
            "Prin certificarea mea confirm exactitatea și integralitatea traducerii. Apostila confirmă autenticitatea unui document public și este emisă de o autoritate competentă, nu de traducător.",
        },
        {
          question: "O traducere germană este automat valabilă în România?",
          answer:
            "Nu în orice procedură. Întrebați instituția destinatară, consulatul sau ambasada despre condițiile concrete. Vă pot ajuta cu plăcere la clarificarea în limba română.",
        },
        {
          question: "Primesc și o copie digitală?",
          answer:
            "Da. Pe lângă exemplarul capsat, ștampilat și trimis prin poștă, trimit de regulă și o copie PDF prin e-mail sau WhatsApp.",
        },
        {
          question: "Pot primi mai târziu un duplicat?",
          answer:
            "Da, chiar și după mulți ani. Un duplicat costă conform listei actuale de la 12 € net; eventualele adaptări le stabilim în prealabil.",
        },
      ],
    },
    contactPage: {
      metaTitle: "Contact | Birou de traduceri Schuster",
      metaDescription: "Luați legătura direct cu Otto Schuster prin WhatsApp, telefon sau e-mail și trimiteți documentele pentru ofertă.",
      eyebrow: "Vorbiți direct cu Otto Schuster",
      title: "Cel mai rapid este prin WhatsApp",
      intro:
        "Trimiteți fotografii clare sau fișiere PDF. Vă răspund personal cu prețul, actele necesare și termenul estimat.",
      whatsappTitle: "Trimiteți documentele prin WhatsApp",
      whatsappText: "Scrieți-mi simplu – vă răspund rapid și personal.",
      phoneTitle: "Telefon",
      phoneText: "Vă rog să sunați pe cât posibil după ora 14:00. Înainte nu sunt întotdeauna disponibil.",
      emailTitle: "E-mail",
      emailText: "Pentru fișiere PDF și solicitări mai detaliate.",
      addressTitle: "Birou și adresă poștală",
      addressText: "Pentru vizite personale, vă rog să stabiliți în prealabil o întâlnire telefonică.",
      prepare: {
        eyebrow: "Pentru un răspuns rapid",
        title: "Ce să trimiteți pentru ofertă",
        items: [
          "Fotografii clare sau fișiere PDF complete ale tuturor paginilor",
          "Sensul traducerii: germană în română sau invers",
          "Scopul și țara în care va fi folosită traducerea",
          "Dacă se cunoaște: termenul și cerințele instituției destinatare",
          "Dacă aveți originale, copii legalizate sau apostile",
        ],
      },
      card: {
        title: "Carte de vizită",
        alt: "Cartea de vizită actuală a biroului de traduceri Schuster cu date de contact și servicii",
      },
      connect: {
        eyebrow: "Conectare directă",
        title: "Coduri QR fără redirecționare",
        text: "Fiecare cod conduce direct la destinația indicată. Pe telefon puteți folosi simplu și linkul normal.",
        items: [
          { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/4917662712091" },
          { id: "facebook", label: "Facebook", href: "https://www.facebook.com/uebersetzer.otto.schuster" },
          { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ottoschuster.de" },
          { id: "google", label: "Recenzie Google", href: "https://search.google.com/local/writereview?placeid=ChIJ9wTZ8Qy4kEcRnmhw8CX44C8" },
        ],
      },
    },
    footer: {
      claim: "Traduceri autorizate germană ↔ română – personal din 1993.",
      contact: "Contact",
      legal: "Informații juridice",
      imprint: "Mențiuni legale",
      privacy: "Protecția datelor",
      rights: "Toate drepturile rezervate.",
    },
    notFound: {
      metaTitle: "Pagina nu a fost găsită | Birou de traduceri Schuster",
      eyebrow: "Eroare 404",
      title: "Această pagină nu a fost găsită",
      text: "Este posibil ca adresa să se fi schimbat. De pe pagina principală ajungeți la toate informațiile, prețurile și opțiunile de contact.",
      home: "La pagina în limba română",
      other: "Zur deutschen Startseite",
    },
  },
} as const;

export const getContent = (locale: Locale) => content[locale];
