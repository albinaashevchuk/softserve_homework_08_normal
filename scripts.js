// 1. Зробіть генератор випадкових дражнилок зі своїм набором слів.
const teasings = [
    "Чорногузик-скрекотун, Продав жінку за тютюн, а матінку — за копійку, Сам подався у мандрівку.",
    "Сірка-мірка, Сірчин брат Роздер штани Аж до п’ят.",
    "Обзивайся, хоч охрипни, Нічого до мене не липне!", 
    "Донька ряба, Поїхала по дрова, Зачепилась за пеньок, Голосила весь деньок.",
    "П’яниця-буяниця, Собак дратує — Під тином почує.",
];


const randomTeasings = document.querySelector("#random-teasings");
randomTeasings.innerHTML = `${teasings[Math.floor(Math.random() * teasings.length)]}`;


// 2. Удоскональте генератор дражнилок, щоб він створював дражнинилки такого типу: "У тебе [частина тіла] ще більш [прикметник], ніж [частина тіла тварини] у [тварини]".
// const humanBodyParts = [
//     "ніс",
//     "очі",
//     "руки",
//     "пальці",
//     "рот",
//     "голова",
//     "живіт",
//     "вуха",
// ];

// const adjectives = [
//     "страшніший",
//     "потворніший",
//     "більший",
//     "смішніший",
//     "синіший",
//     "чорніший",
//     "тонший",
//     "веселіший",
// ];
// const animalsBodyParts = [
//     "хобот",
//     "шерсть",
//     "кігті",
//     "крила",
//     "дупа",
//     "ікла",
//     "копита",
//     "хвіст",
// ];
// const animals = [
//     "слона",
//     "зубра",
//     "орла",
//     "мавпи",
//     "тигра",
//     "вовка",
//     "ховраха",
//     "зебри",
// ];
// const randomSophisticatedTeasings = document.querySelector("#random-sophisticated-teasings");
//    randomSophisticatedTeasings.innerHTML =  `У тебе ${humanBodyParts[Math.floor(Math.random() * humanBodyParts.length)]} ще більш
//  ${adjectives[Math.floor(Math.random() * adjectives.length)]}, ніж ${animalsBodyParts[Math.floor(Math.random() * animalsBodyParts.length)]} 
//  у ${animals[Math.floor(Math.random() * animals.length)]}`;
 

// Оператор + чи join? Зробіть дві версії свого генератора дражнилок: одна нехай використовує для складання дражнилки оператор +, а інша створює масив зі словами і з'єднує їх через пробіл за допомогою join. Який варіант вам більше подобається і чому?

// 1 версія через оператор + - мені ще на початку ця ідея не сподобалася. Дуже легко зробити помилку і важко її виправляти плутаючися в правильному додаванні рядків та пробілів.
// const humanBodyParts = [
//     "ніс",
//     "очі",
//     "руки",
//     "пальці",
//     "рот",
//     "голова",
//     "живіт",
//     "вуха",
// ];

// const adjectives = [
//     "страшніший",
//     "потворніший",
//     "більший",
//     "смішніший",
//     "синіший",
//     "чорніший",
//     "тонший",
//     "веселіший",
// ];
// const animalsBodyParts = [
//     "хобот",
//     "шерсть",
//     "кігті",
//     "крила",
//     "дупа",
//     "ікла",
//     "копита",
//     "хвіст",
// ];
// const animals = [
//     "слона",
//     "зубра",
//     "орла",
//     "мавпи",
//     "тигра",
//     "вовка",
//     "ховраха",
//     "зебри",
// ];

// const randomHumanBodyParts = humanBodyParts[Math.floor(Math.random() * humanBodyParts.length)];
// const randomAdjectives = adjectives[Math.floor(Math.random() * adjectives.length)];
// const randomAnimalsBodyParts = animalsBodyParts[Math.floor(Math.random() * animalsBodyParts.length)];
// const randomAnimals = animals[Math.floor(Math.random() * animals.length)];

// const randomSophisticatedTeasings = document.querySelector("#random-sophisticated-teasings");
//    randomSophisticatedTeasings.innerHTML =  "У тебе " + randomHumanBodyParts + " ще " + " більш " +
//     randomAdjectives + "," + " ніж " + randomAnimalsBodyParts + "  у " + randomAnimals + ".";
 
    // 2 версія з join - сподобалася більше. Менше моливості зробити помилку. 

    const humanBodyParts = [
    "ніс",
    "очі",
    "руки",
    "пальці",
    "рот",
    "голова",
    "живіт",
    "вуха",
];

const adjectives = [
    "страшніший",
    "потворніший",
    "більший",
    "смішніший",
    "синіший",
    "чорніший",
    "тонший",
    "веселіший",
];
const animalsBodyParts = [
    "хобот",
    "шерсть",
    "кігті",
    "крила",
    "дупа",
    "ікла",
    "копита",
    "хвіст",
];
const animals = [
    "слона",
    "зубра",
    "орла",
    "мавпи",
    "тигра",
    "вовка",
    "ховраха",
    "зебри",
];

const randomHumanBodyParts = humanBodyParts[Math.floor(Math.random() * humanBodyParts.length)];
const randomAdjectives = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomAnimalsBodyParts = animalsBodyParts[Math.floor(Math.random() * animalsBodyParts.length)];
const randomAnimals = animals[Math.floor(Math.random() * animals.length)];

const randomSophisticatedTeasings = document.querySelector("#random-sophisticated-teasings");
randomSophisticatedTeasings.innerHTML = ["У тебе", randomHumanBodyParts, "ще більш", randomAdjectives, ",", "ніж", randomAnimalsBodyParts, "у", randomAnimals + "."].join(" ");
   
// Як за допомогою методу join перетворити масив [3, 2, 1] на рядок "3 більше, ніж 2 більше, ніж 1"?

const numbers = [3, 2, 1]; 

const rezultNumbers = document.querySelector("#rezult-number");
rezultNumbers.innerHTML = [numbers[0], "більше", ",", "ніж", numbers[1], "більше", ",", "ніж", numbers[2]].join(" ");

// Уявіть, що ви граєте в якусь гру зі своїми друзями і вам потрібно вести рахунок. Створіть для цього об'єкт і назвіть його scores. Нехай ключами будуть імена ваших друзів, а значеннями - набрані ними очки (0 або більше). Рахунок гравців треба буде збільшувати в міру того, як вони заробляють нові очки. Як ви будете змінювати рахунок гравця, що зберігається в об'єкті scores?
const scores = {
};

scores["Anna"] = 10;
scores["Ira"] = 5;
scores[ "Denis"] = 12;
scores["Philip"] = 18;
scores["Vlad"] = 12;


scores["Anna"] += 3;
scores["Ira"] += 8;
scores["Denis"] += 0;
scores["Philip"] += 3;
scores["Vlad"] += 10;

console.log(scores);

// Углиб об'єктів і масивів
const myCrazyObject = {
"name": "Безглуздий об'єкт",
"some array": [7, 9, { purpose: "плутанина", number: 123 }, 3.3],
"random animal": "Бананова акула"
};

console.log(myCrazyObject["some array"][2].number);