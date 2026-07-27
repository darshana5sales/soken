/* =========================================================
   SOKEN-1 — store.js
   Products data · cart (localStorage) · drawer · page render
   ========================================================= */

/* ===== PRODUCT CATALOG ===== */
const U = (id, w) => `https://images.unsplash.com/${id}?q=80&w=${w || 900}&auto=format&fit=crop`;
const FB = (seed) => `this.onerror=null;this.src='https://picsum.photos/seed/soken-${seed}/900/1100'`;

const PRODUCTS = [
  {
    id: 'eye-gummies', name: 'Eye Gummies', cat: 'gummies', catLabel: 'Gummies',
    sub: 'Advanced Carotenoid',
    tagline: 'See Brilliance. Live Clarity.',
    tag: 'Bestseller', price: 599, mrp: 799, rating: 4.8, reviews: 214, isNew: false,
    img: 'assets/img/products/eye-gummies.svg', img2: U('photo-1559181567-c3190ca9959b'),
    desc: 'Lutein, zeaxanthin and astaxanthin are the three carotenoids the eye actually concentrates. This gummy supplies all three at studied doses, for people whose working day is spent in front of a screen.',
    keyBenefits: [
      'Supports healthy vision and visual clarity',
      'Helps ease the strain of prolonged screen use',
      'Contributes to macular pigment density',
      'Antioxidant support for ocular tissue',
      'Suited to long-term daily use'
    ],
    idealFor: ['Office professionals', 'Students', 'Gamers', 'Anyone with sustained screen exposure']
  },
  {
    id: 'respiratory-gummies', name: 'Lung Health Gummies', cat: 'gummies', catLabel: 'Gummies',
    sub: 'Respiratory Care',
    tagline: 'Breathe Better. Live Better.',
    tag: 'New', price: 549, mrp: 699, rating: 4.7, reviews: 132, isNew: true,
    img: 'assets/img/products/respiratory-gummies.svg', img2: U('photo-1471864190281-a93a3070b6de'),
    desc: 'A botanical respiratory formulation for people living with urban air. Elderberry, licorice and thyme sit alongside NAC and vitamin C, with prebiotic fibre to support the gut–lung axis.',
    keyBenefits: [
      'Botanical support for airway comfort',
      'Seasonal immune support',
      'Antioxidant activity against environmental stressors',
      'Prebiotic fibre for gut wellness',
      'A daily habit, not a seasonal remedy'
    ],
    idealFor: ['Urban residents', 'Ex-smokers', 'High pollution exposure', 'Seasonal wellness']
  },
  {
    id: 'liver-gummies', name: 'Liver Health Gummies', cat: 'gummies', catLabel: 'Gummies',
    sub: 'Liver Care',
    tagline: 'Cleanse. Protect. Thrive.',
    tag: '', price: 649, mrp: 849, rating: 4.6, reviews: 98, isNew: false,
    img: 'assets/img/products/liver-gummies.svg', img2: U('photo-1512621776951-a57141f2eefd'),
    desc: 'Four actives that work on different parts of hepatic function: silymarin on cellular defence, artichoke on bile flow, curcumin on oxidative load, and choline on fat metabolism.',
    keyBenefits: [
      "Supports the liver's natural detoxification pathways",
      'Antioxidant defence for hepatic cells',
      'Supports normal liver function',
      'Contributes to normal fat metabolism',
      'Supports digestive comfort'
    ],
    idealFor: ['Busy professionals', 'Digestive wellness', 'Daily metabolic support']
  },
  {
    id: 'sleep-gummies', name: 'Sleep Gummies', cat: 'gummies', catLabel: 'Gummies',
    sub: 'Sleep Care',
    tagline: 'Rest. Recharge. Naturally.',
    subTagline: 'A calmer landing at the end of the day',
    tag: 'Bestseller', price: 499, mrp: 649, rating: 4.9, reviews: 306, isNew: false,
    img: 'assets/img/products/sleep-gummies.svg', img2: U('photo-1541781774459-bb2af2f05b55'),
    desc: 'Non-sedating by design. L-theanine at 100 mg shifts the nervous system toward calm without grogginess, supported by chamomile and vitamin B6 — so the morning after feels like a normal morning.',
    keyBenefits: [
      'Supports relaxation and a calm mind before bed',
      'Supports restful sleep quality',
      'Contributes to normal nervous system function',
      'Non-sedating, non-habit forming',
      'No next-day heaviness'
    ],
    usage: 'One to two gummies, 30–60 minutes before bed.'
  },
  {
    id: 'nac-600', name: 'NAC 600 mg', cat: 'effervescent', catLabel: 'Effervescent',
    sub: 'Single-Active Effervescent',
    tagline: 'One active. A clinically studied dose.',
    tag: 'New', price: 749, mrp: 999, rating: 4.7, reviews: 87, isNew: true,
    img: 'assets/img/products/nac-600.svg', img2: U('photo-1536935338788-846bb9981813'),
    desc: 'N-acetyl L-cysteine is the rate-limiting precursor the body uses to make glutathione. A single-active effervescent at 600 mg, dissolved in water and absorbed quickly, in a refreshing orange flavour.',
    keyBenefits: [
      "Supports the body's glutathione synthesis",
      'Antioxidant support against oxidative load',
      'Supports normal respiratory comfort',
      "Supports the liver's detoxification pathways",
      'Rapid dispersion, gentle on digestion'
    ],
    actives: {
      title: 'Active Ingredient',
      name: 'N-Acetyl L-Cysteine 600 mg',
      note: 'One of the most extensively researched antioxidant precursors in nutritional science, and the reason a single-active format works here: at 600 mg there is nothing to hide behind.'
    },
    tags: ['Single active', 'Fast dissolving', 'Orange flavour', 'Sugar-free'],
    usage: 'Dissolve one tablet in a glass of water and drink immediately. Once daily.'
  },
  {
    id: 'gluta-vitc', name: 'Glutathione + Vitamin C', cat: 'effervescent', catLabel: 'Effervescent',
    sub: 'Skin Radiance',
    tagline: 'Radiance from within. Everyday glow.',
    tag: 'Bestseller', price: 899, mrp: 1199, rating: 4.8, reviews: 241, isNew: false,
    img: 'assets/img/products/gluta-vitc.svg', img2: U('photo-1494390248081-4e521a5940db'),
    desc: 'A powerful combination of Glutathione and Vitamin C to support bright, even-toned skin, antioxidant protection, and overall wellness. This refreshing effervescent dissolves instantly in water, in a delicious strawberry flavour.',
    keyBenefits: [
      'Supports healthy, radiant skin',
      'Powerful antioxidant support',
      'Helps reduce oxidative stress',
      'Supports immune system health',
      'Promotes even skin tone and glow',
      'Fast dissolving & easy to absorb'
    ],
    actives: {
      title: 'Active Ingredients',
      name: 'Glutathione & Vitamin C',
      note: 'A scientifically studied combination for skin radiance, antioxidant defence, and daily wellness.'
    },
    tags: ['Glowing Skin', 'Antioxidant Support', 'Immunity Support', 'Strawberry Flavour', 'Sugar-Free'],
    usage: 'Dissolve one tablet in a glass of water and drink immediately. Once daily.'
  },
  {
    id: 'biotin-antiox', name: 'Biotin + Antioxidants Lipids', cat: 'effervescent', catLabel: 'Effervescent',
    sub: 'Hair · Skin · Nails',
    tagline: 'Nourish. Protect. Glow from within.',
    tag: '', price: 799, mrp: 1049, rating: 4.6, reviews: 119, isNew: true,
    img: 'assets/img/products/biotin-antiox.svg', img2: U('photo-1522335789203-aabd1fc54bc9'),
    desc: 'A powerful blend of Biotin and Antioxidant Lipids to support healthy hair, glowing skin, strong nails, and overall cellular protection. This refreshing effervescent dissolves instantly in water, in a delicious mixed berry flavour.',
    keyBenefits: [
      'Supports healthy hair growth and strength',
      'Promotes glowing skin and even tone',
      'Strengthens nails and reduces breakage',
      'Powerful antioxidant protection against free radicals',
      'Supports overall wellness and cellular health',
      'Fast dissolving & easy to absorb'
    ],
    actives: {
      title: 'Active Ingredients',
      name: 'Biotin & Antioxidant Lipids'
    },
    tags: ['Healthy Hair', 'Glowing Skin', 'Strong Nails', 'Antioxidant Support', 'Mixed Berry Flavour', 'Sugar-Free'],
    usage: 'Dissolve one tablet in a glass of water and drink immediately. Once daily.'
  },
  {
    id: 'gut-health', name: 'Gut Health', cat: 'effervescent', catLabel: 'Effervescent',
    sub: 'Prebiotic + Probiotic',
    tagline: 'Nourish your gut. Nurture your wellness.',
    tag: '', price: 699, mrp: 899, rating: 4.7, reviews: 154, isNew: false,
    img: 'assets/img/products/gut-health.svg', img2: U('photo-1490645935967-10de6ba17061'),
    desc: 'A powerful blend of Prebiotics and Probiotic strains to support a balanced gut microbiome, improve digestion, and boost overall well-being. This refreshing effervescent dissolves instantly in water, in a delicious strawberry flavour.',
    keyBenefits: [
      'Supports a healthy gut microbiome balance',
      'Helps improve digestion and nutrient absorption',
      'Promotes regularity and relieves bloating',
      'Strengthens immunity from within',
      'Supports overall gut and digestive health',
      'Fast dissolving & easy to absorb'
    ],
    actives: {
      title: 'Active Ingredients',
      name: 'Prebiotics & Probiotic Strains'
    },
    tags: ['Digestive Support', 'Prebiotic + Probiotic', 'Immunity Support', 'Bloating Relief', 'Strawberry Flavour', 'Sugar-Free'],
    usage: 'Dissolve one tablet in a glass of water and drink immediately. Once daily.'
  }
];

