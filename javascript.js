/******************************************************************************
------------------------------------
!LES OPPGAVETEKSTEN NØYE!
------------------------------------

1.

Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres 
  på det objektet (hint: bruk `continue`-nøkkelordet).

- Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
  til en random by fra `cities`-arrayen.

- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
  menn og "Ms." for kvinner.
	
- Øk alderen med 2.

- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene 
og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

let combinedAge = 0;

let averageAge = 0;

// For løkke som "itererer" gjennom people-arrayet
for (let i = 0; i < people.length; i++) {
  // "Hiver ut" (ekskluderer) Otto ved bruk av "continue" funksjonen i eit if statement.
  if (people[i].name === "Otto") {
    continue;
  }

  // Tar ein tilfeldig by fra cities-arrayet og legg den inn på person-objektet
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  people[i].city = randomCity;

  // Her ser me om personen er male = true, da får den "Mr.", viss ikkje får den "Ms."
  people[i].title = people[i].male ? "Mr." : "Ms.";

  // Gjer personen eldre med 2 år (plusser og oppdater verdien ved bruk av +=)
  people[i].age += 2;

  // Legger til ein ny hobby definert som "coding" men siden me bruker unshift blir den lagt til i starten av arrayet
  people[i].hobbies.unshift("coding");

  // Kombinerer alderen til alle i people-arrayet.
  combinedAge += people[i].age;
}

// Regner ut gjennomsnittsalderen men ekskluderer Otto
averageAge = combinedAge / (people.length - 1);

//Ser om oppdaterte people-arrayet har med alle endringer
console.log(people);

// Returnerer den totale summen av alderen til alle, ekskludert Otto
console.log("Combined Age:", combinedAge);

//Her sjekker jeg gjennomsnittsalderen til alle i people-arrayet.
console.log("Average Age:", averageAge);

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(tenk på det som antall terninger vi kaster).

Eksempler: 
diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.

******************************************************************************/

// Her blir det laget eit array med tilfeldige terningkast(rolls er kast og sides er sider på terningen (1d6))
function diceRoller(rolls, sides = 6) {
  // tomt array for å lagre terningkastane
  const result = [];

  for (let i = 0; i < rolls; i++) {
    // Her generer me eit tilfeldig tal mellom 1 og 6 (6 er definert av antalle i "sides")
    const roll = Math.floor(Math.random() * sides) + 1;
    // Så legger me talet inn i arrayet
    result.push(roll);
  }

  // returner arrayet med alle terningkast
  return result;
}

// Tester om eg får eit array med fira tilfeldige terningkast feks: [6, 5, 2, 5]
console.log(diceRoller(4));

// Legg til ein parameter nummer to i funksjonen. Denne bestemmer kor mange sider terningen skal ha
console.log(diceRoller(1, 20));
// Brukt ein vanlig 20-siders terning(1d20) over. Skal gi eit resultat mellom 1 til 20

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Inne i funksjonen, gjør følgende:

Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

Eksempel:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
skal returnere:
"this text needs to be cleaned up"

******************************************************************************/

//Laget ein funksjon som skal ta inn eit array med ord og fjerner mellomrom og gjør små bokstaver)
function cleanUpText(stringArray) {
  //Her seier eg at den skal starte på det første(0) i index-en.
  let i = 0;
  //Får den til å loope igjennom arrayet.
  for (let string of stringArray) {
    //Så trimme arrayet mitt slik at den fjerner whitespace og så gjøre alt til små bokstaver.
    stringArray[i] = string.trim().toLowerCase();
    i++;
  }
  // Returnerer ein sammenslått string med all ordene med mellomrom mellom
  return stringArray.join(" ");
}

////Her bruker eg console.log for å vise att funksjonen fungerer ved hjelp av eksempelet gitt i oppgaven.
console.log(
  cleanUpText([" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"])
);

//Her sjekker jeg at funksjonen min rydder ein annen setning som eg har lagd sjølv.
console.log(
  cleanUpText([" lOoK", "whAt  ", " tHey ", "did", "TO", "mY   ", " BOy"])
);

/******************************************************************************
4.

Fullfør funksjonen nedenfor for å oppnå følgende:

Returner stringen som mottas i første parameter med følgende endringer:

Hver bokstav i stringen som matcher `charA` (andre parameteret) skal erstattes 
med `charB` (tredje parameteret), og VICE VERSA - det vil si at bokstaver som 
matcher `charA` skal byttes med `charB`, og bokstaver som matcher `charB` skal 
byttes med `charA`.

Eksempler:

doubleSwap("this is a string", "i", "s")
skal returnere "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
skal returnere "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
skal returnere "whao is ohe ptino tf ohis?"

******************************************************************************/

// Funksjonen som oppgaven seier eg skal bruke er i linja under (kun Linje 248 og slutt "}"-en på Linje 264)
function doubleSwap(string, charA, charB) {
  // Lager en tom string som seinare bli fylt med det ferdige resultatet.
  let result = "";
  //Ved hjelp av ein "for of" går eg gjennom kvart tegn i stringen og ser om det skal byttast ut noko av parameterne i funksjonen.
  // Viss tegnet er "charA", blir det bytta til "charB" og vice versa. Er ingen av tegnene "charA" eller "charB" blir ingen endringer gjort.
  for (let char of string) {
    if (char === charA) {
      result += charB;
    } else if (char === charB) {
      result += charA;
    } else {
      result += char;
    }
  }
  // Til slutt returnerer eg den ferdige stringen med ende tegn sånn at me kan "console.log"-ge den ut.
  return result;
}

//Her skriver eg ut i konsollen for å sjå at funskjonen byttar ut dei forventa parameterane.

//Her forventer eg: "Digimon is the best! Pokémon don't stand a chance!""
console.log(
  doubleSwap(
    "Digimon is the best! Pokémon don't stand a chance!",
    "Digimon",
    "Pokémon"
  )
);
//Her forventer eg: "I wonder if Di||cord would cen||or ||ome of thi|| if you copy-pa||ted thi||."
console.log(
  doubleSwap(
    "I wonder if Discord would censor some of this if you copy-pasted this.",
    "s",
    "||"
  )
);

//Her forventer eg: "Luwrem ipsum duwluwr sit amet, cuwnsectetur adipiscing elit, sed duw eiusmuwd tempuwr incididunt ut labuwre et duwluwre magna aliqua."
console.log(
  doubleSwap(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "o",
    "uw"
  )
);

/******************************************************************************
5.

EKSTRA UTFORDRING:

(Løsning av denne oppgaven er ikke obligatorisk, kun for de som vil ha en ekstra utfordring)

Lag en funksjon kalt `helloChecker` som tar inn en string som parameter.

Skriv kode som sjekker alle ordene i stringen for å finne ut om noen av dem
matcher ordet for "hei" på noen av disse språkene:

- hello (engelsk)
- ciao (italiensk)
- salut (fransk)
- hallo (tysk)
- hola (spansk)
- czesc (polsk)

Hvis noen av ordene i stringen matcher et av disse, skal funksjonen returnere:
"HELLO oppdaget på (navn på språket)."

Hvis ingen av ordene i strengen matcher, skal funksjonen returnere:
"Ingen HELLO oppdaget."

PS: Sørg for at funksjonen er case-insensitive; både "Hello" og "hello" skal oppdages.

Jeg har lagt til noen testvariabler for å sjekke funksjonen din.

******************************************************************************/

const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!",
];

// Skriv koden for oppgave 5 her
