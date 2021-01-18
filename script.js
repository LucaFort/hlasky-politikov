const quotes = [
    {
        name: "Igor Matovič",
        quote: "Pripadá mi ako skunk, ktorý príde, zasmradí a zdrhne",
        image: "igor"
    },
    {
        name: "Ivan Gašparovič",
        quote: "Organizácia spojených nádorov, názorov...",
        image: "ivan"
    },
    {
        name: "Andrej Danko",
        quote: "Ja si to užívam, ja sa cítim dobre",
        image: "andrej"
    },
    {
        name: "Martin Glváč",
        quote: "Si božsky krásna a zaslúžiš si hýčkanie a opateru",
        image: "martin"
    },
    {
        name: "Igor Matovič",
        quote: "Can I go one time, next time?",
        image: "igor"
    },
    {
        name: "Iveta Radičová",
        quote: "Riško, drž balónik a čakaj.",
        image: "iveta"
    },
    {
        name: "Milan Uhrík",
        quote: "Neviem sa k tomu vyjadriť, lebo niesom historik.",
        image: "uhrik"
    },
    {
        name: "Boris Kollár",
        quote: "Pokojne nech si nasadí tú volavku. Keď sa to bude dať a bude to pekná baba, tak sa s ňou aj vyspím. Však som to ja.",
        image: "boris"
    },
    {
        name: "Lucia Nicholsonová",
        quote: "Táto sála je plná latentných homosexuálov!",
        image: "lucia"
    },
    {
        name: "Igor Matovič",
        quote: "Napichám si všetkých desať vakcín aj keď umrem, mne je to jedno.",
        image: "igor"
    },
    {
        name: "Marian Kotleba",
        quote: "O desiatej Stop kašeľ, o dvanástej Bromhexin, o druhej Stop kašeľ. Proste prekladať, ako keď robíte koložvársku kapustu.",
        image: "marian"
    },
    {
        name: "Marian Kotleba",
        quote: "Do polky som nalial stop kašeľ, do zuvyšku vodku. Dávka. Bromhexin, do polky Bromhexin, do zvyšku vodku. Dávka.",
        image: "marian"
    },
    {
        name: "Robert Fico",
        quote: "No, dajte mi nejakú colu.",
        image: "robert"
    },
    {
        name: "Robert Fico",
        quote: "Ubezpečujem Vás, že v roku 2014 ja už v politike nebudem, môžte byť úplne kľudná.",
        image: "robert"
    },
    {
        name: "Andrej Danko",
        quote: "Ja v živote nepoužívam papier, keď čítam.",
        image: "andrej"
    },
    {
        name: "Andrej Danko",
        quote: "10 miliónov neni ani na pajhajem tých lietadiel.",
        image: "andrej"
    },
    {
        name: "Ivan Gašparovič",
        quote: "Tam to máte všetko biele na čiernom.",
        image: "ivan"
    },
    {
        name: "Ján Slota",
        quote: "To bol, to nebola zlodejina, to bola, to bol galaktický lup",
        image: "jan"
    },
    {
        name: "Igor Matovič",
        quote: "Pán poslanec Ľuboš Blaha, je pravda, že ste ako opitý mydlili barana a ešte ste sa chválili, aký to bol zážitok?",
        image: "igor"
    },
    {
        name: "Richard Sulík",
        quote: "Vám dať menežovať Saharu, minie sa piesok!",
        image: "richard"
    },
    {
        name: "Robert Kaliňák",
        quote: "To bol analógový svet, svet kešu.",
        image: "kalinak"
    },
];

const quoteBtn = document.querySelector("#button-quote");
const quoteTxt = document.querySelector("#quoteTxt");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quoteImage = document.querySelector("#quoteImage");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    quoteImage.setAttribute("class", quotes[number].image);
}


 