const FREE_SHIP = 999;
const fmt = n => '₹' + n.toLocaleString('en-IN');
const byId = id => PRODUCTS.find(p => p.id === id);

/* ===== CART (localStorage) ===== */
const CART_KEY = 'soken_cart_v1';
const getCart = () => { try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch { return {}; } };
const saveCart = c => { localStorage.setItem(CART_KEY, JSON.stringify(c)); syncCartUI(); };
const cartCount = () => Object.values(getCart()).reduce((a, b) => a + b, 0);
const cartTotal = () => Object.entries(getCart()).reduce((a, [id, q]) => a + (byId(id) ? byId(id).price * q : 0), 0);
const cartMrp = () => Object.entries(getCart()).reduce((a, [id, q]) => a + (byId(id) ? byId(id).mrp * q : 0), 0);

function addToCart(id, qty, open) {
  const c = getCart();
  c[id] = (c[id] || 0) + (qty || 1);
  saveCart(c);
  if (open !== false) openDrawer();
  toast('Added to your bag');
}
function setQty(id, qty) {
  const c = getCart();
  if (qty <= 0) delete c[id]; else c[id] = qty;
  saveCart(c);
  if (document.body.dataset.page === 'cart') renderCartPage();
  if (document.body.dataset.page === 'checkout') renderCheckout();
}
function removeItem(id) { setQty(id, 0); toast('Removed from bag'); }

