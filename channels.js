var channels = [{
  "name": "102.1 THE EDGE",
  "channel": "955",
  "category": ["Radio","Rock"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "104.5 CHUM FM ",
  "channel": "990",
  "category": ["Radio","Rock"],
  "subscribed": true,
  "icon": "data:image/jpeg;base64,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",
  "language": "English"
},{
  "name": "680 NEWS ",
  "channel": "958",
  "category": ["Radio","News"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "ABC - EAST (BOSTON) ",
  "channel": "281",
  "category": [],
  "subscribed": true,
  "icon": "lookup:abc",
  "language": "English"
},{
  "name": "ABC HD - EAST (BOSTON) ",
  "channel": "1201",
  "category": [],
  "subscribed": true,
  "icon": "lookup:abc",
  "language": "English"
},{
  "name": "A&E ",
  "channel": "615",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ane",
  "language": "English"
},{
  "name": "A&E HD",
  "channel": "1721",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ane",
  "language": "English"
},{
  "name": "BRAVO! ",
  "channel": "620",
  "category": [],
  "subscribed": true,
  "icon": "lookup:bravo",
  "language": "English"
},{
  "name": "BRAVO! HD",
  "channel": "1734",
  "category": [],
  "subscribed": true,
  "icon": "lookup:bravo",
  "language": "English"
},{
  "name": "CANAL M, IA RADIO DE VUES & VOIX",
  "channel": "13",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC NEWS NETWORK",
  "channel": "502",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC NEWS NETWORK HD",
  "channel": "1564",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO ONE - HALIFAX ",
  "channel": "952",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO ONE - TORONTO",
  "channel": "956",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO ONE - VANCOUVER",
  "channel": "969",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO TWO ??? TORONTO",
  "channel": "957",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO TWO - VANCOUVER",
  "channel": "970",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBS - EAST (BOSTON)",
  "channel": "282",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbs",
  "language": "English"
},{
  "name": "CBS HD - EAST (BOSTON) ",
  "channel": "1202",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbs",
  "language": "English"
},{
  "name": "CJAD AM",
  "channel": "953",
  "category": ["Radio"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CJPX RADIO - FM 99.5 MTL",
  "channel": "974",
  "category": ["Radio", "Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CKAC AM",
  "channel": "973",
  "category": ["Radio"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CLASSICAL 96FM TORONTO",
  "channel": "963",
  "category": ["Radio", "Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "COUNTRY FM 105 ",
  "channel": "968",
  "category": ["Radio", "Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "COUNTRY MUSIC TELEVISION",
  "channel": "575",
  "category": ["Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CP 24",
  "channel": "503",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cp24",
  "language": "English"
},{
  "name": "CP 24 HD",
  "channel": "1566",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cp24",
  "language": "English"
},{
  "name": "CTV NEWS CHANNEL",
  "channel": "501",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV NEWS CHANNEL HD ",
  "channel": "1562",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "DAYSTAR CANADA",
  "channel": "650",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISCOVERY CHANNEL",
  "channel": "520",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": "lookup:discovery",
  "language": "English"
},{
  "name": "DISCOVERY CHANNEL HD",
  "channel": "1602",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": "lookup:discovery",
  "language": "English"
},{
  "name": "E!",
  "channel": "621",
  "category": [],
  "subscribed": true,
  "icon": "lookup:e",
  "language": "English"
},{
  "name": "E! HD",
  "channel": "1736",
  "category": [],
  "subscribed": true,
  "icon": "lookup:e",
  "language": "English"
},{
  "name": "FOX - EAST (BOSTON)",
  "channel": "283",
  "category": [],
  "subscribed": true,
  "icon": "lookup:fox",
  "language": "English"
},{
  "name": "FOX HD - EAST (BOSTON)",
  "channel": "1203",
  "category": [],
  "subscribed": true,
  "icon": "lookup:fox",
  "language": "English"
},{
  "name": "GAME TV",
  "channel": "274",
  "category": [],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "HGTV",
  "channel": "600",
  "category": [],
  "subscribed": true,
  "icon": "lookup:hgtv",
  "language": "English"
},{
  "name": "HGTV HD ",
  "channel": "1703",
  "category": [],
  "subscribed": true,
  "icon": "lookup:hgtv",
  "language": "English"
},{
  "name": "HISTORY",
  "channel": "522",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": "lookup:history",
  "language": "English"
},{
  "name": "HISTORY HD",
  "channel": "1605",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": "lookup:history",
  "language": "English"
},{
  "name": "HOPE TV* ",
  "channel": "591",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI MUSIQUE - MONTREAL (CBFX FM)",
  "channel": "975",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "JOY TV VANCOUVER* ",
  "channel": "656",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "KIDS SUITE",
  "channel": "547, 1547",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "KUOW PUBLIC RADIO",
  "channel": "966",
  "category": ["Radio"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "L???ASSEMBL??E NATIONALE DU QU??BEC",
  "channel": "148",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "M??T??O M??DIA",
  "channel": "130",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "MTV",
  "channel": "581",
  "category": ["Music"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "MUCHMUSIC",
  "channel": "570",
  "category": ["Music"],
  "subscribed": true,
  "icon": "lookup:much",
  "language": "English"
},{
  "name": "MUCHMUSIC HD",
  "channel": "1670",
  "category": ["Music"],
  "subscribed": true,
  "icon": "lookup:much",
  "language": "English"
},{
  "name": "NBC - EAST (BOSTON)",
  "channel": "280",
  "category": [],
  "subscribed": true,
  "icon": "lookup:nbc",
  "language": "English"
},{
  "name": "NBC HD - EAST (BOSTON)",
  "channel": "1200",
  "category": [],
  "subscribed": true,
  "icon": "lookup:nbc",
  "language": "English"
},{
  "name": "NEWSTALK 1010",
  "channel": "964",
  "category": ["Radio","Talk"],
  "subscribed": true,
  "icon": "data:image/jpeg;base64,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",
  "language": "English"
},{
  "name": "NPR (NATIONAL PUBLIC RADIO)",
  "channel": "965",
  "category": ["Radio","Talk"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OZ-FM - ST. JOHN???S",
  "channel": "951",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PBS - EAST (BOSTON)",
  "channel": "284",
  "category": [],
  "subscribed": true,
  "icon": "lookup:pbs",
  "language": "English"
},{
  "name": "PBS HD - EAST (BOSTON)",
  "channel": "1204",
  "category": [],
  "subscribed": true,
  "icon": "lookup:pbs",
  "language": "English"
},{
  "name": "PLANETE JAZZ ",
  "channel": "960",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PREMI??RE CHA??NE FM 97",
  "channel": "7",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VANCOUVER (CBUF-FM) ",
  "channel": "977",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PREMI??RE CHAINE MONTREAL (CBF-FM)",
  "channel": "976",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "Q107 - TORONTO",
  "channel": "954",
  "category": ["Radio","Rock"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "RFI",
  "channel": "971",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPACE",
  "channel": "627",
  "category": ["Science Fiction"],
  "subscribed": true,
  "icon": "lookup:space",
  "language": "English"
},{
  "name": "SPACE HD",
  "channel": "1746",
  "category": ["Science Fiction"],
  "subscribed": true,
  "icon": "lookup:space",
  "language": "English"
},{
  "name": "SPORTSNET RADIO FAN 590",
  "channel": "959",
  "category": ["Radio","Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "STINGRAY MUSIC STATIONS",
  "channel": "901-945",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET EAST",
  "channel": "406",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET EAST HD",
  "channel": "1406",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET ONTARIO ",
  "channel": "405",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET ONTARIO HD",
  "channel": "1405",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET PACIFIC",
  "channel": "407",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET PACIFIC HD",
  "channel": "1407",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET WEST",
  "channel": "408",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET WEST HD ",
  "channel": "1408",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "TELELATINO",
  "channel": "700",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE COMEDY NETWORK EAST",
  "channel": "625",
  "category": ["Comedy"],
  "subscribed": true,
  "icon": "lookup:comedynetwork",
  "language": "English"
},{
  "name": "THE COMEDY NETWORK WEST",
  "channel": "626",
  "category": ["Comedy"],
  "subscribed": true,
  "icon": "lookup:comedynetwork",
  "language": "English"
},{
  "name": "THE COMEDY NETWORK HD",
  "channel": "1740",
  "category": ["Comedy"],
  "subscribed": true,
  "icon": "lookup:comedynetwork",
  "language": "English"
},{
  "name": "THE SHOPPING CHANNEL",
  "channel": "660",
  "category": ["Shop"],
  "subscribed": true,
  "icon": "data:image/jpeg;base64,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",
  "language": "English"
},{
  "name": "TLC",
  "channel": "521",
  "category": ["Life"],
  "subscribed": true,
  "icon": "lookup:tlc",
  "language": "English"
},{
  "name": "TLC HD",
  "channel": "1603",
  "category": ["Life"],
  "subscribed": true,
  "icon": "lookup:tlc",
  "language": "English"
},{
  "name": "TREEHOUSE ",
  "channel": "553",
  "category": ["Kids"],
  "subscribed": true,
  "icon": "lookup:treehouse",
  "language": "English"
},{
  "name": "TREEHOUSE HD",
  "channel": "1640",
  "category": ["Kids"],
  "subscribed": true,
  "icon": "lookup:treehouse",
  "language": "English"
},{
  "name": "TSN1",
  "channel": "400",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN1 HD",
  "channel": "1400",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN3",
  "channel": "402",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN3 HD",
  "channel": "1402",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN4",
  "channel": "403",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN4 HD",
  "channel": "1403",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN5",
  "channel": "404",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN5 HD",
  "channel": "1404",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN RADIO 1050",
  "channel": "995",
  "category": ["Radio", "Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN RADIO 1290 WINNIPEG",
  "channel": "984",
  "category": ["Radio", "Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN RADIO 990 MONTREAL",
  "channel": "985",
  "category": ["Radio", "Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TVA - CARLETON*",
  "channel": "94",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - MONTREAL*",
  "channel": "115",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA HD - MONTREAL* ",
  "channel": "1804",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - GATINEAU, HULL, OTTAWA* ",
  "channel": "1818",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - QU??BEC*",
  "channel": "110",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - RIMOUSKI*",
  "channel": "101",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - ROUYN NORANDA* ",
  "channel": "116",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - SAGUENAY*",
  "channel": "105",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - SHERBROOKE* ",
  "channel": "107",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - TROIS-RIVIERES* ",
  "channel": "541",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - OUEST* ",
  "channel": "121",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - MONTR??AL* ",
  "channel": "114",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V HD - MONTR??AL* ",
  "channel": "1803",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - GATINEAU*",
  "channel": "543",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - QU??BEC*",
  "channel": "109",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - SAGUENAY*",
  "channel": "104",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - SHERBROOKE* ",
  "channel": "106",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - TROIS-RIVIERES* ",
  "channel": "540",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - VAL-D???OR*",
  "channel": "544",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VISION TV ",
  "channel": "261",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VOAR 1210 AM - NFLD",
  "channel": "950",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "W NETWORK ",
  "channel": "602",
  "category": [],
  "subscribed": true,
  "icon": "lookup:w",
  "language": "English"
},{
  "name": "W NETWORK HD",
  "channel": "1705",
  "category": [],
  "subscribed": true,
  "icon": "lookup:w",
  "language": "English"
},{
  "name": "WAHSA FM",
  "channel": "972",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WRN FM",
  "channel": "962",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YTV - EAST ",
  "channel": "551",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ytv",
  "language": "English"
},{
  "name": "YTV HD",
  "channel": "1646",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ytv",
  "language": "English"
},{
  "name": "ABC SPARK",
  "channel": "560",
  "category": [],
  "subscribed": true,
  "icon": "lookup:abc",
  "language": "English"
},{
  "name": "ABC SPARK HD",
  "channel": "1650",
  "category": [],
  "subscribed": true,
  "icon": "lookup:abc",
  "language": "English"
},{
  "name": "ACTION",
  "channel": "334",
  "category": [],
  "subscribed": true,
  "icon": "data:image/jpeg;base64,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",
  "language": "English"
},{
  "name": "AMC",
  "channel": "293",
  "category": [],
  "subscribed": true,
  "icon": "lookup:amc",
  "language": "English"
},{
  "name": "AMC HD",
  "channel": "1281",
  "category": [],
  "subscribed": true,
  "icon": "lookup:amc",
  "language": "English"
},{
  "name": "ANIMAL PLANET",
  "channel": "525",
  "category": [],
  "subscribed": true,
  "icon": "lookup:animalplanet",
  "language": "English"
},{
  "name": "ANIMAL PLANET HD ",
  "channel": "1612",
  "category": [],
  "subscribed": true,
  "icon": "lookup:animalplanet",
  "language": "English"
},{
  "name": "BBC WORLD NEWS",
  "channel": "510",
  "category": ["News"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "BET",
  "channel": "576",
  "category": [],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "BNN ",
  "channel": "504",
  "category": [],
  "subscribed": true,
  "icon": "lookup:bnn",
  "language": "English"
},{
  "name": "BNN HD",
  "channel": "1568",
  "category": [],
  "subscribed": true,
  "icon": "lookup:bnn",
  "language": "English"
},{
  "name": "CHRGD",
  "channel": "562",
  "category": [],
  "subscribed": true,
  "icon": "lookup:chrgd",
  "language": "English"
},{
  "name": "CHRGD HD",
  "channel": "1648",
  "category": [],
  "subscribed": true,
  "icon": "lookup:chrgd",
  "language": "English"
},{
  "name": "CNBC",
  "channel": "509",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cnbc",
  "language": "English"
},{
  "name": "CNN ",
  "channel": "500",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "CNN HD",
  "channel": "1578",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "COSMOPOLITAN TV ",
  "channel": "608",
  "category": [],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "COTTAGE LIFE",
  "channel": "641",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "COTTAGE LIFE HD",
  "channel": "1730",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CRIME + INVESTIGATION ",
  "channel": "638",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISCOVERY SCIENCE ",
  "channel": "523",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": "lookup:discovery",
  "language": "English"
},{
  "name": "DISCOVERY SCIENCE HD",
  "channel": "1606",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": "lookup:discovery",
  "language": "English"
},{
  "name": "DISNEY CHANNEL HD",
  "channel": "563",
  "category": ["Kids"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISNEY JUNIOR HD",
  "channel": "1651",
  "category": ["Kids"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISNEY XD HD",
  "channel": "1652",
  "category": ["Kids"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DIY",
  "channel": "607",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DOCUMENTARY CHANNEL",
  "channel": "336",
  "category": ["Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DOCUMENTARY CHANNEL HD",
  "channel": "1310",
  "category": ["Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAMILY - EAST",
  "channel": "556",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAMILY - WEST",
  "channel": "557",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAMILY HD",
  "channel": "1642",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAMILY JUNIOR",
  "channel": "549",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOOD NETWORK CANADA",
  "channel": "603",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOOD NETWORK CANADA HD",
  "channel": "1706",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FX HD",
  "channel": "1290",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HLN HEADLINE NEWS",
  "channel": "508",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "HLN HEADLINE NEWS HD",
  "channel": "1579",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "KTLA",
  "channel": "298",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "KTLA HD",
  "channel": "1238",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "M3",
  "channel": "571",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "M3 HD",
  "channel": "1671",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MEDIASET ITALIA",
  "channel": "698",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MTV 2",
  "channel": "577",
  "category": ["Music"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "NATIONAL GEOGRAPHIC",
  "channel": "524",
  "category": ["Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NATIONAL GEOGRAPHIC HD",
  "channel": "1609",
  "category": ["Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OLN",
  "channel": "411",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OLN HD",
  "channel": "1411",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PEACHTREE TV",
  "channel": "294",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PEACHTREE TV HD",
  "channel": "1231",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RUSSIA TODAY ",
  "channel": "724",
  "category": ["News"],
  "subscribed": true,
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAb1BMVEV2vR0AAACi3Xhyuw9xthwXJQZ6wx54wB5pqRpRghRCahBelhd9yR8bKwYYJgWg3HQdLwe76p8LEgMSHAQhNQguSgtAZhAGCQGGqXRMehNZjxYIDgI2Vg1usBs7Xw4xTgwkOglHchJkoBmE1CCazHils3loAAAByUlEQVRoge3b626CQBAF4EFhF+WmorVe8Na+/zM21lJZOFGJjLTJOX9nmC+6WVhMlGk2eH2yqWTDPpLJYCivz3BAly5dunTp0qVLly5dunTp0qVL95+7fotY0/qSn9RdG26CR5PO9yvfiI1mD19SZvbecL12OVoTtbzknKddL5F+XC9Vc5OP+DuyTtCMSeRmDHq2tZ7Ph9y4rJodgiNjKzEj0DJ2WmxjH912RcwC1BfWGYHd2/v3novXv1B3JZ6Dhqj6gXVcuMKj6lQl960fNz6AhrW+WyxBQ6i+vvEe1OfOTAXXxmh1vZUztEv3cpfxT2hxvdQZ2aG7nFwSINXzTlbJvZ3IHfkiNwlrbJfu7JwNKMzX1v2SO3UTKYrCD/NmZR9LI13vI3iO2jXhzvevQQeJdX15Fe4bNgXFor7ACi4qBvqfV8wKVLdq+/f6XDDotOHenlVcW4Cyd1J7LvzW4SE19/XPV/ABvNB3xZ+hsZUOJRe//lVuH0ouPlFWjlharsgE9ATPuuB9/+C6NszLN/5r8l052Y7ytJ78eMfFP1a4HWJRT9FmxB/6PYcuXbp06dKlS5cuXbp06dKlS5fu33b7+n9ZT/+n+wJnyi0OIYHkkAAAAABJRU5ErkJggg==",
  "language": "English"
},{
  "name": "SHOWCASE",
  "channel": "616",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SHOWCASE HD",
  "channel": "1726",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPIKE",
  "channel": "628",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET 360",
  "channel": "410",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET 360 HD",
  "channel": "1410",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET FLAMES",
  "channel": "438",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET FLAMES HD",
  "channel": "1438",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET OILERS",
  "channel": "437",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET OILERS HD",
  "channel": "1437",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET ONE ",
  "channel": "418",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET ONE HD",
  "channel": "1409",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET VANCOUVER HOCKEY",
  "channel": "436",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "SPORTSNET VANCOUVER HOCKEY HD",
  "channel": "1436",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:sportsnet",
  "language": "English"
},{
  "name": "TCM",
  "channel": "292",
  "category": ["Movies"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TCM HD",
  "channel": "1283",
  "category": ["Movies"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TELETOON - EAST",
  "channel": "554",
  "category": [],
  "subscribed": true,
  "icon": "lookup:teletoon",
  "language": "English"
},{
  "name": "TELETOON - EAST HD",
  "channel": "1653",
  "category": [],
  "subscribed": true,
  "icon": "lookup:teletoon",
  "language": "English"
},{
  "name": "TELETOON - WEST",
  "channel": "555",
  "category": [],
  "subscribed": true,
  "icon": "lookup:teletoon",
  "language": "English"
},{
  "name": "THE GOLF CHANNEL ",
  "channel": "416",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE GOLF CHANNEL HD",
  "channel": "1428",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN2",
  "channel": "401",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "TSN2 HD",
  "channel": "1401",
  "category": ["Sports"],
  "subscribed": true,
  "icon": "lookup:tsn",
  "language": "English"
},{
  "name": "WGN",
  "channel": "295",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WGN HD",
  "channel": "1232",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WPIX",
  "channel": "297",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WPIX HD",
  "channel": "1236",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WSBK",
  "channel": "296",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WSBK HD",
  "channel": "1234",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "3D BARKER CHANNEL",
  "channel": "1933",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ADULT LOCK",
  "channel": "741",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMBER ALERTS (INFO) ",
  "channel": "184",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMI-AUDIO ",
  "channel": "49",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMI-T??L??",
  "channel": "50",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMITV",
  "channel": "48",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "APTN ",
  "channel": "269",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "APTN - NORTH",
  "channel": "270",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "APTN HD",
  "channel": "1197",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AUDIO CHANNEL (BTV FOR COMMERCIAL)",
  "channel": "979-983",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BLUE VU PPV",
  "channel": "746",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC - CAL, HAL, MTL, OTT, TOR, VAN, WIN",
  "channel": "6 FEEDS*",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC HD - CAL, HAL, MTL, OTT, TOR, VAN, WIN",
  "channel": "7 FEEDS*",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC - OTTAWA*",
  "channel": "208",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC HD - OTTAWA*",
  "channel": "1040",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - THUNDER BAY*",
  "channel": "223",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - TORONTO*",
  "channel": "210",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC HD - TORONTO*",
  "channel": "1050",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - WINDSOR* ",
  "channel": "587",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CFTV LEAMINGTON*",
  "channel": "586",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHCH TV",
  "channel": "218",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHCH TV HD",
  "channel": "1057",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHEK VICTORIA ",
  "channel": "255",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHET-TV CHETWYND, BC",
  "channel": "655",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - CALGARY* ",
  "channel": "246",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - CALGARY HD* ",
  "channel": "1133",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - EDMONTON*",
  "channel": "241",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - KAMLOOPS*",
  "channel": "259",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - KAMLOOPS HD*",
  "channel": "1159",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - MEDICINE HAT (CHAT) ",
  "channel": "248",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - MONTREAL*",
  "channel": "207",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - MONTREAL HD* ",
  "channel": "1033",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - PRINCE GEORGE*",
  "channel": "260",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - PRINCE GEORGE HD*",
  "channel": "1160",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - SASKATCHEWAN*",
  "channel": "266",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - TORONTO* ",
  "channel": "214",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - TORONTO HD* ",
  "channel": "1053",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - VANCOUVER*",
  "channel": "253",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - VANCOUVER HD*",
  "channel": "1153",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - WINNIPEG*",
  "channel": "228",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - WINNIPEG HD",
  "channel": "1093",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CPAC - ENGLISH",
  "channel": "512",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CPAC - FRENCH",
  "channel": "149",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CTV - KITCHENER* ",
  "channel": "584",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - OTTAWA*",
  "channel": "229",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - TORONTO* ",
  "channel": "212",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV HD - TORONTO* ",
  "channel": "1051",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - WINNIPEG*",
  "channel": "225",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV HD - WINNIPEG*",
  "channel": "1091",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - TORONTO* ",
  "channel": "219",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO HD - TORONTO*",
  "channel": "1054",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - LONDON* ",
  "channel": "220",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - OTTAWA*",
  "channel": "209",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - WINDSOR* ",
  "channel": "585",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "FRENCH VU! INFO CHANNEL",
  "channel": "122",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - CALGARY* ",
  "channel": "244",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - CALGARY HD* ",
  "channel": "899",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - EDMONTON* ",
  "channel": "240",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - HALIFAX* ",
  "channel": "204",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - KENORA*",
  "channel": "224",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - LETHBRIDGE*",
  "channel": "644",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - OKANAGAN*",
  "channel": "654",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - REGINA*",
  "channel": "594",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - SAINT JOHN*",
  "channel": "198",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - SASKATCHEWAN* ",
  "channel": "236",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - THUNDER BAY*",
  "channel": "222",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - THUNDER BAY HD*",
  "channel": "1065",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - TORONTO*",
  "channel": "211",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - TORONTO HD*",
  "channel": "1052",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - VANCOUVER*",
  "channel": "252",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - VANCOUVER HD*",
  "channel": "807",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - WINNIPEG* ",
  "channel": "227",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "HAY RIVER TV",
  "channel": "649",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - EDMONTON*",
  "channel": "119",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - EDMONTON HD*",
  "channel": "1830",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - MONCTON*",
  "channel": "100",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - MONCTON HD* ",
  "channel": "1801-1802",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - MONTR??AL* ",
  "channel": "860",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - MONTREAL HD* ",
  "channel": "1802",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - OTTAWA*",
  "channel": "125",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - OTTAWA HD*",
  "channel": "872",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - REGINA* ",
  "channel": "98",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - TORONTO* ",
  "channel": "99",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - VANCOUVER* ",
  "channel": "120",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - VANCOUVER HD* ",
  "channel": "1832",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - WINNIPEG*",
  "channel": "118",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RDI",
  "channel": "126",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RDI HD ",
  "channel": "1882",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "INTERNAL CHANNEL ",
  "channel": "898",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "KIDS VU! PPV ENGLISH ",
  "channel": "561",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NEW CHANNELS",
  "channel": "272",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NTV- ST. JOHN???S",
  "channel": "199",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NUNAVUT AND NWT LEGILSATIVE ASSEMBLY",
  "channel": "513",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI - B.C.",
  "channel": "254",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI HD - B.C.",
  "channel": "1155",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 1 - TORONTO ",
  "channel": "215",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 1 HD - TORONTO",
  "channel": "1055",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 2 - TORONTO ",
  "channel": "216",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 2 HD - TORONTO ",
  "channel": "1056",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PPV",
  "channel": "569",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PUSH VOD",
  "channel": "835",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RED CARPET VU!",
  "channel": "317",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TELILE COMMUNITY TV!",
  "channel": "536",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TFO",
  "channel": "137",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TFO HD",
  "channel": "1837",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE KNOWLEDGE NETWORK",
  "channel": "268",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE WEATHER NETWORK",
  "channel": "505",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TV5",
  "channel": "145",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TV5 HD",
  "channel": "1835",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - GATINEAU, HULL, OTTAWA",
  "channel": "117",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - GATINEAU, HULL, OTTAWA HD",
  "channel": "1818",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - MONTR??AL",
  "channel": "861",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - MONTR??AL HD",
  "channel": "1804",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVO",
  "channel": "265",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "UNIS TV",
  "channel": "150",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - GATINEAU",
  "channel": "543",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - GATINEAU HD",
  "channel": "1817",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VALEMOUNT COMMUNITY TV",
  "channel": "653",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS - T??L?? ?? LA CARTE ADULTE",
  "channel": "759-761",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS ADULT - PAY-PER-VIEW",
  "channel": "750-762",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS INFORMATION CHANNEL",
  "channel": "742",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS PREVIEW CHANNEL",
  "channel": "749",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! - PAY-PER-VIEW",
  "channel": "VARIES",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! - PAY-PER-VIEW HD",
  "channel": "VARIES",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! - T??L?? ?? LA CARTE",
  "channel": "VARIES",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! - T??L?? ?? LA CARTE HD",
  "channel": "VARIES",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! 3D HD",
  "channel": "1933",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! INFO CHANNEL",
  "channel": "412, 482",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! PPV SPORTING EVENTS ",
  "channel": "399",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YES BURLINGTON (CITS-TV) ",
  "channel": "651",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YES CALGARY (CKCS-TV)",
  "channel": "646",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YES EDMONTON (CKES-TV) ",
  "channel": "648",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AL JAZEERA ENGLISH",
  "channel": "516",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMERICAN HEROES CHANNEL",
  "channel": "631",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BBC CANADA",
  "channel": "635",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BBC KIDS ",
  "channel": "558",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BOOK TELEVISION",
  "channel": "529",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CARTOON NETWORK",
  "channel": "564",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CNN INTERNATIONAL",
  "channel": "511",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "COMEDY GOLD",
  "channel": "637",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DEJAVIEW",
  "channel": "636",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISCOVERY VELOCITY",
  "channel": "1601",
  "category": [],
  "subscribed": true,
  "icon": "lookup:discovery",
  "language": "English"
},{
  "name": "DTOUR",
  "channel": "618",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DTOUR HD",
  "channel": "1728",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FASHION TELEVISION",
  "channel": "605",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOX NEWS CHANNEL ",
  "channel": "507",
  "category": ["News"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "FXX HD",
  "channel": "1291",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FYI",
  "channel": "604",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "G4 TECH TV CANADA",
  "channel": "515",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GAME SHOW NETWORK ",
  "channel": "639",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GAME SHOW NETWORK HD",
  "channel": "1732",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GUSTO ",
  "channel": "619",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HIFI HD",
  "channel": "1623",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "H2",
  "channel": "629",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "I CHANNEL",
  "channel": "514",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "IFC - THE INDEPENDENT FILM CHANNEL",
  "channel": "330",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "INVESTIGATION DISCOVERY (ID)",
  "channel": "528",
  "category": [],
  "subscribed": true,
  "icon": "lookup:discovery",
  "language": "English"
},{
  "name": "INVESTIGATION DISCOVERY HD (ID)",
  "channel": "1714",
  "category": [],
  "subscribed": true,
  "icon": "lookup:discovery",
  "language": "English"
},{
  "name": "LEAFS TV ",
  "channel": "422",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LEAFS TV HD",
  "channel": "1422",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LIFETIME ",
  "channel": "335",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LIFETIME HD",
  "channel": "1707",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LOVE NATURE HD",
  "channel": "1625",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MAKEFUL",
  "channel": "530",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MIRACLE CHANNEL ",
  "channel": "652",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MOVIETIME",
  "channel": "630",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MOVIETIME HD ",
  "channel": "1285",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MSNBC HD",
  "channel": "1588",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBA TV CANADA",
  "channel": "415",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBA TV CANADA HD",
  "channel": "1418",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NICKELODEON",
  "channel": "559",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ONE: GET FIT",
  "channel": "606",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OPRAH WINFREY NETWORK",
  "channel": "526",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OPRAH WINFREY NETWORK HD",
  "channel": "1711",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OUT TV",
  "channel": "609",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RADX HD",
  "channel": "1627",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SILVER SCREEN CLASSIC",
  "channel": "337",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SLICE",
  "channel": "601",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SLICE HD",
  "channel": "1704",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUNDANCE",
  "channel": "613",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE FIGHT NETWORK",
  "channel": "388",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE SMITHSONIAN CHANNEL",
  "channel": "1629",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TRAVEL & ESCAPE",
  "channel": "527",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VICELAND",
  "channel": "622",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "W MOVIES",
  "channel": "333",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "W MOVIES HD",
  "channel": "1305",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WFN",
  "channel": "419",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WILD TV ",
  "channel": "389",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ABC - EAST (BOSTON) ",
  "channel": "281",
  "category": [],
  "subscribed": true,
  "icon": "lookup:abc",
  "language": "English"
},{
  "name": "ABC HD - EAST (BOSTON) ",
  "channel": "1201",
  "category": [],
  "subscribed": true,
  "icon": "lookup:abc",
  "language": "English"
},{
  "name": "ABC - WEST (SEATTLE) ",
  "channel": "288",
  "category": [],
  "subscribed": true,
  "icon": "lookup:abc",
  "language": "English"
},{
  "name": "ABC HD - WEST (SEATTLE)",
  "channel": "1211",
  "category": [],
  "subscribed": true,
  "icon": "lookup:abc",
  "language": "English"
},{
  "name": "CBC - CAL, HAL, MTL, OTT, TOR, VAN, WIN",
  "channel": "6 FEEDS*",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC HD - CAL, HAL, MTL, OTT, TOR, VAN, WIN",
  "channel": "7 FEEDS*",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC - OTTAWA*",
  "channel": "208",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC HD - OTTAWA*",
  "channel": "1040",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - THUNDER BAY*",
  "channel": "223",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - TORONTO*",
  "channel": "210",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC HD - TORONTO*",
  "channel": "1050",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - WINDSOR* ",
  "channel": "587",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBS - EAST (BOSTON)",
  "channel": "282",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbs",
  "language": "English"
},{
  "name": "CBS HD - EAST (BOSTON) ",
  "channel": "1202",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbs",
  "language": "English"
},{
  "name": "CBS - WEST (SEATTLE)",
  "channel": "289",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbs",
  "language": "English"
},{
  "name": "CBS HD - WEST (SEATTLE) ",
  "channel": "1212",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbs",
  "language": "English"
},{
  "name": "CITYTV - CALGARY* ",
  "channel": "246",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - CALGARY HD* ",
  "channel": "1133",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - EDMONTON*",
  "channel": "241",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - MEDICINE HAT (CHAT) ",
  "channel": "248",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - MONTREAL*",
  "channel": "207",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - MONTREAL HD* ",
  "channel": "1033",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - SASKATCHEWAN*",
  "channel": "266",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - TORONTO* ",
  "channel": "214",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - TORONTO HD* ",
  "channel": "1053",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - VANCOUVER*",
  "channel": "253",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - VANCOUVER HD*",
  "channel": "1153",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - WINNIPEG*",
  "channel": "228",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CITYTV - WINNIPEG HD",
  "channel": "1093",
  "category": [],
  "subscribed": true,
  "icon": "lookup:citytv",
  "language": "English"
},{
  "name": "CTV - KITCHENER* ",
  "channel": "584",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - OTTAWA*",
  "channel": "229",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - TORONTO* ",
  "channel": "212",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV HD - TORONTO* ",
  "channel": "1051",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - WINNIPEG*",
  "channel": "225",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV HD - WINNIPEG*",
  "channel": "1091",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - TORONTO* ",
  "channel": "219",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO HD - TORONTO*",
  "channel": "1054",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - LONDON* ",
  "channel": "220",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - OTTAWA*",
  "channel": "209",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - WINDSOR* ",
  "channel": "585",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "FOX - EAST (BOSTON)",
  "channel": "283",
  "category": [],
  "subscribed": true,
  "icon": "lookup:fox",
  "language": "English"
},{
  "name": "FOX HD - EAST (BOSTON)",
  "channel": "1203",
  "category": [],
  "subscribed": true,
  "icon": "lookup:fox",
  "language": "English"
},{
  "name": "FOX - WEST (SEATTLE)",
  "channel": "290",
  "category": [],
  "subscribed": true,
  "icon": "lookup:fox",
  "language": "English"
},{
  "name": "FOX - WEST (SEATTLE) HD",
  "channel": "1213",
  "category": [],
  "subscribed": true,
  "icon": "lookup:fox",
  "language": "English"
},{
  "name": "GLOBAL - CALGARY",
  "channel": "244",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - CALGARY HD ",
  "channel": "899",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - EDMONTON",
  "channel": "240",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - HALIFAX",
  "channel": "204",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - KENORA*",
  "channel": "224",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - LETHBRIDGE ",
  "channel": "644",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - OKANAGAN",
  "channel": "654",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - REGINA",
  "channel": "594",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - SAINT JOHN",
  "channel": "198",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - SASKATCHEWAN",
  "channel": "236",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - THUNDER BAY*",
  "channel": "222",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - THUNDER BAY HD",
  "channel": "1065",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - TORONTO*",
  "channel": "211",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - TORONTO HD*",
  "channel": "1052",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - VANCOUVER",
  "channel": "252",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - VANCOUVER HD",
  "channel": "807",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "GLOBAL - WINNIPEG",
  "channel": "227",
  "category": [],
  "subscribed": true,
  "icon": "lookup:globaltv",
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - EDMONTON",
  "channel": "119",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - EDMONTON HD",
  "channel": "1830",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - MONCTON",
  "channel": "100",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - MONCTON HD",
  "channel": "1801-1802",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MONTR??AL",
  "channel": "860",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - MONTREAL HD",
  "channel": "1802",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - OTTAWA",
  "channel": "125",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - TORONTO",
  "channel": "99",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VANCOUVER",
  "channel": "120",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA T??L?? (ICI) - VANCOUVER HD",
  "channel": "1832",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBC - EAST (BOSTON)",
  "channel": "280",
  "category": [],
  "subscribed": true,
  "icon": "lookup:nbc",
  "language": "English"
},{
  "name": "NBC HD - EAST (BOSTON)",
  "channel": "1200",
  "category": [],
  "subscribed": true,
  "icon": "lookup:nbc",
  "language": "English"
},{
  "name": "NBC - WEST (SEATTLE)",
  "channel": "287",
  "category": [],
  "subscribed": true,
  "icon": "lookup:nbc",
  "language": "English"
},{
  "name": "NBC HD - WEST (SEATTLE) ",
  "channel": "1210",
  "category": [],
  "subscribed": true,
  "icon": "lookup:nbc",
  "language": "English"
},{
  "name": "OMNI - B.C.",
  "channel": "254",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI HD - B.C.",
  "channel": "1155",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 1 - TORONTO ",
  "channel": "215",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 1 HD - TORONTO",
  "channel": "1055",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PBS - EAST (BOSTON)",
  "channel": "284",
  "category": [],
  "subscribed": true,
  "icon": "lookup:pbs",
  "language": "English"
},{
  "name": "PBS HD - EAST (BOSTON)",
  "channel": "1204",
  "category": [],
  "subscribed": true,
  "icon": "lookup:pbs",
  "language": "English"
},{
  "name": "PBS - WEST (SEATTLE)",
  "channel": "291",
  "category": [],
  "subscribed": true,
  "icon": "lookup:pbs",
  "language": "English"
},{
  "name": "PBS HD - WEST (SEATTLE)",
  "channel": "1214",
  "category": [],
  "subscribed": true,
  "icon": "lookup:pbs",
  "language": "English"
},{
  "name": "CRAVETV",
  "channel": "(ON DEMAND)",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CRAVETV",
  "channel": "(ON DEMAND)",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - EAST",
  "channel": "306",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - EAST",
  "channel": "1258",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - WEST",
  "channel": "307",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - WEST",
  "channel": "1259",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 ",
  "channel": "300",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 HD ",
  "channel": "1251",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2",
  "channel": "301",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2 HD ",
  "channel": "1252",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 ",
  "channel": "302",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 HD ",
  "channel": "1253",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 4 ",
  "channel": "303",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE",
  "channel": "304",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE HD",
  "channel": "1256",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE 2",
  "channel": "305",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 1",
  "channel": "326",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 1 HD",
  "channel": "1277",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 2 ",
  "channel": "327",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 2 HD",
  "channel": "1278",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 3",
  "channel": "328",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 3 HD",
  "channel": "1279",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 4",
  "channel": "329",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 4 HD",
  "channel": "1280",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CRAVETV",
  "channel": "(ON DEMAND)",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - EAST",
  "channel": "306",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - EAST",
  "channel": "1258",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - WEST",
  "channel": "307",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - WEST",
  "channel": "1259",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 ",
  "channel": "300",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 HD ",
  "channel": "1251",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2",
  "channel": "301",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2 HD ",
  "channel": "1252",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 ",
  "channel": "302",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 HD ",
  "channel": "1253",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 4 ",
  "channel": "303",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE",
  "channel": "304",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE HD",
  "channel": "1256",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE 2",
  "channel": "305",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - EAST",
  "channel": "306",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - EAST",
  "channel": "1258",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - WEST",
  "channel": "307",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - WEST",
  "channel": "1259",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 ",
  "channel": "300",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 HD ",
  "channel": "1251",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2",
  "channel": "301",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2 HD ",
  "channel": "1252",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 ",
  "channel": "302",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 HD ",
  "channel": "1253",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 4 ",
  "channel": "303",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE",
  "channel": "304",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE HD",
  "channel": "1256",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE 2",
  "channel": "305",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 1",
  "channel": "326",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 1 HD",
  "channel": "1277",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 2 ",
  "channel": "327",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 2 HD",
  "channel": "1278",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 3",
  "channel": "328",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 3 HD",
  "channel": "1279",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 4",
  "channel": "329",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 4 HD",
  "channel": "1280",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ??CRAN 1",
  "channel": "180",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ??CRAN 1 HD",
  "channel": "1890",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ??CRAN 2",
  "channel": "181",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ??CRAN 2 HD",
  "channel": "1891",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ??CRAN 3",
  "channel": "182",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ??CRAN 3 HD",
  "channel": "1892",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ??CRAN 4",
  "channel": "183",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HOLLYWOOD SUITE 70s",
  "channel": "1315",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HOLLYWOOD SUITE 80s ",
  "channel": "1316",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HOLLYWOOD SUITE 90s ",
  "channel": "1317",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HOLLYWOOD SUITE 00s ",
  "channel": "1318",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BEIN SPORTS HD",
  "channel": "1412",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHAMPION???S LEAGUE ",
  "channel": "731",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "INDIAN PREMIER LEAGUE",
  "channel": "732",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPI - 1",
  "channel": "478",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPI - 2",
  "channel": "479",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPITV - CANADA ",
  "channel": "480",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPITV - INTERNATIONAL ",
  "channel": "481",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPITV - WEST ",
  "channel": "477",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MLB EXTRA INNINGS",
  "channel": "485-497",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MLB EXTRA INNINGS HD",
  "channel": "1480-1487",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBA LEAGUE PASS",
  "channel": "465-476",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBA LEAGUE PASS HD",
  "channel": "1471-1479",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NFL RED ZONE HD ",
  "channel": "1500",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NFL SUNDAY TICKET",
  "channel": "451-464",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NFL SUNDAY TICKET HD",
  "channel": "1501-1517",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NHL CENTRE ICE",
  "channel": "426-435",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NHL CENTRE ICE HD",
  "channel": "1451-1457",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET WORLD",
  "channel": "420",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET WORLD HD",
  "channel": "1414",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "U.S. COLLEGE SPORTS",
  "channel": "390-395",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "U.S. COLLEGE SPORTS HD",
  "channel": "396-398",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ADDIK",
  "channel": "136",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ADDIK HD",
  "channel": "1868",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ARGENT",
  "channel": "128",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CANAL D",
  "channel": "129",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CANAL D HD",
  "channel": "1872",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DE VUES & VOIX ",
  "channel": "13",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL SAVOIR ",
  "channel": "152",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL VIE",
  "channel": "135",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL VIE HD",
  "channel": "1866",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL Z T??L??",
  "channel": "131",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL Z T??L?? HD",
  "channel": "1858",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CASA",
  "channel": "154",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CASA HD",
  "channel": "1850",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CIN??POP",
  "channel": "185",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CIN??POP HD",
  "channel": "1895",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "??VASION",
  "channel": "134",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "??VASION HD",
  "channel": "1864",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "HISTORIA",
  "channel": "133",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "HISTORIA HD",
  "channel": "1862",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "ICI ARTV",
  "channel": "143",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI ARTV HD",
  "channel": "1844",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI EXPLORA HD",
  "channel": "1845",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "INVESTIGATION HD (FRENCH) ",
  "channel": "1847",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "LA CHA??NE DISNEY",
  "channel": "186",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "LCN",
  "channel": "127",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LCN HD",
  "channel": "1887",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MOI&CIE",
  "channel": "194",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MUSIMAX",
  "channel": "142",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "MUSIQUEPLUS",
  "channel": "141",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "MUSIQUEPLUS HD",
  "channel": "1876",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "PRISE 2",
  "channel": "153",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "PRISE 2 HD",
  "channel": "1849",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS ",
  "channel": "123",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS HD",
  "channel": "1880",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS INFO",
  "channel": "124",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS2",
  "channel": "192",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS2 HD",
  "channel": "1881",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "S??RIES+ ",
  "channel": "132",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "S??RIES+ HD",
  "channel": "1860",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "T??L??MAGINO ",
  "channel": "189",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "T??L??-QU??BEC",
  "channel": "138",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "T??L??-QU??BEC HD",
  "channel": "1805",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TELETOON FRENCH",
  "channel": "139",
  "category": [],
  "subscribed": true,
  "icon": "lookup:teletoon",
  "language": "French"
},{
  "name": "TFO",
  "channel": "137",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TFO HD ",
  "channel": "1837",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TVA SPORTS ",
  "channel": "193",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TVA SPORTS HD",
  "channel": "1883",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TVA SPORTS 2 HD",
  "channel": "1884",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "VRAK TV",
  "channel": "140",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VRAK TV HD",
  "channel": "1870",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YOOPA",
  "channel": "144",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YOOPA HD",
  "channel": "1874",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ZESTE",
  "channel": "190",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ZESTE HD",
  "channel": "1865",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AOV ADULT MOVIE CHANNEL",
  "channel": "781",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AOV MALE FLIXXX",
  "channel": "782",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PLAYBOY TV",
  "channel": "780",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS PREVIEW CHANNEL",
  "channel": "749",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS PREVIEW CHANNEL",
  "channel": "749",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "EXXXTASY",
  "channel": "775",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PENTHOUSE TV",
  "channel": "776",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RED HOT TV",
  "channel": "777",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VIVIDTV ENGLISH",
  "channel": "779",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VIVIDTV FRENCH ",
  "channel": "778",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - EAST",
  "channel": "717",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - WEST",
  "channel": "718",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - EAST (MANDARIN)",
  "channel": "716",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION 2",
  "channel": "721",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - EAST",
  "channel": "717",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - WEST",
  "channel": "718",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - EAST (MANDARIN)",
  "channel": "716",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TALENTVISION",
  "channel": "719",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PHOENIX MANDARIN",
  "channel": "715",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LS TIMES",
  "channel": "677",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FILIPINO TV",
  "channel": "725",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GMA PINOY TV",
  "channel": "723",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PROSIEBENSAT.1 WELT",
  "channel": "710",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DEUTSCHE WELLE TV ",
  "channel": "709",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RADIO HERZ ",
  "channel": "986",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ERT SAT",
  "channel": "714",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ODYSSEY 1 ",
  "channel": "713",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MEGA COSMOS",
  "channel": "712",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RAI INTERNATIONAL",
  "channel": "701",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Italian"
},{
  "name": "POLSKIE RADIO 1",
  "channel": "987",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "POLSKIE RADIO 3",
  "channel": "988",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TV POLONIA ",
  "channel": "711",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Polish"
},{
  "name": "RTVI ",
  "channel": "722",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RUSSIA TODAY ",
  "channel": "724",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AAPKA COLORS ",
  "channel": "680",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ATN",
  "channel": "702",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SONY",
  "channel": "729",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ZEE TV CANADA",
  "channel": "679",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AAPKA COLORS",
  "channel": "680",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ATN B4U HINDI",
  "channel": "706",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ATN PUNJABI",
  "channel": "704",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Punjabi"
},{
  "name": "ATN TAMIL",
  "channel": "705",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBN",
  "channel": "730",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FILMY",
  "channel": "681",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NDTV",
  "channel": "727",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PTC PUNJABI",
  "channel": "690",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Punjabi"
},{
  "name": "TAMIL VISION",
  "channel": "707",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "UNIVISION CANADA",
  "channel": "699",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Spanish"
}
]
