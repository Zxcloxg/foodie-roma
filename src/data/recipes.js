// Roman and Italian recipes. Every text field has a Russian and an English version.
// Photos: Wikimedia Commons (see src/data/images.js).

import IMG from './images';

export const CATEGORIES = [
  { id: 'antipasti', ru: 'Закуски', en: 'Antipasti' },
  { id: 'pasta', ru: 'Паста', en: 'Pasta' },
  { id: 'pizza', ru: 'Пицца', en: 'Pizza' },
  { id: 'zuppe', ru: 'Супы', en: 'Soups' },
  { id: 'secondi', ru: 'Мясо', en: 'Meat' },
  { id: 'quintoquarto', ru: 'Квинто кварто', en: 'Quinto quarto' },
  { id: 'pesce', ru: 'Рыба', en: 'Fish' },
  { id: 'contorni', ru: 'Гарниры', en: 'Sides' },
  { id: 'gnocchi', ru: 'Ньокки и ризотто', en: 'Gnocchi & risotto' },
  { id: 'streetfood', ru: 'Стритфуд', en: 'Street food' },
  { id: 'dolci', ru: 'Десерты', en: 'Desserts' },
  { id: 'colazione', ru: 'Завтрак', en: 'Breakfast' },
];

export const RECIPES = [
  // ---------- Antipasti ----------
  {
    id: 'bruschetta',
    category: 'antipasti',
    image: IMG.bruschetta,
    prepTime: 15,
    servings: 4,
    calories: 190,
    difficulty: 'easy',
    name: { ru: 'Брускетта с помидорами', en: 'Tomato Bruschetta' },
    ingredients: {
      ru: ['8 ломтиков деревенского хлеба', '4 спелых помидора', '2 зубчика чеснока', 'Горсть листьев базилика', '3 ст. л. оливкового масла extra virgin', 'Соль и перец'],
      en: ['8 slices of rustic bread', '4 ripe tomatoes', '2 garlic cloves', 'A handful of basil leaves', '3 tbsp extra virgin olive oil', 'Salt and pepper'],
    },
    steps: {
      ru: ['Нарежьте помидоры мелким кубиком, посолите и оставьте на 10 минут.', 'Подсушите хлеб на гриле или в духовке до золотистого цвета.', 'Натрите горячий хлеб разрезанным зубчиком чеснока.', 'Смешайте помидоры с рваным базиликом и маслом, выложите на хлеб и сразу подавайте.'],
      en: ['Dice the tomatoes, salt them and leave for 10 minutes.', 'Toast the bread on a grill or in the oven until golden.', 'Rub the hot bread with a cut garlic clove.', 'Mix the tomatoes with torn basil and olive oil, spoon onto the bread and serve at once.'],
    },
  },
  {
    id: 'carciofi-giudia',
    category: 'antipasti',
    image: IMG.carciofi_giudia,
    prepTime: 40,
    servings: 4,
    calories: 260,
    difficulty: 'hard',
    name: { ru: 'Артишоки по-еврейски', en: 'Jewish-Style Artichokes' },
    ingredients: {
      ru: ['4 римских артишока (маммоле)', '1 лимон', '1 л оливкового масла для жарки', 'Соль и перец'],
      en: ['4 Roman artichokes (mammole)', '1 lemon', '1 l olive oil for frying', 'Salt and pepper'],
    },
    steps: {
      ru: ['Очистите артишоки от жёстких листьев, срежьте верхушки и опустите в воду с лимоном.', 'Обсушите, слегка раскройте листья, посолите и поперчите внутри.', 'Жарьте во фритюре при 140 °C около 15 минут, пока сердцевина не станет мягкой.', 'Выньте, раскройте как цветок и обжарьте ещё 2–3 минуты при 180 °C до хруста.', 'Обсушите на бумаге и подавайте горячими.'],
      en: ['Trim off the tough leaves, cut the tops and drop the artichokes into lemon water.', 'Pat dry, gently open the leaves and season inside with salt and pepper.', 'Deep-fry at 140 °C for about 15 minutes until the heart is tender.', 'Lift out, open like a flower and fry again at 180 °C for 2–3 minutes until crisp.', 'Drain on paper and serve hot.'],
    },
  },
  {
    id: 'fiori-zucca',
    category: 'antipasti',
    image: IMG.fiori,
    prepTime: 30,
    servings: 4,
    calories: 240,
    difficulty: 'medium',
    name: { ru: 'Жареные цветки цукини', en: 'Fried Zucchini Flowers' },
    ingredients: {
      ru: ['12 цветков цукини', '125 г моцареллы', '6 филе анчоусов', '100 г муки', '150 мл ледяной газированной воды', 'Масло для жарки', 'Соль'],
      en: ['12 zucchini flowers', '125 g mozzarella', '6 anchovy fillets', '100 g flour', '150 ml ice-cold sparkling water', 'Oil for frying', 'Salt'],
    },
    steps: {
      ru: ['Аккуратно удалите пестики из цветков.', 'Вложите в каждый цветок брусочек моцареллы и кусочек анчоуса, закрутите лепестки.', 'Смешайте муку с ледяной водой до жидкого кляра.', 'Обмакните цветки в кляр и обжарьте в горячем масле до золотистого цвета.', 'Посолите и подавайте сразу.'],
      en: ['Gently remove the pistils from the flowers.', 'Stuff each flower with a strip of mozzarella and a piece of anchovy, twist the petals closed.', 'Whisk the flour with the ice-cold water into a thin batter.', 'Dip the flowers in the batter and fry in hot oil until golden.', 'Salt and serve right away.'],
    },
  },

  // ---------- Pasta ----------
  {
    id: 'carbonara',
    category: 'pasta',
    image: IMG.carbonara,
    prepTime: 20,
    servings: 4,
    calories: 620,
    difficulty: 'medium',
    name: { ru: 'Паста карбонара', en: 'Spaghetti Carbonara' },
    ingredients: {
      ru: ['400 г спагетти или ригатони', '150 г гуанчале', '4 желтка и 1 целое яйцо', '80 г пекорино романо', 'Свежемолотый чёрный перец', 'Соль для воды'],
      en: ['400 g spaghetti or rigatoni', '150 g guanciale', '4 egg yolks and 1 whole egg', '80 g Pecorino Romano', 'Freshly ground black pepper', 'Salt for the water'],
    },
    steps: {
      ru: ['Нарежьте гуанчале брусочками и вытопите на сковороде без масла до хруста.', 'Взбейте желтки и яйцо с тёртым пекорино и большим количеством перца.', 'Сварите пасту в подсоленной воде до состояния аль денте.', 'Переложите пасту к гуанчале, снимите сковороду с огня.', 'Добавьте яичную смесь и немного воды от пасты, быстро перемешайте до кремовой текстуры. Сливки не нужны!'],
      en: ['Cut the guanciale into strips and render it in a dry pan until crisp.', 'Whisk the yolks and egg with grated Pecorino and plenty of pepper.', 'Cook the pasta in salted water until al dente.', 'Transfer the pasta to the guanciale and take the pan off the heat.', 'Add the egg mixture and a splash of pasta water and toss quickly until creamy. No cream!'],
    },
  },
  {
    id: 'cacio-e-pepe',
    category: 'pasta',
    image: IMG.cacio,
    prepTime: 15,
    servings: 4,
    calories: 540,
    difficulty: 'medium',
    name: { ru: 'Качо э пепе', en: 'Cacio e Pepe' },
    ingredients: {
      ru: ['400 г тоннарелли или спагетти', '200 г пекорино романо', '2 ч. л. чёрного перца горошком', 'Соль'],
      en: ['400 g tonnarelli or spaghetti', '200 g Pecorino Romano', '2 tsp black peppercorns', 'Salt'],
    },
    steps: {
      ru: ['Крупно раздавите перец и прогрейте его на сухой сковороде.', 'Мелко натрите пекорино.', 'Сварите пасту в небольшом количестве слегка подсоленной воды.', 'Смешайте сыр с половником тёплой (не кипящей) воды от пасты до кремообразного соуса.', 'Перемешайте пасту с перцем и сырным кремом, подавайте сразу.'],
      en: ['Crack the peppercorns coarsely and toast them in a dry pan.', 'Finely grate the Pecorino.', 'Cook the pasta in a small amount of lightly salted water.', 'Mix the cheese with a ladle of warm (not boiling) pasta water into a creamy sauce.', 'Toss the pasta with the pepper and the cheese cream and serve immediately.'],
    },
  },
  {
    id: 'amatriciana',
    category: 'pasta',
    image: IMG.amatriciana,
    prepTime: 30,
    servings: 4,
    calories: 590,
    difficulty: 'easy',
    name: { ru: 'Букатини аматричана', en: 'Bucatini all’Amatriciana' },
    ingredients: {
      ru: ['400 г букатини', '150 г гуанчале', '400 г очищенных помидоров в собственном соку', '50 мл белого вина', '1 сушёный перчик чили', '60 г пекорино романо', 'Соль'],
      en: ['400 g bucatini', '150 g guanciale', '400 g peeled tomatoes', '50 ml white wine', '1 dried chilli', '60 g Pecorino Romano', 'Salt'],
    },
    steps: {
      ru: ['Обжарьте гуанчале с чили до прозрачности жира.', 'Влейте вино и дайте ему выпариться.', 'Добавьте раздавленные помидоры, тушите 15 минут.', 'Сварите букатини аль денте и смешайте с соусом.', 'Посыпьте тёртым пекорино.'],
      en: ['Fry the guanciale with the chilli until the fat turns translucent.', 'Pour in the wine and let it evaporate.', 'Add the crushed tomatoes and simmer for 15 minutes.', 'Cook the bucatini al dente and toss with the sauce.', 'Finish with grated Pecorino.'],
    },
  },
  {
    id: 'gricia',
    category: 'pasta',
    image: IMG.gricia,
    prepTime: 20,
    servings: 4,
    calories: 580,
    difficulty: 'easy',
    name: { ru: 'Паста алла грича', en: 'Pasta alla Gricia' },
    ingredients: {
      ru: ['400 г ригатони', '200 г гуанчале', '80 г пекорино романо', 'Чёрный перец', 'Соль'],
      en: ['400 g rigatoni', '200 g guanciale', '80 g Pecorino Romano', 'Black pepper', 'Salt'],
    },
    steps: {
      ru: ['Вытопите гуанчале до золотистого цвета.', 'Сварите ригатони, оставьте стакан воды от пасты.', 'Переложите пасту в сковороду, добавьте немного воды.', 'Снимите с огня, вмешайте пекорино и перец до кремового соуса.'],
      en: ['Render the guanciale until golden.', 'Cook the rigatoni and save a cup of pasta water.', 'Move the pasta into the pan with a splash of water.', 'Off the heat, stir in the Pecorino and pepper until creamy.'],
    },
  },

  // ---------- Pizza ----------
  {
    id: 'margherita',
    category: 'pizza',
    image: IMG.margherita,
    prepTime: 90,
    servings: 2,
    calories: 800,
    difficulty: 'medium',
    name: { ru: 'Пицца Маргарита', en: 'Pizza Margherita' },
    ingredients: {
      ru: ['500 г муки тип 00', '320 мл воды', '3 г сухих дрожжей', '10 г соли', '300 г томатов пассата', '250 г моцареллы фиор ди латте', 'Базилик', 'Оливковое масло'],
      en: ['500 g type 00 flour', '320 ml water', '3 g dry yeast', '10 g salt', '300 g tomato passata', '250 g fior di latte mozzarella', 'Basil', 'Olive oil'],
    },
    steps: {
      ru: ['Замесите тесто из муки, воды, дрожжей и соли, оставьте подходить на 1 час (лучше — на ночь в холодильнике).', 'Разогрейте духовку на максимум вместе с камнем или противнем.', 'Растяните тесто руками, смажьте пассатой с щепоткой соли.', 'Выложите рваную моцареллу и сбрызните маслом.', 'Выпекайте 6–8 минут, украсьте базиликом.'],
      en: ['Knead the flour, water, yeast and salt and let rise for 1 hour (better overnight in the fridge).', 'Heat the oven to maximum with a stone or tray inside.', 'Stretch the dough by hand and spread with salted passata.', 'Add torn mozzarella and drizzle with oil.', 'Bake for 6–8 minutes and top with basil.'],
    },
  },
  {
    id: 'pizza-bianca',
    category: 'pizza',
    image: IMG.bianca,
    prepTime: 120,
    servings: 6,
    calories: 330,
    difficulty: 'medium',
    name: { ru: 'Римская белая пицца', en: 'Roman Pizza Bianca' },
    ingredients: {
      ru: ['500 г муки', '400 мл воды', '4 г сухих дрожжей', '12 г соли', '4 ст. л. оливкового масла', 'Крупная соль', 'Розмарин'],
      en: ['500 g flour', '400 ml water', '4 g dry yeast', '12 g salt', '4 tbsp olive oil', 'Coarse salt', 'Rosemary'],
    },
    steps: {
      ru: ['Замесите очень влажное тесто и оставьте подходить на 2 часа, делая складывания.', 'Выложите тесто на смазанный противень и растяните пальцами.', 'Сделайте пальцами углубления, полейте маслом, посыпьте крупной солью и розмарином.', 'Выпекайте при 250 °C 15–18 минут до золотистой корочки.', 'По-римски её едят с мортаделлой — «pizza e mortazza».'],
      en: ['Mix a very wet dough and let it rise for 2 hours, folding it a few times.', 'Tip onto an oiled tray and stretch with your fingertips.', 'Dimple the surface, drizzle with oil, sprinkle with coarse salt and rosemary.', 'Bake at 250 °C for 15–18 minutes until golden.', 'Romans eat it filled with mortadella — “pizza e mortazza”.'],
    },
  },

  // ---------- Soups ----------
  {
    id: 'stracciatella',
    category: 'zuppe',
    image: IMG.stracciatella,
    prepTime: 15,
    servings: 4,
    calories: 180,
    difficulty: 'easy',
    name: { ru: 'Страчателла по-римски', en: 'Stracciatella alla Romana' },
    ingredients: {
      ru: ['1,2 л куриного бульона', '4 яйца', '50 г пармезана', '2 ст. л. манки', 'Щепотка мускатного ореха', 'Петрушка', 'Соль'],
      en: ['1.2 l chicken broth', '4 eggs', '50 g Parmigiano', '2 tbsp semolina', 'A pinch of nutmeg', 'Parsley', 'Salt'],
    },
    steps: {
      ru: ['Доведите бульон до кипения.', 'Взбейте яйца с сыром, манкой, мускатом и петрушкой.', 'Влейте смесь в кипящий бульон, помешивая венчиком, чтобы образовались «лоскутки».', 'Варите 2–3 минуты и подавайте горячим.'],
      en: ['Bring the broth to the boil.', 'Whisk the eggs with cheese, semolina, nutmeg and parsley.', 'Pour into the boiling broth while whisking so it forms “rags”.', 'Simmer 2–3 minutes and serve hot.'],
    },
  },
  {
    id: 'pasta-e-ceci',
    category: 'zuppe',
    image: IMG.pastaceci,
    prepTime: 40,
    servings: 4,
    calories: 420,
    difficulty: 'easy',
    name: { ru: 'Паста с нутом', en: 'Pasta e Ceci' },
    ingredients: {
      ru: ['500 г варёного нута', '200 г мелкой пасты (дитали)', '2 зубчика чеснока', 'Веточка розмарина', '2 филе анчоуса', '1 ст. л. томатной пасты', '1 л овощного бульона', 'Оливковое масло'],
      en: ['500 g cooked chickpeas', '200 g small pasta (ditalini)', '2 garlic cloves', 'A sprig of rosemary', '2 anchovy fillets', '1 tbsp tomato paste', '1 l vegetable broth', 'Olive oil'],
    },
    steps: {
      ru: ['Обжарьте на масле чеснок, розмарин и анчоусы.', 'Добавьте томатную пасту и нут, залейте бульоном и варите 15 минут.', 'Половину нута разомните или пробейте блендером для густоты.', 'Всыпьте пасту и варите до готовности.', 'Подавайте с каплей хорошего оливкового масла.'],
      en: ['Fry the garlic, rosemary and anchovies in olive oil.', 'Add the tomato paste and chickpeas, cover with broth and simmer for 15 minutes.', 'Blend or mash half of the chickpeas to thicken.', 'Add the pasta and cook until tender.', 'Serve with a drizzle of good olive oil.'],
    },
  },
  {
    id: 'minestrone',
    category: 'zuppe',
    image: IMG.minestrone,
    prepTime: 60,
    servings: 6,
    calories: 230,
    difficulty: 'easy',
    name: { ru: 'Минестроне', en: 'Minestrone' },
    ingredients: {
      ru: ['1 луковица', '2 моркови', '2 стебля сельдерея', '2 цукини', '2 картофелины', '200 г стручковой фасоли', '400 г фасоли борлотти', '400 г томатов', 'Корка пармезана', 'Оливковое масло'],
      en: ['1 onion', '2 carrots', '2 celery sticks', '2 zucchini', '2 potatoes', '200 g green beans', '400 g borlotti beans', '400 g tomatoes', 'A Parmigiano rind', 'Olive oil'],
    },
    steps: {
      ru: ['Нарежьте все овощи кубиками.', 'Обжарьте лук, морковь и сельдерей на масле 10 минут.', 'Добавьте остальные овощи, помидоры и корку пармезана, залейте водой.', 'Варите на слабом огне 40 минут.', 'Посолите, удалите корку и подавайте с маслом и сыром.'],
      en: ['Dice all the vegetables.', 'Fry the onion, carrot and celery in oil for 10 minutes.', 'Add the remaining vegetables, tomatoes and Parmigiano rind, cover with water.', 'Simmer gently for 40 minutes.', 'Season, remove the rind and serve with oil and cheese.'],
    },
  },

  // ---------- Meat ----------
  {
    id: 'saltimbocca',
    category: 'secondi',
    image: IMG.saltimbocca,
    prepTime: 20,
    servings: 4,
    calories: 380,
    difficulty: 'easy',
    name: { ru: 'Сальтимбокка по-римски', en: 'Saltimbocca alla Romana' },
    ingredients: {
      ru: ['8 тонких телячьих эскалопов', '8 ломтиков прошутто крудо', '8 листьев шалфея', '40 г сливочного масла', '100 мл белого вина', 'Мука', 'Соль и перец'],
      en: ['8 thin veal escalopes', '8 slices of prosciutto crudo', '8 sage leaves', '40 g butter', '100 ml white wine', 'Flour', 'Salt and pepper'],
    },
    steps: {
      ru: ['Отбейте эскалопы, положите на каждый ломтик прошутто и лист шалфея, закрепите зубочисткой.', 'Слегка обваляйте в муке со стороны мяса.', 'Обжарьте на сливочном масле по 1–2 минуты с каждой стороны.', 'Влейте вино, выпарьте и полейте мясо получившимся соусом.'],
      en: ['Pound the escalopes, top each with prosciutto and a sage leaf, secure with a toothpick.', 'Lightly dust the meat side with flour.', 'Fry in butter for 1–2 minutes per side.', 'Deglaze with wine, reduce and spoon the sauce over the meat.'],
    },
  },
  {
    id: 'abbacchio',
    category: 'secondi',
    image: IMG.abbacchio,
    prepTime: 25,
    servings: 4,
    calories: 520,
    difficulty: 'easy',
    name: { ru: 'Ягнёнок «скоттадито»', en: 'Abbacchio a Scottadito' },
    ingredients: {
      ru: ['12 рёбрышек молодого ягнёнка', '3 ст. л. оливкового масла', '2 зубчика чеснока', 'Розмарин', 'Лимон', 'Соль и перец'],
      en: ['12 milk-fed lamb chops', '3 tbsp olive oil', '2 garlic cloves', 'Rosemary', 'Lemon', 'Salt and pepper'],
    },
    steps: {
      ru: ['Замаринуйте рёбрышки в масле с чесноком и розмарином на 30 минут.', 'Раскалите гриль или чугунную сковороду.', 'Жарьте по 2–3 минуты с каждой стороны.', 'Посолите и подавайте с лимоном — горячими, «обжигая пальцы».'],
      en: ['Marinate the chops in oil with garlic and rosemary for 30 minutes.', 'Heat a grill or cast-iron pan until very hot.', 'Cook for 2–3 minutes per side.', 'Salt and serve with lemon — so hot they “burn your fingers”.'],
    },
  },
  {
    id: 'pollo-romana',
    category: 'secondi',
    image: IMG.pollo,
    prepTime: 60,
    servings: 4,
    calories: 470,
    difficulty: 'medium',
    name: { ru: 'Курица с перцами по-римски', en: 'Pollo alla Romana' },
    ingredients: {
      ru: ['1 курица (1,5 кг), разделанная', '3 сладких перца', '400 г томатов', '1 луковица', '2 зубчика чеснока', '150 мл белого вина', 'Майоран', 'Оливковое масло'],
      en: ['1 chicken (1.5 kg), cut into pieces', '3 bell peppers', '400 g tomatoes', '1 onion', '2 garlic cloves', '150 ml white wine', 'Marjoram', 'Olive oil'],
    },
    steps: {
      ru: ['Обжарьте курицу до золотистой корочки и выньте.', 'В той же сковороде обжарьте лук, чеснок и нарезанный перец.', 'Верните курицу, влейте вино и выпарьте.', 'Добавьте помидоры и майоран, тушите под крышкой 40 минут.'],
      en: ['Brown the chicken pieces and set aside.', 'In the same pan fry the onion, garlic and sliced peppers.', 'Return the chicken, add the wine and let it evaporate.', 'Add the tomatoes and marjoram and braise covered for 40 minutes.'],
    },
  },

  // ---------- Quinto quarto ----------
  {
    id: 'coda-vaccinara',
    category: 'quintoquarto',
    image: IMG.coda,
    prepTime: 240,
    servings: 4,
    calories: 650,
    difficulty: 'hard',
    name: { ru: 'Бычий хвост «вачинара»', en: 'Coda alla Vaccinara' },
    ingredients: {
      ru: ['1,5 кг бычьих хвостов', '1 луковица', '1 морковь', '6 стеблей сельдерея', '800 г томатов', '200 мл красного вина', '1 ст. л. какао', '30 г изюма и кедровых орехов'],
      en: ['1.5 kg oxtail', '1 onion', '1 carrot', '6 celery sticks', '800 g tomatoes', '200 ml red wine', '1 tbsp cocoa', '30 g raisins and pine nuts'],
    },
    steps: {
      ru: ['Обжарьте куски хвоста со всех сторон.', 'Добавьте лук и морковь, влейте вино.', 'Добавьте помидоры и тушите на минимальном огне 3–4 часа.', 'Отдельно отварите сельдерей и добавьте его в конце вместе с какао, изюмом и орехами.', 'Соусом можно заправить пасту — это отдельное блюдо!'],
      en: ['Brown the oxtail pieces on all sides.', 'Add the onion and carrot and pour in the wine.', 'Add the tomatoes and braise on the lowest heat for 3–4 hours.', 'Boil the celery separately and add it at the end with the cocoa, raisins and pine nuts.', 'Use the sauce to dress pasta as a separate course!'],
    },
  },
  {
    id: 'trippa',
    category: 'quintoquarto',
    image: IMG.trippa,
    prepTime: 120,
    servings: 4,
    calories: 360,
    difficulty: 'medium',
    name: { ru: 'Рубец по-римски', en: 'Trippa alla Romana' },
    ingredients: {
      ru: ['1 кг очищенного говяжьего рубца', '1 луковица', '1 морковь', '1 стебель сельдерея', '500 г томатов', 'Мята (ментучча)', '80 г пекорино романо'],
      en: ['1 kg cleaned beef tripe', '1 onion', '1 carrot', '1 celery stick', '500 g tomatoes', 'Roman mint (mentuccia)', '80 g Pecorino Romano'],
    },
    steps: {
      ru: ['Отварите рубец 1 час и нарежьте полосками.', 'Обжарьте лук, морковь и сельдерей.', 'Добавьте рубец и помидоры, тушите 40 минут.', 'Подавайте с листиками мяты и обильно посыпьте пекорино.'],
      en: ['Boil the tripe for 1 hour and cut into strips.', 'Fry the onion, carrot and celery.', 'Add the tripe and tomatoes and simmer for 40 minutes.', 'Serve with mint leaves and plenty of Pecorino.'],
    },
  },

  // ---------- Fish ----------
  {
    id: 'calamari',
    category: 'pesce',
    image: IMG.calamari,
    prepTime: 25,
    servings: 4,
    calories: 360,
    difficulty: 'easy',
    name: { ru: 'Жареные кальмары', en: 'Calamari Fritti' },
    ingredients: {
      ru: ['600 г кальмаров', '100 г муки', '50 г манной крупы', 'Масло для жарки', 'Лимон', 'Соль'],
      en: ['600 g squid', '100 g flour', '50 g semolina', 'Oil for frying', 'Lemon', 'Salt'],
    },
    steps: {
      ru: ['Очистите кальмаров и нарежьте кольцами.', 'Обсушите бумажным полотенцем.', 'Обваляйте в смеси муки и манки, стряхните лишнее.', 'Жарьте в масле при 180 °C 2–3 минуты до золотистого цвета.', 'Посолите и подавайте с лимоном — как на пляжах Остии.'],
      en: ['Clean the squid and cut into rings.', 'Pat dry with paper towels.', 'Toss in the flour and semolina mix and shake off the excess.', 'Fry at 180 °C for 2–3 minutes until golden.', 'Salt and serve with lemon — just like on the beaches of Ostia.'],
    },
  },
  {
    id: 'vongole',
    category: 'pesce',
    image: IMG.vongole,
    prepTime: 25,
    servings: 4,
    calories: 480,
    difficulty: 'medium',
    name: { ru: 'Спагетти с вонголе', en: 'Spaghetti alle Vongole' },
    ingredients: {
      ru: ['400 г спагетти', '1 кг моллюсков вонголе', '3 зубчика чеснока', '1 перчик чили', '100 мл белого вина', 'Петрушка', 'Оливковое масло'],
      en: ['400 g spaghetti', '1 kg clams (vongole)', '3 garlic cloves', '1 chilli', '100 ml white wine', 'Parsley', 'Olive oil'],
    },
    steps: {
      ru: ['Промойте вонголе в солёной воде.', 'Обжарьте чеснок и чили на масле, добавьте вонголе и вино, накройте крышкой.', 'Как только раковины раскроются, снимите с огня.', 'Сварите спагетти чуть недоваренными и доведите их в соусе от вонголе.', 'Посыпьте петрушкой.'],
      en: ['Soak the clams in salted water to purge them.', 'Fry the garlic and chilli in oil, add the clams and wine and cover.', 'Take off the heat as soon as the shells open.', 'Cook the spaghetti slightly underdone and finish them in the clam juices.', 'Sprinkle with parsley.'],
    },
  },

  // ---------- Sides ----------
  {
    id: 'peperonata',
    category: 'contorni',
    image: IMG.peperonata,
    prepTime: 40,
    servings: 4,
    calories: 130,
    difficulty: 'easy',
    name: { ru: 'Пеперроната', en: 'Peperonata' },
    ingredients: {
      ru: ['4 сладких перца (красные и жёлтые — цвета Ромы!)', '1 красная луковица', '300 г томатов', '2 зубчика чеснока', '4 ст. л. оливкового масла', 'Базилик', 'Соль'],
      en: ['4 bell peppers (red and yellow — Roma colours!)', '1 red onion', '300 g tomatoes', '2 garlic cloves', '4 tbsp olive oil', 'Basil', 'Salt'],
    },
    steps: {
      ru: ['Нарежьте перцы полосками, лук — полукольцами.', 'Обжарьте лук и чеснок на масле 5 минут.', 'Добавьте перцы и готовьте 10 минут.', 'Добавьте помидоры, тушите под крышкой 20 минут.', 'Посолите и украсьте базиликом. Вкусно и горячей, и холодной.'],
      en: ['Slice the peppers into strips and the onion into half-rings.', 'Fry the onion and garlic in oil for 5 minutes.', 'Add the peppers and cook for 10 minutes.', 'Add the tomatoes and braise covered for 20 minutes.', 'Season and garnish with basil. Great hot or cold.'],
    },
  },
  {
    id: 'carciofi-romana',
    category: 'contorni',
    image: IMG.carciofi_romana,
    prepTime: 45,
    servings: 4,
    calories: 150,
    difficulty: 'medium',
    name: { ru: 'Артишоки по-римски', en: 'Carciofi alla Romana' },
    ingredients: {
      ru: ['4 римских артишока', '2 зубчика чеснока', 'Пучок мяты и петрушки', '100 мл оливкового масла', '100 мл воды', 'Лимон', 'Соль'],
      en: ['4 Roman artichokes', '2 garlic cloves', 'A bunch of mint and parsley', '100 ml olive oil', '100 ml water', 'Lemon', 'Salt'],
    },
    steps: {
      ru: ['Очистите артишоки и держите в воде с лимоном.', 'Порубите чеснок с мятой и петрушкой, нафаршируйте артишоки.', 'Поставьте их вверх ножками в кастрюлю, залейте маслом и водой.', 'Тушите под крышкой 30 минут.'],
      en: ['Trim the artichokes and keep them in lemon water.', 'Chop the garlic with mint and parsley and stuff the artichokes.', 'Stand them stem-up in a pot and pour over oil and water.', 'Braise covered for 30 minutes.'],
    },
  },
  {
    id: 'puntarelle',
    category: 'contorni',
    image: IMG.puntarelle,
    prepTime: 20,
    servings: 4,
    calories: 140,
    difficulty: 'easy',
    name: { ru: 'Пунтарелле с анчоусами', en: 'Puntarelle with Anchovies' },
    ingredients: {
      ru: ['1 кочан пунтарелле', '4 филе анчоусов', '1 зубчик чеснока', '1 ст. л. винного уксуса', '4 ст. л. оливкового масла'],
      en: ['1 head of puntarelle', '4 anchovy fillets', '1 garlic clove', '1 tbsp wine vinegar', '4 tbsp olive oil'],
    },
    steps: {
      ru: ['Нарежьте ростки пунтарелле тонкими полосками.', 'Положите в ледяную воду на 30 минут, чтобы они закрутились.', 'Разотрите анчоусы с чесноком, уксусом и маслом.', 'Обсушите пунтарелле и заправьте соусом.'],
      en: ['Slice the puntarelle shoots into thin strips.', 'Soak in ice water for 30 minutes so they curl.', 'Mash the anchovies with garlic, vinegar and oil.', 'Drain the puntarelle and toss with the dressing.'],
    },
  },

  // ---------- Gnocchi & risotto ----------
  {
    id: 'gnocchi-romana',
    category: 'gnocchi',
    image: IMG.gnocchi,
    prepTime: 60,
    servings: 4,
    calories: 520,
    difficulty: 'medium',
    name: { ru: 'Ньокки по-римски', en: 'Gnocchi alla Romana' },
    ingredients: {
      ru: ['1 л молока', '250 г манной крупы', '2 желтка', '100 г сливочного масла', '100 г пармезана', 'Мускатный орех', 'Соль'],
      en: ['1 l milk', '250 g semolina', '2 egg yolks', '100 g butter', '100 g Parmigiano', 'Nutmeg', 'Salt'],
    },
    steps: {
      ru: ['Сварите густую манную кашу на молоке с солью и мускатом.', 'Снимите с огня, вмешайте желтки, половину масла и сыра.', 'Распределите слоем 1 см и остудите.', 'Вырежьте кружки, выложите внахлёст в форму, полейте маслом и посыпьте сыром.', 'Запекайте при 200 °C 20 минут до корочки.'],
      en: ['Cook the semolina in salted milk with nutmeg until thick.', 'Off the heat, stir in the yolks and half the butter and cheese.', 'Spread 1 cm thick and let cool.', 'Cut into rounds, overlap them in a dish, top with butter and cheese.', 'Bake at 200 °C for 20 minutes until golden.'],
    },
  },
  {
    id: 'risotto-milanese',
    category: 'gnocchi',
    image: IMG.risotto,
    prepTime: 35,
    servings: 4,
    calories: 490,
    difficulty: 'medium',
    name: { ru: 'Ризотто по-милански', en: 'Risotto alla Milanese' },
    ingredients: {
      ru: ['320 г риса карнароли', '1 л горячего бульона', '1 луковица', '100 мл белого вина', '1 пакетик шафрана', '60 г сливочного масла', '60 г пармезана'],
      en: ['320 g Carnaroli rice', '1 l hot broth', '1 onion', '100 ml white wine', '1 sachet of saffron', '60 g butter', '60 g Parmigiano'],
    },
    steps: {
      ru: ['Обжарьте мелко нарезанный лук на половине масла.', 'Добавьте рис, прогрейте 2 минуты, влейте вино.', 'Добавляйте бульон по половнику, постоянно помешивая, 16–18 минут.', 'В середине варки добавьте шафран.', 'Снимите с огня и вмешайте оставшееся масло и пармезан.'],
      en: ['Soften the chopped onion in half of the butter.', 'Toast the rice for 2 minutes, then add the wine.', 'Add broth a ladle at a time, stirring, for 16–18 minutes.', 'Add the saffron halfway through.', 'Off the heat, beat in the remaining butter and Parmigiano.'],
    },
  },

  // ---------- Street food ----------
  {
    id: 'suppli',
    category: 'streetfood',
    image: IMG.suppli,
    prepTime: 70,
    servings: 6,
    calories: 310,
    difficulty: 'hard',
    name: { ru: 'Суппли', en: 'Supplì' },
    ingredients: {
      ru: ['300 г риса', '300 г фарша', '500 мл томатной пассаты', '150 г моцареллы', '2 яйца', 'Панировочные сухари', 'Масло для жарки'],
      en: ['300 g rice', '300 g minced meat', '500 ml tomato passata', '150 g mozzarella', '2 eggs', 'Breadcrumbs', 'Oil for frying'],
    },
    steps: {
      ru: ['Приготовьте соус из фарша и пассаты, сварите в нём рис как ризотто и остудите.', 'Сформуйте продолговатые крокеты, вложив внутрь кусочек моцареллы.', 'Обваляйте во взбитом яйце и сухарях.', 'Обжарьте во фритюре до золотистой корочки.', 'Разломите — моцарелла тянется, как «телефонный провод» (supplì al telefono).'],
      en: ['Make a meat and passata sauce, cook the rice in it like a risotto and let cool.', 'Shape oval croquettes with a piece of mozzarella inside.', 'Roll in beaten egg and breadcrumbs.', 'Deep-fry until golden.', 'Break one open — the mozzarella stretches like a telephone cord (supplì al telefono).'],
    },
  },
  {
    id: 'trapizzino',
    category: 'streetfood',
    image: IMG.trapizzino,
    prepTime: 40,
    servings: 4,
    calories: 450,
    difficulty: 'medium',
    name: { ru: 'Трапиццино', en: 'Trapizzino' },
    ingredients: {
      ru: ['Белая пицца (треугольники)', 'Курица по-римски или тефтели в соусе', 'Пекорино романо', 'Свежий базилик'],
      en: ['Pizza bianca (triangles)', 'Pollo alla romana or meatballs in sauce', 'Pecorino Romano', 'Fresh basil'],
    },
    steps: {
      ru: ['Испеките пиццу бьянку и нарежьте её на треугольники.', 'Разрежьте каждый треугольник, как карман.', 'Наполните горячей начинкой в соусе.', 'Посыпьте пекорино и подавайте.'],
      en: ['Bake a pizza bianca and cut it into triangles.', 'Slice each triangle open like a pocket.', 'Fill with a hot, saucy filling.', 'Sprinkle with Pecorino and serve.'],
    },
  },
  {
    id: 'porchetta',
    category: 'streetfood',
    image: IMG.porchetta,
    prepTime: 300,
    servings: 10,
    calories: 560,
    difficulty: 'hard',
    name: { ru: 'Поркетта', en: 'Porchetta' },
    ingredients: {
      ru: ['3 кг свиной грудинки с кожей', '6 зубчиков чеснока', 'Розмарин', '2 ч. л. семян фенхеля', 'Чёрный перец', 'Крупная соль'],
      en: ['3 kg pork belly with skin', '6 garlic cloves', 'Rosemary', '2 tsp fennel seeds', 'Black pepper', 'Coarse salt'],
    },
    steps: {
      ru: ['Натрите мясо изнутри солью, чесноком, розмарином, фенхелем и перцем.', 'Сверните рулетом и плотно перевяжите.', 'Оставьте в холодильнике на ночь.', 'Запекайте при 160 °C 4 часа, затем 20 минут при 230 °C для хрустящей корочки.', 'Подавайте в булочке — главный перекус Лацио.'],
      en: ['Rub the inside of the meat with salt, garlic, rosemary, fennel and pepper.', 'Roll up tightly and tie with string.', 'Leave in the fridge overnight.', 'Roast at 160 °C for 4 hours, then 20 minutes at 230 °C for crackling.', 'Serve in a bread roll — the top snack of Lazio.'],
    },
  },

  // ---------- Desserts ----------
  {
    id: 'tiramisu',
    category: 'dolci',
    image: IMG.tiramisu,
    prepTime: 30,
    servings: 6,
    calories: 450,
    difficulty: 'easy',
    name: { ru: 'Тирамису', en: 'Tiramisù' },
    ingredients: {
      ru: ['500 г маскарпоне', '4 яйца', '100 г сахара', '300 г печенья савоярди', '300 мл крепкого эспрессо', 'Какао-порошок'],
      en: ['500 g mascarpone', '4 eggs', '100 g sugar', '300 g savoiardi biscuits', '300 ml strong espresso', 'Cocoa powder'],
    },
    steps: {
      ru: ['Взбейте желтки с сахаром до светлой массы, вмешайте маскарпоне.', 'Отдельно взбейте белки до пиков и аккуратно соедините с кремом.', 'Быстро обмакните савоярди в остывший кофе и выложите слоем.', 'Чередуйте слои печенья и крема.', 'Уберите в холодильник на 4 часа, перед подачей посыпьте какао.'],
      en: ['Beat the yolks with sugar until pale, fold in the mascarpone.', 'Whip the whites to peaks and gently fold into the cream.', 'Quickly dip the savoiardi in cooled coffee and lay them in a dish.', 'Alternate layers of biscuits and cream.', 'Chill for 4 hours and dust with cocoa before serving.'],
    },
  },
  {
    id: 'panna-cotta',
    category: 'dolci',
    image: IMG.pannacotta,
    prepTime: 20,
    servings: 6,
    calories: 340,
    difficulty: 'easy',
    name: { ru: 'Панна-котта', en: 'Panna Cotta' },
    ingredients: {
      ru: ['500 мл сливок 33%', '80 г сахара', '1 стручок ванили', '8 г желатина', 'Ягодный соус'],
      en: ['500 ml cream (33%)', '80 g sugar', '1 vanilla pod', '8 g gelatine', 'Berry sauce'],
    },
    steps: {
      ru: ['Замочите желатин в холодной воде.', 'Нагрейте сливки с сахаром и ванилью, не доводя до кипения.', 'Растворите в них отжатый желатин.', 'Разлейте по формочкам и охладите минимум 4 часа.', 'Подавайте с ягодным соусом.'],
      en: ['Soak the gelatine in cold water.', 'Warm the cream with sugar and vanilla without boiling.', 'Dissolve the squeezed gelatine in it.', 'Pour into moulds and chill for at least 4 hours.', 'Serve with berry sauce.'],
    },
  },
  {
    id: 'crostata-ricotta',
    category: 'dolci',
    image: IMG.crostata,
    prepTime: 90,
    servings: 8,
    calories: 420,
    difficulty: 'medium',
    name: { ru: 'Кростата с рикоттой и вишней', en: 'Ricotta & Sour Cherry Crostata' },
    ingredients: {
      ru: ['300 г муки', '150 г сливочного масла', '120 г сахара для теста', '3 яйца', '500 г овечьей рикотты', '100 г сахара для начинки', '200 г вишнёвого джема'],
      en: ['300 g flour', '150 g butter', '120 g sugar for the pastry', '3 eggs', '500 g sheep ricotta', '100 g sugar for the filling', '200 g sour cherry jam'],
    },
    steps: {
      ru: ['Замесите песочное тесто из муки, масла, сахара и 1 яйца, охладите 30 минут.', 'Выложите тесто в форму, оставив часть на решётку.', 'Намажьте слой вишнёвого джема.', 'Смешайте рикотту с сахаром и 2 яйцами, выложите сверху.', 'Закройте решёткой из теста и выпекайте при 180 °C 45 минут — так пекут в римском гетто.'],
      en: ['Make shortcrust from flour, butter, sugar and 1 egg and chill for 30 minutes.', 'Line a tin with the pastry, keeping some for a lattice.', 'Spread a layer of sour cherry jam.', 'Mix the ricotta with sugar and 2 eggs and spoon on top.', 'Cover with a lattice and bake at 180 °C for 45 minutes — just like in Rome’s Jewish Ghetto.'],
    },
  },

  // ---------- Breakfast ----------
  {
    id: 'maritozzo',
    category: 'colazione',
    image: IMG.maritozzo,
    prepTime: 180,
    servings: 8,
    calories: 390,
    difficulty: 'hard',
    name: { ru: 'Маритоццо со сливками', en: 'Maritozzo con la Panna' },
    ingredients: {
      ru: ['500 г муки', '200 мл молока', '80 г сахара', '2 яйца', '70 г сливочного масла', '10 г сухих дрожжей', 'Цедра апельсина', '400 мл сливок для взбивания'],
      en: ['500 g flour', '200 ml milk', '80 g sugar', '2 eggs', '70 g butter', '10 g dry yeast', 'Orange zest', '400 ml whipping cream'],
    },
    steps: {
      ru: ['Замесите сдобное тесто, дайте подойти 2 часа.', 'Сформируйте овальные булочки и дайте расстояться ещё час.', 'Смажьте яйцом и выпекайте при 180 °C 15 минут.', 'Остудите, разрежьте сбоку и щедро наполните взбитыми сливками.', 'Римский завтрак с капучино — обязательно!'],
      en: ['Knead an enriched dough and let it rise for 2 hours.', 'Shape oval buns and prove for another hour.', 'Brush with egg and bake at 180 °C for 15 minutes.', 'Cool, slit open and fill generously with whipped cream.', 'A must-have Roman breakfast with a cappuccino!'],
    },
  },
  {
    id: 'cornetto',
    category: 'colazione',
    image: IMG.cornetto,
    prepTime: 240,
    servings: 12,
    calories: 300,
    difficulty: 'hard',
    name: { ru: 'Корнетто', en: 'Cornetto' },
    ingredients: {
      ru: ['500 г муки', '250 мл молока', '80 г сахара', '1 яйцо', '250 г сливочного масла для раскатки', '10 г сухих дрожжей', 'Цедра лимона', 'Абрикосовый джем'],
      en: ['500 g flour', '250 ml milk', '80 g sugar', '1 egg', '250 g butter for laminating', '10 g dry yeast', 'Lemon zest', 'Apricot jam'],
    },
    steps: {
      ru: ['Замесите тесто с цедрой и охладите 1 час.', 'Вложите пласт масла и сделайте 3 складывания с охлаждением между ними.', 'Раскатайте, нарежьте треугольники, положите джем и сверните рогаликом.', 'Дайте подойти 2 часа, смажьте яйцом.', 'Выпекайте при 190 °C 18 минут.'],
      en: ['Mix the dough with zest and chill for 1 hour.', 'Enclose a butter sheet and do 3 folds, chilling between them.', 'Roll out, cut triangles, add jam and roll up.', 'Prove for 2 hours and brush with egg.', 'Bake at 190 °C for 18 minutes.'],
    },
  },
  {
    id: 'frittata',
    category: 'colazione',
    image: IMG.frittata,
    prepTime: 20,
    servings: 4,
    calories: 280,
    difficulty: 'easy',
    name: { ru: 'Фриттата с цукини', en: 'Zucchini Frittata' },
    ingredients: {
      ru: ['6 яиц', '2 цукини', '1 луковица', '40 г пекорино или пармезана', '2 ст. л. оливкового масла', 'Мята', 'Соль и перец'],
      en: ['6 eggs', '2 zucchini', '1 onion', '40 g Pecorino or Parmigiano', '2 tbsp olive oil', 'Mint', 'Salt and pepper'],
    },
    steps: {
      ru: ['Обжарьте лук и тонко нарезанные цукини до мягкости.', 'Взбейте яйца с сыром, мятой, солью и перцем.', 'Залейте овощи яйцами и готовьте на слабом огне под крышкой 8 минут.', 'Переверните с помощью тарелки и доведите 2 минуты.'],
      en: ['Fry the onion and thinly sliced zucchini until soft.', 'Whisk the eggs with cheese, mint, salt and pepper.', 'Pour over the vegetables and cook covered on low heat for 8 minutes.', 'Flip with a plate and cook 2 more minutes.'],
    },
  },
];
