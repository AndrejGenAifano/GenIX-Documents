export default {
  translation: {
    common: {
      delete: 'Löschen',
      deleteModalTitle: 'Sind Sie sicher, dass Sie diesen Artikel löschen möchten?',
      ok: 'Ja',
      cancel: 'Nein',
      total: 'Gesamt',
      rename: 'Umbenennen',
      name: 'Name',
      save: 'Speichern',
      namePlaceholder: 'Bitte Namen eingeben',
      next: 'Weiter',
      create: 'Erstellen',
      edit: 'Bearbeiten',
      upload: 'Hochladen',
      english: 'Englisch',
      german: 'Deutsch',
      language: 'Sprache',
      languageMessage: 'Bitte geben Sie Ihre Sprache an!',
      languagePlaceholder: 'Wählen Sie Ihre Sprache',
      copy: 'Kopieren',
      copied: 'Kopiert',
    },
    login: {
      login: 'Anmelden',
      signUp: 'Registrieren',
      loginDescription: 'Wir freuen uns, Sie wiederzusehen!',
      registerDescription: 'Schön, dass Sie dabei sind!',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'Bitte E-Mail eingeben',
      passwordLabel: 'Passwort',
      passwordPlaceholder: 'Bitte Passwort eingeben',
      rememberMe: 'Angemeldet bleiben',
      signInTip: 'Noch kein Konto?',
      signUpTip: 'Bereits registriert?',
      nicknameLabel: 'Spitzname',
      nicknamePlaceholder: 'Bitte Spitzname eingeben',
      register: 'Konto erstellen',
      continue: 'Fortsetzen',
      title: 'Beginnen Sie mit dem Aufbau Ihrer intelligenten Assistenten.',
      description:
        'Melden Sie sich kostenlos an, um führende RAG-Technologie zu erkunden. Erstellen Sie Wissensdatenbanken und KIs, um Ihr Geschäft zu stärken.',
      review: 'von über 500 Bewertungen',
    },
    header: {
      knowledgeBase: 'Wissensdatenbank',
      chat: 'Chat',
      register: 'Registrieren',
      signin: 'Anmelden',
      home: 'Startseite',
      setting: 'Benutzereinstellungen',
      logout: 'Abmelden',
    },
    knowledgeList: {
      welcome: 'Willkommen zurück',
      description: 'Welche Wissensdatenbank möchten wir heute nutzen?',
      createKnowledgeBase: 'Wissensdatenbank erstellen',
      name: 'Name',
      namePlaceholder: 'Bitte Namen eingeben!',
      doc: 'Dokumente',
    },
    knowledgeDetails: {
      dataset: 'Datensatz',
      testing: 'Abrufprüfung',
      files: 'Dateien',
      configuration: 'Konfiguration',
      name: 'Name',
      namePlaceholder: 'Bitte Namen eingeben!',
      doc: 'Dokumente',
      datasetDescription:
        '😉 Fragen und Antworten können erst nach erfolgreicher Analyse beantwortet werden.',
      addFile: 'Datei hinzufügen',
      searchFiles: 'Ihre Dateien durchsuchen',
      localFiles: 'Lokale Dateien',
      emptyFiles: 'Leere Datei erstellen',
      chunkNumber: 'Teilanzahl',
      uploadDate: 'Hochladedatum',
      chunkMethod: 'Teilungsmethode',
      enabled: 'Aktiviert',
      disabled: 'Deaktiviert',
      action: 'Aktion',
      parsingStatus: 'Analysestatus',
      processBeginAt: 'Prozessbeginn',
      processDuration: 'Prozessdauer',
      progressMsg: 'Fortschrittsmeldung',
      testingDescription:
        'Letzter Schritt! Nach dem Erfolg überlassen Sie den Rest Infiniflow AI.',
      topK: 'Top K',
      topKTip:
        'Aus Kostengründen werden nicht alle abgerufenen Teile mit der Anfragevektor-Kosinusähnlichkeit berechnet. Je größer das "Top K", desto höher die Rückrufquote und desto langsamer die Abrufgeschwindigkeit.',
      similarityThreshold: 'Ähnlichkeitsschwelle',
      similarityThresholdTip:
        'Wir verwenden einen hybriden Ähnlichkeitswert, um die Distanz zwischen zwei Textzeilen zu bewerten. Es kombiniert Schlüsselwortähnlichkeit und Vektor-Kosinusähnlichkeit. Wenn die Ähnlichkeit zwischen Anfrage und Teil unter dieser Schwelle liegt, wird der Teil herausgefiltert.',
      vectorSimilarityWeight: 'Gewicht der Vektorähnlichkeit',
      vectorSimilarityWeightTip:
        'Wir verwenden einen hybriden Ähnlichkeitswert, um die Distanz zwischen zwei Textzeilen zu bewerten. Es kombiniert Schlüsselwortähnlichkeit und Vektor-Kosinusähnlichkeit. Die Summe beider Gewichte beträgt 1,0.',
      testText: 'Testtext',
      testTextPlaceholder: 'Bitte geben Sie Ihre Frage ein!',
      testingLabel: 'Testen',
      similarity: 'Hybridähnlichkeit',
      termSimilarity: 'Begriffsähnlichkeit',
      vectorSimilarity: 'Vektorähnlichkeit',
      hits: 'Treffer',
      view: 'Ansehen',
      filesSelected: 'Dateien ausgewählt',
      upload: 'Hochladen',
      run: 'Starten',
      runningStatus0: 'NICHT GESTARTET',
      runningStatus1: 'Analyse',
      runningStatus2: 'ABBRECHEN',
      runningStatus3: 'ERFOLG',
      runningStatus4: 'FEHLER',
      pageRanges: 'Seitenbereiche',
      pageRangesTip:
        'Seitenbereiche: Definieren Sie die Seitenbereiche, die analysiert werden müssen. Seiten, die nicht in diesen Bereichen enthalten sind, werden ignoriert.',
      fromPlaceholder: 'von',
      fromMessage: 'Fehlende Startseitennummer',
      toPlaceholder: 'bis',
      toMessage: 'Fehlende Endseitennummer (ausgeschlossen)',
      layoutRecognize: 'Layouterkennung',
      layoutRecognizeTip:
        'Verwenden Sie visuelle Modelle für die Layoutanalyse, um die Dokumentenstruktur besser zu identifizieren und Titel, Textblöcke, Bilder und Tabellen zu finden. Ohne dieses Merkmal kann nur der reine Text des PDFs erhalten werden.',
      taskPageSize: 'Aufgabenseitengröße',
      taskPageSizeMessage: 'Bitte geben Sie Ihre Aufgabenseitengröße ein!',
      taskPageSizeTip:
        'Bei Verwendung der Layouterkennung wird die PDF-Datei in aufeinanderfolgende Gruppen aufgeteilt. Die Layoutanalyse wird parallel zwischen den Gruppen durchgeführt, um die Verarbeitungsgeschwindigkeit zu erhöhen. Die "Aufgabenseitengröße" bestimmt die Größe der Gruppen. Je größer die Seitengröße ist, desto geringer ist die Wahrscheinlichkeit, dass zusammenhängender Text zwischen den Seiten in verschiedene Teile aufgeteilt wird.',
      addPage: 'Seite hinzufügen',
      greaterThan: 'Der aktuelle Wert muss größer als bis sein!',
      greaterThanPrevious:
        'Der aktuelle Wert muss größer als der vorherige bis sein!',
      selectFiles: 'Dateien auswählen',
      changeSpecificCategory: 'Bestimmte Kategorie ändern',
      uploadTitle: 'Klicken oder ziehen Sie die Datei in diesen Bereich zum Hochladen',
      uploadDescription:
        'Unterstützung für Einzel- oder Massenupload. Das Hochladen von Unternehmensdaten oder anderen verbotenen Dateien ist streng verboten.',
      chunk: 'Teil',
      bulk: 'Massen',
      cancel: 'Abbrechen',
    },
    knowledgeConfiguration: {
      titleDescription:
        'Aktualisieren Sie hier insbesondere die Parsingmethode Ihre Wissensdatenbankdetails.',
      name: 'Name der Wissensdatenbank',
      photo: 'Foto der Wissensdatenbank',
      description: 'Beschreibung',
      language: 'Sprache',
      languageMessage: 'Bitte geben Sie Ihre Sprache an!',
      languagePlaceholder: 'Bitte geben Sie Ihre Sprache ein!',
      permissions: 'Berechtigungen',
      embeddingModel: 'Einbettungsmodell',
      chunkTokenNumber: 'Tokenanzahl pro Teil',
      chunkTokenNumberMessage: 'Tokenanzahl pro Teil ist erforderlich',
      embeddingModelTip:
        "Das verwendete Einbettungsmodell für die Teile. Es ist unveränderlich, sobald die Wissensdatenbank Teile hat. Sie müssen alle Teile löschen, wenn Sie es ändern möchten.",
      permissionsTip:
        "Wenn die Berechtigung 'Team' ist, kann jedes Teammitglied die Wissensdatenbank verwalten.",
      chunkTokenNumberTip:
        'Bestimmt die ungefähre Tokenanzahl eines Teils.',
      chunkMethod: 'Teilungsmethode',
      chunkMethodTip: 'Die Anweisung befindet sich rechts.',
      upload: 'Hochladen',
      english: 'Englisch',
      german: 'Deutsch',
      embeddingModelPlaceholder: 'Bitte wählen Sie ein Einbettungsmodell aus',
      chunkMethodPlaceholder: 'Bitte wählen Sie eine Teilungsmethode aus',
      save: 'Speichern',
      me: 'Nur ich',
      team: 'Team',
      cancel: 'Abbrechen',
      methodTitle: 'Beschreibung der Teilungsmethode',
      methodExamples: 'Beispiele',
      methodExamplesDescription:
        'Die folgenden Screenshots dienen zum besseren Verständnis.',
      dialogueExamplesTitle: 'Dialogbeispiele',
      methodEmpty:
        'Dadurch wird eine visuelle Erklärung der Kategorien der Wissensbasis angezeigt',
      book: `<p>Unterstützte Dateiformate sind <b>DOCX</b>, <b>PDF</b>, <b>TXT</b>.</p><p>
        Da ein Buch lang ist und nicht alle Teile nützlich sind, stellen Sie bitte für jedes Buch <i>Seitenbereiche</i> ein, um negative Effekte zu eliminieren und Rechenzeit für die Analyse zu sparen.</p>`,
      laws: `<p>Unterstützte Dateiformate sind <b>DOCX</b>, <b>PDF</b>, <b>TXT</b>.</p><p>
        Rechtsdokumente haben ein sehr strenges Schreibformat. Wir verwenden Textmerkmale, um Trennpunkte zu erkennen.
        </p><p>
        Die Granularität der Segmente ist konsistent mit 'ARTIKEL', und aller übergeordneter Text wird im Segment enthalten sein.
        </p>`,
      manual: `<p>Nur <b>PDF</b> wird unterstützt.</p><p>
        Wir gehen davon aus, dass Handbücher eine hierarchische Abschnittsstruktur haben. Wir verwenden die niedrigsten Abschnittstitel als Drehpunkte zum Teilen der Dokumente.
        Daher werden Figuren und Tabellen im gleichen Abschnitt nicht getrennt, und die Segmentgröße könnte groß sein.
        </p>`,
      naive: `<p>Unterstützte Dateiformate sind <b>DOCX, EXCEL, PPT, BILD, PDF, TXT</b>.</p>
        <p>Diese Methode wendet einfache Wege zum Segmentieren von Dateien an: </p>
        <p>
        <li>Aufeinanderfolgender Text wird mit einem Modell zur Sichterkennung in Stücke geschnitten.</li>
        <li>Danach werden diese aufeinanderfolgenden Stücke zu Segmenten zusammengefügt, deren Tokenanzahl 'Tokenanzahl' nicht überschreitet.</li></p>`,
      paper: `<p>Nur <b>PDF</b>-Dateien werden unterstützt.</p><p>
        Wenn unser Modell gut funktioniert, wird das Papier nach seinen Abschnitten aufgeteilt, wie <i>Abstract, 1.1, 1.2</i> usw. </p><p>
        Der Vorteil dabei ist, dass das LLM den Inhalt der relevanten Abschnitte im Papier besser zusammenfassen kann,
        was zu umfassenderen Antworten führt, die den Lesern helfen, das Papier besser zu verstehen.
        Der Nachteil ist, dass es den Kontext des LLM-Gesprächs erhöht und zusätzliche Rechenkosten verursacht,
        daher könnten Sie während des Gesprächs erwägen, die Einstellung '<b>topN</b>' zu reduzieren.</p>`,
      presentation: `<p>Die unterstützten Dateiformate sind <b>PDF</b>, <b>PPTX</b>.</p><p>
        Jede Seite wird als Abschnitt behandelt. Und ein Miniaturbild jeder Seite wird gespeichert.</p><p>
        <i>Alle hochgeladenen PPT-Dateien werden automatisch nach dieser Methode zerteilt, eine Einrichtung für jede PPT-Datei ist nicht notwendig.</i></p>`,
      qa: `
        <p>
          Diese Zerteilungsmethode unterstützt die Dateiformate <b>EXCEL</b> und <b>CSV/TXT</b>.
        </p>
        <li>
          Wenn die Datei im <b>Excel</b>-Format vorliegt, sollte sie aus zwei Spalten bestehen
          ohne Überschriften: eine für Fragen und die andere für Antworten, wobei die Fragenspalte der Antwortspalte vorausgeht. Mehrere Blätter sind akzeptabel, solange die Spalten korrekt strukturiert sind.
        </li>
        <li>
          Wenn die Datei im <b>CSV/TXT</b>-Format ist, muss sie UTF-8-kodiert sein mit TAB
          als Trennzeichen, um Fragen und Antworten zu trennen.
        </li>
        <p>
          <i>
            Textzeilen, die den oben genannten Regeln nicht folgen, werden ignoriert, und
            jedes Q&A-Paar wird als ein eigener Abschnitt betrachtet.
          </i>
        </p>
        `,
      resume: `<p>Die unterstützten Dateiformate sind <b>DOCX</b>, <b>PDF</b>, <b>TXT</b>.
        </p><p>
        Lebensläufe kommen in einer Vielzahl von Formaten, genau wie die Persönlichkeit einer Person, aber wir müssen sie oft in strukturierte Daten organisieren, die leicht zu durchsuchen sind.
        </p><p>
        Anstatt den Lebenslauf zu zerteilen, analysieren wir den Lebenslauf in strukturierte Daten. Als Personalverantwortlicher können Sie alle Lebensläufe, die Sie haben, ablegen,
        dann können Sie alle Kandidaten auflisten, die den Qualifikationen entsprechen, einfach indem Sie mit <i>'RAGFlow'</i> sprechen.
        </p>
        `,
      table: `<p><b>EXCEL</b> und <b>CSV/TXT</b> Dateiformate werden unterstützt.</p><p>
        Hier sind einige Tipps:
        <ul>
        <li>Für CSV- oder TXT-Dateien ist das Trennzeichen zwischen den Spalten ein <em><b>TAB</b></em>.</li>
        <li>Die erste Zeile muss Spaltenüberschriften enthalten.</li>
        <li>Spaltenüberschriften müssen aussagekräftige Begriffe sein, damit unser LLM sie verstehen kann.
        Es ist gut, einige Synonyme mit einem Schrägstrich <i>'/'</i> zu trennen, und noch besser, Werte in Klammern wie <i>'gender/sex(male, female)'</i> aufzuzählen.
          <p>Hier sind einige Beispiele für Überschriften:
            <ol>
              <li>supplier/vendor<b>'TAB'</b>color(yellow, red, brown)<b>'TAB'</b>gender/sex(male, female)<b>'TAB'</b>size(M,L,XL,XXL)</li>
              <li>Name/Vorname<b>'TAB'</b>Telefon/Handy/WeChat<b>'TAB'</b>Höchster Bildungsabschluss (Gymnasium, Berufsgymnasium, Master, Bachelor, Doktor, Mittelschule, Berufsausbildung, Technikerschule, Fachhochschule, Aufstiegsfortbildung, MPA, MBA, EMBA)</li>
            </ol>
          </p>
        </li>
        <li>Jede Zeile in der Tabelle wird als ein Abschnitt behandelt.</li>
        </ul>`,
      picture: `
        <p>Bilddateien werden unterstützt. Video kommt bald.</p><p>
        Wenn das Bild Text enthält, wird OCR angewendet, um den Text als Textbeschreibung zu extrahieren.
        </p><p>
        Wenn der durch OCR extrahierte Text nicht ausreicht, wird ein visuelles LLM verwendet, um die Beschreibungen zu erhalten.
        </p>`,
      one: `
        <p>Unterstützte Dateiformate sind <b>DOCX, EXCEL, PDF, TXT</b>.
        </p><p>
        Bei einem Dokument wird es als ein ganzer Block behandelt, ohne Aufteilung.
        </p><p>
        Wenn Sie etwas zusammenfassen möchten, das den gesamten Kontext eines Artikels benötigt und die Kontextlänge des ausgewählten LLM die Dokumentenlänge abdeckt, können Sie diese Methode ausprobieren.
        </p>`,
        },
    chunk: {
      chunk: 'Block',
      bulk: 'Massen',
      selectAll: 'Alle auswählen',
      enabledSelected: 'Ausgewählte aktivieren',
      disabledSelected: 'Ausgewählte deaktivieren',
      deleteSelected: 'Ausgewählte löschen',
      search: 'Suche',
      all: 'Alle',
      enabled: 'Aktiviert',
      disabled: 'Deaktiviert',
      keyword: 'Schlüsselwort',
      function: 'Funktion',
      chunkMessage: 'Bitte Wert eingeben!',
    },
    chat: {
      createAssistant: 'Assistent erstellen',
      assistantSetting: 'Assistenten-Einstellung',
      promptEngine: 'Prompt-Engine',
      modelSetting: 'Modell-Einstellung',
      chat: 'Chat',
      newChat: 'Neuer Chat',
      send: 'Senden',
      sendPlaceholder: 'Nachrichtenassistenten fortsetzen...',
      chatConfiguration: 'Chat-Konfiguration',
      chatConfigurationDescription:
        ' Hier, richten Sie einen speziellen Assistenten für Ihre speziellen Wissensdatenbanken ein! 💕',
      assistantName: 'Name des Assistenten',
      assistantNameMessage: 'Name des Assistenten ist erforderlich',
      namePlaceholder: 'z.B. Lebenslauf Jarvis',
      assistantAvatar: 'Avatar des Assistenten',
      language: 'Sprache',
      emptyResponse: 'Leere Antwort',
      emptyResponseTip: `Wenn mit der Frage des Benutzers nichts aus der Wissensdatenbank abgerufen wird, wird dies als Antwort verwendet. Wenn Sie möchten, dass LLM seine eigene Meinung äußert, wenn nichts abgerufen wird, lassen Sie dieses Feld leer.`,
      setAnOpener: 'Einen Öffner setzen',
      setAnOpenerInitial: `Hallo! Ich bin Ihr Assistent, was kann ich für Sie tun?`,
      setAnOpenerTip: 'Wie möchten Sie Ihre Kunden begrüßen?',
      knowledgeBases: 'Wissensdatenbanken',
      knowledgeBasesMessage: 'Bitte auswählen',
      knowledgeBasesTip: 'Zugehörige Wissensdatenbanken auswählen.',
      system: 'System',
      systemInitialValue: `Sie sind ein intelligenter Assistent. Bitte fassen Sie den Inhalt der Wissensdatenbank zusammen, um die Frage zu beantworten. Bitte listen Sie die Daten in der Wissensdatenbank auf und antworten Sie detailliert. Wenn der gesamte Inhalt der Wissensdatenbank für die Frage irrelevant ist, muss Ihre Antwort den Satz 'Die gesuchte Antwort befindet sich nicht in der Wissensdatenbank!' enthalten. Antworten müssen die Chat-Historie berücksichtigen.
      Hier ist die Wissensdatenbank:
      {knowledge}
      Das oben Genannte ist die Wissensdatenbank.`,
      systemMessage: 'Bitte eingeben!',
      systemTip:
        'Anweisungen, denen LLM folgen muss, wenn LLM Fragen beantwortet, wie Charakterdesign, Antwortlänge und Antwortssprache usw.',
      topN: 'Top N',
      topNTip: `Nicht alle Blöcke, deren Ähnlichkeitswert über der 'Ähnlichkeitsschwelle' liegt, werden an LLMs gefüttert. LLM kann nur diese 'Top N' Blöcke sehen.`,
      variable: 'Variable',
      variableTip: `Wenn Sie Dialog-APIs verwenden, können die Variablen Ihnen helfen, mit Ihren Kunden mit unterschiedlichen Strategien zu chatten. 
      Die Variablen werden verwendet, um den 'System'-Teil im Prompt auszufüllen, um LLM einen Hinweis zu geben.
      Die 'Wissensdatenbank' ist eine sehr spezielle Variable, die mit den abgerufenen Blöcken gefüllt wird.
      Alle Variablen im 'System' sollten in geschweiften Klammern stehen.`,
      add: 'Hinzufügen',
      key: 'Schlüssel',
      optional: 'Optional',
      operation: 'Operation',
      model: 'Modell',
      modelTip: 'Großes Sprach-Chat-Modell',
      modelMessage: 'Bitte auswählen!',
      freedom: 'Freiheit',
      improvise: 'Improvisieren',
      precise: 'Präzise',
      balance: 'Balance',
      freedomTip: `'Präzise' bedeutet, dass das LLM vorsichtig ist und Ihre Frage vorsichtig beantwortet. 'Improvisieren' bedeutet, dass Sie möchten, dass LLM viel und frei spricht. 'Balance' liegt zwischen vorsichtig und frei.`,
      temperature: 'Temperatur',
      temperatureMessage: 'Temperatur ist erforderlich',
      temperatureTip:
        'Dieser Parameter steuert die Zufälligkeit der Vorhersagen durch das Modell. Eine niedrigere Temperatur macht das Modell sicherer in seinen Antworten, während eine höhere Temperatur es kreativer und vielfältiger macht.',
      topP: 'Top P',
      topPMessage: 'Top P ist erforderlich',
      topPTip:
        'Auch bekannt als „Nukleus-Auswahl“, setzt dieser Parameter eine Schwelle, um eine kleinere Auswahl an Wörtern für die Stichprobe auszuwählen. Er konzentriert sich auf die wahrscheinlichsten Wörter und schneidet die weniger wahrscheinlichen ab.',
      presencePenalty: 'Anwesenheitsstrafe',
      presencePenaltyMessage: 'Anwesenheitsstrafe ist erforderlich',
      presencePenaltyTip:
        'Dies entmutigt das Modell, dieselben Informationen zu wiederholen, indem Wörter, die bereits im Gespräch erschienen sind, bestraft werden.',
      frequencyPenalty: 'Häufigkeitsstrafe',
      frequencyPenaltyMessage: 'Häufigkeitsstrafe ist erforderlich',
      frequencyPenaltyTip:
        'Ähnlich wie die Anwesenheitsstrafe reduziert dies die Tendenz des Modells, dieselben Wörter häufig zu wiederholen.',
      maxTokens: 'Maximale Tokens',
      maxTokensMessage: 'Maximale Tokens sind erforderlich',
      maxTokensTip:
        'Dies legt die maximale Länge der Ausgabe des Modells fest, gemessen an der Anzahl der Tokens (Wörter oder Wortteile).',
      quote: 'Zitat anzeigen',
      quoteTip: 'Soll die Quelle des Originaltextes angezeigt werden?',
      overview: 'Chat Bot API',
      pv: 'Anzahl der Nachrichten',
      uv: 'Anzahl aktiver Benutzer',
      speed: 'Token-Ausgabegeschwindigkeit',
      tokens: 'Verbrauchte Token-Anzahl',
      round: 'Anzahl der Sitzungsinteraktionen',
      thumbUp: 'Kundenzufriedenheit',
      preview: 'Vorschau',
      embedded: 'Eingebettet',
      serviceApiEndpoint: 'Service-API-Endpunkt',
      apiKey: 'API-Schlüssel',
      apiReference: 'API-Dokumente',
      dateRange: 'Datumsbereich:',
      backendServiceApi: 'Backend-Service-API',
      createNewKey: 'Neuen Schlüssel erstellen',
      created: 'Erstellt',
      action: 'Aktion',
      embedModalTitle: 'In Website einbetten',
      comingSoon: 'Demnächst',
      fullScreenTitle: 'Vollständig einbetten',
      fullScreenDescription:
        'Betten Sie den folgenden iFrame an der gewünschten Stelle auf Ihrer Website ein',
      partialTitle: 'Teilweise einbetten',
      extensionTitle: 'Chrome-Erweiterung',
      tokenError: 'Bitte erstellen Sie zuerst einen API-Schlüssel!',
    },
    setting: {
      profile: 'Profil',
      profileDescription: 'Aktualisieren Sie hier Ihr Foto und Ihre persönlichen Daten.',
      password: 'Passwort',
      passwordDescription:
        'Bitte geben Sie Ihr aktuelles Passwort ein, um es zu ändern.',
      model: 'Modellanbieter',
      modelDescription: 'Stellen Sie hier den Modellparameter und den API-Schlüssel ein.',
      team: 'Team',
      logout: 'Abmelden',
      username: 'Benutzername',
      usernameMessage: 'Bitte geben Sie Ihren Benutzernamen ein!',
      photo: 'Ihr Foto',
      photoDescription: 'Dies wird in Ihrem Profil angezeigt.',
      colorSchema: 'Farbschema',
      colorSchemaMessage: 'Bitte wählen Sie Ihr Farbschema!',
      colorSchemaPlaceholder: 'Wählen Sie Ihr Farbschema',
      bright: 'Hell',
      dark: 'Dunkel',
      timezone: 'Zeitzone',
      timezoneMessage: 'Bitte geben Sie Ihre Zeitzone ein!',
      timezonePlaceholder: 'Wählen Sie Ihre Zeitzone',
      email: 'E-Mail-Adresse',
      emailDescription: 'Nach der Registrierung kann die E-Mail nicht geändert werden.',
      currentPassword: 'Aktuelles Passwort',
      currentPasswordMessage: 'Bitte geben Sie Ihr Passwort ein!',
      newPassword: 'Neues Passwort',
      newPasswordMessage: 'Bitte geben Sie Ihr Passwort ein!',
      newPasswordDescription:
        'Ihr neues Passwort muss mehr als 8 Zeichen umfassen.',
      confirmPassword: 'Neues Passwort bestätigen',
      confirmPasswordMessage: 'Bitte bestätigen Sie Ihr Passwort!',
      confirmPasswordNonMatchMessage:
        'Das eingegebene neue Passwort stimmt nicht überein!',
      cancel: 'Abbrechen',
      addedModels: 'Hinzugefügte Modelle',
      modelsToBeAdded: 'Hinzuzufügende Modelle',
      addTheModel: 'Modell hinzufügen',
      apiKey: 'API-Schlüssel',
      apiKeyMessage: 'Bitte geben Sie den API-Schlüssel ein!',
      apiKeyTip:
        'Der API-Schlüssel kann durch Registrierung beim entsprechenden LLM-Anbieter erhalten werden.',
      showMoreModels: 'Mehr Modelle anzeigen',
      baseUrl: 'Basis-URL',
      baseUrlTip:
        'Wenn Ihr API-Schlüssel von OpenAI stammt, ignorieren Sie es. Andere Zwischenanbieter geben diese Basis-URL mit dem API-Schlüssel an.',
      modify: 'Ändern',
      systemModelSettings: 'Systemmodell-Einstellungen',
      chatModel: 'Chatmodell',
      chatModelTip:
        'Das Standard-Chat-LLM, das alle neu erstellten Wissensdatenbanken verwenden werden.',
      embeddingModel: 'Einbettungsmodell',
      embeddingModelTip:
        'Das Standard-Einbettungsmodell, das alle neu erstellten Wissensdatenbanken verwenden werden.',
      img2txtModel: 'Bild-zu-Text-Modell',
      img2txtModelTip:
        'Das Standard-Multi-Modul-Modell, das alle neu erstellten Wissensdatenbanken verwenden werden. Es kann ein Bild oder Video beschreiben.',
      sequence2txtModel: 'Sequenz-zu-Text-Modell',
      sequence2txtModelTip:
        'Das Standard-ASR-Modell, das alle neu erstellten Wissensdatenbanken verwenden werden. Verwenden Sie dieses Modell, um Stimmen in entsprechenden Text zu übersetzen.',
      workspace: 'Arbeitsbereich',
      upgrade: 'Upgrade',
      addLlmTitle: 'LLM hinzufügen',
      modelName: 'Modellname',
      modelUid: 'Modell-UID',
      modelNameMessage: 'Bitte geben Sie Ihren Modellnamen ein!',
      modelType: 'Modelltyp',
      modelTypeMessage: 'Bitte geben Sie Ihren Modelltyp ein!',
      addLlmBaseUrl: 'Basis-URL hinzufügen',
      baseUrlNameMessage: 'Bitte geben Sie Ihre Basis-URL ein!',
      vision: 'Unterstützt Vision?',
      ollamaLink: 'Wie integriert man {{name}}?',
    },
    message: {
      registered: 'Registriert!',
      logout: 'Abmelden',
      logged: 'Eingeloggt!',
      pleaseSelectChunk: 'Bitte wählen Sie ein Stück aus!',
      modified: 'Geändert',
      created: 'Erstellt',
      deleted: 'Gelöscht',
      renamed: 'Umbenannt',
      operated: 'Bearbeitet',
      updated: 'Aktualisiert',
      200: 'Der Server gibt die angeforderten Daten erfolgreich zurück.',
      201: 'Daten erfolgreich erstellt oder modifiziert.',
      202: 'Eine Anfrage wurde im Hintergrund eingereiht (asynchrone Aufgabe).',
      204: 'Daten erfolgreich gelöscht.',
      400: 'Es gab einen Fehler in der Anfrage, und der Server hat keine Daten erstellt oder modifiziert.',
      401: 'Der Benutzer hat keine Berechtigungen (falsches Token, Benutzername, Passwort).',
      403: 'Der Benutzer ist autorisiert, aber der Zugriff ist verboten.',
      404: 'Die Anfrage wurde für einen Datensatz gemacht, der nicht existiert, und der Server hat den Vorgang nicht durchgeführt.',
      406: 'Das angeforderte Format ist nicht verfügbar.',
      410: 'Die angeforderte Ressource wurde dauerhaft gelöscht und wird nicht wieder verfügbar sein.',
      422: 'Bei der Erstellung eines Objekts trat ein Validierungsfehler auf.',
      500: 'Ein Serverfehler ist aufgetreten, bitte überprüfen Sie den Server.',
      502: 'Gateway-Fehler.',
      503: 'Der Dienst ist nicht verfügbar, und der Server ist vorübergehend überlastet oder wird gewartet.',
      504: 'Gateway-Zeitüberschreitung.',
      requestError: 'Anfragefehler',
      networkAnomalyDescription:
        'Es gibt eine Anomalie in Ihrem Netzwerk, und Sie können keine Verbindung zum Server herstellen.',
      networkAnomaly: 'Netzwerkanomalie',
      hint: 'Hinweis',
    },
    footer: {
      profile: 'Alle Rechte vorbehalten @ React',
    },
    layout: {
      file: 'Datei',
      knowledge: 'Wissen',
      chat: 'Chat',
    },
  },
};