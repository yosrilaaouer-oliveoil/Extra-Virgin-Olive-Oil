const EMAIL = 'ms.olive.oil@outlook.com';

const translations = {
  en: {
    announcement:'Extra Virgin Olive Oil from Chraaf, Chorbane, Tunisia', navProduct:'Product', navOrigin:'Our Origin', navQuality:'Quality', navContact:'Contact', cart:'Cart',
    heroEyebrow:'From the heart of Tunisia', heroTitle:'Pure Mediterranean character in every drop.', heroText:'Extra virgin olive oil from Chraaf, Chorbane — a Tunisian landscape shaped by sun, olive trees and generations of Mediterranean tradition.', shopNow:'Shop now', discoverOrigin:'Discover our origin →', note1:'Extra Virgin', note2:'1 Litre', note3:'Origin: Tunisia',
    marquee:'Tunisian origin • Mediterranean tradition • Extra virgin • 1 litre • €20 • Tunisian origin • Mediterranean tradition',
    productEyebrow:'Our first product', productTitle:'Extra Virgin Olive Oil', productOrigin:'Chraaf, Chorbane, Tunisia', productDescription:'A generous 1 litre bottle of Tunisian extra virgin olive oil for salads, bread, cooking and everyday Mediterranean meals.', sizeLabel:'Size', originLabel:'Origin', originValue:'Tunisia', typeLabel:'Type', typeValue:'Extra Virgin', priceLabel:'Price', addToCart:'Add to cart',
    originEyebrow:'Our origin', originTitle:'From Chraaf, Chorbane to your table.', originText1:"Our olive oil story begins in Chraaf, in the Chorbane area of Tunisia. Here, olive trees grow under strong Mediterranean sun in a landscape connected to Tunisia's agricultural heritage.", originText2:"The brand brings together three parts of Tunisia we want people to remember: our olive groves, the Mediterranean Sea and the historic spirit represented by El Jem.", cardTreesTitle:'Olive trees', cardTreesText:'The foundation of our product and our connection to the land.', cardSeaTitle:'Mediterranean Sea', cardSeaText:"A symbol of Tunisia's climate, culture and Mediterranean identity.", cardJemTitle:'El Jem heritage', cardJemText:"A visual connection to Tunisia's long history and distinctive character.",
    qualityEyebrow:'Simple and authentic', qualityTitle:'Made for the Mediterranean table.', qualityIntro:'We are starting with one clear product: Tunisian extra virgin olive oil in a practical 1 litre format.', feature1Title:'Extra virgin', feature1Text:'Our store is focused on extra virgin olive oil.', feature2Title:'Tunisian origin', feature2Text:'A product identity rooted in Chraaf, Chorbane, Tunisia.', feature3Title:'Everyday size', feature3Text:'One litre for cooking, salads, dipping and family meals.', feature4Title:'Direct contact', feature4Text:'Customers can send an order request directly by email.',
    contactEyebrow:'Contact us', contactTitle:'Questions or order enquiries?', contactText:'Contact Mediterranean Olive Oil and we will reply with availability, delivery and order information.', nameLabel:'Name', emailLabel:'Email', messageLabel:'Message', prepareEmail:'Prepare email', formNote:'This opens your email application. The website does not store your message.', footerText:'Extra Virgin Olive Oil from Chraaf, Chorbane, Tunisia.', footerExplore:'Explore', rights:'All rights reserved.', yourCart:'Your cart', total:'Total', orderByEmail:'Order by email', checkoutNote:'Payment and delivery details are confirmed directly by email for now.', emptyCart:'Your cart is empty.', remove:'Remove', added:'added to cart'
  },
  fi: {
    announcement:'Ekstra-neitsytoliiviöljyä Chraafista, Chorbanesta, Tunisiasta', navProduct:'Tuote', navOrigin:'Alkuperä', navQuality:'Laatu', navContact:'Yhteystiedot', cart:'Ostoskori',
    heroEyebrow:'Tunisian sydämestä', heroTitle:'Välimeren puhdas luonne jokaisessa pisarassa.', heroText:'Ekstra-neitsytoliiviöljyä Chraafista, Chorbanesta, Tunisiasta — alueelta, jota muovaavat aurinko, oliivipuut ja Välimeren perinteet.', shopNow:'Osta nyt', discoverOrigin:'Tutustu alkuperään →', note1:'Ekstra-neitsyt', note2:'1 litra', note3:'Alkuperä: Tunisia',
    marquee:'Tunisialainen alkuperä • Välimeren perinne • Ekstra-neitsyt • 1 litra • 20 € • Tunisialainen alkuperä • Välimeren perinne',
    productEyebrow:'Ensimmäinen tuotteemme', productTitle:'Ekstra-neitsytoliiviöljy', productOrigin:'Chraaf, Chorbane, Tunisia', productDescription:'Runsas 1 litran pullo tunisialaista ekstra-neitsytoliiviöljyä salaatteihin, leivälle, ruoanlaittoon ja jokapäiväisiin Välimeren ruokiin.', sizeLabel:'Koko', originLabel:'Alkuperä', originValue:'Tunisia', typeLabel:'Tyyppi', typeValue:'Ekstra-neitsyt', priceLabel:'Hinta', addToCart:'Lisää ostoskoriin',
    originEyebrow:'Alkuperämme', originTitle:'Chraafista, Chorbanesta sinun pöytääsi.', originText1:'Oliiviöljymme tarina alkaa Chraafista, Chorbanen alueelta Tunisiasta. Oliivipuut kasvavat voimakkaan Välimeren auringon alla maisemassa, jolla on vahva yhteys Tunisian maatalousperinteeseen.', originText2:'Brändimme yhdistää kolme Tunisiaa kuvaavaa elementtiä: oliivilehdot, Välimeren ja El Jemin historiallisen perinnön.', cardTreesTitle:'Oliivipuut', cardTreesText:'Tuotteemme perusta ja yhteytemme maahan.', cardSeaTitle:'Välimeri', cardSeaText:'Tunisian ilmaston, kulttuurin ja välimerellisen identiteetin symboli.', cardJemTitle:'El Jemin perintö', cardJemText:'Visuaalinen yhteys Tunisian pitkään historiaan ja ainutlaatuiseen luonteeseen.',
    qualityEyebrow:'Yksinkertainen ja aito', qualityTitle:'Tehty Välimeren pöytään.', qualityIntro:'Aloitamme yhdellä selkeällä tuotteella: tunisialaisella ekstra-neitsytoliiviöljyllä käytännöllisessä 1 litran koossa.', feature1Title:'Ekstra-neitsyt', feature1Text:'Kauppamme keskittyy ekstra-neitsytoliiviöljyyn.', feature2Title:'Tunisialainen alkuperä', feature2Text:'Tuotteen identiteetti perustuu Chraafiin, Chorbaneen, Tunisiaan.', feature3Title:'Arkeen sopiva koko', feature3Text:'Yksi litra ruoanlaittoon, salaatteihin, dippaukseen ja perheaterioille.', feature4Title:'Suora yhteys', feature4Text:'Asiakkaat voivat lähettää tilaustoiveen suoraan sähköpostilla.',
    contactEyebrow:'Ota yhteyttä', contactTitle:'Kysymyksiä tai tilaustiedusteluja?', contactText:'Ota yhteyttä Mediterranean Olive Oiliin. Vastaamme saatavuudesta, toimituksesta ja tilauksesta.', nameLabel:'Nimi', emailLabel:'Sähköposti', messageLabel:'Viesti', prepareEmail:'Valmistele sähköposti', formNote:'Tämä avaa sähköpostisovelluksesi. Sivusto ei tallenna viestiäsi.', footerText:'Ekstra-neitsytoliiviöljyä Chraafista, Chorbanesta, Tunisiasta.', footerExplore:'Tutustu', rights:'Kaikki oikeudet pidätetään.', yourCart:'Ostoskori', total:'Yhteensä', orderByEmail:'Tilaa sähköpostilla', checkoutNote:'Maksu- ja toimitustiedot vahvistetaan toistaiseksi sähköpostitse.', emptyCart:'Ostoskorisi on tyhjä.', remove:'Poista', added:'lisätty ostoskoriin'
  }
};

