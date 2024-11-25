// Naxrlar royxati
import standartNarxlar from './img/Standart.webp'
import qulaylikNarxlar from './img/Qulaylik.webp'
import biznesNarxlar from './img/Biznes.webp'
import deluxeNarxlar from './img/Deluxe.webp'

//rasmlar (Mutaxassislar)
import Aleksandr from './img/Aleksandr.webp'
import Janna from './img/Janna.webp'
import Pyotr from './img/Pyotr.webp'
import Margarita from './img/Margarita.webp'
import Eleonora from './img/Eleonora.webp'

// birjalar
import SotibOlish from './img/SotibOlish.webp'
import Mavsumiy from './img/Mavsumiy.webp'
import Ikkinchisi from './img/Ikkinchisi.webp'

// Narxlar royxati 
export const NarxlarRoyxatiData = [
    {
        id: 1,
        img: standartNarxlar,
        name: 'Standart',
        title: 'Sayohat uchun ajoyib variant. Oddiy va funktsional xona.',
        xonaKengligi: '• Bir kishilik xona',
        xonaMaydoni: '• Maydoni - 24 kv. m',
        kunlikXarajatText: 'Bir kunlik xarajat:',
        kunlikXarajat: '2300 rubldan.',
        topLink: 'Kitob',
        bottomLink: "Batafsil ma'lumot",
        text: "Mehmonxonaning standart xonasi – qulay va zamonaviy sharoitlar bilan ta'minlangan turar joy turi bo'lib, barcha asosiy ehtiyojlarni qondirishga mo‘ljallangan. Ushbu xona odatda quyidagilarni o‘z ichiga oladi. Standart xona xizmatkorlik. Bu turdagi xonalar ko‘pincha xizmat ko‘rsatishning mukammal darajasini va qulay muhitni ta’minlash uchun mo‘ljallangan."
    },
    {
        id: 2,
        img: qulaylikNarxlar,
        name: 'Qulaylik',
        title: 'Qulay va shinam xonalar dam olish uchun ham, ish safari uchun ham ideal.',
        xonaKengligi: '• Bir kishilik xona',
        xonaMaydoni: '• Maydoni - 38 kv. m',
        kunlikXarajatText: 'Bir kunlik xarajat:',
        kunlikXarajat: '2700 rubl',
        topLink: 'Kitob',
        bottomLink: "Batafsil ma'lumot",
        text: "Qulay xona – yuqori darajadagi shinamlik va qo‘shimcha xizmatlarni taklif etadigan mehmonxona xonasi bo‘lib, mehmonlar uchun yanada ko‘proq qulaylik va hashamat yaratishga qaratilgan. Ushbu turdagi xona odatda quyidagi xususiyatlarga ega. Qulay xonalar odatda ishbilarmon sayohatchilar, juftliklar yoki qulay va unutilmas dam olishni istovchi mehmonlar uchun ideal tanlovdir."
    },
    {
        id: 3,
        img: biznesNarxlar,
        name: 'Biznes',
        title: "Mehmonxona xonasi har bir mehmonga o'rtacha narxda yuqori sifatli xizmat ko'rsatishni ta'minlaydi.",
        xonaKengligi: '• Ikki kishilik xonalar',
        xonaMaydoni: '• Maydoni - 46 kv. m',
        kunlikXarajatText: 'Bir kunlik xarajat:',
        kunlikXarajat: '2900 rubl',
        topLink: 'Kitob',
        bottomLink: "Batafsil ma'lumot",
        text: "Biznes xonasi – ishbilarmon sayohatchilar uchun maxsus mo‘ljallangan, zamonaviy qulayliklar va ish uchun qulay sharoitlarni taklif qiluvchi mehmonxona xonasi. Biznes xonalar odatda ish bilan bog‘liq sayohatlarni yanada samarali va qulay qilish uchun ideal bo‘lib, unda ish va dam olishning mukammal muvozanati yaratilgan."
    },
    {
        id: 4,
        img: deluxeNarxlar,
        name: 'Deluxe',
        title: "Xona sizni uyda his qiladi. Ikki mehmon uchun yoqimli turar joy uchun javob beradi.",
        xonaKengligi: '• Ikki kishilik xonalar',
        xonaMaydoni: '• Maydoni - 46 kv. m',
        kunlikXarajatText: 'Bir kunlik xarajat:',
        kunlikXarajat: '3400 rubl',
        topLink: 'Kitob',
        bottomLink: "Batafsil ma'lumot",
        text: "Deluxe xona – yuqori darajadagi hashamat va qulayliklarni taklif etadigan, ko‘pincha mehmonxonaning eng yaxshi xonalaridan biri hisoblangan turar joy turi. Ushbu xona yuqori darajadagi mehmonlar yoki o‘zgacha qulaylik izlovchilar uchun. Deluxe xonalar odatda qulaylik, estetika va xizmat ko‘rsatishning eng yuqori darajasini qadrlovchi mehmonlar uchun ideal tanlovdir."
    },
]

