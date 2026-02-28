export type Language = 'lv' | 'eng' | 'ru';

export const translations = {
  lv: {
    home: 'Sākumlapa',
    floorPlans: 'Stāvu plāni un cenas',
    building: 'Ēka',
    interior: 'Interjers',
    property: 'Īpašuma iegāde',
    contact: 'Kontakti',
    homePage: {
        title: "RĪGAS IELAS REZIDENCE",
        subtitle: "Vieta, kas kļūst par mājām!",
        button: "REZERVĒT UN PIRKT DZĪVOKLI!",
        stats: {
            apartments: "dzīvokļi",
            floors: "stāvi",
            energy: "energoefektivitātes klase",
            commissioning: "ekspluatācijā",
        }
    },
    floorPlansAndPricesPage: {
        livingRoom: "DZĪVOJAMA ISTABA",
        bedroom: "GUĻAMISTABA",
        bathroom: "VANASISTABA",
    },
    interiorPage: {
        title: "INTERJERS",
        description1: "Interjera dizainere Kristīne Nazarova ar vairāk nekā 10 gadu pieredzi individuālu interjeru izstrādē...",
        description2: "Kristīne specializējas individuālu mēbeļu projektēšanā un pielāgotu risinājumu izstrādē...",
        description3: "Galerijā apskatāmi dizainera piedāvātā trīsistabu dzīvokļa plānojuma vizualizācijas...",
        name: "Kristīne Nazarova",
        role: "Interjera dizainere",
        phone: "+371 29 418 755",
        email: "k@kninterior.com",
        livingRoom: "DZĪVOJAMA ISTABA",
        bedroom: "GUĻAMISTABA",
        bathroom: "VANASISTABA",
    },
    propertyPage: {
        propertyTitle: "ĪPAŠUMA IEGĀDE",
        step1Title: "DZĪVOKĻA REZERVĀCIJA",
        step1Text: "Dzīvokli iespējams rezervēt uz 10 dienām. Šajā posmā maksājumi nav nepieciešami...",
        step2Title: "PRIEKŠLĪGUMA NOSLĒGŠANA",
        step2Text: "Ja iegādājaties dzīvokli būvniecības laikā...",
        step3Title: "PIRKUMA LĪGUMS",
        step3Text: "Pirkuma līgums tiks parakstīts pēc ēkas nodošanas ekspluatācijā..."
    },
    buildingPage: {
        title: "ĒKA",
        sections: [
            {
                subtitle: "ENERGOEFEKTIVITĀTES KLASE – A",
                text: "Ēka atbilst A energoefektivitātes klases prasībām."
            },
            {
                subtitle: "ĒKAS KONSTRUKCIJAS",
                highlight: "Pamati – dzelzsbetona lentveida pamati ar siltumizolāciju atbilstoši projektā paredzētajām prasībām un tehnoloģijām.",
                text: "Pārsegumi – dzelzsbetona dobie paneļi ar nodrošinātu skaņas izolāciju starp stāviem un ierīkotu grīdas apsildes sistēmu. Bēniņu pārsegums izbūvēts atbilstoši siltuma un skaņas izolācijas normām."
            },
            {
                subtitle: "ĀRSIENAS",
                highlight: "Nesošās sienas – gāzbetona bloku konstrukcijas ar ārējo fasādes siltinājumu.",
                text: "Fasāde apdarināta ar dekoratīvo ķieģeļu apdari."
            },
            {
                subtitle: "IEKŠSIENAS",
                highlight: "Dzīvokļu iekšsienas – ģipškartona konstrukcijas ar dubulto apšuvumu abās pusēs.",
                text: "Starpsienās iestrādāta akmens vates skaņas izolācija."
            },
            {
                subtitle: "JUMTS",
                highlight: "Četrslīpu jumts no rūpnieciski izgatavotām koka kopnēm.",
                text: "Jumta segums – ilgmūžīgs metāla lokšņu segums."
            },
            {
                subtitle: "KĀPŅU TELPA",
                highlight: "Plaša kāpņu telpa ar dzelzsbetona kāpnēm.",
                text: "Metāla margas un kvalitatīva apdare."
            },
            {
                subtitle: "LOGI UN BALKONA DURVIS",
                highlight: "Plaši PVC logi un balkona durvis.",
                text: "Trīskāršais stiklojums nodrošina augstu siltuma un skaņas izolāciju."
            }
        ]
    },
    contactPage: {
        title: "KONTAKTI",
        contactUs: "Sazinieties ar mums!",
        salesSpecialist: "Pārdošanas speciālists",
        ceo: "SIA AG Projekts valdes priekšsēdētājs",
        form: {
            nameSurname: "Vārds / Uzvārds",
            phoneNumber: "Tālruņa numurs",
            email: "E-pasta adrese",
            message: "Jūsu ziņojums",
            send: "Nosūtīt"
        }
    },
    floorGallery: {
        floor: "STĀVS",
        apartmentNo: "Dzīvoklis Nr.",
        stairwell: "kāpņu telpa",
        reserved: "REZERVĒTS",
        rooms: "istabas",
        apartmentConsistsOf: "Dzīvoklis sastāv no:",
        totalArea: "Kopējā platība:",
        livingArea: "Dzīvojamā platība:",
        terrace: "Terase:",
    },
    floorPlansAndPricesTable: {
        title: "STĀVU PLĀNI UN CENAS",
        floor: "STĀVS",
        aptNo: "DZĪVOKĻA NR.",
        rooms: "ISTABAS",
        totalArea: "KOPĒJĀ PLATĪBA",
        price: "CENA (BEZ STĀVVIETAS)",
        reserved: "REZERVĒTS",
        footnote: "[LV] The sizes of apartments and rooms indicated on this website are subject to change after their on-site measurement."
    },
  },
  eng: {
    home: 'Home',
    floorPlans: 'Floor plans and prices',
    building: 'Building',
    interior: 'Interior',
    property: 'Property acquisition',
    contact: 'Contact',
    homePage: {
        title: "RĪGAS IELAS REZIDENCE",
        subtitle: "A place that becomes home!",
        button: "RESERVE AND BUY AN APARTMENT!",
        stats: {
            apartments: "apartments",
            floors: "floors",
            energy: "energy class",
            commissioning: "year of commissioning",
        }
    },
    floorPlansAndPricesPage: {
        livingRoom: "LIVING ROOM WITH KITCHEN AREA",
        bedroom: "BEDROOM",
        bathroom: "BATHROOM",
    },
    interiorPage: {
        title: "INTERIOR",
        description1: "Interior designer Kristīne Nazarova, who has more than 10 years of experience...",
        description2: "Kristīne specializes in designing custom furniture and tailored solutions...",
        description3: "The gallery showcases visualisations of the designer's proposed layout...",
        name: "Kristine Nazarova",
        role: "Interior designer",
        phone: "+371 29 418 755",
        email: "k@kninterior.com",
        livingRoom: "LIVING ROOM WITH KITCHEN AREA",
        bedroom: "BEDROOM",
        bathroom: "BATHROOM",
    },
    propertyPage: {
        propertyTitle: "PROPERTY ACQUISITION",
        step1Title: "APARTMENT RESERVATION",
        step1Text: "You can reserve an apartment for 10 days. No payments are required at this stage. During these 10 days, you have the opportunity to receive a consultation from your chosen credit institution about financing options for purchasing the apartment, if necessary, and to clarify any other matters of interest.",
        step2Title: "EXECUTION OF A PRELIMINARY AGREEMENT",
        step2Text: "If you purchase an apartment during construction, you must sign a preliminary purchase agreement. This agreement requires you to pay a deposit of 10% of the total purchase price.",
        step3Title: "PURCHASE AGREEMENT",
        step3Text:"The purchase agreement will be signed after the building is commissioned and divided into individual apartment units. If a preliminary agreement was signed, you will be required to pay the remaining 90% of the total purchase price after the purchase agreement is signed. If a preliminary agreement is not concluded, the entire purchase price must be paid upon signing the purchase agreement."
    },
    buildingPage: {
    title: "BUILDING",
    sections: [
        {
        subtitle: "ENERGY EFFICIENCY CLASS – A",
        text: "The building complies with A energy efficiency class requirements, ensuring reduced energy consumption and lower utility costs."
        },
        {
        subtitle: "BUILDING STRUCTURES",
        highlight: "Foundations – reinforced concrete strip foundations with thermal insulation, in accordance with the requirements and technology specified in the project.",
        text: "Floor slabs – reinforced concrete hollow-core slabs. All technical requirements for sound insulation between floors and the installation of an underfloor heating system are met. The attic floor is constructed in compliance with thermal and sound insulation standards."
        },
        {
        subtitle: "EXTERIOR WALLS",
        highlight: "Load-bearing walls – aerated concrete block structures with external façade insulation.",
        text: "The façade is finished with decorative brick cladding, providing durability and an aesthetic appearance."
        },
        {
        subtitle: "INTERIOR WALLS",
        highlight: "Apartment interior walls – plasterboard constructions with double-layer boarding on both sides.",
        text: "Partitions include stone wool insulation to ensure enhanced sound insulation between rooms."
        },
        {
        subtitle: "ROOF",
        highlight: "Hipped roof constructed from prefabricated wooden trusses.",
        text: "Roof covering – durable metal sheet roofing designed for long-term performance."
        },
        {
        subtitle: "STAIRWELL",
        highlight: "Spacious stairwell with a reinforced concrete staircase.",
        text: "Finished with iron railings and high-quality interior materials."
        },
        {
        subtitle: "WINDOWS AND BALCONY DOORS",
        highlight: "Large PVC windows and balcony doors.",
        text: "Triple glazing ensures excellent thermal efficiency and sound insulation."
        }
    ]
    },
    contactPage: {
        title: "CONTACT",
        contactUs: "Contact Us!",
        salesSpecialist: "Sales specialist",
        ceo: "CEO of SIA AG Projekts",
        form: {
            nameSurname: "Name / Surname",
            phoneNumber: "Phone number",
            email: "E-mail address",
            message: "Your message",
            send: "Send"
        }
    },
    floorGallery: {
        floor: "FLOOR",
        apartmentNo: "Apartment No.",
        stairwell: "stairwell",
        reserved: "RESERVED",
        rooms: "rooms",
        apartmentConsistsOf: "The apartment consists of:",
        totalArea: "Total area:",
        livingArea: "Living area:",
        terrace: "Terrace:",
    },
    floorPlansAndPricesTable: {
        title: "FLOOR PLANS AND PRICES",
        floor: "FLOOR",
        aptNo: "APT. NO.",
        rooms: "ROOMS",
        totalArea: "TOTAL AREA",
        price: "PRICE WITHOUT PARKING SPACE",
        reserved: "RESERVED",
        footnote: "The sizes of apartments and rooms indicated on this website are subject to change after their on-site measurement."
    },
  },
  ru: {
    home: '[RU] Home',
    floorPlans: '[RU] Floor plans and prices',
    building: '[RU] Building',
    interior: '[RU] Interior',
    property: '[RU] Property acquisition',
    contact: '[RU] Contact',
    homePage: {
        title: "RĪGAS IELAS REZIDENCE",
        subtitle: "Место, которое становится домом!",
        button: "ЗАБРОНИРОВАТЬ И КУПИТЬ КВАРТИРУ!",
        stats: {
            apartments: "квартир",
            floors: "этажа",
            energy: "класс энергоэффективности",
            commissioning: "год ввода в эксплуатацию",
        }
    },
    floorPlansAndPricesPage: {
        livingRoom: "[RU] LIVING ROOM WITH KITCHEN AREA",
        bedroom: "[RU] BEDROOM",
        bathroom: "[RU] BATHROOM",
    },
    interiorPage: {
        title: "ИНТЕРЬЕР",
        description1: "...",
        description2: "...",
        description3: "...",
        name: "Кристине Назарова",
        role: "Дизайнер интерьера",
        phone: "+371 29 418 755",
        email: "k@kninterior.com",
        livingRoom: "[RU] LIVING ROOM WITH KITCHEN AREA",
        bedroom: "[RU] BEDROOM",
        bathroom: "[RU] BATHROOM",
    },
    propertyPage: {
        propertyTitle: "[RU] PROPERTY ACQUISITION",
        step1Title: "[RU] APARTMENT RESERVATION",
        step1Text: "[RU] You can reserve an apartment for 10 days. No payments are required at this stage. During these 10 days, you have the opportunity to receive a consultation from your chosen credit institution about financing options for purchasing the apartment, if necessary, and to clarify any other matters of interest.",
        step2Title: "[RU] EXECUTION OF A PRELIMINARY AGREEMENT",
        step2Text: "[RU] If you purchase an apartment during construction, you must sign a preliminary purchase agreement. This agreement requires you to pay a deposit of 10% of the total purchase price.",
        step3Title: "[RU] PURCHASE AGREEMENT",
        step3Text:"[RU] The purchase agreement will be signed after the building is commissioned and divided into individual apartment units. If a preliminary agreement was signed, you will be required to pay the remaining 90% of the total purchase price after the purchase agreement is signed. If a preliminary agreement is not concluded, the entire purchase price must be paid upon signing the purchase agreement."
    },
    buildingPage: {
        title: "ЗДАНИЕ",
        sections: [
        {
            subtitle: "КЛАСС ЭНЕРГОЭФФЕКТИВНОСТИ – A",
            text: "Здание соответствует классу энергоэффективности A."
        },
        {
            subtitle: "КОНСТРУКЦИИ ЗДАНИЯ",
            highlight: "Фундаменты – железобетонные ленточные фундаменты с теплоизоляцией в соответствии с требованиями проекта.",
            text: "Перекрытия – железобетонные пустотные плиты с обеспеченной звукоизоляцией между этажами и системой подогрева пола. Чердачное перекрытие выполнено в соответствии с нормами тепло- и звукоизоляции."
        },
        {
            subtitle: "НАРУЖНЫЕ СТЕНЫ",
            highlight: "Несущие стены – конструкции из газобетонных блоков с наружной теплоизоляцией фасада.",
            text: "Фасад отделан декоративным кирпичом."
        },
        {
            subtitle: "ВНУТРЕННИЕ СТЕНЫ",
            highlight: "Внутренние стены квартир – конструкции из гипсокартона с двойной обшивкой с обеих сторон.",
            text: "В перегородках используется звукоизоляция из каменной ваты."
        },
        {
            subtitle: "КРЫША",
            highlight: "Четырёхскатная крыша из заводских деревянных ферм.",
            text: "Кровельное покрытие – долговечные металлические листы."
        },
        {
            subtitle: "ЛЕСТНИЧНАЯ КЛЕТКА",
            highlight: "Просторная лестничная клетка с железобетонной лестницей.",
            text: "Металлические перила и качественная отделка."
        },
        {
            subtitle: "ОКНА И БАЛКОННЫЕ ДВЕРИ",
            highlight: "Широкие ПВХ окна и балконные двери.",
            text: "Тройное остекление обеспечивает высокую тепло- и звукоизоляцию."
        }
    ]
},
contactPage: {
    title: "КОНТАКТЫ",
    contactUs: "Свяжитесь с нами!",
    salesSpecialist: "Специалист по продажам",
    ceo: "Председатель правления SIA AG Projekts",
    form: {
        nameSurname: "Имя / Фамилия",
        phoneNumber: "Номер телефона",
        email: "Адрес электронной почты",
        message: "Ваше сообщение",
        send: "Отправить"
    }
},
    floorGallery: {
        floor: "ЭТАЖ",
        apartmentNo: "Квартира №",
        stairwell: "лестничная клетка",
        reserved: "ЗАРЕЗЕРВИРОВАНО",
        rooms: "комнаты",
        apartmentConsistsOf: "Квартира состоит из:",
        totalArea: "Общая площадь:",
        livingArea: "Жилая площадь:",
        terrace: "Терраса:",
    },
    floorPlansAndPricesTable: {
        title: "ПЛАНЫ ЭТАЖЕЙ И ЦЕНЫ",
        floor: "ЭТАЖ",
        aptNo: "№ КВАРТИРЫ",
        rooms: "КОМНАТЫ",
        totalArea: "ОБЩАЯ ПЛОЩАДЬ",
        price: "ЦЕНА (БЕЗ ПАРКОВКИ)",
        reserved: "ЗАРЕЗЕРВИРОВАНО",
        footnote: "[RU] The sizes of apartments and rooms indicated on this website are subject to change after their on-site measurement."
    },
  },
};