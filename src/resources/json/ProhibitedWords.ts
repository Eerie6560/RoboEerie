const prohibitedWords = [
    ["1488"],
    ["8=D"],
    ["A55hole"],
    ["abortion"],
    ["ahole"],
    ["AIDs"],
    ["ainujin"],
    ["ainuzin"],
    ["akimekura"],
    ["Anal"],
    ["anus"],
    ["anuses"],
    ["Anushead"],
    ["anuslick"],
    ["anuss"],
    ["aokan"],
    ["Arsch"],
    ["Arschloch"],
    ["arse"],
    ["arsed"],
    ["arsehole"],
    ["arseholed"],
    ["arseholes"],
    ["arseholing"],
    ["arselicker"],
    ["arses"],
    ["Ass"],
    ["asshat"],
    ["asshole"],
    ["Auschwitz"],
    ["b00bz"],
    ["b1tc"],
    ["Baise"],
    ["bakachon"],
    ["bakatyon"],
    ["Ballsack"],
    ["BAMF"],
    ["Bastard"],
    ["Beaner"],
    ["Beeatch"],
    ["beeeyotch"],
    ["beefwhistle"],
    ["beeotch"],
    ["Beetch"],
    ["beeyotch"],
    ["Bellend"],
    ["bestiality"],
    ["beyitch"],
    ["beyotch"],
    ["Biach"],
    ["bin laden"],
    ["binladen"],
    ["biotch"],
    ["bitch"],
    ["Bitching"],
    ["blad"],
    ["bladt"],
    ["blowjob"],
    ["blowme"],
    ["blyad"],
    ["blyadt"],
    ["bon3r"],
    ["boner"],
    ["boobs"],
    ["Btch"],
    ["Bukakke"],
    ["Bullshit"],
    ["bung"],
    ["butagorosi"],
    ["butthead"],
    ["Butthole"],
    ["Buttplug"],
    ["c0ck"],
    ["Cabron"],
    ["Cacca"],
    ["Cadela"],
    ["Cagada"],
    ["Cameljockey"],
    ["Caralho"],
    ["castrate"],
    ["Cazzo"],
    ["ceemen"],
    ["ch1nk"],
    ["chankoro"],
    ["chieokure"],
    ["chikusatsu"],
    ["Ching chong"],
    ["Chinga"],
    ["Chingada Madre"],
    ["Chingado"],
    ["Chingate"],
    ["chink"],
    ["chinpo"],
    ["Chlamydia"],
    ["choad"],
    ["chode"],
    ["chonga"],
    ["chonko"],
    ["chonkoro"],
    ["chourimbo"],
    ["chourinbo"],
    ["chourippo"],
    ["chuurembo"],
    ["chuurenbo"],
    ["circlejerk"],
    ["cl1t"],
    ["cli7"],
    ["clit"],
    ["clitoris"],
    ["cocain"],
    ["Cocaine"],
    ["cock"],
    ["Cocksucker"],
    ["Coglione"],
    ["Coglioni"],
    ["coitus"],
    ["coituss"],
    ["cojelon"],
    ["cojones"],
    ["condom"],
    ["coon"],
    ["coon hunt"],
    ["coon kill"],
    ["coonhunt"],
    ["coonkill"],
    ["Cooter"],
    ["cotton pic"],
    ["cotton pik"],
    ["cottonpic"],
    ["cottonpik"],
    ["Crackhead"],
    ["CSAM"],
    ["Culear"],
    ["Culero"],
    ["Culo"],
    ["Cum"],
    ["cun7"],
    ["cunt"],
    ["cvn7"],
    ["cvnt"],
    ["cyka"],
    ["d1kc"],
    ["d4go"],
    ["dago"],
    ["Darkie"],
    ["Deez Nuts"],
    ["deeznut"],
    ["deeznuts"],
    ["Dickhead"],
    ["dikc"],
    ["dildo"],
    ["Dio Bestia"],
    ["dong"],
    ["dongs"],
    ["douche"],
    ["Downie"],
    ["Downy"],
    ["Dumbass"],
    ["Durka durka"],
    ["Dyke"],
    ["Ejaculate"],
    ["Encule"],
    ["enjokousai"],
    ["enzyokousai"],
    ["etahinin"],
    ["etambo"],
    ["etanbo"],
    ["f0ck"],
    ["f0kc"],
    ["f3lch"],
    ["facking"],
    ["fag"],
    ["faggot"],
    ["Fanculo"],
    ["Fanny"],
    ["fatass"],
    ["fck"],
    ["Fckn"],
    ["fcuk"],
    ["fcuuk"],
    ["felch"],
    ["Fetish"],
    ["Fgt"],
    ["FiCKDiCH"],
    ["Figlio di Puttana"],
    ["fku"],
    ["fock"],
    ["fokc"],
    ["foreskin"],
    ["Fotze"],
    ["Foutre"],
    ["fucc"],
    ["fuck"],
    ["Fucking"],
    ["fuct"],
    ["fujinoyamai"],
    ["fukashokumin"],
    ["Fupa"],
    ["fuuck"],
    ["fuuuck"],
    ["fuuuuck"],
    ["fuuuuuck"],
    ["fuuuuuuck"],
    ["fuuuuuuuck"],
    ["fuuuuuuuuck"],
    ["fuuuuuuuuuck"],
    ["fuuuuuuuuuu"],
    ["fvck"],
    ["fxck"],
    ["fxuxcxk"],
    ["g000k"],
    ["g00k"],
    ["g0ok"],
    ["gestapo"],
    ["go0k"],
    ["god damn"],
    ["goldenshowers"],
    ["golliwogg"],
    ["gollywog"],
    ["Gooch"],
    ["gook"],
    ["goook"],
    ["Gyp"],
    ["h0m0"],
    ["h0mo"],
    ["h1tl3"],
    ["h1tle"],
    ["hairpie"],
    ["hakujakusha"],
    ["hakuroubyo"],
    ["hakuzyakusya"],
    ["hantoujin"],
    ["hantouzin"],
    ["Herpes"],
    ["hitl3r"],
    ["hitler"],
    ["hitlr"],
    ["holocaust"],
    ["hom0"],
    ["homo"],
    ["honky"],
    ["Hooker"],
    ["hor3"],
    ["hukasyokumin"],
    ["Hure"],
    ["Hurensohn"],
    ["huzinoyamai"],
    ["hymen"],
    ["inc3st"],
    ["incest"],
    ["Inculato"],
    ["Injun"],
    ["intercourse"],
    ["inugoroshi"],
    ["inugorosi"],
    ["j1g4b0"],
    ["j1g4bo"],
    ["j1gab0"],
    ["j1gabo"],
    ["Jack Off"],
    ["jackass"],
    ["jap"],
    ["JerkOff"],
    ["jig4b0"],
    ["jig4bo"],
    ["jigabo"],
    ["Jigaboo"],
    ["jiggaboo"],
    ["jizz"],
    ["Joder"],
    ["Joto"],
    ["Jungle Bunny"],
    ["junglebunny"],
    ["k k k"],
    ["k1k3"],
    ["kichigai"],
    ["kik3"],
    ["Kike"],
    ["kikeiji"],
    ["kikeizi"],
    ["Kilurself"],
    ["kitigai"],
    ["kkk"],
    ["klu klux"],
    ["Klu Klux Klan"],
    ["kluklux"],
    ["knobhead"],
    ["koon hunt"],
    ["koon kill"],
    ["koonhunt"],
    ["koonkill"],
    ["koroshiteyaru"],
    ["koumoujin"],
    ["koumouzin"],
    ["ku klux klan"],
    ["kun7"],
    ["kurombo"],
    ["Kurva"],
    ["Kurwa"],
    ["kxkxk"],
    ["l3sb0"],
    ["lezbo"],
    ["lezzie"],
    ["m07th3rfukr"],
    ["m0th3rfvk3r"],
    ["m0th3rfvker"],
    ["Madonna Puttana"],
    ["manberries"],
    ["manko"],
    ["manshaft"],
    ["Maricon"],
    ["Masterbat"],
    ["masterbate"],
    ["Masturbacion"],
    ["masturbait"],
    ["Masturbare"],
    ["Masturbate"],
    ["Masturbazione"],
    ["Merda"],
    ["Merde"],
    ["Meth"],
    ["Mierda"],
    ["milf"],
    ["Minge"],
    ["Miststück"],
    ["mitsukuchi"],
    ["mitukuti"],
    ["Molest"],
    ["molester"],
    ["molestor"],
    ["Mong"],
    ["Moon Cricket"],
    ["moth3rfucer"],
    ["moth3rfvk3r"],
    ["moth3rfvker"],
    ["motherfucker"],
    ["Mulatto"],
    ["n1663r"],
    ["n1664"],
    ["n166a"],
    ["n166er"],
    ["n1g3r"],
    ["n1German"],
    ["n1gg3r"],
    ["n1gGerman"],
    ["n3gro"],
    ["n4g3r"],
    ["n4gg3r"],
    ["n4gGerman"],
    ["n4z1"],
    ["nag3r"],
    ["nagg3r"],
    ["nagGerman"],
    ["natzi"],
    ["naz1"],
    ["nazi"],
    ["nazl"],
    ["neGerman"],
    ["ngGerman"],
    ["nggr"],
    ["n i g g a"],
    ["n i g g e r"],
    ["n i g e r"],
    ["n i g g"],
    ["n i h g"],
    ["NhigGerman"],
    ["ni666"],
    ["ni66a"],
    ["ni66er"],
    ["ni66g"],
    ["ni6g"],
    ["ni6g6"],
    ["ni6gg"],
    ["Nig"],
    ["nig66"],
    ["nig6g"],
    ["nigar"],
    ["niGerman"],
    ["nigg3"],
    ["nigg6"],
    ["nigga"],
    ["niggaz"],
    ["nigGerman"],
    ["nigglet"],
    ["niggr"],
    ["nigguh"],
    ["niggur"],
    ["niggy"],
    ["niglet"],
    ["Nignog"],
    ["nimpinin"],
    ["ninpinin"],
    ["Nipples"],
    ["niqqa"],
    ["niqqer"],
    ["Nonce"],
    ["nugga"],
    ["Nutsack"],
    ["Nutted"],
    ["nygGerman"],
    ["omeko"],
    ["Orgy"],
    ["p3n15"],
    ["p3n1s"],
    ["p3ni5"],
    ["p3nis"],
    ["p3nl5"],
    ["p3nls"],
    ["Paki"],
    ["Panties"],
    ["Pedo"],
    ["pedoph"],
    ["pedophile"],
    ["pen15"],
    ["pen1s"],
    ["Pendejo"],
    ["peni5"],
    ["penile"],
    ["penis"],
    ["Penis"],
    ["penl5"],
    ["penls"],
    ["penus"],
    ["Perra"],
    ["phaggot"],
    ["phagot"],
    ["phuck"],
    ["Pikey"],
    ["Pinche"],
    ["Pizda"],
    ["Polla"],
    ["Porca Madonna"],
    ["Porch monkey"],
    ["Porn"],
    ["Porra"],
    ["pr1ck"],
    ["preteen"],
    ["prick"],
    ["pu555y"],
    ["pu55y"],
    ["pub1c"],
    ["Pube"],
    ["pubic"],
    ["pun4ni"],
    ["pun4nl"],
    ["Punal"],
    ["punan1"],
    ["punani"],
    ["punanl"],
    ["puss1"],
    ["puss3"],
    ["puss5"],
    ["pusse"],
    ["pussi"],
    ["Pussies"],
    ["pusss1"],
    ["pussse"],
    ["pusssi"],
    ["pusssl"],
    ["pusssy"],
    ["Pussy"],
    ["Puta"],
    ["Putain"],
    ["Pute"],
    ["Puto"],
    ["Puttana"],
    ["Puttane"],
    ["Puttaniere"],
    ["puzzy"],
    ["pvssy"],
    ["queef"],
    ["r3c7um"],
    ["r4p15t"],
    ["r4p1st"],
    ["r4p3"],
    ["r4pi5t"],
    ["r4pist"],
    ["raape"],
    ["raghead"],
    ["raibyo"],
    ["Raip"],
    ["rap15t"],
    ["rap1st"],
    ["Rapage"],
    ["rape"],
    ["Raped"],
    ["rapi5t"],
    ["Raping"],
    ["rapist"],
    ["rectum"],
    ["Red Tube"],
    ["Reggin"],
    ["reipu"],
    ["retard"],
    ["Ricchione"],
    ["rimjob"],
    ["rizzape"],
    ["rompari"],
    ["Salaud"],
    ["Salope"],
    ["sangokujin"],
    ["sangokuzin"],
    ["santorum"],
    ["Scheiße"],
    ["Schlampe"],
    ["Schlampe"],
    ["schlong"],
    ["Schwuchtel"],
    ["Scrote"],
    ["secks"],
    ["seishinhakujaku"],
    ["seishinijo"],
    ["seisinhakuzyaku"],
    ["seisinizyo"],
    ["Semen"],
    ["semushiotoko"],
    ["semusiotoko"],
    ["sh|t"],
    ["sh17"],
    ["sh1t"],
    ["Shat"],
    ["Shemale"],
    ["shi7"],
    ["shinajin"],
    ["shinheimin"],
    ["shirakko"],
    ["shit"],
    ["Shitty"],
    ["shl7"],
    ["shlt"],
    ["shokubutsuningen"],
    ["sinazin"],
    ["sinheimin"],
    ["Skank"],
    ["SMD"],
    ["Sodom"],
    ["sofa king"],
    ["sofaking"],
    ["Spanishick"],
    ["Spanishook"],
    ["Spanishunk"],
    ["STD"],
    ["STDs"],
    ["Succhia Cazzi"],
    ["suck my"],
    ["suckmy"],
    ["syokubutuningen"],
    ["Taint"],
    ["Tapatte"],
    ["Tapette"],
    ["Tarlouse"],
    ["tea bag"],
    ["teabag"],
    ["teebag"],
    ["teensex"],
    ["teino"],
    ["Testa di Cazzo"],
    ["Testicles"],
    ["Thot"],
    ["tieokure"],
    ["tinpo"],
    ["Tits"],
    ["tokushugakkyu"],
    ["tokusyugakkyu"],
    ["torukoburo"],
    ["torukojo"],
    ["torukozyo"],
    ["tosatsu"],
    ["tosatu"],
    ["towelhead"],
    ["Tranny"],
    ["tunbo"],
    ["tw47"],
    ["tw4t"],
    ["twat"],
    ["tyankoro"],
    ["tyonga"],
    ["tyonko"],
    ["tyonkoro"],
    ["tyourinbo"],
    ["tyourippo"],
    ["tyurenbo"],
    ["ushigoroshi"],
    ["usigorosi"],
    ["v461n4"],
    ["v461na"],
    ["v46in4"],
    ["v46ina"],
    ["v4g1n4"],
    ["v4g1na"],
    ["v4gin4"],
    ["v4gina"],
    ["va61n4"],
    ["va61na"],
    ["va6in4"],
    ["va6ina"],
    ["Vaccagare"],
    ["Vaffanculo"],
    ["Vag"],
    ["vag1n4"],
    ["vag1na"],
    ["vagin4"],
    ["vagina"],
    ["VateFaire"],
    ["vvhitepower"],
    ["w3tb4ck"],
    ["w3tback"],
    ["Wank"],
    ["wanker"],
    ["wetb4ck"],
    ["wetback"],
    ["wh0r3"],
    ["wh0re"],
    ["white power"],
    ["whitepower"],
    ["whor3"],
    ["whore"],
    ["Wog"],
    ["Wop"],
    ["x8lp3t"],
    ["xbl pet"],
    ["XBLPET"],
    ["XBLRewards"],
    ["Xl3LPET"],
    ["yabunirami"],
    ["Zipperhead"],
    ["Блядь"],
    ["сука"]
];

export default prohibitedWords;