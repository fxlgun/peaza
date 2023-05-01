const mongoose = require("mongoose");

const CustomSchema = new mongoose.Schema({
  base: {
    Regular: {type: Number, required: true},
    ThinCrust: {type: Number, required: true},
    ThickCrust: {type: Number, required: true},
    GlutenFree: {type: Number, required: true},
    StuffedCrust: {type: Number, required: true}
  },
  veggies: {
    Mushrooms: {type: Number, required: true},
    Onions: {type: Number, required: true},
    Peppers: {type: Number, required: true},
    Olives: {type: Number, required: true},
    Jalapeno: {type: Number, required: true}
  },
  sauce: {
    Alfredo: {type: Number, required: true},
    Pesto: {type: Number, required: true},
    Marinara: {type: Number, required: true},
    WhiteGarlic: {type: Number, required: true},
    GarlicRanch: {type: Number, required: true}
  },
  cheese: {
    Mozzarella: {type: Number, required: true},
    Cheddar: {type: Number, required: true},
    Parmesan: {type: Number, required: true},
    Provolone: {type: Number, required: true},
    Ricotta: {type: Number, required: true}
  }
}
);

module.exports = mongoose.model("Item", CustomSchema);
