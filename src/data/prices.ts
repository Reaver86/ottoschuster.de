import { withBasePath, type Locale } from "./site";

export type PriceCategory =
  | "civil"
  | "identity"
  | "education"
  | "employment"
  | "legal"
  | "apostille"
  | "moldova"
  | "other";

type LocalizedText = Record<Locale, string>;

export type Price =
  | { type: "fixed"; amount: number }
  | { type: "range"; min: number; max: number }
  | { type: "quote" }
  | { type: "free" };

export interface PriceExample {
  label: LocalizedText;
  file: string;
}

export interface PriceEntry {
  id: string;
  category: PriceCategory;
  name: LocalizedText;
  searchTerms?: Partial<Record<Locale, string[]>>;
  price: Price;
  note?: LocalizedText;
  examples?: PriceExample[];
}

const example = (
  file: string,
  de = "Dokumentbeispiel",
  ro = "Exemplu de document",
): PriceExample => ({ label: { de, ro }, file: withBasePath(`/documents/examples/${file}`) });

export const priceCategories: PriceCategory[] = [
  "civil",
  "identity",
  "education",
  "employment",
  "legal",
  "apostille",
  "moldova",
  "other",
];

export const priceEntries: PriceEntry[] = [
  {
    id: "court-contracts",
    category: "legal",
    name: {
      de: "Scheidungsbeschlüsse, Verträge und sonstige umfangreiche Dokumente",
      ro: "Hotărâri de divorț, contracte și alte documente voluminoase",
    },
    price: { type: "quote" },
    note: {
      de: "Der Preis richtet sich nach Umfang und Komplexität.",
      ro: "Prețul depinde de volum și complexitate.",
    },
    examples: [example("dscheidun.pdf", "Vorlage und Übersetzung", "Original și traducere")],
  },
  {
    id: "power-of-attorney",
    category: "legal",
    name: { de: "Vollmacht – Erstellung auf Rumänisch", ro: "Procură – redactare în limba română" },
    price: { type: "fixed", amount: 60 },
    note: {
      de: "Die Vollmacht wird unterschriftsreif vorbereitet; die Unterschrift lassen Sie anschließend notariell beglaubigen.",
      ro: "Procura este pregătită pentru semnare; semnătura trebuie apoi autentificată la notar.",
    },
  },
  {
    id: "declaration",
    category: "legal",
    name: { de: "Erklärung – Erstellung auf Deutsch und Rumänisch", ro: "Declarație – redactare în germană și română" },
    price: { type: "fixed", amount: 75 },
  },
  {
    id: "work-book",
    category: "employment",
    name: { de: "Arbeitsbuch", ro: "Carte de muncă" },
    price: { type: "quote" },
    examples: [
      example("arbeitsbuch-ro.pdf", "Rumänische Vorlage", "Original românesc"),
      example("arbeitsbuch-de.pdf", "Deutsche Übersetzung", "Traducere germană"),
    ],
  },
  {
    id: "deportation-documents",
    category: "legal",
    name: { de: "Dokumente zur Deportationssache", ro: "Documente privind deportarea" },
    price: { type: "quote" },
    note: {
      de: "Für Widerspruch und vorbereitete Erklärungen gilt je nach Fall ein gesondertes Angebot.",
      ro: "Pentru contestație și declarațiile pregătite se face o ofertă separată, în funcție de caz.",
    },
    examples: [example("DRK-ro-de.pdf", "Vorlage und Übersetzung", "Original și traducere")],
  },
  {
    id: "birth-certificate",
    category: "civil",
    name: { de: "Geburtsurkunde", ro: "Certificat de naștere" },
    price: { type: "fixed", amount: 30 },
    searchTerms: { de: ["Geburt"], ro: ["naştere"] },
    examples: [
      example("gu-ro.pdf", "Rumänische Vorlage", "Original românesc"),
      example("gu-de.pdf", "Deutsche Übersetzung", "Traducere germană"),
      example("gu-alt-ro.pdf", "Älteres Format", "Format mai vechi"),
    ],
  },
  {
    id: "birth-certificate-moldova",
    category: "moldova",
    name: { de: "Geburtsurkunde – Republik Moldau", ro: "Certificat de naștere – Republica Moldova" },
    price: { type: "fixed", amount: 30 },
    examples: [
      example("gu-moldau-ro.pdf", "Moldauische Vorlage", "Original din Republica Moldova"),
      example("gu-moldau-de.pdf", "Deutsche Übersetzung", "Traducere germană"),
    ],
  },
  {
    id: "marriage-certificate",
    category: "civil",
    name: { de: "Heiratsurkunde", ro: "Certificat de căsătorie" },
    price: { type: "fixed", amount: 35 },
    note: {
      de: "Auch für Urkunden aus der Republik Moldau; zusätzliche Legalisierungen werden nach Umfang berechnet.",
      ro: "Și pentru certificate din Republica Moldova; legalizările suplimentare se calculează în funcție de volum.",
    },
    examples: [
      example("hu-ro.pdf", "Rumänische Vorlage", "Original românesc"),
      example("hu-de.pdf", "Deutsche Übersetzung", "Traducere germană"),
      example("HU-Moldau-ro.pdf", "Vorlage aus Moldau", "Original din Republica Moldova"),
    ],
  },
  {
    id: "death-certificate",
    category: "civil",
    name: { de: "Sterbeurkunde", ro: "Certificat de deces" },
    price: { type: "fixed", amount: 30 },
    examples: [
      example("sterbeurkunde-ro.pdf", "Rumänische Vorlage", "Original românesc"),
      example("sterbeurkunde-alt-ro.pdf", "Älteres Format", "Format mai vechi"),
      example("sterbeurkundeMoldau-ro.pdf", "Vorlage aus Moldau", "Original din Republica Moldova"),
    ],
  },
  {
    id: "name-change",
    category: "civil",
    name: { de: "Bescheinigung über Namensänderung", ro: "Certificat de schimbare a numelui" },
    price: { type: "fixed", amount: 30 },
    examples: [example("besch-namensaenderung-de.pdf", "Übersetzungsbeispiel", "Exemplu de traducere")],
  },
  {
    id: "identity-documents",
    category: "identity",
    name: { de: "Personalausweis, Reisepass oder Führerschein", ro: "Carte de identitate, pașaport sau permis de conducere" },
    price: { type: "fixed", amount: 30 },
    note: {
      de: "Auch für Dokumente aus der Republik Moldau.",
      ro: "Și pentru documente din Republica Moldova.",
    },
    examples: [
      example("carte-identitate-ro.pdf", "Personalausweis", "Carte de identitate"),
      example("fuehrerschein-moldau-ro.pdf", "Führerschein aus Moldau", "Permis din Republica Moldova"),
    ],
  },
  {
    id: "divorce-certificate-moldova",
    category: "moldova",
    name: { de: "Scheidungsurkunde – Republik Moldau", ro: "Certificat de divorț – Republica Moldova" },
    price: { type: "range", min: 35, max: 45 },
    note: {
      de: "Der höhere Preis gilt bei Beglaubigungen auf der Rückseite.",
      ro: "Prețul mai mare se aplică atunci când există legalizări pe verso.",
    },
    examples: [
      example("scheidungsurkunde-moldau.pdf", "Urkunde", "Certificat"),
      example("scheidungsurkunde-moldau-mit-legalisierung.pdf", "Mit Legalisierung", "Cu legalizare"),
    ],
  },
  {
    id: "apostille-moldova",
    category: "apostille",
    name: { de: "Apostille oder Legalisation – Republik Moldau", ro: "Apostilă sau legalizare – Republica Moldova" },
    price: { type: "fixed", amount: 20 },
    note: {
      de: "Preis für die Übersetzung. Apostillen werden von Behörden erteilt, nicht vom Übersetzungsbüro.",
      ro: "Preț pentru traducere. Apostilele sunt emise de autorități, nu de biroul de traduceri.",
    },
    examples: [
      example("apostille-ro.pdf", "Rumänische Apostille", "Apostilă românească"),
      example("apostille-de.pdf", "Deutsche Übersetzung", "Traducere germană"),
    ],
  },
  {
    id: "single-status",
    category: "civil",
    name: { de: "Ledigkeitsbescheinigung oder Bestätigung des Familienstands", ro: "Certificat de celibat sau de stare civilă" },
    price: { type: "range", min: 30, max: 45 },
    examples: [
      example("lb-ro1.pdf", "Beispiel 1", "Exemplul 1"),
      example("lb-ro2.pdf", "Beispiel 2", "Exemplul 2"),
      example("sb-moldau-h400-ro1.pdf", "Beispiel aus Moldau", "Exemplu din Republica Moldova"),
    ],
  },
  {
    id: "residence-certificate",
    category: "identity",
    name: { de: "Melde- oder Aufenthaltsbescheinigung", ro: "Adeverință de domiciliu sau certificat de ședere" },
    price: { type: "range", min: 30, max: 40 },
    examples: [
      example("meldebesch-de1.pdf", "Beispiel 1", "Exemplul 1"),
      example("meldebesch-de2.pdf", "Beispiel 2", "Exemplul 2"),
      example("meldebesch-de3.pdf", "Beispiel 3", "Exemplul 3"),
    ],
  },
  {
    id: "baptism-certificate",
    category: "civil",
    name: { de: "Taufbescheinigung", ro: "Certificat de botez" },
    price: { type: "fixed", amount: 35 },
    examples: [
      example("taufbesch-ro.pdf", "Vorlage", "Original"),
      example("taufbesch-uebersetzung.pdf", "Übersetzung", "Traducere"),
    ],
  },
  {
    id: "criminal-record",
    category: "identity",
    name: { de: "Führungszeugnis", ro: "Certificat de cazier judiciar" },
    price: { type: "fixed", amount: 30 },
    examples: [
      example("fuerungszeugnis-ro.pdf", "Rumänische Vorlage", "Original românesc"),
      example("fuerungszeugnis-de.pdf", "Deutsche Übersetzung", "Traducere germană"),
    ],
  },
  {
    id: "citizenship-renunciation",
    category: "identity",
    name: { de: "Entlassung aus der Staatsangehörigkeit", ro: "Renunțarea la cetățenie" },
    price: { type: "fixed", amount: 30 },
    examples: [example("staatsangeh-moldau.pdf", "Dokumentbeispiel", "Exemplu de document")],
  },
  {
    id: "university-diploma",
    category: "education",
    name: { de: "Hochschuldiplom – Bachelor, Master oder Ingenieur", ro: "Diplomă de licență, masterat sau inginer" },
    price: { type: "range", min: 40, max: 60 },
    examples: [
      example("licenta-ro.pdf", "Bachelor/Licență", "Diplomă de licență"),
      example("master-ro.pdf", "Master", "Diplomă de masterat"),
      example("inginer-ro.pdf", "Ingenieur", "Diplomă de inginer"),
    ],
  },
  {
    id: "university-diploma-moldova",
    category: "moldova",
    name: { de: "Hochschuldiplom – Republik Moldau", ro: "Diplomă universitară – Republica Moldova" },
    price: { type: "fixed", amount: 40 },
    examples: [example("licenta-moldova-ro.pdf", "Vorlage aus Moldau", "Original din Republica Moldova")],
  },
  {
    id: "higher-studies-diploma",
    category: "education",
    name: { de: "Diplom über den Hochschulabschluss", ro: "Diplomă de studii superioare" },
    price: { type: "fixed", amount: 40 },
    examples: [example("diplom-hochschule-moldau.pdf", "Dokumentbeispiel", "Exemplu de document")],
  },
  {
    id: "eu-confirmation",
    category: "education",
    name: { de: "EU-Bestätigung", ro: "Certificat UE" },
    price: { type: "fixed", amount: 45 },
    examples: [example("bestatigung-eu-ro.pdf", "Dokumentbeispiel", "Exemplu de document")],
  },
  {
    id: "baccalaureate-year-grades",
    category: "education",
    name: { de: "Abiturdiplom mit Notentabelle auf der Rückseite", ro: "Diplomă de bacalaureat cu note pe anii de studiu pe verso" },
    price: { type: "fixed", amount: 60 },
    examples: [example("abitur-jahresnoten-ro.pdf", "Zweiseitige Vorlage", "Original cu două pagini")],
  },
  {
    id: "baccalaureate-competencies",
    category: "education",
    name: { de: "Abiturdiplom mit Notentabelle und Sprachkompetenzen", ro: "Diplomă de bacalaureat cu note și competențe lingvistice" },
    price: { type: "fixed", amount: 60 },
    examples: [
      example("abitur-noten-ro.pdf", "Notentabelle", "Tabel de note"),
      example("abitur-sprachkomp-ro.pdf", "Sprachkompetenzen", "Competențe lingvistice"),
    ],
  },
  {
    id: "baccalaureate-moldova",
    category: "moldova",
    name: { de: "Abiturdiplom – Republik Moldau, drei Seiten", ro: "Diplomă de bacalaureat – Republica Moldova, trei pagini" },
    price: { type: "fixed", amount: 75 },
    examples: [example("abiturdiplomMoldau.pdf", "Dreiseitige Vorlage", "Original cu trei pagini")],
  },
  {
    id: "german-abitur",
    category: "education",
    name: { de: "Zeugnis der allgemeinen Hochschulreife ins Rumänische", ro: "Certificat german de bacalaureat tradus în română" },
    price: { type: "fixed", amount: 120 },
    examples: [
      example("bac-scan-de.pdf", "Deutsche Vorlage", "Original german"),
      example("bac-ro.pdf", "Rumänische Übersetzung", "Traducere română"),
    ],
  },
  {
    id: "qualification-certificate",
    category: "education",
    name: { de: "Qualifizierungszeugnis", ro: "Certificat de calificare" },
    price: { type: "fixed", amount: 50 },
    examples: [example("qualifizierungszeugnis.pdf", "Zweiseitige Vorlage", "Original cu două pagini")],
  },
  {
    id: "professional-qualification-level",
    category: "education",
    name: { de: "Zeugnis der beruflichen Qualifikation, Niveau 1, 2, 3 oder 5", ro: "Certificat de calificare profesională, nivelul 1, 2, 3 sau 5" },
    price: { type: "range", min: 60, max: 90 },
    examples: [
      example("cert-cal-nivel1.pdf", "Niveau 1", "Nivelul 1"),
      example("cert-cal-nivel5.pdf", "Niveau 5", "Nivelul 5"),
    ],
  },
  {
    id: "professional-qualification",
    category: "education",
    name: { de: "Zeugnis der beruflichen Qualifikation", ro: "Certificat de calificare profesională" },
    price: { type: "fixed", amount: 40 },
    examples: [example("certif-cal-prof-ro.pdf", "Dokumentbeispiel", "Exemplu de document")],
  },
  {
    id: "descriptive-supplement",
    category: "education",
    name: { de: "Beschreibendes Beiblatt zum Zeugnis", ro: "Supliment descriptiv al certificatului" },
    price: { type: "range", min: 60, max: 90 },
    examples: [example("supliment-ro.pdf", "Dokumentbeispiel", "Exemplu de document")],
  },
  {
    id: "vocational-school-diploma",
    category: "education",
    name: { de: "Abschlusszeugnis der Berufsschule", ro: "Diplomă de absolvire a școlii profesionale" },
    price: { type: "fixed", amount: 60 },
    examples: [
      example("dipl-absolv-sc-prof-ro1.pdf", "Seite 1", "Pagina 1"),
      example("dipl-absolv-sc-prof-ro2.pdf", "Seite 2", "Pagina 2"),
    ],
  },
  {
    id: "secondary-school-diploma",
    category: "education",
    name: { de: "Abschlusszeugnis des Gymnasiums", ro: "Certificat de absolvire a liceului" },
    price: { type: "fixed", amount: 40 },
    examples: [example("cert-abs-liceu-ro.pdf", "Dokumentbeispiel", "Exemplu de document")],
  },
  {
    id: "lower-secondary-diploma",
    category: "education",
    name: { de: "Abschlusszeugnis der Unterstufe des Gymnasiums", ro: "Certificat de absolvire a ciclului inferior al liceului" },
    price: { type: "fixed", amount: 40 },
    examples: [example("cert-ciclu-inf-liceu-ro.pdf", "Dokumentbeispiel", "Exemplu de document")],
  },
  {
    id: "national-tests",
    category: "education",
    name: { de: "Zeugnis der nationalen Tests", ro: "Certificat de promovare a testelor naționale" },
    price: { type: "fixed", amount: 60 },
    examples: [example("cert-promov-teste-nationale-ro.pdf", "Zweiseitiges Dokument", "Document cu două pagini")],
  },
  {
    id: "competence-certificate",
    category: "education",
    name: { de: "Zeugnis der sprachlichen oder digitalen Kompetenz", ro: "Certificat de competență lingvistică sau digitală" },
    price: { type: "fixed", amount: 40 },
    examples: [
      example("cert-comp-lingvistica-ro.pdf", "Sprachkompetenz", "Competență lingvistică"),
      example("cert-comp-digitale-ro.pdf", "Digitale Kompetenz", "Competență digitală"),
    ],
  },
  {
    id: "university-transcript",
    category: "education",
    name: { de: "Matrikelblatt des Studiums", ro: "Foaie matricolă pentru studii universitare" },
    price: { type: "quote" },
  },
  {
    id: "diploma-supplement",
    category: "education",
    name: { de: "Diploma Supplement", ro: "Supliment la diplomă" },
    price: { type: "quote" },
    note: {
      de: "Richtwert: etwa 35 € pro Seite und Studienjahr; bitte Angebot anfordern.",
      ro: "Preț orientativ: aproximativ 35 € pe pagină și an de studiu; solicitați o ofertă.",
    },
    examples: [
      example("diploma-suppl-ro.pdf", "Rumänische Vorlage", "Original românesc"),
      example("diploma-suppl-de.pdf", "Deutsche Übersetzung", "Traducere germană"),
    ],
  },
  {
    id: "transcript-grades-1-8",
    category: "education",
    name: { de: "Matrikelblatt Klassen 1 bis 8", ro: "Foaie matricolă, clasele 1–8" },
    price: { type: "quote" },
    note: { de: "Je nach Umfang etwa 90 €.", ro: "În funcție de volum, aproximativ 90 €." },
    examples: [
      example("matrikel1-8-ro.pdf", "Rumänische Vorlage", "Original românesc"),
      example("matrikel1-8-de.pdf", "Deutsche Übersetzung", "Traducere germană"),
    ],
  },
  {
    id: "transcript-grades-9-12",
    category: "education",
    name: { de: "Matrikelblatt Klassen 9 bis 12 (13)", ro: "Foaie matricolă, clasele 9–12 (13)" },
    price: { type: "range", min: 50, max: 90 },
    note: { de: "Der genaue Preis hängt vom Umfang ab.", ro: "Prețul exact depinde de volum." },
    examples: [
      example("matrikel9-12-ro.pdf", "Rumänische Vorlage", "Original românesc"),
      example("matrikel9-12-de.pdf", "Deutsche Übersetzung", "Traducere germană"),
    ],
  },
  {
    id: "duplicate-copy",
    category: "other",
    name: { de: "Zweitfertigung einer früheren Übersetzung", ro: "Duplicat al unei traduceri anterioare" },
    price: { type: "fixed", amount: 12 },
    note: {
      de: "Auch nach vielen Jahren möglich; kleine Anpassungen werden nach Absprache berücksichtigt.",
      ro: "Este posibil și după mulți ani; mici adaptări se fac după înțelegere.",
    },
  },
  {
    id: "digital-copy",
    category: "other",
    name: { de: "Digitale Kopie zusätzlich zur Postsendung", ro: "Copie digitală suplimentară trimiterii poștale" },
    price: { type: "free" },
    note: {
      de: "In der Regel als PDF per E-Mail oder WhatsApp.",
      ro: "De regulă ca PDF prin e-mail sau WhatsApp.",
    },
  },
  {
    id: "medical-documents",
    category: "other",
    name: { de: "Medizinische Dokumente", ro: "Documente medicale" },
    price: { type: "quote" },
  },
  {
    id: "interpreting",
    category: "other",
    name: { de: "Dolmetschen beim Notar oder bei standesamtlichen Trauungen", ro: "Interpretariat la notar sau la cununii civile" },
    price: { type: "quote" },
  },
];
