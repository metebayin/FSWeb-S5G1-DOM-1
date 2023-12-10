const siteContent = { 
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": 
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": 
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": 
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": 
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": 
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

let navLinks = document.querySelectorAll("nav a");
console.log("navLinks: ", navLinks);

const linkText = Object.values(siteContent.nav);

navLinks.forEach((link, index) =>{
  link.className = "italic";
  link.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

let logoElement = document.getElementById("logo-img");
logoElement.setAttribute("src","http://localhost:9000/img/logo.png");

let h1Element = document.querySelector(".cta-text h1");
h1Element.textContent = "Bu DOM Mükemmel";

let buttonElement = document.querySelector(".cta-text button");
buttonElement.textContent = "Başlayın"; 

const img2 = document.getElementById("cta-img");
img2.setAttribute("src", siteContent.images["cta-img"]);

const h4List = document.querySelectorAll(".text-content h4"); 
const pList = document.querySelectorAll(".text-content p"); 

h4List[0].textContent = siteContent["ana-içerik"] ["özellikler-h4"];
pList[0].textContent = siteContent["ana-içerik"] ["özellikler-içerik"];

h4List[1].textContent = siteContent["ana-içerik"] ["hakkımızda-h4"];
pList[1].textContent = siteContent["ana-içerik"] ["hakkımızda-içerik"];

h4List[2].textContent = siteContent["ana-içerik"] ["servisler-h4"];
pList[2].textContent = siteContent["ana-içerik"] ["servisler-içeriği"];

h4List[3].textContent = siteContent["ana-içerik"] ["ürünler-h4"];
pList[3].textContent = siteContent["ana-içerik"] ["ürünler-içeriği"];

h4List[4].textContent = siteContent["ana-içerik"] ["vizyon-h4"];
pList[4].textContent = siteContent["ana-içerik"] ["vizyon-içeriği"];

const img3 = document.getElementById("middle-img");
img3.setAttribute("src", siteContent.images["accent-img"]);

const contatH4= document.querySelector(".contact h4");
contatH4.textContent = siteContent.iletisim["iletişim-h4"];

const contactPlist = document.querySelectorAll(".contact p"); 

contactPlist[0].textContent = siteContent.iletisim.adres;
contactPlist[1].textContent = siteContent.iletisim.telefon;
contactPlist[2].textContent = siteContent.iletisim.email;

const footerA = document.querySelector("footer a");
footerA.textContent = siteContent.footer.copyright;
footerA.className = "bold";