let currentLang = localStorage.getItem('mooLanguage') || 'en';
let cart = JSON.parse(localStorage.getItem('mooCart') || '[]');

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const cartButton = document.querySelector('.cart-button');
const cartDrawer = document.querySelector('.cart-drawer');
const cartClose = document.querySelector('.cart-close');
const overlay = document.querySelector('.cart-overlay');
const cartItemsEl = document.querySelector('.cart-items');
const cartCountEl = document.querySelector('.cart-count');
const cartTotalEl = document.querySelector('.cart-total');
const toast = document.querySelector('.toast');

function t(key){ return translations[currentLang][key] || translations.en[key] || key; }

function setLanguage(lang){
  currentLang = lang;
  localStorage.setItem('mooLanguage', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { const value = t(el.dataset.i18n); if(value) el.textContent = value; });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  renderCart();
}

document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
menuToggle.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

function showToast(message){ toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800); }
function openCart(){ cartDrawer.classList.add('open'); cartDrawer.setAttribute('aria-hidden','false'); overlay.hidden=false; document.body.style.overflow='hidden'; }
function closeCart(){ cartDrawer.classList.remove('open'); cartDrawer.setAttribute('aria-hidden','true'); overlay.hidden=true; document.body.style.overflow=''; }
cartButton.addEventListener('click',openCart); cartClose.addEventListener('click',closeCart); overlay.addEventListener('click',closeCart); document.addEventListener('keydown',e=>e.key==='Escape'&&closeCart());

