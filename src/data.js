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
import birja4 from './img/birja4.avif'
import birja5 from './img/birja5.avif'
import birja6 from './img/birja6.avif'
import birja7 from './img/birja7.webp'
import birja8 from './img/birja8.webp'
import birja9 from './img/birja9.webp'

// news 
// import Allergiya from './img/Allergiya.webp';
// import TezPishirish from './img/TezPishirish.webp';
import yangiliklar3 from './img/yangiliklar3.webp';
import yangiliklar4 from './img/yangiliklar4.webp';
import yangiliklar5 from './img/yangiliklar5.webp';
import yangiliklar6 from './img/yangiliklar6.jpg';
import yangiliklar7 from './img/yangiliklar7.jpg';
import yangiliklar8 from './img/yangiliklar8.jpg';

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
        data: '2024-11-20',
        aksiya: "Cheklangan vaqt davomida katta chegirmalar!",
        text: "Black Friday aksiyasi doirasida mahsulotlarimizni katta chegirmalar bilan xarid qilishingiz mumkin. Bundan tashqari, ma'lum miqdorda xarid qilganingizda bepul sovg'alar va qo'shimcha chegirmalarga ega bo'lasiz. O'tkazib yubormang, bu imkoniyat bir yil davomida faqat bir marta bo'ladi!",
        btn: 'Batafsil',
    },
    {
        id: 2,
        img: Mavsumiy,
        name: 'Gifts',
        data: '2024-11-20',
        aksiya: "Mavsumiy mahsulotlarga maxsus chegirmalar!",
        text: "Yozgi va qishki mahsulotlarimizga alohida chegirmalar mavjud. Har bir mavsum uchun maxsus takliflar tayyorladik: yozda salqin ichimliklar va plyaj buyumlari, qishda esa issiq kiyimlar va sovuqdan himoya qiluvchi mahsulotlarga chegirmalar amal qiladi. Bu sizga nafaqat mablag' tejashga, balki yuqori sifatli mahsulotlardan bahramand bo'lishga imkon beradi.",
        btn: 'Batafsil',
    },
    {
        id: 3,
        img: Ikkinchisi,
        name: 'YearSale',
        data: '2024-11-20',
        aksiya: "Bitta mahsulotni xarid qiling va chegirma oling!",
        text: "Ushbu aksiya sizga juda foydali taklif taqdim etadi: birinchi mahsulotni xarid qilganingizda, ikkinchi mahsulotni juda arzon narxda xarid qilish imkoniyati beriladi. Bu taklif maxsus katalogdagi mahsulotlarga tegishli bo'lib, sifat va narx nisbati bo'yicha mijozlarimizni xursand qiladi. Tezroq foydalanganingiz ma'qul!",
        btn: 'Batafsil',
    },
    {
        id: 4,
        img: birja4,
        data: '2024-11-20',
        aksiya: 'Innovatsion yechimlar va maxsus imkoniyatlar!',
        text: "Birja 4 mijozlariga moliyaviy bozordagi eng ilg'or xizmatlarni taklif qiladi. Ularning innovatsion yondashuvi tufayli siz har bir jarayonni qulay va tezkor amalga oshirishingiz mumkin. Maxsus aksiyalar, bonus dasturlari va chegirmalar doimiy ravishda yangilanib boradi.",
        btn: 'Batafsil',
        name: 'Medicine',
    },
    {
        id: 5,
        img: birja5,
        data: '2024-11-22',
        aksiya: 'Foydali shartnomalar va sodiqlik dasturlari!',
        text: "Ushbu birja foydalanuvchilariga eksklyuziv imkoniyatlar taqdim etadi: har bir yangi mijoz uchun sovg'alar, uzoq muddatli foydalanuvchilar uchun esa sodiqlik dasturlari orqali maxsus bonuslar. Shuningdek, yangi xizmat turlariga kashfiyotlar kiritish orqali sizning ehtiyojlaringizni yanada yaxshiroq qondiradi.",
        btn: 'Batafsil',
        name: 'Medicine',
    },
    {
        id: 6,
        img: birja6,
        data: '2024-11-23',
        aksiya: 'Keng qamrovli xizmatlar va mijozlarga qulaylik!',
        text: "Birja 6 mijozlari uchun keng qamrovli moliyaviy xizmatlarni taqdim etadi. Bizning asosiy maqsadimiz – har bir mijozga tezkor va ishonchli xizmat ko'rsatishdir. Eksklyuziv aksiya va chegirmalar har bir foydalanuvchi ehtiyojiga moslashtirilgan. Bizning xizmatlardan foydalanganingizda, o'zingizni maxsus his qilasiz.",
        btn: 'Batafsil',
        name: 'Service for health',
    },
    {
        id: 7,
        img: birja7,
        data: '2024-11-25',
        aksiya: 'Tajribali ekspertlar va yuqori sifatli xizmatlar!',
        text: "Birja 7 boshqa birjalardan o'zining tajribali ekspertlari va mukammal xizmat sifati bilan ajralib turadi. Siz moliyaviy bozorda muvaffaqiyatli qadam tashlashingiz uchun barcha zarur vositalar va ko'makni topasiz. Maxsus aksiyalar va chegirmalar mijozlar ehtiyojlariga mos ravishda taqdim etiladi.",
        btn: 'Batafsil',
        name: 'Experience',
    },
    {
        id: 8,
        img: birja8,
        data: '2024-11-26',
        aksiya: 'Yangi avlod moliyaviy xizmatlar mahsulotlari!',
        text: "Birja 8 – bu sizning moliyaviy muvaffaqiyatingiz yo'lidagi ishonchli hamkoringiz. Yangi avlod texnologiyalari asosida ishlab chiqilgan xizmatlarimiz foydalanuvchilarning har bir ehtiyojini qondirishga qaratilgan. Bu birja yuqori sifatli xizmatlar va innovatsion yondashuv bilan ajralib turadi. Maxsus aksiyalardan foydalanib, moliyaviy erkinlikka erishing.",
        btn: 'Batafsil',
        name: 'New products',
    },
    {
        id: 9,
        img: birja9,
        data: '2024-11-27',
        aksiya: 'Investitsiyalar uchun ishonchli hamkor!',
        text: "Birja 9 investitsiya qilish uchun keng imkoniyatlar taqdim etadi. Yuqori daromadli loyihalar, barqaror moliyaviy yechimlar va tajribali mutaxassislar yordami – bularning barchasi siz uchun taqdim etiladi. Maxsus aksiyalar va chegirmalar yordamida birja xizmatlaridan yanada foydali shartlar asosida foydalanishingiz mumkin.",
        btn: 'Batafsil',
        name: 'Investment partners',
    },
];

