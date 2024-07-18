document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    fetchProduct(productId);
});

function fetchProduct(productId) {
    const products = {
        "1": {
            image: "images/pizza/pizza prosciutto crudo.png",
            name: "Pizza prosciutto crudo și rucolla",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, prosciutto crudo, rucola, Grand Padano, rosii cherry.",
            weight: "150g",
            ve: "768/183",
            grasimi: "8.5",
            acizi: "3.5",
            glucide: "17.9",
            zaharuri: "1.5",
            proteine: "9.6",
            sare: "0.9",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "2": {
            image: "images/pizza/pizza salami.png",
            name: "Pizza salami",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, salam Napoli, masline.",
            weight: "140g",
            ve: "1328/316",
            grasimi: "16.2",
            acizi: "7.7",
            glucide: "25.2",
            zaharuri: "1.3",
            proteine: "17.1",
            sare: "1.6",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "3": {
            image: "images/pizza/pizza mortadella.png",
            name: "Pizza mortadella",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos alb (smantana de gatit, sare, piper negru), mortadella, mozzarella proaspata, fistic.",
            weight: "140g",
            ve: "1665/397",
            grasimi: "21.6",
            acizi: "5.8",
            glucide: "36.7",
            zaharuri: "2.6",
            proteine: "18.3",
            sare: "2.6",
            fibre: "-",
            alergeni: "Gluten, lapte, arahide. Poate să conțină urme de: soia, muștar."
        },
        "4": {
            image: "images/pizza/pizza cu prosciutto cotto si ciupercim.png",
            name: "Pizza prosciuttto e funghi",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, prosciutto cotto, ciuperci, măsline, porumb.",
            weight: "150g",
            ve: "1372/328",
            grasimi: "14.1",
            acizi: "5.8",
            glucide: "24.7",
            zaharuri: "2.4",
            proteine: "14.5",
            sare: "1.4",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "5": {
            image: "images/pizza/pizza spianata, gorgonzola si ciuperci.png",
            name: "Pizza spianata",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, salam spianata, ardei iute.",
            weight: "140g",
            ve: "1076/262",
            grasimi: "11.7",
            acizi: "4.6",
            glucide: "24.9",
            zaharuri: "2.8",
            proteine: "12.7",
            sare: "1.3",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "6": {
            image: "images/pizza/pizza margherita.png",
            name: "Pizza margherita",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de rosii, mozzarella, mozzarella proaspata, busuioc, ulei de masline.",
            weight: "140g",
            ve: "1342/321",
            grasimi: "10.1",
            acizi: "3.8",
            glucide: "39.6",
            zaharuri: "1.6",
            proteine: "15.3",
            sare: "0.9",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "7": {
            image: "images/pizza/pizza quatro formagi.png",
            name: "Pizza quattro formaggi",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos alb (smantana de gatit, sare, piper negru), mozzarella, gorgonzola, emmeltaler, Grand Padano.",
            weight: "140g",
            ve: "1038/248",
            grasimi: "11.0",
            acizi: "6.4",
            glucide: "23.0",
            zaharuri: "3.5",
            proteine: "13.0",
            sare: "1.3",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "8": {
            image: "images/pizza/pizza cu ton.png",
            name: "Pizza tonno",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, ton, ceapă rosie, măsline.",
            weight: "140g",
            ve: "784/187",
            grasimi: "7.5",
            acizi: "2.6",
            glucide: "15.0",
            zaharuri: "3.0",
            proteine: "15.0",
            sare: "0.8",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "9": {
            image: "images/pizza/pizza cu prosciutto cotto.png",
            name: "Pizza prosciutto cotto",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, prosciutto cotto, porumb.",
            weight: "140g",
            ve: "736/176",
            grasimi: "6.8",
            acizi: "3.2",
            glucide: "17.9",
            zaharuri: "0.9",
            proteine: "8.5",
            sare: "0.5",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "10": {
            image: "images/pizza/pizza cu salsiccia si ceapa.png",
            name: "Pizza cipola, salsiccia e parmegiano",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii, mozzarella, salsiccia, ceapă rosie, Grand Padano.",
            weight: "140g",
            ve: "1008/241",
            grasimi: "12.8",
            acizi: "4.3",
            glucide: "23.3",
            zaharuri: "2.9",
            proteine: "12.6",
            sare: "1.2",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "11": {
            image: "images/pizza/pizza carnivora.png",
            name: "Pizza carnivora",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, pancetta, prosciutto cotto, salam Napoli.",
            weight: "150g",
            ve: "1123/268",
            grasimi: "12.9",
            acizi: "12.9",
            glucide: "22.1",
            zaharuri: "2.7",
            proteine: "14.4",
            sare: "1.7",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "12": {
            image: "images/pizza/pizza de post.png",
            name: "Pizza vegetală cu ardei copți și broccoli",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), ardei copti, broccoli.",
            weight: "140g",
            ve: "847/203",
            grasimi: "5.5",
            acizi: "2.7",
            glucide: "28.1",
            zaharuri: "3.2",
            proteine: "9.4",
            sare: "0.8",
            fibre: "-",
            alergeni: "Gluten, sulfiți. Poate să conțină urme de: soia, muștar, țelină."
        },
        "13": {
            image: "images/pizza/pizza post.png",
            name: "Pizza post (zucchini)",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, zucchini, ulei măsline, usturoi, roșii cherry.",
            weight: "110g",
            ve: "462/110",
            grasimi: "6.0",
            acizi: "2.43",
            glucide: "11.2",
            zaharuri: "1.2",
            proteine: "2.5",
            sare: "0.3",
            fibre: "-",
            alergeni: "Gluten. Poate să conțină urme de: soia, muștar, țelină."
        },
        "14": {
            image: "images/pizza/PIZZA amatriciana.png",
            name: "Pizza amatriciana",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, rosii, pancetta si peccorino.",
            weight: "140g",
            ve: "1097/262",
            grasimi: "11.07",
            acizi: "1.25",
            glucide: "30.6",
            zaharuri: "2.7",
            proteine: "8.79",
            sare: "0.88",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "15": {
            image: "images/pizza/PIZZA  capriciosa.png",
            name: "Pizza capriciosa",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, mozzarella, prosciutto cotto, ciuperci, masline, anghinare.",
            weight: "150g",
            ve: "721/172",
            grasimi: "5.5",
            acizi: "1.7",
            glucide: "21",
            zaharuri: "4.8",
            proteine: "10",
            sare: "1.7",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "16": {
            image: "images/pizza/pizza bresaola new.png",
            name: "Pizza Bresaola",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, mozzarella proaspata, bresaola, valeriana, crema de otet balsamic, Grand Padano.",
            weight: "150g",
            ve: "1210/290",
            grasimi: "12.1",
            acizi: "5.7",
            glucide: "26.8",
            zaharuri: "3.4",
            proteine: "15.4",
            sare: "0.9",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "17": {
            image: "images/pizza/PIZZA salsicia si broccoli.png",
            name: "Pizza salsiccia si broccoli",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, salsiccia si broccoli.",
            weight: "150g",
            ve: "1025/245",
            grasimi: "9.73",
            acizi: "0.82",
            glucide: "30.3",
            zaharuri: "2.86",
            proteine: "8.01",
            sare: "1.13",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "18": {
            image: "images/pizza/pizza spianata, gorgonzola si ciuperci.png",
            name: "Pizza spianata, gorgonzola si ciuperci",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, spianata, gorgonzola, ciuperci.",
            weight: "150g",
            ve: "1003/239",
            grasimi: "11.0",
            acizi: "4.2",
            glucide: "25",
            zaharuri: "1.3",
            proteine: "9.4",
            sare: "1.05",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "19": {
            image: "images/pizza/PIZZA pui si ciuperci.png",
            name: "Pizza pui si ciuperci",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, piept pui, ciuperci, ceapa rosie, pancetta.",
            weight: "150g",
            ve: "699/243",
            grasimi: "5.9",
            acizi: "1.53",
            glucide: "7",
            zaharuri: "1.7",
            proteine: "16",
            sare: "2.9",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "20": {
            image: "images/sandwich/sandwich cu prosciutto crudo si rucola.png",
            name: "Sandwich cu prosciutto crudo",
            description: "Blat de focaccia cu dimensiunea 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, prosciutto crudo, rucola, Grand Padano.",
            weight: "185g",
            ve: "768/183",
            grasimi: "8.5",
            acizi: "3.5",
            glucide: "17.9",
            zaharuri: "1.5",
            proteine: "9.6",
            sare: "0.9",
            fibre: "-",
            alergeni: "Gluten din grâu, lapte. Poate să conțină urme de: susan, arahide, ouă, soia, nuci, sulfiți."
        },
        "21": {
            image: "images/sandwich/sandwich cu prosciutto cotto.png",
            name: "Sandwich cu prosciutto cotto",
            description: "Blat de focaccia cu dimensiunea 12x20 cm",
            ingredients: "Faina de GRAU, faina orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, mozzarella proaspata, prosciutto cotto, rosii, salata iceberg.",
            weight: "185g",
            ve: "736/176",
            grasimi: "6.8",
            acizi: "3.2",
            glucide: "17.9",
            zaharuri: "0.9",
            proteine: "8.5",
            sare: "0.5",
            fibre: "-",
            alergeni: "Gluten din grâu, lapte. Poate să conțină urme de: susan, arahide, ouă, soia, nuci, sulfiți."
        },
        "22": {
            image: "images/sandwich/sandwich salam new.png",
            name: "Sandwich cu salam napoli",
            description: "Blat de focaccia cu dimensiunea 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, mozzarella proaspata, salam Napoli, rosii, salata iceberg.",
            weight: "185g",
            ve: "1328/316",
            grasimi: "16.2",
            acizi: "7.7",
            glucide: "25.2",
            zaharuri: "1.3",
            proteine: "17.1",
            sare: "1.6",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "23": {
            image: "images/sandwich/sandwich cu mortadella.png",
            name: "Sandwich cu mortadella",
            description: "Blat de focaccia cu dimensiunea 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, mozzarella proaspata, mortadella, salata iceberg.",
            weight: "185g",
            ve: "1665/397",
            grasimi: "21.6",
            acizi: "5.8",
            glucide: "36.7",
            zaharuri: "2.6",
            proteine: "18.3",
            sare: "2.6",
            fibre: "-",
            alergeni: "Gluten, lapte, arahide. Poate să conțină urme de: soia, muștar."
        },
        "24": {
            image: "images/strudel cu mar.png",
            name: "Ștrudel măr",
            description: "Patiserie",
            ingredients: "Faina, apa, margarina, zahar, otet, umplutura mar 15%, (sirop glucoza-fructoza), sare, easy croissant (emulgator E472e, corector faina E920, E300, E160a, E471, enzime).",
            weight: "120g",
            ve: "1402/234",
            grasimi: "12.9",
            acizi: "0.2",
            glucide: "47.2",
            zaharuri: "5.1",
            proteine: "8.8",
            sare: "0.01",
            fibre: "1.2",
            alergeni: "Gluten din grâu, soia și derivate"
        },
        "25": {
            image: "images/strudel.png",
            name: "Ștrudel cu brânză dulce și stafide",
            description: "Patiserie",
            ingredients: "Faina, zahar, margarina, otet, apa, umplitura branza dulce si stafide, em congelare (umulgatorE472E, corector faina E300, E160a), megamix (emulsifiant, enzime)",
            weight: "120g",
            ve: "1402/234",
            grasimi: "12.9",
            acizi: "0.2",
            glucide: "47.2",
            zaharuri: "5.1",
            proteine: "8.8",
            sare: "0.01",
            fibre: "1.2",
            alergeni: "Gluten din grâu, ouă, soia și derivate, stafide și lapte. Poate să conțină urme de susan, arahide, nuci, sulfiți."
        },
        "26": {
            image: "images/strudel cu visine.png",
            name: "Ștrudel cu vișine",
            description: "Patiserie",
            ingredients: "Faina, zahar, margarina, otet, apa, umplutura visine 15%, easy croissant (faina alba de grau tip 550, gluten din grau, sare iodata, dextroza, emulsifiantE471) (palmier), E472e, agent de colorare (caroten), E412, faina de malt din grau, zer, pudra, aroma, caroten (E160, agent de tratare a fainii (Leisteine E920, antioxidant (acid ascorbic (E300), enzime.",
            weight: "120g",
            ve: "1402/234",
            grasimi: "12.9",
            acizi: "0.2",
            glucide: "47.2",
            zaharuri: "5.1",
            proteine: "8.8",
            sare: "0.01",
            fibre: "1.2",
            alergeni: "Gluten din grâu, soia și derivate. Poate să conțină urme de lapte, susan, arahide, ouă, nuci, sulfiți."
        },
        "27": {
            image: "images/strudel.png",
            name: "Ștrudel cu vanilie",
            description: "Patiserie",
            ingredients: "Faina, apa, margarina, umplutura vanilie 15%, zahar, otet, apa, emulgator E472e, corector de faina E300, E160a.",
            weight: "120g",
            ve: "1402/234",
            grasimi: "12.9",
            acizi: "0.2",
            glucide: "47.2",
            zaharuri: "5.1",
            proteine: "8.8",
            sare: "0.01",
            fibre: "1.2",
            alergeni: "Gluten, ouă, soia și derivate. Poate să conțină urme de lapte, susan, arahide, ouă, nuci, sulfiți."
        },
        "28": {
            image: "images/strudel.png",
            name: "Ștrudel cu ciocolată",
            description: "Patiserie",
            ingredients: "Faina, apa, margarina, zahar, otet, uleiuri vegetale rafinate (palmier, floarea soarelui), umplutura ciocolata 15%, emulgator E472e, E322, E471, corector de faina E300, E160a.",
            weight: "120g",
            ve: "1418/298",
            grasimi: "12.7",
            acizi: "0.2",
            glucide: "47.6",
            zaharuri: "5.1",
            proteine: "7.1",
            sare: "0.01",
            fibre: "1.2",
            alergeni: "Gluten, ouă, soia și derivate. Poate să conțină urme de lapte, susan, arahide, ouă, nuci, sulfiți."
        },
        "29": {
            image: "images/placinta dobrogeana.png",
            name: "Plăcintă dobrogeană",
            description: "Patiserie",
            ingredients: "Faina, apa, umplutura, branza de vaca 20%, margarina vegetala, otet alimentar, sare, megimix (faina de grau, emulsifianti, enzime), Ireke frost (gluten (grau), emulsifiant (palmier), carbonat de calciu, antioxidant (acid ascorbic), enzime).",
            weight: "85g",
            ve: "1316/313",
            grasimi: "14.1",
            acizi: "2.6",
            glucide: "40.4",
            zaharuri: "0.9",
            proteine: "5.9",
            sare: "1.1",
            fibre: "0.9",
            alergeni: "Gluten, ouă, soia și derivate. Poate să conțină urme de lapte, susan, arahide, ouă, nuci, sulfiți."
        },
        "30": {
            image: "images/covrig cu sare.jpeg",
            name: "Covrig cu sare",
            description: "Patiserie",
            ingredients: "Faina alba de GRAU 550, apa, drojdie, zahar, sare",
            weight: "85g",
            ve: "1539/365",
            grasimi: "6.9",
            acizi: "2.3",
            glucide: "63.8",
            zaharuri: "8.7",
            proteine: "10.3",
            sare: "1.7",
            fibre: "-",
            alergeni: "Gluten din grâu. Poate să conțină urme de lapte, susan, arahide, ouă, soia, nuci, sulfiți."
        },
        "31": {
            image: "images/covrig cu mac.jpeg",
            name: "Covrig cu mac",
            description: "Patiserie",
            ingredients: "Faina alba de grau 550, apa, drojdie, zahar, sare, mac",
            weight: "85g",
            ve: "1539/365",
            grasimi: "6.9",
            acizi: "2.3",
            glucide: "63.8",
            zaharuri: "8.7",
            proteine: "10.3",
            sare: "1.7",
            fibre: "-",
            alergeni: "Gluten din grâu. Poate să conțină urme de lapte, susan, arahide, ouă, soia, nuci, sulfiți."
        },
        "32": {
            image: "images/covrig cu susan.jpeg",
            name: "Covrig cu susan",
            description: "Patiserie",
            ingredients: "Faina alba de grau 550, apa, drojdie, zahar, sare, susan",
            weight: "85g",
            ve: "1573/373",
            grasimi: "9.3",
            acizi: "2.7",
            glucide: "60.3",
            zaharuri: "8.6",
            proteine: "10.7",
            sare: "0.9",
            fibre: "-",
            alergeni: "Gluten, susan. Poate să conțină urme de lapte, arahide, ouă, soia, nuci, sulfiți."
        },
        "33": {
            image: "images/covrig cu seminte de floarea soarelui.jpeg",
            name: "Covrig cu semințe de floarea soarelui",
            description: "Patiserie",
            ingredients: "Faina alba de grau 550, apa, drojdie, zahar, sare, seminte floarea soarelui",
            weight: "85g",
            ve: "1709/407",
            grasimi: "13.9",
            acizi: "3.0",
            glucide: "57.8",
            zaharuri: "8.1",
            proteine: "11.2",
            sare: "0.9",
            fibre: "-",
            alergeni: "Gluten din grâu. Poate să conțină urme de lapte, susan, arahide, ouă, soia, nuci, sulfiți."
        },
        "34": {
            image: "images/covrig cu cascaval.jpeg",
            name: "Covrig cu cașcaval",
            description: "Patiserie",
            ingredients: "Faina alba de grau 550, apa, drojdie, zahar, sare, provola afumicata*",
            weight: "120g",
            ve: "1318/311",
            grasimi: "5.2",
            acizi: "-",
            glucide: "59.1",
            zaharuri: "5.7",
            proteine: "7.1",
            sare: "1.7",
            fibre: "-",
            alergeni: "Gluten din grâu, lapte. Poate să conțină urme de lapte, susan, arahide, ouă, soia, nuci, sulfiți."
        },
        "35": {
            image: "images/covrig umplut cu crema de mar si scortisoara.jpeg",
            name: "Covrig cu măr și scorțișoară",
            description: "Patiserie",
            ingredients: "-",
            weight: "-",
            ve: "-",
            grasimi: "-",
            acizi: "-",
            glucide: "-",
            zaharuri: "-",
            proteine: "-",
            sare: "-",
            fibre: "-",
            alergeni: "-"
        },
        "36": {
            image: "images/covrig umplut cu crema de alune.jpeg",
            name: "Covrig cu cremă de alune",
            description: "Patiserie",
            ingredients: "-",
            weight: "-",
            ve: "-",
            grasimi: "-",
            acizi: "-",
            glucide: "-",
            zaharuri: "-",
            proteine: "-",
            sare: "-",
            fibre: "-",
            alergeni: "-"
        },
        "37": {
            image: "images/COVRIG UMPLUT.jpeg",
            name: "Covrig cu vanilie",
            description: "Patiserie",
            ingredients: "-",
            weight: "-",
            ve: "-",
            grasimi: "-",
            acizi: "-",
            glucide: "-",
            zaharuri: "-",
            proteine: "-",
            sare: "-",
            fibre: "-",
            alergeni: "Gluten din grâu, lapte. Poate să conțină urme de lapte, susan, arahide, ouă, soia, nuci, sulfiți."
        },
        "38": {
            image: "images/covrig umplut cu crema de visine.jpeg",
            name: "Covrig cu vișine",
            description: "Patiserie",
            ingredients: "-",
            weight: "-",
            ve: "-",
            grasimi: "-",
            acizi: "-",
            glucide: "-",
            zaharuri: "-",
            proteine: "-",
            sare: "-",
            fibre: "-",
            alergeni: "Gluten din grâu, lapte. Poate să conțină urme de lapte, susan, arahide, ouă, soia, nuci, sulfiți."
        },
        "39": {
            image: "images/bakeron cu carnati usor picant.jpeg",
            name: "Bakeron cu cârnat ușor picant",
            description: "Patiserie",
            ingredients: "Faina alba de grau 550, apa, drojdie, zahar, sare, cremwurst Elit Virsli",
            weight: "850g",
            ve: "1005/239",
            grasimi: "8.6",
            acizi: "3.4",
            glucide: "29.6",
            zaharuri: "6.5",
            proteine: "11.8",
            sare: "1.4",
            fibre: "-",
            alergeni: "Gluten, soia, lactate, muștar, țelină, ou. Poate să conțină urme de lapte, arahide, ouă, soia."
        },
        "40": {
            image: "images/bakeron cu cremvusti de pui.jpeg",
            name: "Bakeron cremwurst pui",
            description: "Patiserie",
            ingredients: "Faina alba de grau 550, apa, drojdie, zahar, sare, cremwurst cu piept de pui (33%)",
            weight: "850g",
            ve: "1068/278",
            grasimi: "8.6",
            acizi: "3.4",
            glucide: "36.2",
            zaharuri: "8.4",
            proteine: "9.4",
            sare: "1.1",
            fibre: "-",
            alergeni: "Gluten, muștar, lapte, gălbenuș de ou praf, susan. Poate să conțină urme de lapte, arahide, ouă, soia."
        },
        "41": {
            image: "images/trigon.png",
            name: "Trigon brânză sărată",
            description: "Patiserie",
            ingredients: "Faina apa, margarina, zahar, otet, umplutura branza sarata 15% (branza degresata, proteine din zer, grasime vegetala (cocos), proteine din albus de ou, stabilizator E1414, E1422, fibre, grasime vegetala 12%), magimix (faina de grau, emulsifianti, enzime) tigris kimo (carbonat de calciu, acid ascorbic, enzime), sare",
            weight: "130g",
            ve: "1297/245",
            grasimi: "13.6",
            acizi: "1.5",
            glucide: "37.4",
            zaharuri: "1.6",
            proteine: "8.8",
            sare: "1.1",
            fibre: "1.0",
            alergeni: "Gluten din grâu, soia și derivate, albuș de ou, lactoză."
        },
        "42": {
            image: "images/trigon.png",
            name: "Trigon brânză dulce",
            description: "Patiserie",
            ingredients: "Faina, apa, margarina, branza 15%, zahar, otet, sare, magimix (faina de grau, emulsifianti, enzime), tigris kimo (emulsifiant, carbonat de calciu, acid ascorbic, enzime)",
            weight: "130g",
            ve: "1297/309",
            grasimi: "13.6",
            acizi: "1.5",
            glucide: "37.4",
            zaharuri: "1.6",
            proteine: "8.8",
            sare: "1.1",
            fibre: "1.0",
            alergeni: "Gluten din grâu, ouă, soia și derivate, lactoză."
        },
        "43": {
            image: "images/strudel.png",
            name: "Ștrudel cu caise",
            description: "Patiserie",
            ingredients: "Faina, apa, margarina, zahar, otet, umplutura caise 15%, am congelare (emulgator E472e, corector faina E920, E300, E160a), megimix (emulsifiant, enzime)",
            weight: "120g",
            ve: "1402/234",
            grasimi: "12.9",
            acizi: "0.2",
            glucide: "47.2",
            zaharuri: "5.1",
            proteine: "8.8",
            sare: "0.01",
            fibre: "1.2",
            alergeni: "Gluten din grâu, soia și derivate. Poate să conțină urme de: lapte, susan, arahide, ouă, nuci, sulfiți."
        },
        "44": {
            image: "images/strudel.png",
            name: "Ștrudel cu fructe de pădure",
            description: "Patiserie",
            ingredients: "Faina, apa, zahar, margarina, otet, umplutura fructe de padure 15%, easy croissant (emulgator E472e, corector de faina E300, E160a, E471, E920, enzime).",
            weight: "120g",
            ve: "1402/334",
            grasimi: "12.9",
            acizi: "0.2",
            glucide: "47.2",
            zaharuri: "5.1",
            proteine: "8.8",
            sare: "0.01",
            fibre: "1.2",
            alergeni: "Gluten, soia și derivate. Poate să conțină urme de: lapte, susan, arahide, ouă, nuci, sulfiți."
        },
        "45": {
            image: "images/pizza/pizza salsiccia si ciuperci.png",
            name: "Pizza salsiccia și ciuperci",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de roșii (sos rosii, ulei de masline, apa, oregano, busuioc, piper negru), mozzarella, salsiccia si ciuperci.",
            weight: "150g",
            ve: "1025/245",
            grasimi: "9.73",
            acizi: "0.82",
            glucide: "30.3",
            zaharuri: "2.86",
            proteine: "8.01",
            sare: "1.13",
            fibre: "-",
            alergeni: "Gluten, lapte. Poate să conțină urme de: soia, muștar."
        },
        "46": {
            image: "images/pizza/Foccacia.png",
            name: "Foccacia",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, roșii cherry, măsline, rozmarin, ulei de măsline.",
            weight: "130g",
            ve: "503/120",
            grasimi: "4.8",
            acizi: "0.3",
            glucide: "17.4",
            zaharuri: "1.0",
            proteine: "1.5",
            sare: "0.7",
            fibre: "-",
            alergeni: "Gluten. Poate să conțină urme de: soia, muștar."
        },
        "47": {
            image: "images/pizza/pizza de post.png",
            name: "Pizza vegetală cu legume la grill",
            description: "Pizza la felie cu blat ROMAN 12x20 cm",
            ingredients: "Faina de GRAU, faina de orez, apa, drojdie, zahar, sare, ulei floarea soarelui, ulei masline, sos de rosii, mozzarella, legume la grill (ardei, vinete).",
            weight: "150g",
            ve: "847/203",
            grasimi: "5.5",
            acizi: "2.7",
            glucide: "28.1",
            zaharuri: "3.2",
            proteine: "9.4",
            sare: "0.8",
            fibre: "-",
            alergeni: "Gluten, lapte, sulfiți. Poate să conțină urme de: soia, muștar, țelină."
        },
    };

    if (products.hasOwnProperty(productId)) {
        const product = products[productId];
        
        document.getElementById("image").src = product.image;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-ingredients").textContent = product.ingredients;
        document.getElementById("product-g").textContent = product.weight;
        document.getElementById("ve").textContent = product.ve;
        document.getElementById("grasimi").textContent = product.grasimi;
        document.getElementById("acizi").textContent = product.acizi;
        document.getElementById("glucide").textContent = product.glucide;
        document.getElementById("zaharuri").textContent = product.zaharuri;
        document.getElementById("proteine").textContent = product.proteine;
        document.getElementById("sare").textContent = product.sare;
        document.getElementById("fibre").textContent = product.fibre;
        document.getElementById("alergeni").textContent = product.alergeni;
    }
    else{
        console.error("Product not found");
    }
}