/* ===== TOAST ===== */
let toastT;
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = '<i>✦</i>' + msg;
  requestAnimationFrame(() => t.classList.add('on'));
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('on'), 2400);
}

/* ===== PRODUCT CARD TEMPLATE ===== */
function cardHTML(p, i) {
  const off = Math.round((1 - p.price / p.mrp) * 100);
  const stars = '★★★★★';
  return `
  <article class="pcard rv" ${i != null ? `data-d="${(i % 4) + 1}"` : ''}>
    <a class="pc-img" href="product.html?id=${p.id}" aria-label="${p.name}">
      <img class="im1" src="${p.img}" alt="${p.name}" loading="lazy" onerror="${FB(p.id)}">
      <img class="im2" src="${p.img2}" alt="" loading="lazy" onerror="${FB(p.id + '-b')}">
      ${p.tag ? `<span class="pc-tag ${p.tag === 'New' ? 'dark' : ''}">${p.tag}</span>` : ''}
      <button class="pc-wish" aria-label="Add to wishlist" onclick="event.preventDefault();toast('Saved to wishlist')">♡</button>
      <button class="pc-add" onclick="event.preventDefault();addToCart('${p.id}')">Add to Bag — ${fmt(p.price)}</button>
    </a>
    <div class="pc-info">
      <div class="pc-cat">${p.catLabel} · ${p.sub}</div>
      <h3 class="pc-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="pc-rate">${stars}<span>${p.rating} (${p.reviews})</span></div>
      <div class="pc-price">${fmt(p.price)}<s>${fmt(p.mrp)}</s><span class="off">${off}% off</span></div>
    </div>
  </article>`;
}

function renderGrid(el, list) {
  el.innerHTML = list.map((p, i) => cardHTML(p, i)).join('');
  observeReveals(el);
}