export const newsData = [
    {
        id: 3,
        date: '2024-01-06',
        author: 'Pauchkova Valentina',
        title: 'Tez pishirish uchun mikroto\'lqinli pechlar',
        description:
            'Qulay va innovatsion texnologiyalar tufayli ushbu qurilmalar pishirish jarayonini sezilarli darajada tezlashtirishga imkon beradi. Ular ko‘plab funktsiyalarni taklif qiladi va ovqat tayyorlashni qulay qiladi. Zamonaviy uy sharoitida mikroto‘lqinli pechlarning o‘rni beqiyos.',
        image: yangiliklar3,
    },
    {
        id: 4,
        date: '2024-02-18',
        author: 'Borisov Valentin',
        title: 'Allergiyaga chalinganlar uchun eng yaxshi changyutgichni qanday tanlash mumkin',
        description:
            'Chang allergiyasi - bu noqulaylik tug‘diradigan va turli alomatlarga olib keladigan keng tarqalgan muammo. To‘g‘ri changyutgich tanlash allergenlarni samarali bartaraf etishga yordam beradi. Ushbu maqolada eng mos variantlarni tanlash bo‘yicha foydali maslahatlar berilgan.',
        image: yangiliklar4,
    },
    {
        id: 5,
        date: '2024-09-27',
        author: 'Pauchkova Valentina',
        title: 'Tez pishirish uchun mikroto\'lqinli pechlar',
        description:
            'Har bir daqiqa muhim bo‘lgan bugungi tezkor hayotda mikroto‘lqinli pechlar vaqtni tejash uchun ajralmas vositadir. Ular turli xil ovqatlarni bir necha daqiqada tayyorlash imkoniyatini taqdim etadi. Ushbu qurilmalar nafaqat qulay, balki energiyani tejashga ham yordam beradi.',
        image: yangiliklar5,
    },
    {
        id: 6,
        date: '2024-10-11',
        author: 'Pauchkova Valentina',
        title: 'Tez pishirish uchun mikroto\'lqinli pechlar',
        description:
            'Mikroto‘lqinli pechlar zamonaviy texnologiyalar asosida ishlab chiqarilib, pishirish jarayonini tezlashtiradi. Ular bir necha bosqichli dasturlar bilan qulaylik yaratadi va ovqatning mazali tayyorlanishini ta’minlaydi. Hayot sifatingizni oshirish uchun ushbu qurilmalar muhim vosita bo‘lishi mumkin.',
        image: yangiliklar6,
    },
    {
        id: 7,
        date: '2024-04-18',
        author: 'Pauchkova Valentina',
        title: 'Tez pishirish uchun mikroto\'lqinli pechlar',
        description:
            'Zamonaviy mikroto‘lqinli pechlar vaqtingizni tejash uchun ideal tanlovdir. Ular nafaqat ovqatni tez pishirishga, balki mazali va bir xil haroratda tayyorlashga yordam beradi. Oila a’zolaringizni xursand qilish uchun ushbu texnologiyani qo‘llang.',
        image: yangiliklar7,
    },
    {
        id: 8,
        date: '2024-05-18',
        author: 'Pauchkova Valentina',
        title: 'Tez pishirish uchun mikroto\'lqinli pechlar',
        description:
            'Har bir kishi uchun qulay mikroto‘lqinli pechlar oddiy ovqat pishirish jarayonini inqilobiy o‘zgartirdi. Ularning zamonaviy modellari ko‘plab imkoniyatlarni, shu jumladan avtomatik pishirish rejimlarini taklif etadi. Hayotingizni yanada qulay qilish uchun ushbu qurilmadan foydalaning.',
        image: yangiliklar8,
    },
];
