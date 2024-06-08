const recipesData = [
  {
    id: 1,
    title: "Pizza",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/pizza-21.jpg",
    ingredients: [
      "1,75 tasse de farine tout usage",
      "1 tasse de farine à gâteau",
      "2 cuillères à café de sucre",
      "1,5 cuillères à café de sel de table (pas casher)",
      "1,25 cuillère à café de levure instantanée ou une augmentation rapide",
      "1 tasse d'eau tiède (110 degrés)",
    ],
    video: "https://www.youtube.com/embed/gdCm7CAPWgU?si=2zm-58CixDfUmozg",
    cuisine: "Italian",
  },
  {
    id: 2,
    title: "HamBurger",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/tasty-cheeseburger-dinner.jpg",
    ingredients: [
      "0,5 kg de viande hachée de bœuf ou d'agneau",
      "1 gros oignon haché",
      "1 bouquet de coriandre hachée",
      "1,5 cuillère à café de sel",
      "1 cuillère à café de poudre de piment rouge",
      "1,5 cuillère à café de poudre de coriandre",
      "1 cuillère à café de graines de cumin écrasées",
      "0,5 jus de citron",
      "6 tranches de fromage cheddar",
      "2 tomates émincées",
      "4 cuillères à soupe de beurre fondu",
      "1 tasse de mayonnaise",
      "6 pains burger",
    ],
    video: "https://www.youtube.com/embed/yeMdYuJmLYg?si=POCCSbklIA5EmbEm",
    cuisine: "American",
  },
  {
    id: 3,
    title: "Double Chocolate Biscotti",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/double-chocolate-biscotti-2462702.jpg",
    ingredients: [
      "1-3/4 tasses plus 2 cuillères à soupe de farine tout usage ; verser dans une tasse à mesurer et niveler",
      "1/4 tasse + plus 2 cuillères à soupe de poudre de cacao naturelle non sucrée ",
      "1 cuillère à café de bicarbonate de soude",
      "3/4 cuillère à café de sel",
      "1 bâton (8 cuillères à soupe) de beurre doux ; à température ambiante",
      "3/4 tasse plus 2 cuillères à soupe de sucre cristallisé",
      "2 gros œufs",
      "2 cuillères à café d'extrait de vanille",
      "1 tasse de pépites de chocolat mi-sucré",
    ],
    video: "https://www.youtube.com/embed/2SZRZgszk-0?si=Ehqdi4cC7X9InDQP",
    cuisine: "Italian",
  },
  {
    id: 4,
    title: "Blueberry Muffins",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/blueberry-muffins-14.jpg",
    ingredients: [
      " 2 tasses de bleuets frais ; (récupérés et rincés)",
      "1 1/8 tasse de sucre ; plus 1 cuillère à café",
      "2 1/2 tasses (12 1/2 oz) de farine tout usage non blanchie",
      "2 1/2 cuillères à café de levure chimique",
      "1 cuillère à café de sel",
      "2 gros œufs",
      "1/4 tasse de beurre non salé ; - fondu et légèrement refroidi",
      "1/4 tasse d'huile végétale",
      "1 tasse de babeurre",
      "1 1/2 cuillères à café d'extrait de vanille",
      "4 cuillères à café de sucre turbiné",
    ],
    video: "https://www.youtube.com/embed/PFpUJWOh8Vk?si=NXHpPXwMyGwc-wh2",
    cuisine: "American",
  },
  {
    id: 5,
    title: "Snickers Cheesecake",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/snickers-cheesecake-1628052.jpg",
    ingredients: [
      " POUR LA PÂTE:",
      "30 paquets biscuits Oreo standard",
      "6 cuillères à soupe de beurre ; fondu",
      "Pour la garniture du cheesecake :",
      "32 onces de fromage à la crème ; température ambiante",
      "5 gros œufs",
      "1 1/2 tasse de cassonade légèrement tassée",
      "1/2 tasse de crème épaisse",
      "1 cuillère à café de vanille",
      "18 barres Snickers de taille amusante (paquet de 1 à 11,8 oz)  ; hachées grossièrement",
      "Pour la garniture :",
      "1 tasse de pépites de chocolat mi-sucré",
      "1/2 tasse de crème épaisse",
      "9 barres Snickers au format amusant ; hachées grossièrement",
    ],
    video: "https://www.youtube.com/embed/gK_x0UDEpK0?si=FnkgxqZKZapswHkM",
    cuisine: "française",
  },
  {
    id: 6,
    title: "Blueberry Fruit Smoothie",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/untitled-recipe-4449.jpg",
    ingredients: [
      " 1 tasse de glace à la vanille ",
      "1 tasse de bleuets frais ou surgelés",
      "1/2 tasse de pêches fraîches ; haché et pelé, ou congelé non sucré",
      "1/2 tasse de jus de pomme de pin",
      "1/4 tasse de yaourt à la vanille",
    ],
    video: "https://www.youtube.com/embed/wRxXTbeG0O0?si=Y_eTYD_WKpAH84OQ",
    cuisine: "American",
  },
  {
    id: 7,
    title: "Southern Sweet Tea",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/southern-sweet-tea.jpg",
    ingredients: [
      " 6 sachets de thé ",
      "1 1/2 tasse de sucre",
      "1/8 cuillère à café de bicarbonate de soude",
      "6 tasses d' eau froide",
      "2 tasses d' eau bouillante",
    ],
    video: "https://www.youtube.com/embed/9se_2Xu2wNg?si=AkYA5k9XANutWnx2",
    cuisine: "American",
  },
  {
    id: 8,
    title: "Salade César",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/bacon-potato-salad-5965cf.jpg",
    ingredients: [
      "2 têtes romaines",
      "POUR LE HABILLAGE",
      "1 boîte d'anchois",
      "1/2 Citron entier ; pressé",
      "1 gousse d'Ail ; haché",
      "5 cuillères à soupe d'huile d'olive",
      "3 cuillères à soupe de vinaigre de vin rouge",
      "1 1/2 cuillère à café de sauce Worcestershire",
      "1 jaune d' oeuf",
      "1 cuillère à soupe de moutarde ",
      "2 poignées de croûtons ; Je préfère Pepperidge Farm",
      "2 cuillères à soupe de parmesan ; râpé",
    ],
    video: "https://youtu.be/IvuKu1fKHI0?si=eaa-59GPV0NtQeYo",
    cuisine: " Mexicaine",
  },
  {
    id: 9,
    title: "Caramel Coconut Chocolate Chunk Cookies",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/caramelcoconutchocolatechunkco-f0fa6c.jpg",
    ingredients: [
      "2 bâtonnets  de beurre ",
      "3/4 tasse  de sucre blanc",
      "11/2  tasses de cassonade claire",
      "2 œufs, température ambiante",
      "2 cuillères à café d'extrait de vanille",
      "31/2 tasses (1 lb) de farine tout usage",
      "1 cuillère à soupe de fécule de maïs",
      "11/2 cuillère à café de bicarbonate de soude",
      "3/4 cuillère à café de sel casher",
      "1 tasse  de morceaux de chocolat mi-sucré ",
      "1 tasse de morceaux de caramel ",
      "1 tasse de noix de coco râpée non sucrée ; grillé",
    ],
    video: "https://youtu.be/q8IXzjOYi6Y?si=mgSG0fT9Zp47Jtym",
    cuisine: "French",
  },
  {
    id: 10,
    title: "Sweet and Sour Chicken",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/sweet-and-sour-chicken-12.jpg",
    ingredients: [
      "8 demi-poitrines de poulet",
      "2 1/4 tasse de farine",
      "1/2 cuillère à café de sel",
      "1 cuillère à café de poivre ; (ou plus)",
      "1/2 cuillère à café de sel",
      "1 1/2 cuillère à café de levure chimique",
      "2 cuillères à soupe d'huile",
      "2 cuillères à soupe de fécule de maïs",
      "1 oeuf",
      "2 tasses d'eau",
      "2 cuillères à café de poudre d'oignon ; (facultatif)",
      "huile ",
    ],
    video: "https://www.youtube.com/embed/cblsP5S9PhU?si=eInvatBBDDUJnADj",
    cuisine: "Chinese",
  },
  {
    id: 11,
    title: "Mexican Rice",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/mexican-rice-56.jpg",
    ingredients: [
      "2 cuillères à soupe. Huile végétale",
      "1 tasse de riz",
      "1 gros oignon ; haché",
      "1/2 bouquet de coriandre ; – ou selon les besoins-, haché",
      "1/2 tasse de poivron vert ; Haché",
      "2 tasses d'eau",
      "2 tasses de tomates et poivre",
      "2 cuillères à café de piment fort",
      "1 cuillère à café de sel",
      "1 cuillère à café de paprika",
      "4 Gousse d'ail ; Haché ",
    ],
    video: "https://www.youtube.com/embed/3lTU17cw-oI?si=OpgIA7zIi0zslNaK",
    cuisine: "Mexican",
  },
  {
    id: 12,
    title: "French Eclair",
    Image:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/french-eclair.jpg",
    ingredients: [
      "INGRÉDIENTS POUR LA PÂTISSERIE",
      "1 bâton de Beurre",
      "1 tasse d'eau",
      "1 tasse de farine",
      "4 œufs",
      "INGRÉDIENTS DE REMPLISSAGE",
      "2 boîtes (3,4 oz) de mélange à pouding instantané à la vanille française",
      "1 2/3 tasses de lait",
      "1 1/3 tasse de crème fouettée épaisse",
      "INGRÉDIENTS DE LA GARNITURE AU CHOCOLAT",
      "4 cuillères à soupe de cacao",
      "2 tasses de sucre en poudre",
      "6 cuillères à soupe de beurre",
      "2 cuillères à café d'extrait de vanille",
      "3-4 cuillères à soupe de lait ",
    ],
    video: "https://youtu.be/enGJ-ZNHNAY?si=qRepj-Ss9cSkA_zh",
    cuisine: "French",
  },
];

export default recipesData;
