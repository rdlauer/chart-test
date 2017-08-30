var frameModule = require("ui/frame");
var Observable = require("data/observable").Observable;

var pageData = new Observable();
pageData.animeData = [
  { season: "1", count: 82 }, { season: "2", count: 36 }, { season: "3", count: 41 },
  { season: "4", count: 52 }, { season: "5", count: 65 }, { season: "6", count: 40 },
  { season: "7", count: 52 }, { season: "8", count: 54 }, { season: "9", count: 47 },
  { season: "10", count: 52 }, { season: "11", count: 52 }, { season: "12", count: 53 },
  { season: "13", count: 34 }, { season: "14", count: 48 }, { season: "15", count: 49 },
  { season: "16", count: 45 }, { season: "17", count: 48 }, { season: "18", count: 45 },
  { season: "19", count: 47 }
];

exports.pageLoaded = function(args) {
  var page = args.object;
  page.bindingContext = pageData;
};