// MutaxassislarData
export const MutaxassislarData = [
    {
        id: 1,
        img: Aleksandr,
        name: 'Alexandr Sergeyevich Pyatniski',
        job: 'Nevrolog',
        age: 27,
        aboutJop: "Nevrolog – bu asab tizimi kasalliklarini tashxislash, davolash va oldini olishga ixtisoslashgan shifokor. Ular insonning miya, orqa miya va periferik asab tizimida yuzaga keladigan muammolar bilan shug‘ullanadi. Nevrologlar dori-darmonlar, fizioterapiya, hayot tarzini o‘zgartirish bo‘yicha tavsiyalar va, zarur bo‘lsa, jarrohlik muolajalarini tavsiya etishadi.Agar sog‘lig‘ingiz bilan bog‘liq muammolar mavjud bo‘lsa, o‘z vaqtida malakali nevrologga murojaat qilish juda muhimdir. . Nevrologlar yuqoridagi kasalliklar bilan ishlashadi:",

        aboutJop2: {
            kasalliklari: 'Nevrolog kasalliklari:',
            bir: '1. Migren va boshqa bosh og‘rig‘i turlari;',
            ikki: '2. Epilepsiya;',
            uch: '3. Parkinson kasalligi;',
            tort: '4. Insult(ichki qon aylanishining buzilishi);',
            besh: '5. Altsgeymer va boshqa demensiya turlari.'
        },

        aboutJop3: {
            kasalliklari: 'Asab tizimining shikastlanishi:',
            bir: '1. Orqa miya jarohatlari;',
            ikki: '2. Radikulit;',
            uch: '3. Periferik asab shikastlanishlari;',
            tort: '4. MRI(magnit - rezonans tomografiya);',
            besh: '5. KT(kompyuter tomografiyasi)',
        },

        text1: "Olisda, olisda, so‘z tog‘lari ortida, unli va undoshlar yurtida baliq matnlari yashaydi. Hammadan ajralib, ular katta til okeani bo'lgan Semantika qirg'og'idagi tom ma'nodagi uylarda yashaydilar. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni Lorem ipsum deb nomlangan baliq matnining kichik qatori grammatikaning katta olamiga kirishga qaror qildi.",

        text2: "Bu paradigmatik mamlakat bo'lib, unda takliflar sizning og'zingizga tushadi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni baliq matnining kichik bir qatori katta grammatika olamiga kirishga qaror qildi. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas."
    },
    {
        id: 2,
        img: Janna,
        name: 'Janna Ivanovna Kovoleva',
        job: 'Endokrinolog',
        age: 22,
        aboutJop: "Endokrinologiya — bu organizmdagi gormonal tizimni o‘rganadigan tibbiyot sohasi. U endokrin bezlar (masalan, qalqonsimon bez, buyrak usti bezlari, gipofiz, tuxumdonlar va urug‘donlar) va ularning ishlab chiqaradigan gormonlarining normal va patologik holatlarini o‘rganadi. Endokrinologlar bu sohada tadqiqot olib boradi va gormonlar bilan bog‘liq kasalliklarni davolash bilan shug‘ullanadi.",

        aboutJop2: {
            kasalliklari: 'Endokrin tizimning asosiy organlari:',
            bir: '1. Gipotalamus;',
            ikki: '2. Gipofiz;',
            uch: '3. Qalqonsimon bez;',
            tort: '4. Qalqonsimon osti bezlari;',
            besh: '5. Buyrak usti bezlari.'
        },

        aboutJop3: {
            kasalliklari: 'Endokrin tizimning vazifalari:',
            bir: '1. Qandli diabet (1- va 2-turi);',
            ikki: '2. Gipotiroidizm (qalqonsimon bez yetishmovchiligi);',
            uch: '3. Gipertiroidizm (qalqonsimon bez faoliyati kuchayishi);',
            tort: '4. Akromegaliya (o‘sish gormonining ortib ketishi);',
            besh: '5. Adrenal yetishmovchilik (Addison kasalligi)   ',
        },

        text1: "Olisda, olisda, so‘z tog‘lari ortida, unli va undoshlar yurtida baliq matnlari yashaydi. Hammadan ajralib, ular katta til okeani bo'lgan Semantika qirg'og'idagi tom ma'nodagi uylarda yashaydilar. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni Lorem ipsum deb nomlangan baliq matnining kichik qatori grammatikaning katta olamiga kirishga qaror qildi.",

        text2: "Bu paradigmatik mamlakat bo'lib, unda takliflar sizning og'zingizga tushadi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni baliq matnining kichik bir qatori katta grammatika olamiga kirishga qaror qildi. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas."
    },
    {
        id: 3,
        img: Pyotr,
        name: 'Pyotr Efimovich Berestovoy',
        job: 'Ravmatolog',
        age: 31,
        aboutJop: "Revmatologiya – bu tibbiyotning biriktiruvchi to‘qimalar, bo‘g‘imlar va autoimmun kasalliklarni o‘rganuvchi sohasi bo‘lib, revmatologlar asosan bo‘g‘imlar va muskul-skelet tizimiga ta’sir qiluvchi kasalliklar bilan shug‘ullanadi. Revmatologik kasalliklar ko‘pincha og‘riq, yallig‘lanish va funksional buzilishlar bilan birga kechadi. Bu kasalliklar faqat bo‘g‘imlarga emas, balki ichki organlarga (masalan, yurak, buyraklar, o‘pka) ham ta'sir qilishi mumkin.",

        aboutJop2: {
            kasalliklari: 'Revmatologik kasalliklar:',
            bir: '1. Osteoartrit (bo‘g‘imlarning aşinishi);',
            ikki: '2. Romatoid artrit;',
            uch: '3. Podagra bo‘g‘imlari;',
            tort: '4. Lupus biriktiruvchi to‘qimalar;',
            besh: '5. Ankilozlovchi spondilit (umurtqa va bo‘g‘imlarning yallig‘lanishi).'
        },

        aboutJop3: {
            kasalliklari: 'Revmatologik simptomlari:',
            bir: '1. Bo‘g‘imlarda og‘riq va qattiqlik;',
            ikki: '2. Shish va haroratning ko‘tarilishi;',
            uch: '3. Tana haroratining pasayishi;',
            tort: '4. Charchoq va umumiy zaiflik;',
            besh: '5. Teri va ko‘zda yallig‘lanish belgilarining paydo bo‘lishi',
        },

        text1: "Olisda, olisda, so‘z tog‘lari ortida, unli va undoshlar yurtida baliq matnlari yashaydi. Hammadan ajralib, ular katta til okeani bo'lgan Semantika qirg'og'idagi tom ma'nodagi uylarda yashaydilar. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni Lorem ipsum deb nomlangan baliq matnining kichik qatori grammatikaning katta olamiga kirishga qaror qildi.",

        text2: "Bu paradigmatik mamlakat bo'lib, unda takliflar sizning og'zingizga tushadi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni baliq matnining kichik bir qatori katta grammatika olamiga kirishga qaror qildi. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas."
    },
    {
        id: 4,
        img: Margarita,
        name: 'Margarita Vasilevna Xanaeva',
        job: 'Akusher-Ginekolog',
        age: 19,
        aboutJop: "Akusher-ginekologiya – bu tibbiyotning ayollarning reproduktiv tizimi, homiladorlik, tug‘ruq va homiladorlikdan keyingi davrga oid masalalarni o‘rganuvchi sohasi. Akusherlik va ginekologiya bir-biri bilan chambarchas bog‘liq bo‘lib, akusherlik homiladorlik va tug‘ruq jarayonlariga e’tibor qaratadi, ginekologiya esa ayollarning reproduktiv tizimining umumiy sog‘lig‘ini nazorat qilish bilan shug‘ullanadi.",

        aboutJop2: {
            kasalliklari: 'Kasalliklar:',
            bir: '1. Menstrual buzilishlar;',
            ikki: '2. Infeksiya yo‘li bilan yuqish;',
            uch: '3. Bachadon muammolari;',
            tort: '4. Qalqonsimon osti bezlari;',
            besh: '5. Bachadonning beqaror o‘sishi.'
        },

        aboutJop3: {
            kasalliklari: 'Akusherlik va Ginekologiya:',
            bir: "1. Jarrohlik yo‘li bilan xavfsiz tug‘ruqni ta'minlash.;",
            ikki: '2. Tug‘ruqdan keyingi onaning tiklanishini kuzatish.;',
            uch: '3. Hayz davrida og‘riq, qon ketishining ko‘payishi;',
            tort: '4. Gormonal muvozanat buzilishi va ortiqcha soch o‘sishi;',
            besh: '5. Bachadon to‘qimasining yuqori o‘sishi.',
        },

        text1: "Olisda, olisda, so‘z tog‘lari ortida, unli va undoshlar yurtida baliq matnlari yashaydi. Hammadan ajralib, ular katta til okeani bo'lgan Semantika qirg'og'idagi tom ma'nodagi uylarda yashaydilar. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni Lorem ipsum deb nomlangan baliq matnining kichik qatori grammatikaning katta olamiga kirishga qaror qildi.",

        text2: "Bu paradigmatik mamlakat bo'lib, unda takliflar sizning og'zingizga tushadi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni baliq matnining kichik bir qatori katta grammatika olamiga kirishga qaror qildi. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas."
    },
    {
        id: 5,
        img: Eleonora,
        name: 'Eleonora Semyonovna Pavlova',
        job: 'Radiolog',
        age: 20,
        aboutJop: "Radiologiya – bu tibbiyotning diagnostika va davolash sohasida, asosan, tasvirlash texnologiyalarini qo'llash orqali kasalliklarni aniqlash, kuzatish va davolash usullarini ishlab chiqishga ixtisoslashgan bo'limidir. Radiologiya sohasidagi texnikalar orasida rentgen, kompyuter tomografiya (KT), magnit-rezonans tomografiya (MRT), ultratovush tasvirlash (US) va nuklear tibbiyot kabi usullar mavjud. Bir gap bilan tibbiyotda kasalliklarni aniqlash va davolashda tasvirlash texnologiyalarini qo'llashni o'rganadigan fan.",

        aboutJop2: {
            kasalliklari: 'Radilogiyada asosiy usullar:',
            bir: '1. Rentgen nuri;',
            ikki: '2. Ultrasonografiya (USG);',
            uch: '3. Kompyuter tomografiya (KT);',
            tort: '4. Magnit-rezonans tasvirlash (MR);',
            besh: '5. Tasvirlarni olish va tahlil qilish.'
        },

        aboutJop3: {
            kasalliklari: 'Qollanilishi:',
            bir: "1. Ichki organlar va tuzilmalarni tekshirish;",
            ikki: '2. Diagnostikalash;',
            uch: '3. Radioterapiya (davolash)',
            tort: '4. Gormonal muvozanat buzilishi va ortiqcha soch o‘sishi;',
            besh: '5. Tasvirlar yordamida jarrohlik amaliyotlarini bajarish.',
        },

        text1: "Olisda, olisda, so‘z tog‘lari ortida, unli va undoshlar yurtida baliq matnlari yashaydi. Hammadan ajralib, ular katta til okeani bo'lgan Semantika qirg'og'idagi tom ma'nodagi uylarda yashaydilar. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni Lorem ipsum deb nomlangan baliq matnining kichik qatori grammatikaning katta olamiga kirishga qaror qildi.",

        text2: "Bu paradigmatik mamlakat bo'lib, unda takliflar sizning og'zingizga tushadi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni baliq matnining kichik bir qatori katta grammatika olamiga kirishga qaror qildi. Kichik Dal daryosi butun mamlakat bo'ylab oqadi va uni barcha kerakli qoidalar bilan ta'minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas."
    },
]

