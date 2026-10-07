// Dish photos from Wikimedia Commons (free licenses), stored in the "images" branch of this repository.
// They live outside main so Snack's git import doesn't have to upload them; Wikimedia itself blocks Android's image client.
const BASE = 'https://raw.githubusercontent.com/Zxcloxg/foodie-roma/images/';

const IMG = {
  bruschetta: BASE + 'bruschetta.jpg',
  carciofi_giudia: BASE + 'carciofi_giudia.jpg',
  fiori: BASE + 'fiori.jpg',
  carbonara: BASE + 'carbonara.jpg',
  cacio: BASE + 'cacio.jpg',
  amatriciana: BASE + 'amatriciana.jpg',
  gricia: BASE + 'gricia.jpg',
  margherita: BASE + 'margherita.jpg',
  bianca: BASE + 'bianca.jpg',
  stracciatella: BASE + 'stracciatella.jpg',
  pastaceci: BASE + 'pastaceci.jpg',
  minestrone: BASE + 'minestrone.jpg',
  saltimbocca: BASE + 'saltimbocca.jpg',
  abbacchio: BASE + 'abbacchio.jpg',
  pollo: BASE + 'pollo.jpg',
  coda: BASE + 'coda.jpg',
  trippa: BASE + 'trippa.jpg',
  calamari: BASE + 'calamari.jpg',
  vongole: BASE + 'vongole.jpg',
  peperonata: BASE + 'peperonata.jpg',
  carciofi_romana: BASE + 'carciofi_romana.jpg',
  puntarelle: BASE + 'puntarelle.jpg',
  gnocchi: BASE + 'gnocchi.jpg',
  risotto: BASE + 'risotto.jpg',
  suppli: BASE + 'suppli.jpg',
  trapizzino: BASE + 'trapizzino.jpg',
  porchetta: BASE + 'porchetta.jpg',
  tiramisu: BASE + 'tiramisu.jpg',
  pannacotta: BASE + 'pannacotta.jpg',
  crostata: BASE + 'crostata.jpg',
  maritozzo: BASE + 'maritozzo.jpg',
  cornetto: BASE + 'cornetto.jpg',
  frittata: BASE + 'frittata.jpg',
};

export default IMG;
