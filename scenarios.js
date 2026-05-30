const ScenariosBank = [
  {
    id: "conacul-groazei",
    title: "Conacul Groazei (4-6 Jucători)",
    min_players: 4,
    theme: "Mister la conac",
    timeMinutes: 15,
    game_data: {
      initial_premise: "Sunteți invitați la cina Lordului de Cornwell. Dintr-o dată, lumina se stinge, iar Lordul este găsit lovit cu o statuetă de bronz în bibliotecă. Ușile sunt blocate, iar criminalul este printre voi.",
      final_resolution: "[P1] a furat statueta și l-a lovit pe Lord din cauza unor datorii la jocuri de noroc, profitând de faptul că [P2] a tăiat curentul încercând să fure o sticlă de vin scump."
    },
    players_template: [
      { placeholder: "[P1]", role: "Vinovat", motive: "Aveai datorii uriașe la Lord pe care trebuia să le plătești azi.", hidden_secret: "Ai mințit că erai la baie când s-a oprit lumina; de fapt, căutai prin sertarele din bibliotecă.", accomplices: [] },
      { placeholder: "[P2]", role: "Inocent", motive: "Lordul tocmai te-a scos din testament.", hidden_secret: "Tu ai oprit curentul ca să furi un vin din cramă pe întuneric, dar nu ai ucis pe nimeni.", accomplices: [] },
      { placeholder: "[P3]", role: "Inocent", motive: "Ești moștenitorul principal.", hidden_secret: "În momentul crimei plângeai pe hol pentru că ți-ai pierdut verigheta și îți era rușine să recunoști.", accomplices: [] },
      { placeholder: "[P4]", role: "Inocent", motive: "Niciunul. Ești doar bucătarul/bucătăreasa.", hidden_secret: "Ai adormit în cămară după ce ai băut niște țuică și nu ai auzit absolut nimic din ce s-a întâmplat.", accomplices: [] },
      { placeholder: "[P5]", role: "Inocent", motive: "Ai fost șantajat de Lord cu niște poze.", hidden_secret: "Aveai biletele de tren în buzunar, planificai să fugi din țară în această seară.", accomplices: [] },
      { placeholder: "[P6]", role: "Inocent", motive: "Erai amantul/amanta soției Lordului.", hidden_secret: "Ai ascuns o scrisoare de dragoste sub covor exact când s-a stins lumina.", accomplices: [] }
    ],
    investigation_events: [
      { trigger_at_remaining_minutes: 12, type: "public", content: "Lângă cadavru s-a găsit un bilet de tren pătat de noroi." },
      { trigger_at_remaining_minutes: 9, type: "public", content: "Cineva l-a văzut pe [P2] umblând târâș la panoul electric chiar înainte de incident." },
      { trigger_at_remaining_minutes: 6, type: "private", targeted_player: "[P1]", truth: "Ai sânge pe mânecă.", content: "Observi cu groază că ai o pată de sânge pe manșeta cămășii. Ascunde-o sau dă vina pe întuneric dacă cineva te întreabă!" },
      { trigger_at_remaining_minutes: 3, type: "public", content: "Poliția, prin stație, vă anunță că statueta crimei are urme de praf de la sertarele din bibliotecă." }
    ]
  },
  {
    id: "jaful-din-muzeu",
    title: "Jaful din Muzeu (3-5 Jucători)",
    min_players: 3,
    theme: "Jaf de artă",
    timeMinutes: 10,
    game_data: {
      initial_premise: "Alarma Muzeului Național a pornit. Faimosul tablou 'Doamna în Roșu' a dispărut din ramă. Singurii oameni din clădire sunteți voi, echipa de curățenie și paznicii de noapte.",
      final_resolution: "[P1] a decupat tabloul și l-a ascuns în căruciorul de curățenie, în timp ce [P2] a distras atenția la camerele de supraveghere."
    },
    players_template: [
      { placeholder: "[P1]", role: "Vinovat", motive: "Ai primit o ofertă de 1 milion de euro pe piața neagră pentru tablou.", hidden_secret: "Ai un cutter profesional ascuns în cizmă.", accomplices: [] },
      { placeholder: "[P2]", role: "Inocent", motive: "Ai fost retrogradat din funcția de șef al securității.", hidden_secret: "Fix în timpul jafului, erai pe telefon cu iubita/iubitul tău și nu te uitai la camere.", accomplices: [] },
      { placeholder: "[P3]", role: "Inocent", motive: "Ai nevoie disperată de un împrumut.", hidden_secret: "Ai dat accidental cu mopul peste sistemul de alarmă și credeai că tu l-ai declanșat din greșeală.", accomplices: [] },
      { placeholder: "[P4]", role: "Inocent", motive: "Vrei să te răzbuni pe directorul muzeului.", hidden_secret: "Ai intrat în biroul directorului să-i citești dosarele confidențiale în loc să speli pe jos.", accomplices: [] },
      { placeholder: "[P5]", role: "Inocent", motive: "Ești un colecționar obsedat care s-a deghizat în om de serviciu.", hidden_secret: "Mângâiai o altă statuie din muzeu în momentul jafului.", accomplices: [] }
    ],
    investigation_events: [
      { trigger_at_remaining_minutes: 8, type: "public", content: "Tabloul nu a fost smuls, ci decupat perfect, cu un cutter foarte ascuțit." },
      { trigger_at_remaining_minutes: 5, type: "private", targeted_player: "[P2]", truth: "Camerele erau oprite.", content: "Realizezi că serverul camerelor a fost scos din priză fix când tu stăteai de vorbă pe telefon. Dacă zici asta, te vor suspecta!" },
      { trigger_at_remaining_minutes: 2, type: "public", content: "S-a găsit o urmă de roată de la un cărucior de curățenie chiar sub rama goală." }
    ]
  }
];
