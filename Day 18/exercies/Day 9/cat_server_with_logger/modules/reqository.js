const { Cat } = require("./cat_model.js");

const cats = [
  new Cat(
    "estif",
    "light_grey",
    `https://as2.ftcdn.net/v2/jpg/00/97/58/97/1000_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg`
  ),
  new Cat(
    "josh",
    "blue",
    `https://t3.ftcdn.net/jpg/02/27/76/44/240_F_227764486_nAcFB4FnDTiyk0WLgKBXArOsqaUCuk7X.jpg`
  ),
  new Cat(
    "leul",
    "cool_grey",
    `https://t3.ftcdn.net/jpg/06/05/37/40/240_F_605374009_hEUHatmKPzuHTIacg7rLneAgnLHUgegM.jpg`
  ),
  new Cat(
    "betty",
    "deep_grey",
    `https://t3.ftcdn.net/jpg/01/41/76/08/240_F_141760845_8jGGCqprLRNEM7kf4J3fyqIyZn2ot1Hr.jpg`
  ),
  new Cat(
    "alpha",
    "boss_grey",
    `https://t3.ftcdn.net/jpg/01/12/79/32/240_F_112793259_3Suf0ZFR5EbHLEAKVgQNjhyvMldQ5Txy.jpg`
  ),
];

module.exports = {
  cats,
};
