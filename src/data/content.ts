import { withBasePath, type Locale, type PageId } from "./site";

const commonResources = {
  apostilleGermany: "https://www.auswaertiges-amt.de/de/2570832-2570832",
  apostilleRomania: "https://www.mae.ro/node/1455",
  apostilleMoldova: "https://www.hcch.net/en/instruments/conventions/status-table/print/?cid=41",
  authenticationBw: "https://rp.baden-wuerttemberg.de/themen/international/beglaubigungen/",
};

export const navigationOrder: PageId[] = ["home", "prices", "info", "contact"];

export const content = {
  de: {
    localeName: "Deutsch",
    switchTo: "Auf Rumänisch anzeigen",
    skipLink: "Zum Inhalt springen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    navigationLabel: "Hauptnavigation",
    nav: {
      home: "Startseite",
      prices: "Preise",
      info: "Infos",
      contact: "Kontakt",
    },
    actions: {
      whatsapp: "Per WhatsApp anfragen",
      call: "Anrufen",
      email: "E-Mail schreiben",
      prices: "Alle Preise ansehen",
      contact: "Kontakt aufnehmen",
      external: "Externer Link",
      pdf: "PDF öffnen",
    },
    home: {
      metaTitle: "Beglaubigte Übersetzungen Deutsch–Rumänisch | Otto Schuster",
      metaDescription:
        "Beglaubigte Übersetzungen Deutsch ↔ Rumänisch durch den öffentlich bestellten und beeidigten Urkundenübersetzer Otto Schuster.",
      eyebrow: "Persönlich · beglaubigt · direkt",
      title: "Beglaubigte Übersetzungen Deutsch ↔ Rumänisch",
      intro:
        "Urkunden, Diplome und persönliche Dokumente übersetze ich zuverlässig in beide Sprachrichtungen – mit Beglaubigung, direkter Abstimmung und über 30 Jahren Erfahrung.",
      portraitAlt: "Otto Schuster, öffentlich bestellter und beeidigter Urkundenübersetzer",
      credentialKicker: "Seit 1993 öffentlich bestellt und beeidigt",
      credentialTitle: "Ihr Übersetzer: Otto Schuster",
      credentialText: "Dipl.-Ing. Maschinenbau · Dipl.-Gewerbelehrer · Deutsch und Rumänisch",
      proofPoints: [
        "Öffentlich bestellt und beeidigt",
        "Seit 1993 persönlich für Sie da",
        "Bundesweit bei Behörden akzeptiert",
        "Meist in 2–4 Arbeitstagen",
      ],
      trust: [
        { icon: "seal", text: "Öffentlich bestellt & beeidigt" },
        { icon: "languages", text: "Deutsch ↔ Rumänisch" },
        { icon: "calendar", text: "Aktiv seit 1993" },
        { icon: "building", text: "Bundesweit akzeptiert" },
        { icon: "clock", text: "Üblich: 2–4 Arbeitstage" },
      ],
      categories: {
        eyebrow: "Was ich übersetze",
        title: "Von der Geburtsurkunde bis zum Diplom",
        intro:
          "Viele häufig benötigte Dokumente haben einen festen Preis. Für umfangreichere Unterlagen erhalten Sie ein persönliches Angebot.",
        items: [
          { icon: "heart", title: "Standesurkunden", text: "Geburt, Heirat, Tod, Namensänderung und Familienstand" },
          { icon: "graduation", title: "Diplome & Zeugnisse", text: "Schule, Ausbildung, Studium und Qualifikationen" },
          { icon: "id", title: "Ausweis & Führerschein", text: "Identitäts-, Reise-, Melde- und Aufenthaltsdokumente" },
          { icon: "scale", title: "Gericht & Verträge", text: "Beschlüsse, Verträge und andere juristische Unterlagen" },
          { icon: "signature", title: "Vollmachten", text: "Vollmachten, Erklärungen und vorbereitete Dokumente" },
          { icon: "medical", title: "Medizinische Dokumente", text: "Befunde, Bescheinigungen und weitere Fachunterlagen" },
          { icon: "moldova", title: "Republik Moldau", text: "Urkunden, Diplome, Apostillen und Legalisierungen" },
          { icon: "document", title: "Weitere Dokumente", text: "Arbeitsbücher, Zweitfertigungen und individuelle Aufträge" },
        ],
      },
      process: {
        eyebrow: "So funktioniert es",
        title: "In drei klaren Schritten zur Übersetzung",
        items: [
          {
            title: "Dokumente senden",
            text: "Schicken Sie gut lesbare Fotos oder PDFs per WhatsApp oder E-Mail. Post und ein persönlicher Besuch sind ebenfalls möglich.",
          },
          {
            title: "Preis & Termin erhalten",
            text: "Sie bekommen von mir persönlich eine verbindliche Rückmeldung zu Preis, Unterlagen und voraussichtlicher Bearbeitungszeit.",
          },
          {
            title: "Übersetzung erhalten",
            text: "Die beglaubigte Übersetzung kommt per Post. In der Regel sende ich zusätzlich eine digitale PDF-Kopie.",
          },
        ],
      },
      prices: {
        eyebrow: "Transparente Preise",
        title: "Häufige Dokumente auf einen Blick",
        intro: "Alle Beträge sind Nettopreise. Die Beglaubigung ist bei den gelisteten Urkunden inklusive.",
        featuredIds: [
          "birth-certificate",
          "marriage-certificate",
          "identity-documents",
          "university-diploma",
          "single-status",
          "duplicate-copy",
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
        timeline: [
          { year: "1990", text: "Übersiedlung nach Deutschland" },
          { year: "1993", text: "Öffentliche Bestellung und Beeidigung" },
          { year: "1997", text: "Lehrtätigkeit in Schramberg" },
          { year: "Heute", text: "Persönliche Übersetzungen Deutsch ↔ Rumänisch" },
        ],
      },
      credentials: {
        eyebrow: "Nachprüfbare Qualifikation",
        title: "Bestellung, Beeidigung und offizielle Verzeichnisse",
        intro: "Sie können meine Zulassung direkt in den vorhandenen Dokumenten und in den bundesweiten Datenbanken prüfen.",
        cards: [
          {
            type: "PDF · 1993",
            title: "Protokoll über die Beeidigung",
            text: "Urkundenübersetzer für die rumänische Sprache",
            href: withBasePath("/documents/credentials/zulassung1.pdf"),
          },
          {
            type: "PDF · Landgericht",
            title: "Bestätigung der Beeidigung",
            text: "Bestätigung des zuständigen Landgerichts",
            href: withBasePath("/documents/credentials/zulassung2.pdf"),
          },
          {
            type: "Offizielles Verzeichnis",
            title: "Justiz-Dolmetscher-Datenbank",
            text: "Bundesweite Suche nach Otto Schuster",
            href: "https://www.justiz-dolmetscher.de/Recherche/",
          },
        ],
      },
      faq: {
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
      closing: {
        eyebrow: "Direkter Kontakt",
        title: "Schicken Sie Ihr Dokument einfach per WhatsApp",
        text: "Sie erhalten eine persönliche Einschätzung zu Preis, benötigten Unterlagen und Zeitrahmen – direkt von Otto Schuster.",
      },
    },
    pricePage: {
      metaTitle: "Preise für beglaubigte Übersetzungen | Otto Schuster",
      metaDescription: "Aktuelle Nettopreise für beglaubigte Übersetzungen Deutsch–Rumänisch, gültig seit 25.08.2025.",
      eyebrow: "Preise · aktuell seit 25.08.2025",
      title: "Transparent kalkuliert, persönlich bestätigt",
      intro:
        "Viele Standardurkunden haben einen festen Preis. Bei umfangreichen Unterlagen prüfe ich zuerst den Umfang und sende Ihnen ein persönliches Angebot.",
      facts: [
        "Alle Beträge sind Nettopreise",
        "19 % Mehrwertsteuer kommen hinzu",
        "Beglaubigung ist bei gelisteten Urkunden inklusive",
        "Versand in Deutschland: 3 € normal oder 6 € per Einschreiben",
        "Bezahlung per Vorkasse auf meine IBAN",
      ],
      searchLabel: "Dokument suchen",
      searchPlaceholder: "z. B. Geburtsurkunde, permis, Diplom …",
      filterLabel: "Nach Kategorie filtern",
      allCategories: "Alle",
      resultSingular: "Ein Eintrag",
      resultPlural: "Einträge",
      details: "Hinweise und Beispiele",
      noResultsTitle: "Kein passender Eintrag gefunden",
      noResultsText: "Probieren Sie einen anderen Begriff oder senden Sie mir das Dokument direkt per WhatsApp.",
      clear: "Filter zurücksetzen",
      net: "netto",
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
      metaTitle: "Infos zu Apostille und beglaubigter Übersetzung | Otto Schuster",
      metaDescription: "Verständliche Hinweise zu Beglaubigung, Apostille, Originalen und der Verwendung von Übersetzungen in Deutschland und Rumänien.",
      eyebrow: "Beglaubigung, Apostille & Verwendung",
      title: "Wichtige Hinweise für Ihre Dokumente",
      intro:
        "Welche Form eine Behörde verlangt, hängt vom Dokument, Ausstellungsland und Verwendungszweck ab. Diese Übersicht hilft bei der Orientierung; die empfangende Stelle entscheidet im Einzelfall.",
      contentsLabel: "Auf dieser Seite",
      warningTitle: "Bitte vorab bei der empfangenden Stelle nachfragen",
      warningText:
        "Anforderungen können sich ändern. Lassen Sie sich möglichst schriftlich bestätigen, ob Original, beglaubigte Kopie, Übersetzung, Apostille oder Legalisation benötigt werden.",
      sections: [
        {
          id: "beglaubigung-apostille",
          title: "Beglaubigte Übersetzung und Apostille sind nicht dasselbe",
          paragraphs: [
            "Mit dem Beglaubigungsvermerk bestätige ich als öffentlich bestellter und beeidigter Übersetzer, dass die Übersetzung richtig und vollständig ist.",
            "Die Apostille bestätigt dagegen die Echtheit einer öffentlichen Urkunde – insbesondere Unterschrift, Funktion und Siegel. Sie wird durch eine zuständige Behörde des Ausstellungsstaats erteilt. Ein Übersetzer kann eine Apostille übersetzen, aber nicht ausstellen.",
          ],
          links: [
            { label: "Auswärtiges Amt: Haager Apostille-Übereinkommen", href: commonResources.apostilleGermany },
            { label: "Beispiel einer rumänischen Apostille", href: withBasePath("/documents/examples/apostille-ro.pdf") },
          ],
        },
        {
          id: "apostille-legalisation",
          title: "Apostille und Legalisation",
          paragraphs: [
            "Sowohl Apostille als auch Legalisation dienen dem internationalen Urkundenverkehr. Die Apostille ist das vereinfachte Verfahren des Haager Übereinkommens. Bei der Legalisation bestätigt eine konsularische Vertretung die Echtheit der ausländischen Urkunde.",
            "Welches Verfahren gilt, hängt von den beteiligten Staaten und der konkreten Urkunde ab. Offizielle Länderlisten und die empfangende Behörde sind maßgeblich.",
          ],
          links: [
            { label: "Regierungspräsidium Baden-Württemberg: Beglaubigungen", href: commonResources.authenticationBw },
            { label: "Beispiel einer deutschen Apostille", href: withBasePath("/documents/examples/apostille-de-scan1.pdf") },
          ],
        },
        {
          id: "rumaenien",
          title: "Dokumente aus Rumänien",
          paragraphs: [
            "Zwischen Deutschland und Rumänien gilt das Haager Apostille-Übereinkommen. Ob eine Apostille im konkreten Fall tatsächlich verlangt wird oder aufgrund besonderer Regeln entfallen kann, klären Sie bitte mit der empfangenden Stelle.",
            "Wenn eine Apostille erforderlich ist, wird sie grundsätzlich im Ausstellungsstaat auf die öffentliche Urkunde gesetzt. Anschließend kann die Urkunde einschließlich Apostille übersetzt werden.",
          ],
          links: [
            { label: "Rumänisches Außenministerium: Apostille", href: commonResources.apostilleRomania },
          ],
        },
        {
          id: "moldau",
          title: "Dokumente aus der Republik Moldau",
          paragraphs: [
            "Wichtige Änderung: Deutschland hat seinen früheren Einspruch gegen den Beitritt Moldaus zum Haager Apostille-Übereinkommen zurückgenommen. Seit dem 17. Juli 2026 gilt das Übereinkommen zwischen Deutschland und der Republik Moldau.",
            "Ältere Hinweise, nach denen im deutsch-moldauischen Verhältnis zwingend eine Legalisation statt einer Apostille erforderlich sei, sind daher überholt. Bitte lassen Sie die konkrete Anforderung trotzdem von der empfangenden Behörde bestätigen.",
          ],
          links: [
            { label: "HCCH: offizieller Status des Apostille-Übereinkommens", href: commonResources.apostilleMoldova },
          ],
        },
        {
          id: "anerkennung",
          title: "Verwendung in Deutschland und Rumänien",
          paragraphs: [
            "Beglaubigte Übersetzungen eines in Deutschland öffentlich bestellten und beeidigten Übersetzers werden grundsätzlich bei deutschen Behörden und bei rumänischen Auslandsvertretungen in Deutschland verwendet.",
            "Für die direkte Verwendung in Rumänien können andere Formvorgaben gelten. Die rumänische Behörde, das Konsulat oder die Botschaft entscheidet, welche Übersetzung und welche Beglaubigungsform akzeptiert wird.",
          ],
        },
        {
          id: "originale",
          title: "Original, Kopie oder digitale Datei?",
          paragraphs: [
            "Für die Preisprüfung genügen meist gut lesbare Fotos oder PDF-Dateien. Für die endgültige Übersetzung kann je nach Verwendungszweck das Original oder eine beglaubigte Kopie erforderlich sein.",
            "Die gedruckte Übersetzung wird mit der zugrunde gelegten Vorlage zusammengeheftet, gestempelt und unterschrieben. Teilen Sie mir deshalb mit, was die empfangende Stelle verlangt.",
          ],
        },
        {
          id: "lieferung-zweitfertigung",
          title: "Lieferung und Zweitfertigungen",
          paragraphs: [
            "Die beglaubigte Ausfertigung erhalten Sie per Post im DIN-A4-Umschlag. Zusätzlich sende ich in der Regel kostenlos eine digitale PDF-Version per E-Mail oder WhatsApp.",
            "Sollten Sie später eine weitere Ausfertigung benötigen, ist das auch nach vielen Jahren möglich. Preis und gegebenenfalls notwendige Anpassungen stimmen wir vorher ab.",
          ],
          links: [
            { label: "Beispiel einer gedruckten Übersetzung", href: withBasePath("/documents/examples/bsp.pdf") },
          ],
        },
      ],
      disclaimer:
        "Diese Hinweise sind allgemeine praktische Informationen und keine Rechtsberatung. Für verbindliche Vorgaben ist die empfangende Behörde oder zuständige Auslandsvertretung maßgeblich.",
    },
    contactPage: {
      metaTitle: "Kontakt | Übersetzungsbüro Schuster",
      metaDescription: "Otto Schuster direkt per WhatsApp, Telefon oder E-Mail erreichen und Dokumente für ein Übersetzungsangebot senden.",
      eyebrow: "Direkt mit Otto Schuster sprechen",
      title: "Am schnellsten geht es per WhatsApp",
      intro:
        "Senden Sie gut lesbare Fotos oder PDFs Ihrer Dokumente. Ich antworte persönlich mit Preis, benötigten Unterlagen und voraussichtlichem Termin.",
      whatsappTitle: "Dokumente per WhatsApp senden",
      whatsappText: "Öffnet einen leeren Chat. Sie entscheiden selbst, welche Angaben und Dateien Sie senden.",
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
        eyebrow: "Zum Speichern oder Ausdrucken",
        title: "Aktuelle Visitenkarte",
        text: "Die kompakte Übersicht enthält Kontaktdaten, Leistungen und QR-Verbindungen.",
        alt: "Aktuelle Visitenkarte des Übersetzungsbüros Schuster mit Kontaktdaten und Leistungsübersicht",
        link: "Visitenkarte in voller Größe öffnen",
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
      navigation: "Navigation",
      contact: "Kontakt",
      legal: "Rechtliches",
      imprint: "Impressum",
      privacy: "Datenschutz",
      legalNote: "Die rechtlichen Seiten werden in deutscher Sprache bereitgestellt.",
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
    localeName: "Română",
    switchTo: "Afișează în germană",
    skipLink: "Sari la conținut",
    menuOpen: "Deschide meniul",
    menuClose: "Închide meniul",
    navigationLabel: "Navigație principală",
    nav: {
      home: "Acasă",
      prices: "Prețuri",
      info: "Informații",
      contact: "Contact",
    },
    actions: {
      whatsapp: "Solicită prin WhatsApp",
      call: "Sună",
      email: "Scrie un e-mail",
      prices: "Vezi toate prețurile",
      contact: "Ia legătura",
      external: "Link extern",
      pdf: "Deschide PDF",
    },
    home: {
      metaTitle: "Traduceri autorizate germană–română | Otto Schuster",
      metaDescription:
        "Traduceri autorizate germană ↔ română realizate de traducătorul public autorizat Otto Schuster.",
      eyebrow: "Personal · autorizat · direct",
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
        "Acceptat de autorități în Germania",
        "De regulă în 2–4 zile lucrătoare",
      ],
      trust: [
        { icon: "seal", text: "Traducător public autorizat" },
        { icon: "languages", text: "Germană ↔ română" },
        { icon: "calendar", text: "Activ din 1993" },
        { icon: "building", text: "Acceptat în toată Germania" },
        { icon: "clock", text: "Uzual: 2–4 zile lucrătoare" },
      ],
      categories: {
        eyebrow: "Ce traduc",
        title: "De la certificatul de naștere la diplomă",
        intro:
          "Multe documente uzuale au un preț fix. Pentru documentele voluminoase primiți o ofertă personală.",
        items: [
          { icon: "heart", title: "Acte de stare civilă", text: "Naștere, căsătorie, deces, schimbarea numelui și stare civilă" },
          { icon: "graduation", title: "Diplome și certificate", text: "Școală, formare profesională, studii și calificări" },
          { icon: "id", title: "Acte și permis", text: "Identitate, călătorie, domiciliu și ședere" },
          { icon: "scale", title: "Instanță și contracte", text: "Hotărâri, contracte și alte documente juridice" },
          { icon: "signature", title: "Procuri", text: "Procuri, declarații și documente pregătite" },
          { icon: "medical", title: "Documente medicale", text: "Rapoarte, adeverințe și alte documente de specialitate" },
          { icon: "moldova", title: "Republica Moldova", text: "Acte, diplome, apostile și legalizări" },
          { icon: "document", title: "Alte documente", text: "Cărți de muncă, duplicate și solicitări individuale" },
        ],
      },
      process: {
        eyebrow: "Cum funcționează",
        title: "Trei pași simpli până la traducere",
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
      prices: {
        eyebrow: "Prețuri transparente",
        title: "Documente frecvente dintr-o privire",
        intro: "Toate sumele sunt prețuri nete. Certificarea este inclusă pentru actele menționate.",
        featuredIds: [
          "birth-certificate",
          "marriage-certificate",
          "identity-documents",
          "university-diploma",
          "single-status",
          "duplicate-copy",
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
        timeline: [
          { year: "1990", text: "Stabilirea în Germania" },
          { year: "1993", text: "Autorizarea și depunerea jurământului" },
          { year: "1997", text: "Activitate didactică în Schramberg" },
          { year: "Astăzi", text: "Traduceri personale germană ↔ română" },
        ],
      },
      credentials: {
        eyebrow: "Calificare verificabilă",
        title: "Autorizare, jurământ și registre oficiale",
        intro: "Puteți verifica autorizarea mea în documentele disponibile și în baza de date națională a justiției germane.",
        cards: [
          {
            type: "PDF · 1993",
            title: "Proces-verbal privind depunerea jurământului",
            text: "Traducător de documente pentru limba română",
            href: withBasePath("/documents/credentials/zulassung1.pdf"),
          },
          {
            type: "PDF · Tribunal regional",
            title: "Confirmarea autorizării",
            text: "Confirmarea instanței competente",
            href: withBasePath("/documents/credentials/zulassung2.pdf"),
          },
          {
            type: "Registru oficial",
            title: "Baza de date a justiției",
            text: "Căutare națională după Otto Schuster",
            href: "https://www.justiz-dolmetscher.de/Recherche/",
          },
        ],
      },
      faq: {
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
      closing: {
        eyebrow: "Contact direct",
        title: "Trimiteți documentul simplu prin WhatsApp",
        text: "Primiți direct de la Otto Schuster o estimare personală privind prețul, actele necesare și termenul.",
      },
    },
    pricePage: {
      metaTitle: "Prețuri pentru traduceri autorizate | Otto Schuster",
      metaDescription: "Prețuri nete actuale pentru traduceri autorizate germană–română, valabile din 25.08.2025.",
      eyebrow: "Prețuri · actuale din 25.08.2025",
      title: "Calcul transparent, confirmare personală",
      intro:
        "Multe acte standard au un preț fix. Pentru documentele voluminoase verific mai întâi conținutul și vă trimit o ofertă personală.",
      facts: [
        "Toate sumele sunt prețuri nete",
        "Se adaugă TVA de 19 %",
        "Certificarea este inclusă la actele menționate",
        "Expediere în Germania: 3 € normal sau 6 € recomandat",
        "Plata în avans prin transfer bancar",
      ],
      searchLabel: "Caută documentul",
      searchPlaceholder: "de ex. certificat, Führerschein, diplomă …",
      filterLabel: "Filtrează după categorie",
      allCategories: "Toate",
      resultSingular: "Un rezultat",
      resultPlural: "rezultate",
      details: "Detalii și exemple",
      noResultsTitle: "Nu am găsit un rezultat potrivit",
      noResultsText: "Încercați alt termen sau trimiteți-mi documentul direct prin WhatsApp.",
      clear: "Resetează filtrele",
      net: "net",
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
      metaTitle: "Informații despre apostilă și traduceri autorizate | Otto Schuster",
      metaDescription: "Informații clare despre certificare, apostilă, originale și folosirea traducerilor în Germania și România.",
      eyebrow: "Certificare, apostilă și utilizare",
      title: "Informații importante pentru documentele dumneavoastră",
      intro:
        "Forma cerută depinde de document, țara emitentă și scop. Această prezentare oferă orientare; instituția destinatară decide în fiecare caz.",
      contentsLabel: "Pe această pagină",
      warningTitle: "Întrebați în prealabil instituția destinatară",
      warningText:
        "Cerințele se pot schimba. Cereți pe cât posibil o confirmare scrisă dacă sunt necesare originalul, copia legalizată, traducerea, apostila sau supralegalizarea.",
      sections: [
        {
          id: "beglaubigung-apostille",
          title: "Traducerea autorizată și apostila nu sunt același lucru",
          paragraphs: [
            "Prin încheierea de certificare confirm, în calitate de traducător public autorizat, că traducerea este corectă și completă.",
            "Apostila confirmă autenticitatea unui document public, în special semnătura, funcția și sigiliul. Este emisă de autoritatea competentă a statului emitent. Traducătorul poate traduce apostila, dar nu o poate emite.",
          ],
          links: [
            { label: "Ministerul Federal de Externe: Convenția Apostilei", href: commonResources.apostilleGermany },
            { label: "Exemplu de apostilă românească", href: withBasePath("/documents/examples/apostille-ro.pdf") },
          ],
        },
        {
          id: "apostille-legalisation",
          title: "Apostilă și supralegalizare",
          paragraphs: [
            "Ambele proceduri servesc circulației internaționale a actelor. Apostila este procedura simplificată a Convenției de la Haga. La supralegalizare, o reprezentanță consulară confirmă autenticitatea documentului străin.",
            "Procedura aplicabilă depinde de statele implicate și de document. Listele oficiale și instituția destinatară sunt decisive.",
          ],
          links: [
            { label: "Autorități Baden-Württemberg: certificări", href: commonResources.authenticationBw },
            { label: "Exemplu de apostilă germană", href: withBasePath("/documents/examples/apostille-de-scan1.pdf") },
          ],
        },
        {
          id: "rumaenien",
          title: "Documente din România",
          paragraphs: [
            "Între Germania și România se aplică Convenția de la Haga privind apostila. Dacă apostila este efectiv necesară sau poate fi omisă datorită unor reguli speciale trebuie clarificat cu instituția destinatară.",
            "Dacă este necesară, apostila se aplică în principiu în statul emitent pe documentul public. Apoi poate fi tradus documentul împreună cu apostila.",
          ],
          links: [
            { label: "Ministerul Afacerilor Externe al României: apostila", href: commonResources.apostilleRomania },
          ],
        },
        {
          id: "moldau",
          title: "Documente din Republica Moldova",
          paragraphs: [
            "Schimbare importantă: Germania și-a retras obiecția anterioară față de aderarea Republicii Moldova la Convenția Apostilei. Din 17 iulie 2026 convenția se aplică între Germania și Republica Moldova.",
            "Informațiile mai vechi, potrivit cărora între cele două state ar fi obligatorie supralegalizarea în locul apostilei, sunt depășite. Confirmați totuși cerința concretă cu instituția destinatară.",
          ],
          links: [
            { label: "HCCH: statutul oficial al Convenției Apostilei", href: commonResources.apostilleMoldova },
          ],
        },
        {
          id: "anerkennung",
          title: "Utilizarea în Germania și România",
          paragraphs: [
            "Traducerile autorizate ale unui traducător public autorizat în Germania sunt folosite în mod normal la autoritățile germane și la reprezentanțele României din Germania.",
            "Pentru folosirea directă în România pot exista alte cerințe de formă. Autoritatea română, consulatul sau ambasada decide ce traducere și ce certificare acceptă.",
          ],
        },
        {
          id: "originale",
          title: "Original, copie sau fișier digital?",
          paragraphs: [
            "Pentru verificarea prețului sunt suficiente de regulă fotografii clare sau fișiere PDF. Pentru traducerea finală poate fi necesar originalul ori o copie legalizată, în funcție de scop.",
            "Traducerea tipărită se capsează împreună cu documentul folosit, se ștampilează și se semnează. De aceea este important să comunicați cerința instituției destinatare.",
          ],
        },
        {
          id: "lieferung-zweitfertigung",
          title: "Livrare și duplicate",
          paragraphs: [
            "Primiți exemplarul autorizat prin poștă într-un plic DIN A4. De regulă trimit gratuit și o versiune PDF prin e-mail sau WhatsApp.",
            "Dacă aveți nevoie mai târziu de încă un exemplar, acesta poate fi realizat chiar și după mulți ani. Prețul și eventualele adaptări se stabilesc în prealabil.",
          ],
          links: [
            { label: "Exemplu de traducere tipărită", href: withBasePath("/documents/examples/bsp.pdf") },
          ],
        },
      ],
      disclaimer:
        "Aceste informații au caracter practic general și nu reprezintă consultanță juridică. Pentru cerințe obligatorii este competentă instituția destinatară sau reprezentanța externă.",
    },
    contactPage: {
      metaTitle: "Contact | Birou de traduceri Schuster",
      metaDescription: "Luați legătura direct cu Otto Schuster prin WhatsApp, telefon sau e-mail și trimiteți documentele pentru ofertă.",
      eyebrow: "Vorbiți direct cu Otto Schuster",
      title: "Cel mai rapid este prin WhatsApp",
      intro:
        "Trimiteți fotografii clare sau fișiere PDF. Vă răspund personal cu prețul, actele necesare și termenul estimat.",
      whatsappTitle: "Trimiteți documentele prin WhatsApp",
      whatsappText: "Se deschide o conversație goală. Dumneavoastră decideți ce date și fișiere trimiteți.",
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
        eyebrow: "Pentru salvare sau tipărire",
        title: "Carte de vizită actuală",
        text: "Prezentarea compactă conține datele de contact, serviciile și codurile QR.",
        alt: "Cartea de vizită actuală a biroului de traduceri Schuster cu date de contact și servicii",
        link: "Deschide cartea de vizită la dimensiune mare",
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
      navigation: "Navigație",
      contact: "Contact",
      legal: "Informații juridice",
      imprint: "Impressum",
      privacy: "Protecția datelor",
      legalNote: "Paginile juridice sunt puse la dispoziție în limba germană.",
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