/* ===== SHOWCASE ROW (alternating image/content) ===== */
function showcaseHTML(p) {
  const off = Math.round((1 - p.price / p.mrp) * 100);
  return `
  <article class="bl-item rv" id="p-${p.id}">
    <a class="bl-img" href="product.html?id=${p.id}">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="${FB(p.id + '-l')}">
    </a>
    <div class="bl-tx">
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="bl-tag">${p.tagline}</div>
      <h4 class="bl-bh">Key Benefits</h4>
      <ul class="bl-ben">${p.keyBenefits.map(b => `<li><i>✦</i>${b}</li>`).join('')}</ul>
      <div class="bl-price">${fmt(p.price)}<s>${fmt(p.mrp)}</s><span class="off">${off}% off</span></div>
      <div class="bl-btns">
        <a class="btn btn-ink" href="product.html?id=${p.id}">View More <span class="ar">→</span></a>
        <button class="btn btn-ol" onclick="addToCart('${p.id}')">Add to Bag</button>
      </div>
    </div>
  </article>`;
}

/* ===== CART DRAWER ===== */
function drawerHTML() {
  return `
  <div class="scrim" id="scrim" onclick="closeDrawer()"></div>
  <aside class="drawer" id="drawer" aria-label="Shopping bag">
    <div class="dr-hd">
      <h3>Your Bag <span id="dr-count"></span></h3>
      <button class="dr-x" onclick="closeDrawer()" aria-label="Close bag">✕</button>
    </div>
    <div class="dr-ship" id="dr-ship"></div>
    <div class="dr-body" id="dr-body"></div>
    <div class="dr-ft" id="dr-ft"></div>
  </aside>`;
}
function openDrawer() {
  document.getElementById('scrim').classList.add('on');
  document.getElementById('drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.getElementById('scrim').classList.remove('on');
  document.getElementById('drawer').classList.remove('open');
  document.body.style.overflow = '';
}
function renderDrawer() {
  const c = getCart(), n = cartCount(), total = cartTotal();
  const cnt = document.getElementById('dr-count');
  if (cnt) cnt.textContent = `(${n} item${n === 1 ? '' : 's'})`;
  const ship = document.getElementById('dr-ship');
  const body = document.getElementById('dr-body');
  const ft = document.getElementById('dr-ft');
  if (!body) return;

  if (n === 0) {
    ship.style.display = 'none';
    ft.style.display = 'none';
    body.innerHTML = `<div class="dr-empty">
      <div class="big">Your bag is empty…</div>
      <p>Your ritual is waiting to begin.</p>
      <a class="btn btn-ink" href="shop.html">Shop All <span class="ar">→</span></a>
    </div>`;
    return;
  }
  ship.style.display = '';
  ft.style.display = '';
  const left = FREE_SHIP - total;
  ship.innerHTML = left > 0
    ? `<p>You're <b>${fmt(left)}</b> away from free shipping</p><div class="dr-bar"><i style="width:${Math.min(100, total / FREE_SHIP * 100)}%"></i></div>`
    : `<p><b>✓ You've unlocked free shipping</b></p><div class="dr-bar"><i style="width:100%"></i></div>`;

  body.innerHTML = Object.entries(c).map(([id, q]) => {
    const p = byId(id); if (!p) return '';
    return `<div class="dr-item">
      <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}" onerror="${FB(p.id)}"></a>
      <div>
        <div class="dri-cat">${p.catLabel}</div>
        <div class="dri-name">${p.name}</div>
        <div class="dri-price">${fmt(p.price)}</div>
        <div class="qty">
          <button onclick="setQty('${id}',${q - 1})" aria-label="Decrease">−</button>
          <span>${q}</span>
          <button onclick="setQty('${id}',${q + 1})" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="dri-x" onclick="removeItem('${id}')" aria-label="Remove">✕</button>
    </div>`;
  }).join('');

  ft.innerHTML = `
    <div class="dr-row"><span>Subtotal</span><span>${fmt(total)}</span></div>
    <div class="dr-row"><span>Shipping</span><span>${total >= FREE_SHIP ? 'Free' : 'At checkout'}</span></div>
    <div class="dr-row total"><span>Total</span><span class="p">${fmt(total)}</span></div>
    <a class="btn btn-ink btn-wide" href="checkout.html">Checkout <span class="ar">→</span></a>
    <a class="btn btn-ol btn-wide" style="margin-top:10px" href="cart.html">View Bag</a>
    <div class="dr-note">Free returns within 30 days · Secure checkout</div>`;
}
function syncCartUI() {
  document.querySelectorAll('.bag-n').forEach(el => el.textContent = cartCount());
  renderDrawer();
}

/* ===== REVEAL ON SCROLL ===== */
let revealIO;
function observeReveals(root) {
  if (!revealIO) {
    revealIO = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
    }), { threshold: .12 });
  }
  (root || document).querySelectorAll('.rv:not(.in)').forEach(el => revealIO.observe(el));
}