function renderCart(){
  cartCountEl.textContent = cart.reduce((sum,item)=>sum+item.qty,0);
  cartTotalEl.textContent = `€${cart.reduce((sum,item)=>sum+(item.price*item.qty),0).toFixed(2)}`;
  localStorage.setItem('mooCart',JSON.stringify(cart));
  if(!cart.length){ cartItemsEl.innerHTML=`<p class="cart-empty">${t('emptyCart')}</p>`; return; }
  cartItemsEl.innerHTML=cart.map((item,index)=>`<div class="cart-item"><div><strong>${item.name}</strong><p>${item.qty} × €${item.price.toFixed(2)}</p></div><button type="button" data-remove="${index}">${t('remove')}</button></div>`).join('');
  document.querySelectorAll('[data-remove]').forEach(button=>button.addEventListener('click',()=>{cart.splice(Number(button.dataset.remove),1);renderCart();}));
}

document.querySelector('.add-to-cart').addEventListener('click', e => {
  const name = currentLang === 'fi' ? 'Ekstra-neitsytoliiviöljy 1 L' : 'Extra Virgin Olive Oil 1L';
  const price = Number(e.currentTarget.dataset.price);
  const existing = cart.find(item=>item.name===name);
  if(existing) existing.qty += 1; else cart.push({name,price,qty:1});
  renderCart(); showToast(`${name} ${t('added')}`); openCart();
});

document.querySelector('.checkout').addEventListener('click',()=>{
  if(!cart.length) return showToast(t('emptyCart'));
  const lines=cart.map(item=>`- ${item.name} × ${item.qty} — €${(item.price*item.qty).toFixed(2)}`).join('\n');
  const total=cart.reduce((sum,item)=>sum+(item.price*item.qty),0).toFixed(2);
  const subject=currentLang==='fi'?'Mediterranean Olive Oil - tilaustiedustelu':'Mediterranean Olive Oil - order request';
  const intro=currentLang==='fi'?'Hei Mediterranean Olive Oil,\n\nHaluaisin tilata:':'Hello Mediterranean Olive Oil,\n\nI would like to order:';
  const ending=currentLang==='fi'?'\n\nVoitteko lähettää maksu- ja toimitustiedot?':'\n\nPlease send me payment and delivery details.';
  window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${intro}\n${lines}\n\n${t('total')}: €${total}${ending}`)}`;
});

document.querySelector('#contactForm').addEventListener('submit',event=>{
  event.preventDefault(); const data=new FormData(event.currentTarget);
  const subject=encodeURIComponent(`Mediterranean Olive Oil - ${data.get('name')}`);
  const body=encodeURIComponent(`${data.get('message')}\n\n${t('emailLabel')}: ${data.get('email')}`);
  window.location.href=`mailto:${EMAIL}?subject=${subject}&body=${body}`;
});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('#year').textContent=new Date().getFullYear();
setLanguage(currentLang);
