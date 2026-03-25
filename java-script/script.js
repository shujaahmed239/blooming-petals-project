


const weddingContainer = document.getElementById("wedding-cards");
const birthdayContainer = document.getElementById("birthday-cards");
const anniversaryContainer = document.getElementById("anniversary-cards")
console.log(weddingContainer, "weddingContainer")
console.log(birthdayContainer, "birthdaycontainer")
if (weddingContainer) {
    const weddingCards = [
        {
            title: "Wedding Stage Decoration",
            desc: "Elegant floral stage decoration with roses and lilies.",
            img: "../images/wedding-iamges/stage-decor.webp",
            priceOld: 27000,
            priceNew: 25000,
            doc: "../docs/wedding-stage.docx"
        },
        {
            title: "Bridal Bouquet",
            desc: "Beautiful bouquet specially designed for brides.",
            img: "../images/wedding-iamges/bridal.webp",
            priceOld: 57000,
            priceNew: 55000,
            doc: "../docs/bridal-bouquet.docx"
        },
        {
            title: "Wedding Entrance Flowers",
            desc: "Grand flower decorations for wedding entrances.",
            img: "../images/wedding-iamges/entranceflo.webp",
            priceOld: 43000,
            priceNew: 42000,
            doc: "../docs/entrance-flowers.docx"
        },
        {
            title: "Table Centerpiece",
            desc: "Elegant flower arrangements for wedding tables.",
            img: "../images/wedding-iamges/table-flower.webp",
            priceOld: 69000,
            priceNew: 68000,
            doc: "../docs/table-centerpiece.docx"
        },
        {
            title: "Wedding Car Decoration",
            desc: "Beautiful floral decoration for wedding cars.",
            img: "../images/wedding-iamges/car-decor.webp",
            priceOld: 17000,
            priceNew: 15000,
            doc: "../docs/car-decoration.docx"
        },
        {
            title: "Floral Wedding Arch",
            desc: "Stunning floral arch decoration for wedding ceremonies.",
            img: "../images/wedding-iamges/wedimg.webp",
            priceOld: 34000,
            priceNew: 32000,
            doc: "../docs/floral-arch.docx"
        },
        {
            title: "Wedding Lighting",
            desc: "Beautiful lighting decoration that makes the venue elegant.",
            img: "../images/wedding-iamges/fairy-light.webp",
            priceOld: 98000,
            priceNew: 97000,
            doc: "../docs/lighting.docx"
        },
        {
            title: "Bridal Pathway Decoration",
            desc: "Decorated bridal pathway with flowers and lights.",
            img: "../images/wedding-iamges/walkway.webp",
            priceOld: 122000,
            priceNew: 121000,
            doc: "../docs/bridal-pathway.docx"
        },
        {
            title: "Wedding Hall Decoration",
            desc: "Stylish hall decorations with flowers and lighting.",
            img: "../images/wedding-iamges/wedding-hall.webp",
            priceOld: 200000,
            priceNew: 100000,
            doc: "../docs/wedding-hall.docx"
        },
        {
            title: "Wedding Hall Decoration",
            desc: "Stylish hall decorations with flowers and lighting.",
            img: "../images/wedding-iamges/wedding-hall.webp",
            priceOld: 200000,
            priceNew: 100000,
            doc: "../docs/wedding-hall.docx"
        },
    ];
    weddingCards.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
                <img src="${card.img}" alt="${card.title}">
                <h3>${card.title}</h3>
                <p>${card.desc}</p>
                <p class="price">
                    <span class="old">Rs ${card.priceOld}</span>
                    <span class="new">Rs ${card.priceNew}</span>
                </p>
                <a href="${card.doc}" class="btn" download>Download Details</a>
            `;
        weddingContainer.appendChild(div);
    });
}

// Only render birthday cards if container exists
if (birthdayContainer) {
    const birthdayCards = [
        {
            title: "Kids Birthday Decoration",
            desc: "Colorful balloon decoration specially designed for kids birthday parties.",
            img: "../images/birthday-img/wall-stage.webp",
            priceOld: 15000,
            priceNew: 13000,
            doc: "../docs/kids-birthday.docx"

        },

        {
            title: "Balloon Theme Birthday",
            desc: "Beautiful balloon theme decoration for birthday celebrations.",
            img: "../images/birthday-img/table-stage.webp",
            priceOld: 18000,
            priceNew: 16000,
            doc: "../docs/balloon-theme.docx"
        },
        {
            title: "Cartoon Theme Birthday",
            desc: "Cartoon character birthday decoration loved by kids.",
            img: "../images/birthday-img/rose-stage.webp",
            priceOld: 20000,
            priceNew: 18000,
            doc: "../docs/cartoon-theme.docx"
        },
        {
            title: "Princess Birthday Theme",
            desc: "Princess theme decoration perfect for girls birthday party.",
            img: "../images/birthday-img/birthday-6.webp",
            priceOld: 22000,
            priceNew: 20000,
            doc: "../docs/princess-theme.docx"
        },
        {
            title: "Superhero Birthday Theme",
            desc: "Superhero theme decoration for boys birthday party.",
            img: "../images/birthday-img/birthday-5.webp",
            priceOld: 21000,
            priceNew: 19000,
            doc: "../docs/superhero-theme.docx"
        },
        {
            title: "Garden Birthday Party",
            desc: "Outdoor garden birthday party decoration with balloons and lights.",
            img: "../images/birthday-img/birthday-4.webp",
            priceOld: 24000,
            priceNew: 22000,
            doc: "../docs/garden-party.docx"
        },
        {
            title: "Birthday Cake Table",
            desc: "Special cake table decoration with flowers and balloons.",
            img: "../images/birthday-img/baloon-stage.webp",
            priceOld: 17000,
            priceNew: 15000,
            doc: "../docs/cake-table.docx"
        },
        {
            title: "Color Theme Birthday",
            desc: "Single color theme birthday decoration setup.",
            img: "../images/birthday-img/birthday-4.webp",
            priceOld: 19000,
            priceNew: 17000,
            doc: "../docs/color-theme.docx"
        },
        {
            title: "Luxury Birthday Decoration",
            desc: "Luxury birthday decoration with premium balloons and lighting.",
            img: "../images/birthday-img/wall-stage.webp",
            priceOld: 30000,
            priceNew: 28000,
            doc: "../docs/luxury-birthday.docx"
        },
        {
            title: "Luxury Birthday Decoration",
            desc: "Luxury birthday decoration with premium balloons and lighting.",
            img: "../images/birthday-img/wall-stage.webp",
            priceOld: 30000,
            priceNew: 28000,
            doc: "../docs/luxury-birthday.docx"
        },

    ];
    birthdayCards.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
                <img src="${card.img}" alt="${card.title}">
                <h3>${card.title}</h3>
                <p>${card.desc}</p>
                <p class="price">
                    <span class="old">Rs ${card.priceOld}</span>
                    <span class="new">Rs ${card.priceNew}</span>
                </p>
                <a href="${card.doc}" class="btn" download>Download Details</a>
            `;
        birthdayContainer.appendChild(div);
    });
}