/* ===== PDP ===== */
function renderPDP() {
  const wrap = document.getElementById('pdp-wrap');
  if (!wrap) return;
  const id = new URLSearchParams(location.search).get('id') || 'sleep-gummies';
  const p = byId(id) || PRODUCTS[0];
  document.title = `${p.name} — Soken`;
  const off = Math.round((1 - p.price / p.mrp) * 100);
  const bTitle = document.getElementById('phd-title');
  if (bTitle) {
    const words = p.name.split(' ');
    const last = words.pop();
    bTitle.innerHTML = words.join(' ') + ' <em>' + last + '.</em>';
  }
  const bCrumb = document.getElementById('phd-crumb');
  if (bCrumb) bCrumb.textContent = p.name;
  const bLead = document.getElementById('phd-lead');
  if (bLead) bLead.textContent = p.catLabel + ' · ' + p.sub;
  wrap.innerHTML = `
  <div class="pdp-grid">
    <div class="pdp-gal">
      <div class="main">
        ${p.tag ? `<span class="pc-tag ${p.tag === 'New' ? 'dark' : ''}">${p.tag}</span>` : ''}
        <img id="pdp-main" src="${p.img}" alt="${p.name}" onerror="${FB(p.id)}">
      </div>
      <div class="pdp-thumbs">
        <button class="pdp-th on" onclick="swapImg(this,'${p.img}')"><img src="${p.img}" alt="" onerror="${FB(p.id)}"></button>
        <button class="pdp-th" onclick="swapImg(this,'${p.img2}')"><img src="${p.img2}" alt="" onerror="${FB(p.id + '-b')}"></button>
      </div>
    </div>
    <div class="pdp-info">
      <div class="pdp-tagline">${p.tagline}</div>
      <div class="pdp-rate">★★★★★<span>${p.rating} · ${p.reviews} verified reviews</span></div>
      <div class="pdp-price">${fmt(p.price)}<s>${fmt(p.mrp)}</s><span class="off">Save ${off}%</span></div>
      ${p.subTagline ? `<div class="pdp-subtag">${p.subTagline}</div>` : ''}
      <p class="pdp-desc">${p.desc}</p>
      ${p.tags ? `<div class="pdp-chips">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>` : ''}
      <div class="pdp-buy">
        <div class="qty">
          <button onclick="pdpQty(-1)" aria-label="Decrease">−</button>
          <span id="pdp-q">1</span>
          <button onclick="pdpQty(1)" aria-label="Increase">+</button>
        </div>
        <button class="btn btn-ink" onclick="addToCart('${p.id}', pdpQ)">Add to Bag — ${fmt(p.price)}</button>
      </div>
      <div class="pdp-buy2"><button class="btn btn-ol btn-wide" onclick="addToCart('${p.id}', pdpQ, false); location.href='checkout.html'">Buy It Now</button></div>
      <ul class="pdp-meta">
        <li><i>✦</i>Free shipping over ${fmt(FREE_SHIP)}</li>
        <li><i>✦</i>WHO-GMP certified</li>
        <li><i>✦</i>30-day returns</li>
      </ul>

      <div class="pdp-block">
        <h4 class="pdp-bh">Key Benefits</h4>
        <ul class="ben-list">${p.keyBenefits.map(b => `<li><i>✦</i>${b}</li>`).join('')}</ul>
      </div>

      ${p.actives ? `
      <div class="ing-card">
        <div class="ing-t">${p.actives.title}</div>
        <div class="ing-n">${p.actives.name}</div>
        ${p.actives.note ? `<p>${p.actives.note}</p>` : ''}
      </div>` : ''}

      ${p.idealFor ? `
      <div class="pdp-block">
        <h4 class="pdp-bh">Ideal For</h4>
        <div class="pdp-chips" style="margin-top:0">${p.idealFor.map(x => `<span class="chip">${x}</span>`).join('')}</div>
      </div>` : ''}

      ${p.usage ? `
      <div class="use-card">
        <div class="ing-t">Suggested Usage</div>
        <p>${p.usage}</p>
      </div>` : ''}

      <div class="acc">
        <div class="acc-i"><button class="acc-hd" onclick="accTog(this)">Shipping & Returns<i>+</i></button><div class="acc-bd"><p>Ships in 24 hours from our WHO-GMP facility. Free shipping on orders above ${fmt(FREE_SHIP)}. Unopened packs can be returned within 30 days for a full refund.</p></div></div>
      </div>
    </div>
  </div>`;
  // related products
  const rel = document.getElementById('pdp-related');
  if (rel) renderGrid(rel, PRODUCTS.filter(x => x.id !== p.id).slice(0, 4));
}
let pdpQ = 1;
function pdpQty(d) {
  pdpQ = Math.max(1, pdpQ + d);
  const el = document.getElementById('pdp-q');
  if (el) el.textContent = pdpQ;
}
function swapImg(btn, src) {
  document.querySelectorAll('.pdp-th').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('pdp-main').src = src;
}
function accTog(hd) {
  const item = hd.parentElement, bd = item.querySelector('.acc-bd');
  const open = item.classList.toggle('open');
  bd.style.maxHeight = open ? bd.scrollHeight + 'px' : '0';
}

