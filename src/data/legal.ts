import type { Locale } from "../i18n/config";

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
      title: "Datenschutzerklärung",
      intro: "Wie auf dieser Website personenbezogene Daten verarbeitet werden.",
      controllerTitle: "1. Verantwortlicher",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      sections: [
        {
          title: "2. Bereitstellung der Website und Server-Protokolle",
          paragraphs: [
            "Beim Aufruf der Website verarbeitet der Hosting-Anbieter technisch notwendige Verbindungsdaten. Dazu können IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Adresse, übertragene Datenmenge, Referrer, Browser und Betriebssystem gehören. Diese Daten sind erforderlich, um die Website sicher und zuverlässig auszuliefern und technische Störungen zu untersuchen.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und funktionsfähigen Betrieb dieser Website. Protokolldaten werden nur so lange gespeichert, wie dies für Betrieb und Sicherheit erforderlich ist, und anschließend gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.",
          ],
        },
        {
          title: "3. Kontakt per E-Mail, Telefon oder WhatsApp",
          paragraphs: [
            "Wenn Sie Kontakt aufnehmen, werden die von Ihnen übermittelten Kontaktdaten, Nachrichten und Dokumente verarbeitet, um Ihre Anfrage zu beantworten und gegebenenfalls einen Auftrag vorzubereiten oder auszuführen. Rechtsgrundlage ist je nach Anliegen Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sachgerechten Bearbeitung und Dokumentation Ihrer Anfrage.",
            "Die Bereitstellung Ihrer Daten ist freiwillig. Ohne die Angaben und Unterlagen, die für ein Angebot oder einen Auftrag erforderlich sind, kann die jeweilige Anfrage jedoch nicht bearbeitet werden. Bitte übermitteln Sie nur die hierfür notwendigen Daten.",
            "Bei einer Kontaktaufnahme über WhatsApp wird der Dienst der WhatsApp Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland, genutzt. Der WhatsApp-Link öffnet eine leere Unterhaltung. Beim Aufruf von WhatsApp und beim Versand einer Nachricht verarbeitet WhatsApp insbesondere Konto-, Nutzungs-, Geräte- und Verbindungsdaten nach eigener Verantwortung. Nachrichten und übermittelte Dateien sind nach Angaben von WhatsApp Ende-zu-Ende-verschlüsselt.",
            {
              before: "WhatsApp setzt für den Betrieb des Dienstes Unternehmen der Meta-Gruppe und weitere Dienstleister ein. Dabei können Daten auch in die USA und andere Staaten außerhalb des Europäischen Wirtschaftsraums übertragen werden. WhatsApp stützt Übermittlungen an WhatsApp LLC und Meta Platforms, Inc. in die USA nach eigenen Angaben auf den EU-US Data Privacy Framework; für weitere Übermittlungen verwendet WhatsApp unter anderem Angemessenheitsbeschlüsse und Standardvertragsklauseln. Einzelheiten enthält die ",
              link: "whatsappPrivacy",
              label: "Datenschutzrichtlinie von WhatsApp",
              after: ".",
            },
            "Alternativ können Sie E-Mail, Telefon oder Post verwenden.",
          ],
        },
        {
          title: "4. Empfänger von Daten",
          paragraphs: [
            "Personenbezogene Daten werden nur weitergegeben, soweit dies für die genannten Zwecke erforderlich oder gesetzlich vorgeschrieben ist. Als Empfänger kommen insbesondere der Hosting-Anbieter, E-Mail- und Telekommunikationsanbieter, Post- und Versanddienstleister, Steuerberatung und Finanzbehörden sowie WhatsApp bei Nutzung dieses Kontaktwegs in Betracht. Soweit Dienstleister im Auftrag tätig werden, werden sie nur nach den gesetzlichen Vorgaben eingesetzt.",
          ],
        },
        {
          title: "5. Externe Links und soziale Netzwerke",
          paragraphs: [
            "Links und QR-Codes zu WhatsApp, Facebook, Instagram, Google sowie zu Behörden und öffentlichen Verzeichnissen stellen erst beim Anklicken beziehungsweise Scannen eine Verbindung zum jeweiligen externen Anbieter her. Dabei erhält der Anbieter technisch notwendige Verbindungsdaten wie die IP-Adresse. Für die anschließende Verarbeitung ist der jeweilige Anbieter verantwortlich.",
          ],
        },
        {
          title: "6. Cookies, Analyse und Schriftarten",
          paragraphs: [
            "Diese Website setzt keine Analyse- oder Marketingdienste ein und speichert selbst keine Cookies. Die verwendeten Schriftarten und Bilder werden lokal ausgeliefert; beim Seitenaufruf wird dafür keine Verbindung zu einem externen Schriftanbieter aufgebaut.",
          ],
        },
        {
          title: "7. Speicherdauer",
          paragraphs: [
            "Reine Anfragedaten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist, kein Auftrag zustande kommt und die Daten nicht mehr zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt werden. Bei einem Auftrag werden die Daten zunächst für dessen Durchführung gespeichert.",
            "Geschäfts- und steuerrechtlich relevante Unterlagen werden anschließend nur im gesetzlich erforderlichen Umfang aufbewahrt. Die regelmäßigen Aufbewahrungsfristen betragen nach § 147 Abgabenordnung sechs Jahre für Handels- und Geschäftsbriefe sowie sonstige steuerlich relevante Unterlagen, acht Jahre für Buchungsbelege und zehn Jahre für Bücher, Aufzeichnungen und Jahresabschlüsse. Die Frist beginnt grundsätzlich mit dem Schluss des Kalenderjahres, in dem die jeweilige Unterlage entstanden ist. Eine längere Speicherung erfolgt nur, wenn sie gesetzlich vorgeschrieben oder zur Sicherung von Rechtsansprüchen erforderlich ist.",
          ],
        },
        {
          title: "8. Ihre Rechte",
          paragraphs: [
            "Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung können Sie mit Wirkung für die Zukunft widerrufen. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren.",
            {
              before: "Für die Wahrnehmung Ihrer Rechte genügt eine Nachricht an ",
              link: "email",
              label: "otto.schuster@ottoschuster.de",
              after: ".",
            },
          ],
        },
        {
          title: "9. Stand",
          paragraphs: ["Stand dieser Datenschutzerklärung: August 2026."],
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
      title: "Declarație privind protecția datelor",
      intro: "Modul în care sunt prelucrate datele cu caracter personal pe acest site.",
      controllerTitle: "1. Operatorul",
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      sections: [
        {
          title: "2. Furnizarea site-ului și jurnalele serverului",
          paragraphs: [
            "La accesarea site-ului, furnizorul de găzduire prelucrează date de conexiune necesare din punct de vedere tehnic. Acestea pot include adresa IP, momentul accesării, adresa solicitată, volumul de date transferat, pagina de referință, browserul și sistemul de operare. Datele sunt necesare pentru furnizarea sigură și fiabilă a site-ului și pentru investigarea problemelor tehnice.",
            "Temeiul juridic este art. 6 alin. (1) lit. (f) din RGPD. Interesul legitim constă în operarea sigură și funcțională a acestui site. Datele din jurnale sunt stocate numai atât timp cât este necesar pentru funcționare și securitate, apoi sunt șterse, dacă nu există o obligație legală de păstrare.",
          ],
        },
        {
          title: "3. Contact prin e-mail, telefon sau WhatsApp",
          paragraphs: [
            "Dacă ne contactați, datele de contact, mesajele și documentele transmise de dumneavoastră sunt prelucrate pentru a răspunde solicitării și, după caz, pentru a pregăti sau executa o comandă. În funcție de solicitare, temeiul juridic este art. 6 alin. (1) lit. (b) din RGPD sau art. 6 alin. (1) lit. (f) din RGPD. Interesul legitim constă în prelucrarea corespunzătoare și documentarea solicitării dumneavoastră.",
            "Furnizarea datelor este voluntară. Totuși, fără informațiile și documentele necesare pentru o ofertă sau o comandă, solicitarea respectivă nu poate fi procesată. Vă rugăm să transmiteți numai datele necesare în acest scop.",
            "Pentru contactarea prin WhatsApp este utilizat serviciul WhatsApp Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irlanda. Linkul WhatsApp deschide o conversație goală. La accesarea WhatsApp și la trimiterea unui mesaj, WhatsApp prelucrează pe proprie răspundere în special date privind contul, utilizarea, dispozitivul și conexiunea. Potrivit informațiilor furnizate de WhatsApp, mesajele și fișierele transmise sunt criptate de la un capăt la altul.",
            {
              before: "Pentru operarea serviciului, WhatsApp utilizează companii din grupul Meta și alți prestatori. În acest context, datele pot fi transferate și în SUA și în alte state din afara Spațiului Economic European. Conform propriilor informații, WhatsApp își întemeiază transferurile către WhatsApp LLC și Meta Platforms, Inc. în SUA pe Cadrul UE-SUA privind confidențialitatea datelor; pentru alte transferuri utilizează, printre altele, decizii privind caracterul adecvat al nivelului de protecție și clauze contractuale standard. Detalii se găsesc în ",
              link: "whatsappPrivacy",
              label: "Politica de confidențialitate WhatsApp",
              after: ".",
            },
            "Ca alternativă, puteți utiliza e-mailul, telefonul sau poșta.",
          ],
        },
        {
          title: "4. Destinatarii datelor",
          paragraphs: [
            "Datele cu caracter personal sunt divulgate numai în măsura în care acest lucru este necesar pentru scopurile menționate sau este prevăzut de lege. Printre destinatari se pot număra în special furnizorul de găzduire, furnizorii de servicii de e-mail și telecomunicații, serviciile poștale și de expediere, consultanța fiscală și autoritățile fiscale, precum și WhatsApp, dacă este utilizată această modalitate de contact. În măsura în care prestatorii acționează în numele operatorului, aceștia sunt utilizați numai în conformitate cu cerințele legale.",
          ],
        },
        {
          title: "5. Linkuri externe și rețele sociale",
          paragraphs: [
            "Linkurile și codurile QR către WhatsApp, Facebook, Instagram, Google, precum și către autorități și registre oficiale stabilesc o conexiune cu furnizorul extern respectiv numai după accesare sau scanare. În acest caz, furnizorul primește date de conexiune necesare din punct de vedere tehnic, precum adresa IP. Furnizorul respectiv răspunde pentru prelucrarea ulterioară.",
          ],
        },
        {
          title: "6. Module cookie, analiză și fonturi",
          paragraphs: [
            "Acest site nu utilizează servicii de analiză sau marketing și nu stochează el însuși module cookie. Fonturile și imaginile utilizate sunt furnizate local; la accesarea paginii nu se stabilește în acest scop nicio conexiune cu un furnizor extern de fonturi.",
          ],
        },
        {
          title: "7. Durata stocării",
          paragraphs: [
            "Datele aferente simplelor solicitări sunt șterse de îndată ce solicitarea a fost soluționată definitiv, nu se încheie nicio comandă, iar datele nu mai sunt necesare pentru constatarea, exercitarea sau apărarea unor drepturi în justiție. Dacă se încheie o comandă, datele sunt stocate inițial pentru executarea acesteia.",
            "Documentele relevante din punct de vedere comercial și fiscal sunt păstrate ulterior numai în măsura impusă de lege. Potrivit § 147 din Codul fiscal german (Abgabenordnung), termenele obișnuite de păstrare sunt de șase ani pentru corespondența comercială și de afaceri, precum și pentru alte documente relevante fiscal, de opt ani pentru documentele contabile și de zece ani pentru registre, evidențe și situații financiare anuale. Termenul începe, în principiu, la sfârșitul anului calendaristic în care a fost întocmit documentul respectiv. O păstrare mai îndelungată are loc numai dacă este prevăzută de lege sau este necesară pentru protejarea unor drepturi în justiție.",
          ],
        },
        {
          title: "8. Drepturile dumneavoastră",
          paragraphs: [
            "În condițiile prevăzute de lege, aveți dreptul de acces, de rectificare, de ștergere, de restricționare a prelucrării, la portabilitatea datelor și dreptul de a vă opune prelucrării. Vă puteți retrage consimțământul acordat, cu efect pentru viitor. De asemenea, puteți depune o plângere la o autoritate de supraveghere a protecției datelor.",
            {
              before: "Pentru exercitarea drepturilor este suficient un mesaj la adresa ",
              link: "email",
              label: "otto.schuster@ottoschuster.de",
              after: ".",
            },
          ],
        },
        {
          title: "9. Versiunea curentă",
          paragraphs: ["Versiunea acestei declarații privind protecția datelor: august 2026."],
        },
      ],
    },
  },
} as const;

export const getLegalContent = (locale: Locale) => legalContent[locale];
