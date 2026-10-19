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
      intro: "Ihre Daten werden vertraulich behandelt und nur weitergegeben, soweit dies für die Bearbeitung Ihrer Anfrage oder Ihres Auftrags erforderlich oder gesetzlich vorgeschrieben ist. Wir speichern Ihre Daten nur im erforderlichen Umfang und so lange, wie dies für Ihre Anfrage, Ihren Auftrag oder gesetzliche Aufbewahrungspflichten notwendig ist.",
      controllerTitle: "Verantwortlicher",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      sections: [
        {
          title: "Website",
          paragraphs: [
            "Diese Website verwendet keine Cookies oder Kontaktformulare. Beim Besuch verarbeitet unser selbst betriebener Webserver technisch notwendige Verbindungsdaten, insbesondere Ihre IP-Adresse und die angeforderte Seite. Grundlage ist unser berechtigtes Interesse am sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Etwaige Serverprotokolle werden nur so lange aufbewahrt, wie dies für Betrieb und Sicherheit erforderlich ist.",
          ],
        },
        ...(analyticsEnabled ? [{
          title: "Besuchsstatistik",
          paragraphs: [
            "Wir erfassen Seitenaufrufe und Klicks auf Telefon-, E-Mail-, WhatsApp- und Beispiel-PDF-Links zur Verbesserung unseres Angebots auf unserem Hosting bei netcup in Deutschland. Gespeichert werden Tag, Seitenpfad, verweisende Domain und Gerätekategorie. Kontaktklicks sind keine bestätigten Anfragen.",
            "Wir verwenden keine Cookies oder Browserspeicher, erfassen keine Nachrichteninhalte oder Sitzungsaufzeichnungen und schließen URL-Abfrageparameter und Seitenanker aus. IP-Adresse und Browserkennung werden technisch verarbeitet und für eine täglich wechselnde, nur für diese Website gültige pseudonyme Besucherkennung verwendet. Die Rohwerte werden nicht in der Statistik gespeichert. Do Not Track und Global Privacy Control werden berücksichtigt.",
            "Grundlage ist unser berechtigtes Interesse an einer datensparsamen Verbesserung der Website (Art. 6 Abs. 1 lit. f DSGVO). Einzelereignisse werden nach 90 Tagen gelöscht; zusammengefasste Berichte werden per E-Mail versandt. Serverprotokolle bestehen unabhängig davon. Sie können widersprechen, indem Sie uns kontaktieren oder Do Not Track aktivieren.",
          ],
        }] : []),
        {
          title: "Kontakt und Aufträge",
          paragraphs: [
            "Kontaktdaten, Nachrichten und Unterlagen nutzen wir zur Bearbeitung Ihrer Anfrage und Ihres Auftrags (Art. 6 Abs. 1 lit. b DSGVO); bei sonstigen Anliegen aufgrund unseres berechtigten Interesses an deren Beantwortung (lit. f). Angaben sind freiwillig; notwendige Informationen benötigen wir zur Bearbeitung. Empfänger können E-Mail-, Telekommunikations- und Versanddienstleister sowie Steuerberatung und Finanzbehörden sein.",
            {
              before: "Bei WhatsApp verarbeitet WhatsApp Ireland Limited auch Daten in eigener Verantwortung; Übermittlungen außerhalb des EWR sind möglich, insbesondere in die USA. WhatsApp nennt hierfür unter anderem das EU-US Data Privacy Framework und Standardvertragsklauseln. Einzelheiten und Informationen zu den Garantien: ",
              link: "whatsappPrivacy",
              label: "Datenschutz bei WhatsApp",
              after: ". Alternativ erreichen Sie uns per E-Mail, Telefon oder Post. Externe Links verbinden Sie erst beim Öffnen mit dem jeweiligen Anbieter.",
            },
          ],
        },
        {
          title: "Speicherung",
          paragraphs: [
            "Anfrage- und Auftragsdaten löschen wir, sobald die Bearbeitung abgeschlossen ist und keine Aufbewahrungspflichten oder erforderliche Rechtsverteidigung entgegenstehen. Steuerlich relevante Geschäftsbriefe sind grundsätzlich sechs, Buchungsbelege acht Jahre ab Ende des Entstehungsjahres aufzubewahren (§ 147 AO); Grundlage ist Art. 6 Abs. 1 lit. c DSGVO.",
          ],
        },
        {
          title: "Ihre Rechte",
          paragraphs: [
            "Sie haben unter den gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit sowie auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde. Gegen Verarbeitungen aufgrund berechtigter Interessen können Sie aus Gründen Ihrer besonderen Situation Widerspruch einlegen. Eine erteilte Einwilligung können Sie jederzeit für die Zukunft widerrufen. Wenden Sie sich dafür an die oben genannten Kontaktdaten.",
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
      intro: "Datele dumneavoastră sunt tratate confidențial și sunt transmise altor destinatari numai dacă acest lucru este necesar pentru solicitarea sau comanda dumneavoastră ori este impus de lege. Stocăm datele numai în măsura și pe durata necesare pentru solicitarea sau comanda dumneavoastră ori pentru îndeplinirea obligațiilor legale de păstrare.",
      controllerTitle: "Operatorul",
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      sections: [
        {
          title: "Site-ul",
          paragraphs: [
            "Acest site nu utilizează module cookie sau formulare de contact. La accesare, serverul web administrat de noi prelucrează datele de conexiune necesare din punct de vedere tehnic, în special adresa IP și pagina solicitată. Temeiul este interesul nostru legitim privind funcționarea sigură (art. 6 alin. (1) lit. (f) RGPD). Eventualele jurnale ale serverului sunt păstrate numai atât timp cât este necesar pentru funcționare și securitate.",
          ],
        },
        ...(analyticsEnabled ? [{
          title: "Statistici de vizitare",
          paragraphs: [
            "Înregistrăm accesările paginilor și clicurile pe linkurile pentru telefon, e-mail, WhatsApp și exemple PDF pentru a îmbunătăți site-ul, folosind găzduirea noastră la netcup în Germania. Stocăm ziua, calea paginii, domeniul de proveniență și categoria dispozitivului. Clicurile nu reprezintă solicitări confirmate.",
            "Nu utilizăm cookie-uri sau stocarea browserului, nu colectăm conținutul mesajelor și nu înregistrăm sesiuni. Excludem parametrii de interogare și fragmentele URL. Adresa IP și identificarea browserului sunt prelucrate tehnic pentru a genera un identificator pseudonim care se schimbă zilnic și este valabil numai pentru acest site. Valorile originale nu sunt stocate în statistici. Respectăm Do Not Track și Global Privacy Control.",
            "Temeiul este interesul nostru legitim de a îmbunătăți site-ul cu un volum redus de date (art. 6 alin. (1) lit. (f) RGPD). Evenimentele individuale sunt șterse după 90 de zile; rapoartele agregate sunt trimise prin e-mail. Jurnalele tehnice ale serverului există separat. Vă puteți opune contactându-ne sau activând Do Not Track.",
          ],
        }] : []),
        {
          title: "Contact și comenzi",
          paragraphs: [
            "Utilizăm datele de contact, mesajele și documentele pentru a soluționa solicitarea și a executa comanda dumneavoastră (art. 6 alin. (1) lit. (b) RGPD); pentru alte întrebări, în baza interesului nostru legitim de a răspunde (lit. (f)). Furnizarea datelor este voluntară; avem nevoie de informațiile necesare pentru prelucrare. Destinatarii pot include furnizori de servicii de e-mail, telecomunicații și expediere, consultanți fiscali și autorități fiscale.",
            {
              before: "La utilizarea WhatsApp, WhatsApp Ireland Limited prelucrează date și pe proprie răspundere; sunt posibile transferuri în afara SEE, în special în SUA. WhatsApp menționează în acest scop, printre altele, Cadrul UE-SUA privind confidențialitatea datelor și clauze contractuale standard. Detalii și informații despre garanții: ",
              link: "whatsappPrivacy",
              label: "Protecția datelor la WhatsApp",
              after: ". Ne puteți contacta și prin e-mail, telefon sau poștă. Linkurile externe vă conectează la furnizorul respectiv numai când le deschideți.",
            },
          ],
        },
        {
          title: "Stocarea",
          paragraphs: [
            "Ștergem datele aferente solicitărilor și comenzilor după încheierea prelucrării, dacă nu există obligații de păstrare sau necesitatea apărării unor drepturi în justiție. Corespondența comercială relevantă fiscal se păstrează, în principiu, șase ani, iar documentele contabile opt ani, de la sfârșitul anului în care au fost întocmite (§ 147 AO); temeiul este art. 6 alin. (1) lit. (c) RGPD.",
          ],
        },
        {
          title: "Drepturile dumneavoastră",
          paragraphs: [
            "În condițiile legii, aveți dreptul de acces, rectificare, ștergere, restricționare și portabilitate a datelor, precum și dreptul de a depune o plângere la o autoritate de supraveghere a protecției datelor. Vă puteți opune prelucrării bazate pe interese legitime din motive legate de situația dumneavoastră particulară. Puteți retrage oricând un consimțământ acordat, cu efect pentru viitor. Pentru aceasta, utilizați datele de contact de mai sus.",
          ],
        },
      ],
    },
  },
} as const;

export const getLegalContent = (locale: Locale) => legalContent[locale];
