"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Restaurant_1 = require("./Model/Restaurant");
var GasOven_1 = require("./Model/GasOven");
var bakery = new Restaurant_1.Restaurant('Bakery', new GasOven_1.GasOven());
bakery.Cook('cookies');
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
