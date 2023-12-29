import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Coconut",
    category: "crop",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    discription: "Coconut is a fruit that grows in tropical climates and is also known as the tree of life. The coconut tree is considered sacred in India and is used in various rituals. The coconut fruit is used in various ways, such as in cooking, for medicinal purposes, and for religious purposes. The coconut fruit is also used to make coconut oil, which is used in cooking and for medicinal purposes. The coconut fruit is also used to make coconut milk, which is used in cooking and for medicinal purposes. The coconut fruit is also used to make coconut water, which is used in cooking and for medicinal purposes. The coconut fruit is also used to make coconut milk, which is used in cooking and for medicinal purposes. The coconut fruit is also used to make coconut water, which is used in cooking and for medicinal purposes. The coconut fruit is also used to make coconut milk, which is used in cooking and for medicinal purposes.",
  },
  {
    id: 2,
    name: "Coffee",
    category: "crop",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds (referred to as beans) are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.",
  },
  {
    id: 3,
    name: "Maize",
    category: "crop",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    discription: "Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. The leafy stalk of the plant produces pollen inflorescences and separate ovuliferous inflorescences called ears that yield kernels or seeds, which are fruits.",
  },
  {
    id: 4,
    name: "Rice",
    category: "crop",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
    discription: "Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima. The name wild rice is usually used for species of the genera Zizania and Porteresia, both wild and domesticated, although the term may also be used for primitive or uncultivated varieties of Oryza.",
  },
  {
    id: 5,
    name: "Sugarcane",
    category: "crop",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Sugarcane, or sugar cane, or simply cane, are several species of tall perennial true grasses of the genus Saccharum, tribe Andropogoneae, used for sugar production. The plant is two to six metres tall. It has stout, jointed, fibrous stalks that are rich in sucrose, a simple sugar which accumulates in the stalk internodes.",
  },
  {
    id: 6,
    name: "Wheat",
    category: "crop",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat.",
  },
  {
    id: 7,
    name: "Cotton",
    category: "crop",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium in the mallow family Malvaceae. The fiber is almost pure cellulose. Under natural conditions, the cotton bolls will increase the dispersal of the seeds.",
  },
  {
    id: 8,
    name: "Soybeans",
    category: "crop",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The soybean or soya bean is a species of legume native to East Asia, widely grown for its edible bean, which has numerous uses. Traditional unfermented food uses of soybeans include soy milk, from which tofu and tofu skin are made. Fermented soy foods include soy sauce, fermented bean paste, nattō, and tempeh.",
  },
  {
    id: 9,
    name: "Walnuts",
    category: "crop",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "A walnut is the nut of any tree of the genus Juglans, particularly the Persian or English walnut, Juglans regia. Technically a walnut is the seed of a drupe or drupaceous nut and thus not a true botanical nut. It is used for food after being processed, while green for pickled walnuts or after full ripening for its nutmeat.",
  },
  {
    id: 10,
    name: "Flaxseed",
    category: "crop",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Flax, also known as common flax or linseed, is a flowering plant, Linum usitatissimum, in the family Linaceae. It is cultivated as a food and fiber crop in regions of the world with temperate climate. Textiles made from flax are known in Western countries as linen, and are traditionally used for bed sheets, underclothes, and table linen.",
  },
  {
    id: 11,
    name: "Peanuts",
    category: "crop",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The peanut, also known as the groundnut, goober, or monkey nut, and taxonomically classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds. It is widely grown in the tropics and subtropics, being important to both small and large commercial producers.",
  },
  {
    id: 12,
    name: "Cashews",
    category: "crop",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The cashew tree is a tropical evergreen tree that produces the cashew seed and the cashew apple. It can grow as high as 14 m, but the dwarf cashew, growing up to 6 m, has proved more profitable, with earlier maturity and higher yields.",
  },
  {
    id: 13,
    name: "Apple",
    category: "fruit",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.",
  },
  {
    id: 14,
    name: "Bananas",
    category: "fruit",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert bananas.",
  },
  {
    id: 15,
    name: "Green Grapes",
    category: "fruit",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, grape juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil.",
  },
  {
    id: 16,
    name: "Mango",
    category: "fruit",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "A mango is a juicy stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. Most of these species are found in nature as wild mangoes.",
  },
  {
    id: 17,
    name: "Orange",
    category: "fruit",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange.",
  },
  {
    id: 18,
    name: "Strawberry",
    category: "fruit",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.",
  },
  {
    id: 19,
    name: "Pineapples",
    category: "fruit",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The pineapple is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries.",
  },
  {
    id: 20,
    name: "Watermelons",
    category: "fruit",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Watermelon is a scrambling and trailing vine in the flowering plant family Cucurbitaceae. The species originated in southern Africa, and there is evidence of its cultivation in Ancient Egypt.",
  },
  {
    id: 21,
    name: "Peaches",
    category: "fruit",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The peach is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Mountains, where it was first domesticated and cultivated. It bears an edible juicy fruit called a peach or a nectarine.",
  },
  {
    id: 22,
    name: "Pomegranate",
    category: "fruit",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The pomegranate, botanical name Punica granatum, is a fruit-bearing deciduous shrub or small tree in the family Lythraceae that grows between 5 and 10 m tall. The fruit is typically in season in the Northern Hemisphere from September to February, and in the Southern Hemisphere from March to May.",
  },
  {
    id: 23,
    name: "Grapefruit",
    category: "fruit",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The grapefruit is a subtropical citrus tree known for its relatively large sour to semisweet, somewhat bitter fruit. Grapefruit is a citrus hybrid originating in Barbados as an accidental cross between the sweet orange and pomelo, both of which were introduced from Asia in the seventeenth century.",
  },
  {
    id: 24,
    name: "Cherries",
    category: "fruit",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. The cherry fruits of commerce usually are obtained from cultivars of a limited number of species such as the sweet cherry and the sour cherry.",
  },
  {
    id: 25,
    name: "Cabbage",
    category: "vegetable",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Cabbage is a leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is descended from the wild cabbage, and belongs to the cole crops or brassicas, meaning it is closely related to broccoli and cauliflower; Brussels sprouts; and Savoy cabbage.",
  },
  {
    id: 26,
    name: "Carrot",
    category: "vegetable",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The carrot is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia.",
  },
  {
    id: 27,
    name: "Cauliflower",
    category: "vegetable",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae family. It is an annual plant that reproduces by seed. Typically, only the head is eaten – the edible white flesh sometimes called curd.",
  },
  {
    id: 28,
    name: "Green Capsicum",
    category: "vegetable",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The bell pepper is the fruit of plants in the Grossum cultivar group of the species Capsicum annuum. Cultivars of the plant produce fruits in different colors, including red, yellow, orange, green, white, and purple.",
  },
  {
    id: 29,
    name: "Onion",
    category: "vegetable",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. Its close relatives include the garlic, scallion, shallot, leek, chive, and Chinese onion.",
  },
  {
    id: 30,
    name: "Potato",
    category: "vegetable",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae.",
  },
  {
    id: 31,
    name: "Tomato",
    category: "vegetable",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.",
  },
  {
    id: 32,
    name: "Brocoli",
    category: "vegetable",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.",
  },
  {
    id: 33,
    name: "Lettuce",
    category: "vegetable",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
  },
  {
    id: 34,
    name: "Cucumber",
    category: "vegetable",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cucumiform fruits that are used as vegetables. There are three main varieties of cucumber: slicing, pickling, and seedless.",
  },
  {
    id: 35,
    name: "Garlic",
    category: "vegetable",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "Garlic is a species in the onion genus, Allium. Its close relatives include the onion, shallot, leek, chive, Welsh onion and Chinese onion. It is native to Central Asia and northeastern Iran and has long been a common seasoning worldwide, with a history of several thousand years of human consumption and use.",
  },
  {
    id: 36,
    name: "Turnips",
    category: "vegetable",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
    discription: "The turnip or white turnip is a root vegetable commonly grown in temperate climates worldwide for its white, fleshy taproot. The word turnip is a compound of tur- as in turned/rounded on a lathe and neep, derived from Latin napus, the word for the plant.",
  },
];

export default all_product;




