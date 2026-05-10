/* ============================================================
   BRUNCH.AR — MULTI-LANGUAGE SUPPORT
   Languages: ES (default) / CA / EN
   data-i18n="key"      → textContent swap
   data-i18n-html="key" → innerHTML swap (for tags like <br>)
   data-i18n-ph="key"   → placeholder swap
   data-i18n-title="key"→ title attribute swap
   data-i18n-aria="key" → aria-label swap
   ============================================================ */

'use strict';

const LANG_KEY = 'preferred_lang';

function lsGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
function lsSet(key, val) { try { localStorage.setItem(key, val); } catch { /* unavailable */ } }

window.i18n = {
  es: {
    nav: {
      about:       'Nosotros',
      menu:        'Menú',
      gallery:     'Galería',
      findus:      'Encuéntranos',
      reserve:     'Reservar',
      skip:        'Saltar al contenido',
      hamburger:   'Abrir menú de navegación',
      mobile_menu: 'Menú de navegación',
      primary:     'Navegación principal',
      mobile_nav:  'Navegación',
      lang_group:  'Selector de idioma',
      footer_nav:  'Pie de página',
      back_top:    'Volver al inicio',
      logo:        'Brunch.ar — inicio',
    },
    hero: {
      badge:       'Brunch Argentino · Barcelona',
      title:       'El sabor de Buenos Aires en el corazón del Eixample',
      subtitle:    'Desayunos y brunchs llenos de alma argentina. Miércoles a domingo de 9:00 a 16:00.',
      cta_reserve: 'Reservar por WhatsApp',
      cta_menu:    'Ver Menú Completo',
      hours:       'Mié–Dom · 9:00–16:00',
      petfriendly: 'Pet Friendly',
      loading:     'Cargando Brunch.ar',
    },
    strip: {
      hours:       'Mié–Dom · 9:00–16:00',
      address:     'C/ de Padilla, 170, Eixample',
      petfriendly: 'Pet Friendly',
      sabor:       'Sabor Argentino',
      label:       'Información rápida',
    },
    about: {
      overline:        'Nuestra Historia',
      title:           'Alma argentina en el corazón de Barcelona',
      p1:              'Brunch.ar nació del amor por los desayunos y brunches del Río de la Plata. Desde el Eixample de Barcelona, traemos el ritual del café con medialunas, los huevos revueltos perfectos y la tostada de palta que se merece tu mañana.',
      p2:              'Un espacio cálido, luminoso y pet friendly donde el tiempo se detiene. Ingredientes frescos, recetas con alma y un equipo que pone el corazón en cada plato.',
      tag_petfriendly: '🐾 Pet Friendly',
      tag_coffee:      '☕ Café de especialidad',
      tag_vegan:       '🌱 Opciones veganas',
      tag_homemade:    '🏠 Hecho en casa',
    },
    menu: {
      overline:     'El Menú',
      title:        'Lo que más nos piden',
      cat_brunch:   'Brunch',
      cat_lunch:    'Lunch',
      cat_share:    'To Share',
      cat_drinks:   'Soft Drinks',
      cat_bar:      'B.ar',
      cat_cafeteria: 'Cafeteria',
      see_full:     'Ver menú completo',
      must_try:     'Favorito',

      /* ── Brunch ─────────────────────────────────────── */
      eggs_benedict: {
        name: 'Eggs Benedict',
        desc: 'English muffin, huevos escalfados, salsa holandesa, patatas baby y ensalada. Elige: Bacon crujiente, Espinacas o Salmón noruego (+€3,5)',
      },
      english_breakfast: {
        name: 'English Breakfast',
        desc: 'Huevos revueltos, alubias, bacon crujiente, butifarra, hash browns, tomates cherry confitados, champiñones a la plancha, pan tostado',
      },
      american_breakfast: {
        name: 'American Breakfast',
        desc: 'Pancakes con sirope de arce, huevos revueltos, bacon crujiente, patatas baby',
      },
      avocado_toast: {
        name: 'Avocado Toast',
        desc: 'Aguacate machacado sobre pan de pueblo, crème fraîche, semillas, encurtidos de cebolla. Añade: huevo escalfado +€1,5 · salmón +€3,5 · patatas baby +€2,5',
      },
      scrambled_eggs: {
        name: 'Huevos Revueltos',
        desc: 'Sobre pan de pueblo tostado y rábano',
      },
      tortilla: {
        name: 'Tortilla',
        desc: 'Tortilla de patata y cebolla estilo español, pan con tomate',
      },
      ham_sandwich: {
        name: 'Bocadillo de Jamón',
        desc: 'Pan crujiente, jamón ibérico, tomates catalanes, aceite de oliva virgen extra',
      },
      pancakes: {
        name: 'Pancakes',
        desc: '3 pancakes apilados. Sirope de arce y mantequilla / Frutas de temporada +€1 / Dulce de Leche +€1 / Mascarpone y frutos rojos +€2',
      },
      acai_bowl: {
        name: 'Açaí Bowl',
        desc: 'Sin azúcar, fruta de temporada, leche de chía, nueces garrapiñadas y coco rallado',
      },
      healthy_bowl: {
        name: 'Healthy Bowl',
        desc: 'Yogur con granola, leche y frutas de temporada',
      },
      medialunas: {
        name: 'Medialunas',
        desc: 'Croissant estilo argentino €2 · Pistacho €4 · Jamón y queso €4 · Nutella €3,5 · Promo: Café + 2 medialunas €5,9',
      },

      /* ── Lunch ──────────────────────────────────────── */
      cheeseburger: {
        name: 'Cheeseburger',
        desc: 'Dos medallones de ternera, brioche, bacon crujiente, pepinillos, patatas fritas caseras. Añade: bacon +€1,5, huevo frito +€1,5',
      },
      roastbeef_sandwich: {
        name: 'Roastbeef Sandwich',
        desc: 'Ternera al horno en mostaza y hierbas, pepinillos, lechuga, salsa de alcaparras y anchoas, patatas fritas caseras',
      },
      pulled_pork: {
        name: 'Pulled Pork Sandwich',
        desc: 'Cerdo cocinado a fuego lento, cheddar fundido, salsa barbacoa ahumada, pepinillos de pepino, cebolla caramelizada, patatas fritas caseras',
      },
      milanesas: {
        name: 'Milanesas',
        desc: 'Milanesa de ternera con patatas fritas y ensalada. Añade salsa de tomate y queso +€3 o 2 huevos fritos +€3',
      },
      burrata_salad: {
        name: 'Ensalada de Burrata',
        desc: 'Rúcula, hojas verdes variadas, tomates cherry, peras confitadas, encurtidos, burrata, vinagreta de la casa. Añade salmón +€3,5, jamón +€2,5',
      },

      /* ── To Share ───────────────────────────────────── */
      fries: {
        name: 'Brunch.ar Fries',
        desc: 'Patatas fritas caseras con salsa de mayonesa de pimiento rojo y cilantro',
      },
      provoleta: {
        name: 'Provoleta',
        desc: 'Queso provolone crujiente con chimichurri, pimientos rojos asados y vinagre balsámico',
      },
      hummus: {
        name: 'Hummus',
        desc: 'Encurtidos caseros y pan de masa madre',
      },

      /* ── Soft Drinks ────────────────────────────────── */
      sodas:           { name: 'Refrescos' },
      bottled_water:   { name: 'Agua embotellada' },
      sparkling_water: { name: 'Agua con gas' },
      apple_juice:     { name: 'Zumo de manzana' },
      pineapple_juice: { name: 'Zumo de piña' },
      peach_juice:     { name: 'Zumo de melocotón' },

      /* ── B.ar ───────────────────────────────────────── */
      alhambra_clasica: {
        name: 'Alhambra Clásica',
        desc: 'Pequeña / Grande',
      },
      alhambra_roja: {
        name: 'Alhambra Roja',
        desc: 'Pequeña / Grande',
      },
      alhambra_ipa:   { name: 'Alhambra IPA' },
      corona:         { name: 'Corona' },
      wine: {
        name: 'Vino Tinto / Blanco',
        desc: 'Copa / Botella',
      },
      vermouth:       { name: 'Vermouth' },
      spritz_group:   { name: 'Aperol Spritz · Mimosa · Mojito' },
      cocktail_group: { name: 'Bloody Mary · Espresso Martini · Moscow Mule · Piña Colada · Cocktail Clásico' },

      /* ── Cafeteria ──────────────────────────────────── */
      espresso:    { name: 'Espresso / Doble Espresso' },
      macchiato:   { name: 'Macchiato' },
      americano:   { name: 'Americano' },
      cappuccino:  { name: 'Cappuccino / Latte' },
      flat_white:  { name: 'Flat White' },
      latte_xl:    { name: 'Latte XL / Ice Latte' },
      matcha_chai: { name: 'Matcha / Chai / Turmeric Latte' },
      dirty_chai:  { name: 'Dirty Chai Latte' },
      teas: {
        name: 'Tés e Infusiones',
        desc: 'English Breakfast · Alpine Berry · Tropical Green · Chamomile · Peppermint · African Rooibos',
      },
      oj_lemonade: {
        name: 'Zumo de naranja / Limonada',
        desc: 'Jarra de limonada €8,5',
      },
      detox: {
        name: 'Green Detox / Red Detox',
        desc: 'Zumos prensados en frío',
      },
      smoothies: {
        name: 'Batidos',
        desc: '2 frutas €5,5 · 3 frutas €7',
      },
    },
    gallery: {
      overline:      'Galería',
      title:         'Cada plato, una historia',
      cta:           'Síguenos en Instagram',
      grid:          'Galería de fotos de Brunch.ar',
      instagram_btn: 'Seguir a Brunch.ar en Instagram',
    },
    reviews: {
      overline:  'Reseñas',
      title:     'Lo que dicen nuestros clientes',
      average:   '4.8 de media en Google',
      stars_avg: '4.8 de 5 estrellas',
      stars_5:   '5 estrellas',
      source:    'Google · 5 ★',
      cta:       'Déjanos una reseña en Google',
      r1_text:   '"El mejor brunch que he tomado en Barcelona. Las empanadas son increíbles y el ambiente es súper acogedor. Volveré sin duda."',
      r1_author: 'Huw L.',
      r2_text:   '"Lugar encantador con mucho carácter. Los huevos benedict estaban perfectos y el café de especialidad, delicioso. Pet friendly, una ventaja enorme."',
      r2_author: 'Andreea M.S.',
      r3_text:   '"Auténtico sabor argentino en el Eixample. Las medialunas y el cheesecake son un must. Atención muy cálida y servicio rápido."',
      r3_author: 'Rodrigo V.',
      r4_text:   '"Hidden gem in Barcelona! The avocado toast and pancakes were outstanding. Loved the cosy atmosphere and that they welcome dogs."',
      r4_author: 'Joanna K.',
    },
    findus: {
      overline:      'Encuéntranos',
      title:         'Ven a vernos',
      address_label: 'Dirección',
      address:       'C/ de Padilla, 170, Eixample, 08013 Barcelona',
      hours_label:   'Horario',
      hours:         'Mié–Dom · 9:00–16:00',
      hours_detail:  'Mié–Dom · 9:00–16:00<br>Lun–Mar · Cerrado',
      phone_label:   'Teléfono',
      wa_title:      '¿Tienes mesa para mí?',
      wa_sub:        'Escríbenos por WhatsApp y te reservamos mesa ahora mismo.',
      wa_cta:        'Reservar por WhatsApp',
      map_label:     'Mapa de ubicación de Brunch.ar en el Eixample de Barcelona',
      map_link:      'Ver en Google Maps →',
    },
    footer: {
      tagline:      'Brunch argentino en el corazón del Eixample, Barcelona.',
      nav_heading:  'Menú',
      lang_heading: 'Idioma',
      privacy:      'Política de privacidad',
      copy:         '© 2025 Brunch.ar Barcelona. Todos los derechos reservados.',
    },
    cookie: {
      text:      'Usamos cookies para mejorar tu experiencia y analizar el tráfico. Puedes aceptar todas o solo las esenciales.',
      privacy:   'Política de privacidad',
      accept:    'Aceptar todas',
      necessary: 'Solo esenciales',
      banner:    'Aviso de cookies',
    },
    whatsapp: {
      message:   'Hola, me gustaría hacer una reserva en Brunch.ar 🥐',
      float_btn: 'Contactar por WhatsApp',
    },
  },

  /* ════════════════════════════════════════════════════════
     CATALÀ
  ════════════════════════════════════════════════════════ */
  ca: {
    nav: {
      about:       'Nosaltres',
      menu:        'Menú',
      gallery:     'Galeria',
      findus:      "Troba'ns",
      reserve:     'Reservar',
      skip:        'Salta al contingut',
      hamburger:   'Obrir el menú de navegació',
      mobile_menu: 'Menú de navegació',
      primary:     'Navegació principal',
      mobile_nav:  'Navegació',
      lang_group:  "Selector d'idioma",
      footer_nav:  'Peu de pàgina',
      back_top:    "Tornar a l'inici",
      logo:        'Brunch.ar — inici',
    },
    hero: {
      badge:       'Brunch Argentí · Barcelona',
      title:       "El sabor de Buenos Aires al cor de l'Eixample",
      subtitle:    "Esmorzars i brunchs plens d'ànima argentina. Dimecres a diumenge de 9:00 a 16:00.",
      cta_reserve: 'Reservar per WhatsApp',
      cta_menu:    'Veure Menú Complet',
      hours:       'Dim–Diu · 9:00–16:00',
      petfriendly: 'Pet Friendly',
      loading:     'Carregant Brunch.ar',
    },
    strip: {
      hours:       'Dim–Diu · 9:00–16:00',
      address:     'C/ de Padilla, 170, Eixample',
      petfriendly: 'Pet Friendly',
      sabor:       'Sabor Argentí',
      label:       'Informació ràpida',
    },
    about: {
      overline:        'La nostra història',
      title:           "Ànima argentina al cor de Barcelona",
      p1:              "Brunch.ar va néixer de l'amor pels esmorzars i brunchs del Río de la Plata. Des de l'Eixample de Barcelona, portem el ritual del cafè amb croissants, els ous remenats perfectes i la torrada d'alvocat que es mereix el teu matí.",
      p2:              "Un espai càlid, lluminós i pet friendly on el temps s'atura. Ingredients frescos, receptes amb ànima i un equip que posa el cor a cada plat.",
      tag_petfriendly: '🐾 Pet Friendly',
      tag_coffee:      '☕ Cafè de especialitat',
      tag_vegan:       '🌱 Opcions veganes',
      tag_homemade:    '🏠 Fet a casa',
    },
    menu: {
      overline:     'El Menú',
      title:        'El que més ens demanen',
      cat_brunch:   'Brunch',
      cat_lunch:    'Lunch',
      cat_share:    'To Share',
      cat_drinks:   'Soft Drinks',
      cat_bar:      'B.ar',
      cat_cafeteria: 'Cafeteria',
      see_full:     'Veure menú complet',
      must_try:     'Favorit',

      /* ── Brunch ─────────────────────────────────────── */
      eggs_benedict: {
        name: 'Eggs Benedict',
        desc: "English muffin, ous escaldats, salsa holandesa, patates baby i amanida. Tria: Bacon cruixent, Espinacs o Salmó noruec (+€3,5)",
      },
      english_breakfast: {
        name: 'English Breakfast',
        desc: "Ous remenats, mongetes, bacon cruixent, botifarra, hash browns, tomàquets cherry confitats, xampinyons a la planxa, pa torrat",
      },
      american_breakfast: {
        name: 'American Breakfast',
        desc: "Pancakes amb xarop d'auró, ous remenats, bacon cruixent, patates baby",
      },
      avocado_toast: {
        name: 'Avocado Toast',
        desc: "Alvocat aixafat sobre pa de pagès, crème fraîche, llavors, escabetx de ceba. Afegeix: ou escaldat +€1,5 · salmó +€3,5 · patates baby +€2,5",
      },
      scrambled_eggs: {
        name: 'Ous Remenats',
        desc: "Sobre pa de pagès torrat i rave",
      },
      tortilla: {
        name: 'Tortilla',
        desc: "Truita de patata i ceba estil espanyol, pa amb tomàquet",
      },
      ham_sandwich: {
        name: 'Entrepà de Pernil',
        desc: "Pa cruixent, pernil ibèric, tomàquets catalans, oli d'oliva verge extra",
      },
      pancakes: {
        name: 'Pancakes',
        desc: "3 pancakes apilats. Xarop d'auró i mantequilla / Fruita de temporada +€1 / Dulce de Leche +€1 / Mascarpone i fruits vermells +€2",
      },
      acai_bowl: {
        name: 'Açaí Bowl',
        desc: "Sense sucre, fruita de temporada, llet de xia, fruits secs caramel·litzats i coco ratllat",
      },
      healthy_bowl: {
        name: 'Healthy Bowl',
        desc: "Iogurt amb granola, llet i fruita de temporada",
      },
      medialunas: {
        name: 'Medialunas',
        desc: "Croissant estil argentí €2 · Festuc €4 · Pernil i formatge €4 · Nutella €3,5 · Promo: Cafè + 2 medialunas €5,9",
      },

      /* ── Lunch ──────────────────────────────────────── */
      cheeseburger: {
        name: 'Cheeseburger',
        desc: "Dos medallons de vedella, brioche, bacon cruixent, cogombrets, patates fregides casolanes. Afegeix: bacon +€1,5, ou ferrat +€1,5",
      },
      roastbeef_sandwich: {
        name: 'Roastbeef Sandwich',
        desc: "Vedella al forn amb mostassa i herbes, cogombrets, enciam, salsa de tàperes i anxoves, patates fregides casolanes",
      },
      pulled_pork: {
        name: 'Pulled Pork Sandwich',
        desc: "Porc cuit a foc lent, cheddar fos, salsa barbacoa fumada, cogombrets, ceba caramel·litzada, patates fregides casolanes",
      },
      milanesas: {
        name: 'Milaneses',
        desc: "Milanesa de vedella amb patates fregides i amanida. Afegeix salsa de tomàquet i formatge +€3 o 2 ous ferrats +€3",
      },
      burrata_salad: {
        name: 'Amanida de Burrata',
        desc: "Ruca, fulles verdes variades, tomàquets cherry, peres confitades, escabetxos, burrata, vinagreta de la casa. Afegeix salmó +€3,5, pernil +€2,5",
      },

      /* ── To Share ───────────────────────────────────── */
      fries: {
        name: 'Brunch.ar Fries',
        desc: "Patates fregides casolanes amb salsa de maionesa de pebrot vermell i coriandre",
      },
      provoleta: {
        name: 'Provoleta',
        desc: "Formatge provolone cruixent amb chimichurri, pebrots vermells rostits i vinagre balsàmic",
      },
      hummus: {
        name: 'Hummus',
        desc: "Escabetxos casolans i pa de massa mare",
      },

      /* ── Soft Drinks ────────────────────────────────── */
      sodas:           { name: 'Refrescos' },
      bottled_water:   { name: 'Aigua embotellada' },
      sparkling_water: { name: 'Aigua amb gas' },
      apple_juice:     { name: 'Suc de poma' },
      pineapple_juice: { name: 'Suc de pinya' },
      peach_juice:     { name: 'Suc de préssec' },

      /* ── B.ar ───────────────────────────────────────── */
      alhambra_clasica: {
        name: 'Alhambra Clásica',
        desc: 'Petita / Gran',
      },
      alhambra_roja: {
        name: 'Alhambra Roja',
        desc: 'Petita / Gran',
      },
      alhambra_ipa:   { name: 'Alhambra IPA' },
      corona:         { name: 'Corona' },
      wine: {
        name: 'Vi Negre / Blanc',
        desc: 'Copa / Ampolla',
      },
      vermouth:       { name: 'Vermut' },
      spritz_group:   { name: 'Aperol Spritz · Mimosa · Mojito' },
      cocktail_group: { name: 'Bloody Mary · Espresso Martini · Moscow Mule · Piña Colada · Cocktail Clàssic' },

      /* ── Cafeteria ──────────────────────────────────── */
      espresso:    { name: 'Espresso / Doble Espresso' },
      macchiato:   { name: 'Macchiato' },
      americano:   { name: 'Americano' },
      cappuccino:  { name: 'Cappuccino / Latte' },
      flat_white:  { name: 'Flat White' },
      latte_xl:    { name: 'Latte XL / Ice Latte' },
      matcha_chai: { name: 'Matcha / Chai / Turmeric Latte' },
      dirty_chai:  { name: 'Dirty Chai Latte' },
      teas: {
        name: 'Tes i Infusions',
        desc: 'English Breakfast · Alpine Berry · Tropical Green · Chamomile · Peppermint · African Rooibos',
      },
      oj_lemonade: {
        name: 'Suc de taronja / Limonada',
        desc: 'Gerra de limonada €8,5',
      },
      detox: {
        name: 'Green Detox / Red Detox',
        desc: 'Sucs premats en fred',
      },
      smoothies: {
        name: 'Batuts',
        desc: '2 fruites €5,5 · 3 fruites €7',
      },
    },
    gallery: {
      overline:      'Galeria',
      title:         'Cada plat, una història',
      cta:           'Segueix-nos a Instagram',
      grid:          'Galeria de fotos de Brunch.ar',
      instagram_btn: 'Seguir Brunch.ar a Instagram',
    },
    reviews: {
      overline:  'Ressenyes',
      title:     'El que diuen els nostres clients',
      average:   '4.8 de mitjana a Google',
      stars_avg: '4.8 de 5 estrelles',
      stars_5:   '5 estrelles',
      source:    'Google · 5 ★',
      cta:       "Deixa'ns una ressenya a Google",
      r1_text:   '"El mejor brunch que he tomado en Barcelona. Las empanadas son increíbles y el ambiente es súper acogedor. Volveré sin duda."',
      r1_author: 'Huw L.',
      r2_text:   '"Lugar encantador con mucho carácter. Los huevos benedict estaban perfectos y el café de especialidad, delicioso. Pet friendly, una ventaja enorme."',
      r2_author: 'Andreea M.S.',
      r3_text:   '"Auténtico sabor argentino en el Eixample. Las medialunas y el cheesecake son un must. Atención muy cálida y servicio rápido."',
      r3_author: 'Rodrigo V.',
      r4_text:   '"Hidden gem in Barcelona! The avocado toast and pancakes were outstanding. Loved the cosy atmosphere and that they welcome dogs."',
      r4_author: 'Joanna K.',
    },
    findus: {
      overline:      "Troba'ns",
      title:         "Vine a veure'ns",
      address_label: 'Adreça',
      address:       'C/ de Padilla, 170, Eixample, 08013 Barcelona',
      hours_label:   'Horari',
      hours:         'Dim–Diu · 9:00–16:00',
      hours_detail:  'Dim–Diu · 9:00–16:00<br>Dil–Mar · Tancat',
      phone_label:   'Telèfon',
      wa_title:      "Tens taula per a mi?",
      wa_sub:        "Escriu-nos per WhatsApp i et reservem taula ara mateix.",
      wa_cta:        'Reservar per WhatsApp',
      map_label:     "Mapa d'ubicació de Brunch.ar a l'Eixample de Barcelona",
      map_link:      'Veure a Google Maps →',
    },
    footer: {
      tagline:      "Brunch argentí al cor de l'Eixample, Barcelona.",
      nav_heading:  'Menú',
      lang_heading: 'Idioma',
      privacy:      'Política de privacitat',
      copy:         '© 2025 Brunch.ar Barcelona. Tots els drets reservats.',
    },
    cookie: {
      text:      "Fem servir galetes per millorar la teva experiència i analitzar el trànsit. Pots acceptar-les totes o només les essencials.",
      privacy:   'Política de privacitat',
      accept:    'Acceptar totes',
      necessary: 'Només essencials',
      banner:    'Avís de galetes',
    },
    whatsapp: {
      message:   "Hola, voldria fer una reserva a Brunch.ar 🥐",
      float_btn: 'Contactar per WhatsApp',
    },
  },

  /* ════════════════════════════════════════════════════════
     ENGLISH
  ════════════════════════════════════════════════════════ */
  en: {
    nav: {
      about:       'About',
      menu:        'Menu',
      gallery:     'Gallery',
      findus:      'Find Us',
      reserve:     'Reserve',
      skip:        'Skip to content',
      hamburger:   'Open navigation menu',
      mobile_menu: 'Navigation menu',
      primary:     'Main navigation',
      mobile_nav:  'Navigation',
      lang_group:  'Language switcher',
      footer_nav:  'Footer',
      back_top:    'Back to top',
      logo:        'Brunch.ar — home',
    },
    hero: {
      badge:       'Argentine Brunch · Barcelona',
      title:       'Buenos Aires flavour in the heart of Eixample',
      subtitle:    'Breakfasts and brunches full of Argentine soul. Open Wed–Sun 9:00–16:00.',
      cta_reserve: 'Reserve on WhatsApp',
      cta_menu:    'See Full Menu',
      hours:       'Wed–Sun · 9:00–16:00',
      petfriendly: 'Pet Friendly',
      loading:     'Loading Brunch.ar',
    },
    strip: {
      hours:       'Wed–Sun · 9:00–16:00',
      address:     'C/ de Padilla, 170, Eixample',
      petfriendly: 'Pet Friendly',
      sabor:       'Argentine Flavour',
      label:       'Quick info',
    },
    about: {
      overline:        'Our Story',
      title:           'Argentine soul in the heart of Barcelona',
      p1:              "Brunch.ar was born from a love of breakfasts and brunches from the Río de la Plata. From Barcelona's Eixample, we bring the ritual of coffee with pastries, perfectly scrambled eggs and the avocado toast your morning deserves.",
      p2:              'A warm, bright and pet-friendly space where time stands still. Fresh ingredients, soulful recipes and a team that puts their heart into every plate.',
      tag_petfriendly: '🐾 Pet Friendly',
      tag_coffee:      '☕ Speciality coffee',
      tag_vegan:       '🌱 Vegan options',
      tag_homemade:    '🏠 Homemade',
    },
    menu: {
      overline:     'The Menu',
      title:        'Our most requested',
      cat_brunch:   'Brunch',
      cat_lunch:    'Lunch',
      cat_share:    'To Share',
      cat_drinks:   'Soft Drinks',
      cat_bar:      'B.ar',
      cat_cafeteria: 'Cafeteria',
      see_full:     'See full menu',
      must_try:     'Must Try',

      /* ── Brunch ─────────────────────────────────────── */
      eggs_benedict: {
        name: 'Eggs Benedict',
        desc: 'English muffin, poached eggs, hollandaise sauce, baby potatoes and salad. Choose: Crispy bacon, Spinach or Norwegian Salmon (+€3.5)',
      },
      english_breakfast: {
        name: 'English Breakfast',
        desc: 'Scrambled eggs, beans, crispy bacon, butifarra, hash browns, candied cherry tomatoes, grilled champignons, toasted bread',
      },
      american_breakfast: {
        name: 'American Breakfast',
        desc: 'Pancakes with maple syrup, scrambled eggs, crispy bacon, baby potatoes',
      },
      avocado_toast: {
        name: 'Avocado Toast',
        desc: 'Mashed avocado on traditional country bread, crème fraîche, seeds, onion pickles. Add: poached egg +€1.5 · salmon +€3.5 · baby potatoes +€2.5',
      },
      scrambled_eggs: {
        name: 'Scrambled Eggs',
        desc: 'On traditional toasted country bread and radish',
      },
      tortilla: {
        name: 'Tortilla',
        desc: 'Spanish style potato & onion omelet, tomato bread',
      },
      ham_sandwich: {
        name: 'Ham Sandwich',
        desc: 'Crispy bread, Iberic ham, Catalonian tomatoes, extra virgin olive oil',
      },
      pancakes: {
        name: 'Pancakes',
        desc: '3 stacked pancakes. Maple syrup & butter / Seasonal fruits +€1 / Dulce de Leche +€1 / Mascarpone & berries +€2',
      },
      acai_bowl: {
        name: 'Açaí Bowl',
        desc: 'Sugar free, seasonal fruit, chia milk, candied nuts and coconut flakes',
      },
      healthy_bowl: {
        name: 'Healthy Bowl',
        desc: 'Yogurt granola, milk and seasonal fruits',
      },
      medialunas: {
        name: 'Medialunas',
        desc: 'Argentine style croissant €2 · Pistachio €4 · Ham & cheese €4 · Nutella €3.5 · Promo: Coffee + 2 medialunas €5.9',
      },

      /* ── Lunch ──────────────────────────────────────── */
      cheeseburger: {
        name: 'Cheeseburger',
        desc: 'Two beef medallions, brioche, crispy bacon, pickles, homemade fries. Add: bacon +€1.5, fried egg +€1.5',
      },
      roastbeef_sandwich: {
        name: 'Roastbeef Sandwich',
        desc: 'Oven-baked beef in mustard and herbs, pickles, lettuce, caper and anchovy sauce, homemade fries',
      },
      pulled_pork: {
        name: 'Pulled Pork Sandwich',
        desc: 'Slow-cooked pork, melted cheddar, smoky barbecue sauce, cucumber pickles, caramelized onion, homemade fries',
      },
      milanesas: {
        name: 'Milanesas',
        desc: 'Beef schnitzel with french fries and salad. Add tomato sauce & cheese +€3 or 2 fried eggs +€3',
      },
      burrata_salad: {
        name: 'Burrata Salad',
        desc: 'Arugula, mixed greens, cherry tomatoes, candied pears, pickles, burrata, house vinaigrette. Add salmon +€3.5, ham +€2.5',
      },

      /* ── To Share ───────────────────────────────────── */
      fries: {
        name: 'Brunch.ar Fries',
        desc: 'Homemade fries with red pepper and coriander mayo sauce',
      },
      provoleta: {
        name: 'Provoleta',
        desc: 'Crispy provolone cheese with chimichurri, roasted bell peppers and balsamic vinegar',
      },
      hummus: {
        name: 'Hummus',
        desc: 'Homemade pickles and sourdough bread',
      },

      /* ── Soft Drinks ────────────────────────────────── */
      sodas:           { name: 'Sodas' },
      bottled_water:   { name: 'Bottled Water' },
      sparkling_water: { name: 'Sparkling Water' },
      apple_juice:     { name: 'Apple Juice' },
      pineapple_juice: { name: 'Pineapple Juice' },
      peach_juice:     { name: 'Peach Juice' },

      /* ── B.ar ───────────────────────────────────────── */
      alhambra_clasica: {
        name: 'Alhambra Clásica',
        desc: 'Small / Large',
      },
      alhambra_roja: {
        name: 'Alhambra Roja',
        desc: 'Small / Large',
      },
      alhambra_ipa:   { name: 'Alhambra IPA' },
      corona:         { name: 'Corona' },
      wine: {
        name: 'Red / White Wine',
        desc: 'Glass / Bottle',
      },
      vermouth:       { name: 'Vermouth' },
      spritz_group:   { name: 'Aperol Spritz · Mimosa · Mojito' },
      cocktail_group: { name: 'Bloody Mary · Espresso Martini · Moscow Mule · Piña Colada · Classic Cocktail' },

      /* ── Cafeteria ──────────────────────────────────── */
      espresso:    { name: 'Espresso / Double Espresso' },
      macchiato:   { name: 'Macchiato' },
      americano:   { name: 'Americano' },
      cappuccino:  { name: 'Cappuccino / Latte' },
      flat_white:  { name: 'Flat White' },
      latte_xl:    { name: 'Latte XL / Ice Latte' },
      matcha_chai: { name: 'Matcha / Chai / Turmeric Latte' },
      dirty_chai:  { name: 'Dirty Chai Latte' },
      teas: {
        name: 'Teas & Infusions',
        desc: 'English Breakfast · Alpine Berry · Tropical Green · Chamomile · Peppermint · African Rooibos',
      },
      oj_lemonade: {
        name: 'Orange Juice / Lemonade',
        desc: 'Lemonade jug €8.5',
      },
      detox: {
        name: 'Green Detox / Red Detox',
        desc: 'Cold press juices',
      },
      smoothies: {
        name: 'Smoothies & Milkshakes',
        desc: '2 fruits €5.5 · 3 fruits €7',
      },
    },
    gallery: {
      overline:      'Gallery',
      title:         'Every dish, a story',
      cta:           'Follow us on Instagram',
      grid:          'Brunch.ar photo gallery',
      instagram_btn: 'Follow Brunch.ar on Instagram',
    },
    reviews: {
      overline:  'Reviews',
      title:     'What our guests say',
      average:   '4.8 average on Google',
      stars_avg: '4.8 out of 5 stars',
      stars_5:   '5 stars',
      source:    'Google · 5 ★',
      cta:       'Leave us a review on Google',
      r1_text:   '"El mejor brunch que he tomado en Barcelona. Las empanadas son increíbles y el ambiente es súper acogedor. Volveré sin duda."',
      r1_author: 'Huw L.',
      r2_text:   '"Lugar encantador con mucho carácter. Los huevos benedict estaban perfectos y el café de especialidad, delicioso. Pet friendly, una ventaja enorme."',
      r2_author: 'Andreea M.S.',
      r3_text:   '"Auténtico sabor argentino en el Eixample. Las medialunas y el cheesecake son un must. Atención muy cálida y servicio rápido."',
      r3_author: 'Rodrigo V.',
      r4_text:   '"Hidden gem in Barcelona! The avocado toast and pancakes were outstanding. Loved the cosy atmosphere and that they welcome dogs."',
      r4_author: 'Joanna K.',
    },
    findus: {
      overline:      'Find Us',
      title:         'Come visit us',
      address_label: 'Address',
      address:       'C/ de Padilla, 170, Eixample, 08013 Barcelona',
      hours_label:   'Hours',
      hours:         'Wed–Sun · 9:00–16:00',
      hours_detail:  'Wed–Sun · 9:00–16:00<br>Mon–Tue · Closed',
      phone_label:   'Phone',
      wa_title:      'Got a table for me?',
      wa_sub:        'Message us on WhatsApp and we will book your table right away.',
      wa_cta:        'Reserve on WhatsApp',
      map_label:     'Location map of Brunch.ar in Eixample, Barcelona',
      map_link:      'View on Google Maps →',
    },
    footer: {
      tagline:      'Argentine brunch in the heart of Eixample, Barcelona.',
      nav_heading:  'Menu',
      lang_heading: 'Language',
      privacy:      'Privacy Policy',
      copy:         '© 2025 Brunch.ar Barcelona. All rights reserved.',
    },
    cookie: {
      text:      'We use cookies to improve your experience and analyse traffic. You can accept all or only essential ones.',
      privacy:   'Privacy policy',
      accept:    'Accept all',
      necessary: 'Essentials only',
      banner:    'Cookie notice',
    },
    whatsapp: {
      message:   "Hello, I'd like to make a reservation at Brunch.ar 🥐",
      float_btn: 'Contact us on WhatsApp',
    },
  },
};

/* ── Helpers ──────────────────────────────────────────── */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function applyLang(lang) {
  const t = window.i18n[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getNestedValue(t, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });

  /* innerHTML swap — for elements containing tags like <br> */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getNestedValue(t, el.dataset.i18nHtml);
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = getNestedValue(t, el.dataset.i18nPh);
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const val = getNestedValue(t, el.dataset.i18nTitle);
    if (val !== undefined) el.title = val;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = getNestedValue(t, el.dataset.i18nAria);
    if (val !== undefined) el.setAttribute('aria-label', val);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });

  lsSet(LANG_KEY, lang);

  document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
}

function initLang() {
  const saved = lsGet(LANG_KEY);
  const browser = navigator.language?.slice(0, 2);
  const supported = Object.keys(window.i18n);
  const lang = supported.includes(saved) ? saved
             : supported.includes(browser) ? browser
             : 'es';
  applyLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});

window.applyLang = applyLang;