// Birja data 
export const BirjalarData = [
    {
        id: 1,
        img: SotibOlish,
        name: 'BlackFriday',
        data: '26 noyabrdan 9 dekabrgacha',
        aksiya: "Sotib olish bilan bepul sovg'a",
        text: "Mahsulot sotib olganingizda yoki buyurtmangiz ma'lum miqdorga yetganda bepul sovg'a oling.",
        text1: 'Mavsumga tegishli tovarlarga chegirmalar taqdim etamiz.',
        btn: 'Batafsil',
    },
    {
        id: 2,
        img: Mavsumiy,
        name: 'Gifts',
        data: '26 noyabrdan 9 dekabrgacha',
        aksiya: "Mavsumiy mahsulotlarga chegirma",
        text: "Joriy mavsumga tegishli tovarlarga chegirmalar, yozda yozgi tovarlarga chegirmalar taqdim etamiz." ,
        text1: 'Bitta aniq mahsulotni sotib olayotganda, ikkinchi mahsulotni chegirma bilan sotib olishingiz mumkin.',
        btn: 'Batafsil',
    },
    {
        id: 3,
        img: Ikkinchisi,
        name: 'YearSale',
        data: '26 noyabrdan 9 dekabrgacha',
        aksiya: "Ikkinchisini chegirma bilan oling",
        text: "Bitta aniq mahsulotni sotib olayotganda, ikkinchi mahsulotni chegirma bilan sotib olishingiz mumkin.",
        text1: " Buyurtmangiz ma'lum miqdorga yetganda bepul sovg'a oling.",
        btn: 'Batafsil',
    }
]