/* ===== SHOP PAGE ===== */
function renderShop(cat) {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;
  const list = cat && cat !== 'all' ? PRODUCTS.filter(p => p.cat === cat) : PRODUCTS;
  renderGrid(grid, list);
  const count = document.getElementById('shop-count');
  if (count) count.textContent = `${list.length} product${list.length === 1 ? '' : 's'}`;
  document.querySelectorAll('.f-pill').forEach(b => b.classList.toggle('on', b.dataset.cat === (cat || 'all')));
}

/* ===== CART PAGE ===== */
function renderCartPage() {
  const wrap = document.getElementById('cart-wrap');
  if (!wrap) return;
  const c = getCart(), n = cartCount();
  if (n === 0) {
    wrap.innerHTML = `<div class="cart-empty">
      <div class="big">Your bag is empty — for now.</div>
      <a class="btn btn-ink" href="shop.html">Start Shopping <span class="ar">→</span></a>
    </div>`;
    return;
  }
  const total = cartTotal(), mrp = cartMrp(), save = mrp - total;
  wrap.innerHTML = `
  <div class="cart-grid">
    <div class="cart-list">
      <div class="hd-row"><span>Product</span><span>Total</span></div>
      ${Object.entries(c).map(([id, q]) => {
        const p = byId(id); if (!p) return '';
        return `<div class="cart-item">
          <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}" onerror="${FB(p.id)}"></a>
          <div>
            <div class="pc-cat">${p.catLabel} · ${p.sub}</div>
            <div class="ci-name"><a href="product.html?id=${p.id}">${p.name}</a></div>
            <div class="ci-unit">${fmt(p.price)} each</div>
            <button class="ci-x" onclick="removeItem('${id}')">Remove</button>
          </div>
          <div class="ci-right">
            <div class="qty">
              <button onclick="setQty('${id}',${q - 1})" aria-label="Decrease">−</button>
              <span>${q}</span>
              <button onclick="setQty('${id}',${q + 1})" aria-label="Increase">+</button>
            </div>
            <div class="ci-total">${fmt(p.price * q)}</div>
          </div>
        </div>`;
      }).join('')}
    </div>
    <aside class="sum">
      <h3>Order Summary</h3>
      <div class="sum-row"><span>Subtotal (${n} items)</span><b>${fmt(total)}</b></div>
      <div class="sum-row"><span>You save</span><b style="color:var(--sage)">− ${fmt(save)}</b></div>
      <div class="sum-row"><span>Shipping</span><b>${total >= FREE_SHIP ? 'Free' : 'Calculated at checkout'}</b></div>
      <div class="coupon"><input type="text" placeholder="Gift card or discount code"><button onclick="toast('Code applied — just kidding, demo!')">Apply</button></div>
      <div class="sum-row total"><span>Total</span><span class="p">${fmt(total)}</span></div>
      <a class="btn btn-ink btn-wide" href="checkout.html">Proceed to Checkout <span class="ar">→</span></a>
      <div class="sum-note">Taxes included · Secure 256-bit encrypted checkout</div>
    </aside>
  </div>`;
}

