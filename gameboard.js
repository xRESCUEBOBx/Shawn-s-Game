const stats = {
  attack: 0,
  hp: 0,
  mana: 0,
  str: 0,
  dex: 0,
  int: 0,
  luck: 0,
  armor: 0,
  critChance: 0,
  critDamage: 0,
  numberOfPlays: 0,
  maxItems: 5,
  gold: 0,
  gems: 0,
  exp: "?",
};

const player = null;

const barbarian = {
  hp: 150,
  mana: 15,
  str: 0,
  dex: 0,
  int: 0,
  luck: 0,
  armor: 0,
  critChance: 15,
  spell: null,
  starterItem: null, //armor-plate
  description:
    "Good health and strength, average mana, critical chance, and intelligence",
};

const rouge = {
  hp: 80,
  mana: 15,
  str: 0,
  dex: 0,
  int: 0,
  luck: 40,
  armor: 0,
  critChance: 15,
  spell: null,
  description:
    "low health, average mana, critical chance, and intelligence, high luck, and dexterity",
};

const mage = {
  hp: 150,
  mana: 15,
  str: 0,
  dex: 0,
  int: 0,
  luck: 0,
  armor: 0,

  critChance: 15,
  spell: null,
  description:
    "Good health and strength, average mana, critical chance, and intelligence",
};

const bard = {
  hp: 150,
  mana: 15,
  str: 0,
  dex: 0,
  int: 0,
  armor: 0,
  luck: 0,
  critChance: 15,
  spell: null,
  description:
    "Good health and strength, average mana, critical chance, and intelligence",
};

const assassin = {
  hp: 150,
  mana: 15,
  str: 0,
  dex: 0,
  int: 0,
  luck: 0,
  armor: 0,
  critChance: 55,
  spell: null,
  description:
    "Good health and strength, average mana, critical chance, and intelligence",
};