if (anniversaryContainer) {
    const anniversaryCards = [
        {
            title: "Romantic Anniversary Setup",
            desc: "Romantic decoration with candles, roses and balloons for couples.",
            img: "../images/anneversiry-images/baloon-decor.webp",
            priceOld: 20000,
            priceNew: 18000,
            doc: "../docs/romantic-anniversary.docx"
        },
        {
            title: "Candle Light Anniversary",
            desc: "Beautiful candle light dinner setup with elegant decoration.",
            img: "../images/anneversiry-images/candel-2.webp",
            priceOld: 25000,
            priceNew: 22000,
            doc: "../docs/candle-light.docx"
        },
        {
            title: "Rose Theme Anniversary",
            desc: "Red roses decoration with heart shape design for anniversary.",
            img: "../images/anneversiry-images/rose-decoration.webp",
            priceOld: 22000,
            priceNew: 20000,
            doc: "../docs/rose-theme.docx"
        },
        {
            title: "Balloon Surprise Room",
            desc: "Room filled with balloons and surprise decoration.",
            img: "../images/anneversiry-images/baloon-decor.webp",
            priceOld: 18000,
            priceNew: 16000,
            doc: "../docs/balloon-room.docx"
        },
        {
            title: "Luxury Anniversary Setup",
            desc: "Premium luxury decoration with lighting and flowers.",
            img: "../images/anneversiry-images/flower-light.webp",
            priceOld: 35000,
            priceNew: 32000,
            doc: "../docs/luxury-anniversary.docx"
        },
        {
            title: "Outdoor Anniversary Dinner",
            desc: "Outdoor dinner setup with fairy lights and romantic theme.",
            img: "../images/anneversiry-images/out-door.webp",
            priceOld: 30000,
            priceNew: 27000,
            doc: "../docs/outdoor-dinner.docx"
        },
        {
            title: "Simple Anniversary Decor",
            desc: "Simple and elegant anniversary decoration for home.",
            img: "../images/anneversiry-images/simple-anvr.webp",
            priceOld: 15000,
            priceNew: 13000,
            doc: "../docs/simple-anniversary.docx"
        },
        {
            title: "Hotel Room Decoration",
            desc: "Romantic hotel room decoration for anniversary celebration.",
            img: "../images/anneversiry-images/hotelroom.webp",
            priceOld: 28000,
            priceNew: 25000,
            doc: "../docs/hotel-room.docx"
        },
        {
            title: "Heart Balloon Decoration",
            desc: "Heart shape balloon decoration with romantic setup for anniversary.",
            img: "../images/anneversiry-images/heart-baloon.webp",
            priceOld: 21000,
            priceNew: 19000,
            doc: "../docs/heart-balloon.docx"
        },
        {
            title: "Fairy Lights Bedroom Setup",
            desc: "Romantic bedroom decoration with warm fairy lights.",
            img: "../images/anneversiry-images/fairy-lights.webp",
            priceOld: 23000,
            priceNew: 20000,
            doc: "../docs/fairy-lights.docx"
        }

    ];

    anniversaryCards.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
                <img src="${card.img}" alt="${card.title}">
                <h3>${card.title}</h3>
                <p>${card.desc}</p>
                <p class="price">
                    <span class="old">Rs ${card.priceOld}</span>
                    <span class="new">Rs ${card.priceNew}</span>
                </p>
                <a href="${card.doc}" class="btn" download>Download Details</a>
            `;
        anniversaryContainer.appendChild(div);
    });
}

//    birthdayCards.forEach(card => {
//         const div = document.createElement("div");
//         div.className = "card";
//         div.innerHTML = `
//                 <img src="${card.img}" alt="${card.title}">
//                 <h3>${card.title}</h3>
//                 <p>${card.desc}</p>
//                 <p class="price">
//                     <span class="old">Rs ${card.priceOld}</span>
//                     <span class="new">Rs ${card.priceNew}</span>
//                 </p>
//                 <a href="${card.doc}" class="btn" download>Download Details</a>
//             `;
//         birthdayContainer.appendChild(div);
//     });
// }