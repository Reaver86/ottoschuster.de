import type { Locale } from "../i18n/config";
import { analyticsEnabled } from "./analytics";

export type LegalLinkId = "directory" | "email" | "whatsappPrivacy";

export type LegalParagraph =
  | string
  | {
      before?: string;
      link: LegalLinkId;
      label: string;
      after?: string;
    };

export const legalContent = {
  de: {
    eyebrow: "Rechtliche Informationen",
    imprint: {
      metaTitle: "Impressum | Übersetzungsbüro Schuster",
      metaDescription: "Anbieterkennzeichnung des Übersetzungsbüros Schuster.",
      title: "Impressum",
      intro: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
      providerTitle: "Anbieter",
      ownerLabel: "Inhaber",
      country: "Deutschland",
      contactTitle: "Kontakt",
      phoneLabel: "Telefon",
      mobileLabel: "Mobil",
      emailLabel: "E-Mail",
      vatTitle: "Umsatzsteuer",
      vatText: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:",
      sections: [
        {
          title: "Berufsbezeichnung und Bestellung",
          paragraphs: [
            "Öffentlich bestellter und beeidigter Urkundenübersetzer für die rumänische Sprache. Die öffentliche Bestellung und Beeidigung erfolgte am 25. Mai 1993 durch den Präsidenten des Landgerichts Offenburg in der Bundesrepublik Deutschland.",
            {
              link: "directory",
              label: "Bundesweite Dolmetscher- und Übersetzerdatenbank",
            },
          ],
        },
        {
          title: "Verantwortlich für den Inhalt",
          paragraphs: ["Otto Schuster, Anschrift wie oben."],
        },
        {
          title: "Haftung für externe Links",
          paragraphs: [
            "Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte und Datenschutzpraktiken besteht kein Einfluss. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich.",
          ],
        },
        {
          title: "Urheberrecht",
          paragraphs: [
            "Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung oder Verwertung außerhalb der gesetzlichen Grenzen bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.",
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Datenschutz | Übersetzungsbüro Schuster",
      metaDescription: "Informationen zur Verarbeitung personenbezogener Daten auf ottoschuster.de.",
      title: "Datenschutz",
      intro: "Wir behandeln Ihre Daten vertraulich und nach den Vorgaben der Datenschutz-Grundverordnung (DSGVO).",
      controllerTitle: "Verantwortlicher",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      sections: [
        {
          title: "Website",
          paragraphs: [
            "Diese Website nutzt keine Cookies oder Kontaktformulare. Unser Webserver verarbeitet IP-Adresse und aufgerufene Seite für den sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Serverprotokolle werden nur so lange wie dafür erforderlich aufbewahrt.",
          ],
        },
        ...(analyticsEnabled ? [{
          title: "Besuchsstatistik",
          paragraphs: [
            "Zur Verbesserung der Website erfassen wir Seitenaufrufe und Klicks auf Telefon-, E-Mail-, WhatsApp- und Beispiel-PDF-Links bei netcup in Deutschland: Tag, Seitenpfad, verweisende Domain und Gerätekategorie.",
            "Aus IP-Adresse und Browserkennung entsteht eine täglich wechselnde, nur hier gültige pseudonyme Besucherkennung; die Rohwerte werden nicht in der Statistik gespeichert. Keine Cookies, Browserspeicher, Nachrichteninhalte, Sitzungsaufzeichnungen, URL-Abfrageparameter oder Seitenanker. Do Not Track und Global Privacy Control werden berücksichtigt.",
            "Grundlage ist unser berechtigtes Interesse an der Verbesserung der Website (Art. 6 Abs. 1 lit. f DSGVO). Einzelereignisse werden nach 90 Tagen gelöscht; zusammengefasste Berichte per E-Mail versandt und dort bis zur Löschung aufbewahrt. Serverprotokolle bestehen separat. Widerspruch: über unsere Kontaktdaten oder Do Not Track.",
          ],
        }] : []),
        {
          title: "Kontakt und Aufträge",
          paragraphs: [
            "Wir nutzen Kontaktdaten, Nachrichten und Unterlagen für Anfragen und Aufträge (Art. 6 Abs. 1 lit. b DSGVO), sonstige Anliegen und die erforderliche Pflege laufender Kundenbeziehungen (lit. f: berechtigtes Interesse an Kundenbetreuung). Angaben sind freiwillig; ohne notwendige Daten können wir Aufträge nicht bearbeiten. Daten erhalten nur erforderliche Dienstleister für E-Mail, Telekommunikation, Versand und Steuerberatung sowie gesetzlich berechtigte Behörden.",
            {
              before: "Bei WhatsApp verarbeitet WhatsApp Ireland Limited Daten auch in eigener Verantwortung, gegebenenfalls außerhalb des EWR, insbesondere in den USA. Informationen zu EU-US Data Privacy Framework und Standardvertragsklauseln: ",
              link: "whatsappPrivacy",
              label: "Datenschutz bei WhatsApp",
              after: ". Alternativ: E-Mail, Telefon oder Post. Externe Anbieter werden erst beim Öffnen ihrer Links aufgerufen.",
            },
          ],
        },
        {
          title: "Speicherung",
          paragraphs: [
            "Wir speichern Kundendaten, soweit und solange dies für die laufende Geschäftsbeziehung, Aufträge, erforderliche Rechtsverteidigung oder gesetzliche Aufbewahrungspflichten notwendig ist. Steuerlich relevante Geschäftsbriefe werden grundsätzlich sechs, Buchungsbelege acht Jahre ab Jahresende aufbewahrt (§ 147 AO, Art. 6 Abs. 1 lit. c DSGVO).",
          ],
        },
        {
          title: "Ihre Rechte",
          paragraphs: [
            "Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Beschwerde bei einer Datenschutz-Aufsichtsbehörde. Verarbeitungen aufgrund berechtigter Interessen können Sie aus Gründen Ihrer besonderen Situation widersprechen; Einwilligungen jederzeit für die Zukunft widerrufen. Nutzen Sie dafür die Kontaktdaten oben.",
          ],
        },
      ],
    },
  },
  ro: {
    eyebrow: "Informații juridice",
    imprint: {
      metaTitle: "Mențiuni legale | Biroul de traduceri Schuster",
      metaDescription: "Datele de identificare ale furnizorului Biroul de traduceri Schuster.",
      title: "Mențiuni legale",
      intro: "Informații conform § 5 din Legea germană privind serviciile digitale (DDG).",
      providerTitle: "Furnizor",
      ownerLabel: "Titular",
      country: "Germania",
      contactTitle: "Contact",
      phoneLabel: "Telefon",
      mobileLabel: "Mobil",
      emailLabel: "E-mail",
      vatTitle: "Taxa pe valoarea adăugată",
      vatText: "Cod de identificare în scopuri de TVA conform § 27a din Legea germană privind TVA:",
      sections: [
        {
          title: "Titlul profesional și numirea",
          paragraphs: [
            "Traducător de acte pentru limba română, numit oficial și jurat. Numirea oficială și depunerea jurământului au avut loc la 25 mai 1993, prin președintele Tribunalului Regional Offenburg din Republica Federală Germania.",
            {
              link: "directory",
              label: "Baza de date națională a interpreților și traducătorilor",
            },
          ],
        },
        {
          title: "Responsabil pentru conținut",
          paragraphs: ["Otto Schuster, adresa indicată mai sus."],
        },
        {
          title: "Răspunderea pentru linkuri externe",
          paragraphs: [
            "Acest site conține linkuri către site-uri externe ale unor terți. Furnizorul acestui site nu poate influența conținutul și practicile lor privind protecția datelor. Pentru conținutul paginilor către care se face trimitere răspunde întotdeauna furnizorul respectiv.",
          ],
        },
        {
          title: "Drepturi de autor",
          paragraphs: [
            "Conținuturile și operele create pe acest site sunt supuse dreptului german de autor. Reproducerea sau valorificarea în afara limitelor legale necesită acordul prealabil al titularului drepturilor respective.",
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Protecția datelor | Biroul de traduceri Schuster",
      metaDescription: "Informații privind prelucrarea datelor cu caracter personal pe ottoschuster.de.",
      title: "Protecția datelor",
      intro: "Tratăm datele dumneavoastră confidențial și conform Regulamentului general privind protecția datelor (RGPD).",
      controllerTitle: "Operatorul",
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      sections: [
        {
          title: "Site-ul",
          paragraphs: [
            "Acest site nu utilizează cookie-uri sau formulare de contact. Serverul nostru prelucrează adresa IP și pagina accesată pentru funcționarea sigură (art. 6 alin. (1) lit. (f) RGPD). Jurnalele serverului sunt păstrate numai cât este necesar în acest scop.",
          ],
        },
        ...(analyticsEnabled ? [{
          title: "Statistici de vizitare",
          paragraphs: [
            "Pentru îmbunătățirea site-ului, înregistrăm accesările paginilor și clicurile pe linkurile de telefon, e-mail, WhatsApp și exemple PDF la netcup în Germania: ziua, calea paginii, domeniul de proveniență și categoria dispozitivului.",
            "Din adresa IP și identificarea browserului generăm un identificator pseudonim, schimbat zilnic și valabil doar aici; valorile originale nu sunt stocate în statistici. Fără cookie-uri, stocare în browser, conținutul mesajelor, înregistrări de sesiuni, parametri de interogare sau fragmente URL. Respectăm Do Not Track și Global Privacy Control.",
            "Temeiul este interesul nostru legitim de a îmbunătăți site-ul (art. 6 alin. (1) lit. (f) RGPD). Evenimentele sunt șterse după 90 de zile; rapoartele agregate sunt trimise prin e-mail și păstrate acolo până la ștergere. Jurnalele serverului există separat. Vă puteți opune contactându-ne sau activând Do Not Track.",
          ],
        }] : []),
        {
          title: "Contact și comenzi",
          paragraphs: [
            "Utilizăm datele de contact, mesajele și documentele pentru solicitări și comenzi (art. 6 alin. (1) lit. (b) RGPD), alte întrebări și menținerea necesară a relațiilor curente cu clienții (lit. (f): interes legitim privind asistența clienților). Datele sunt furnizate voluntar; fără informațiile necesare nu putem executa comenzile. Datele sunt transmise numai furnizorilor necesari de e-mail, telecomunicații, expediere și consultanță fiscală, precum și autorităților îndreptățite prin lege.",
            {
              before: "WhatsApp Ireland Limited prelucrează date și pe proprie răspundere, eventual în afara SEE, în special în SUA. Informații despre Cadrul UE-SUA privind confidențialitatea datelor și clauzele contractuale standard: ",
              link: "whatsappPrivacy",
              label: "Protecția datelor la WhatsApp",
              after: ". Alternativ: e-mail, telefon sau poștă. Furnizorii externi sunt contactați doar la deschiderea linkurilor lor.",
            },
          ],
        },
        {
          title: "Stocarea",
          paragraphs: [
            "Păstrăm datele clienților în măsura și pe durata necesare relației comerciale curente, comenzilor, apărării unor drepturi în justiție sau obligațiilor legale de păstrare. Corespondența relevantă fiscal se păstrează, în principiu, șase ani, iar documentele contabile opt ani de la sfârșitul anului (§ 147 AO, art. 6 alin. (1) lit. (c) RGPD).",
          ],
        },
        {
          title: "Drepturile dumneavoastră",
          paragraphs: [
            "Conform RGPD, aveți dreptul de acces, rectificare, ștergere, restricționare, portabilitate și plângere la o autoritate de supraveghere. Vă puteți opune prelucrării bazate pe interese legitime din motive legate de situația dumneavoastră particulară și puteți retrage oricând consimțământul pentru viitor. Utilizați datele de contact de mai sus.",
          ],
        },
      ],
    },
  },
} as const;

export const getLegalContent = (locale: Locale) => legalContent[locale];