/* ===== CHECKOUT PAGE ===== */
function renderCheckout() {
  const sum = document.getElementById('chk-items');
  if (!sum) return;
  const c = getCart(), total = cartTotal();
  if (cartCount() === 0) {
    document.getElementById('chk-main').innerHTML = `<div class="cart-empty">
      <div class="big">Nothing to check out yet.</div>
      <a class="btn btn-ink" href="shop.html">Shop Products <span class="ar">→</span></a>
    </div>`;
    return;
  }
  sum.innerHTML = Object.entries(c).map(([id, q]) => {
    const p = byId(id); if (!p) return '';
    return `<div class="chk-item">
      <img src="${p.img}" alt="${p.name}" onerror="${FB(p.id)}">
      <div><div class="n">${p.name}</div><div class="q">Qty ${q}</div></div>
      <div class="p">${fmt(p.price * q)}</div>
    </div>`;
  }).join('');
  const ship = total >= FREE_SHIP ? 0 : 49;
  document.getElementById('chk-sub').textContent = fmt(total);
  document.getElementById('chk-ship').textContent = ship === 0 ? 'Free' : fmt(ship);
  document.getElementById('chk-total').textContent = fmt(total + ship);
}
function placeOrder(ev) {
  ev.preventDefault();
  const form = ev.target;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const oid = 'SKN-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('done-oid').textContent = 'Order ' + oid;
  document.getElementById('done').classList.add('on');
  localStorage.removeItem(CART_KEY);
  syncCartUI();
}

/* ===== STICKY QUICK-NAV BAR (compacts when pinned + highlights current product) ===== */
function initGlanceBar() {
  const bar = document.querySelector('.glance');
  if (!bar) return;
  const links = [...document.querySelectorAll('.gl-prods a')];
  const hdrH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--hdr-h')) || 74;

  const cap = document.getElementById('gl-cap');
  const setCap = txt => {
    if (!cap) return;
    cap.textContent = txt || '';
    cap.classList.toggle('on', !!txt);
  };
  // tapping an icon names it (mobile has no hover)
  links.forEach(a => {
    const label = a.querySelector('.tx') ? a.querySelector('.tx').textContent : '';
    a.addEventListener('touchstart', () => setCap(label), { passive: true });
    a.addEventListener('mouseenter', () => setCap(label));
  });

  const update = () => {
    bar.classList.toggle('stuck', bar.getBoundingClientRect().top <= hdrH + 1);
    const items = document.querySelectorAll('.bl-item');
    if (!items.length) return;
    const line = hdrH + bar.offsetHeight + 40;
    let current = '';
    items.forEach(it => { if (it.getBoundingClientRect().top <= line) current = it.id; });
    let activeLabel = '';
    links.forEach(a => {
      const on = a.getAttribute('href') === '#' + current;
      if (on) activeLabel = a.querySelector('.tx') ? a.querySelector('.tx').textContent : '';
      a.classList.toggle('on', on);
    });
    setCap(activeLabel);
  };
  update();
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
}

/* ===== HERO PRODUCT SLIDER ===== */
const HERO_SLIDES = [
  { id: 'eye-gummies', name: 'Eye Gummies', meta: 'Bestseller · ₹599' },
  { id: 'nac-600', name: 'NAC 600 mg', meta: 'New · ₹749' },
  { id: 'sleep-gummies', name: 'Sleep Gummies', meta: 'Bestseller · ₹499' }
];
let hsI = 0, hsTimer;
function heroGo(i) {
  const slides = document.querySelectorAll('.hslide');
  if (!slides.length) return;
  const prev = hsI;
  hsI = (i + slides.length) % slides.length;
  slides.forEach((s, k) => {
    s.classList.remove('on', 'prev');
    if (k === hsI) s.classList.add('on');
    else if (k === prev && prev !== hsI) s.classList.add('prev');
  });
  document.querySelectorAll('.hs-dot').forEach((d, k) => {
    d.classList.toggle('on', k === hsI);
    const f = d.querySelector('i');
    if (f && k === hsI) { f.style.animation = 'none'; void f.offsetWidth; f.style.animation = ''; }
  });
  const num = document.getElementById('hs-num');
  if (num) num.textContent = '0' + (hsI + 1);
  const card = document.getElementById('hs-card');
  const d = HERO_SLIDES[hsI];
  if (card && d) {
    card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap');
    card.href = 'product.html?id=' + d.id;
    card.querySelector('.t').textContent = d.name;
    card.querySelector('.s').textContent = d.meta;
  }
  clearInterval(hsTimer);
  hsTimer = setInterval(() => heroGo(hsI + 1), 5000);
}

/* ===== TESTIMONIAL CAROUSEL (2 visible at a time) ===== */
let tstI = 0, tstTimer;
function tstGo(i) {
  const track = document.getElementById('tsl-track');
  if (!track) return;
  const n = track.children.length;
  const pv = matchMedia('(max-width:760px)').matches ? 1 : 2;
  const steps = Math.max(1, n - pv + 1);
  tstI = ((i % steps) + steps) % steps;
  track.style.transform = `translateX(-${tstI * (100 / pv)}%)`;
  const wrap = document.querySelector('.tsl-dots');
  if (wrap) {
    if (wrap.children.length !== steps) {
      wrap.innerHTML = Array.from({ length: steps }, (_, k) =>
        `<button class="tsl-dot" onclick="tstGo(${k})" aria-label="Reviews ${k + 1}"></button>`).join('');
    }
    [...wrap.children].forEach((d, k) => d.classList.toggle('on', k === tstI));
  }
  clearInterval(tstTimer);
  tstTimer = setInterval(() => tstGo(tstI + 1), 6500);
}

/* ===== BOOT ===== */
document.addEventListener('DOMContentLoaded', () => {
  // drawer
  document.body.insertAdjacentHTML('beforeend', drawerHTML());
  syncCartUI();

  // header scroll
  const hdr = document.getElementById('hdr');
  const onScroll = () => hdr && hdr.classList.toggle('solid', scrollY > 10);
  onScroll(); addEventListener('scroll', onScroll, { passive: true });

  // mobile menu
  const ham = document.getElementById('ham'), mnav = document.getElementById('mnav');
  if (ham && mnav) ham.addEventListener('click', () => {
    const open = mnav.classList.toggle('open');
    ham.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (hdr) hdr.classList.toggle('force-solid', open);
  });

  // page-specific rendering
  const page = document.body.dataset.page;
  if (page === 'home') {
    const bl = document.getElementById('best-list');
    if (bl) { bl.innerHTML = PRODUCTS.map(p => showcaseHTML(p)).join(''); observeReveals(bl); }
    initGlanceBar();
    tstGo(0);
    heroGo(0);
  }
  if (page === 'shop') {
    const cat = new URLSearchParams(location.search).get('cat') || 'all';
    renderShop(cat);
    document.querySelectorAll('.f-pill').forEach(b =>
      b.addEventListener('click', () => {
        renderShop(b.dataset.cat);
        try { history.replaceState(null, '', b.dataset.cat === 'all' ? 'shop.html' : `shop.html?cat=${b.dataset.cat}`); } catch (e) { /* file:// blocks replaceState */ }
      }));
  }
  if (page === 'product') renderPDP();
  if (page === 'cart') renderCartPage();
  if (page === 'checkout') {
    renderCheckout();
    document.querySelectorAll('.pay').forEach(l => l.addEventListener('click', () => {
      document.querySelectorAll('.pay').forEach(x => x.classList.remove('on'));
      l.classList.add('on');
      l.querySelector('input').checked = true;
    }));
  }

  if (page === 'contact') {
    const f = document.getElementById('enquiry-form');
    if (f) f.addEventListener('submit', e => {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      const v = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
      const subject = encodeURIComponent('Partnership enquiry — ' + (v('company') || 'Soken website'));
      const body = encodeURIComponent(
        'Name: ' + v('firstName') + ' ' + v('lastName') +
        '\nCompany: ' + v('company') +
        '\nEmail: ' + v('email') +
        '\nPhone: ' + v('phone') +
        '\nService required: ' + v('service') +
        '\nCategory interest: ' + v('category') +
        '\n\nAbout the project:\n' + v('message'));
      location.href = 'mailto:info@tattvamlife.com?subject=' + subject + '&body=' + body;
      toast('Opening your email app…');
    });
  }

  // back to top
  const tt = document.createElement('button');
  tt.className = 'totop';
  tt.setAttribute('aria-label', 'Back to top');
  tt.textContent = '↑';
  tt.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(tt);
  const ttScroll = () => tt.classList.toggle('on', scrollY > 600);
  ttScroll(); addEventListener('scroll', ttScroll, { passive: true });

  // reveal
  observeReveals(document);

  // newsletter
  const nf = document.getElementById('news-form');
  if (nf) nf.addEventListener('submit', e => { e.preventDefault(); nf.reset(); toast('Welcome to the Soken circle'); });
});
