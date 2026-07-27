# Soken-1 — Premium Ecommerce Design

New Shopify-style ecommerce design for Soken (Tattvam Lifesciences).
Same fonts (Cormorant Garamond + DM Sans) and color palette as the original soken project, brand-new luxury layout.

## Open it
Just double-click `index.html` — no build step, no server needed.
(Images are dummy photos loaded from Unsplash, so internet is required. If any image is unavailable it auto-falls back to a placeholder.)

## Pages
| Page | Purpose | Shopify equivalent |
|---|---|---|
| `index.html` | Home — hero banner, trust strip, category tiles, new arrivals, bestsellers, brand ritual, values, reviews, gallery, newsletter | `index.liquid` sections |
| `shop.html` | Product listing with category filters (`?cat=gummies` / `?cat=effervescent`) | `collection.liquid` |
| `product.html?id=…` | Product detail — gallery, benefits, qty, accordions, related products | `product.liquid` |
| `cart.html` | Cart page with qty steppers + order summary | `cart.liquid` |
| `checkout.html` | Checkout design (contact, address, payment, summary + success screen) | Shopify checkout (design reference) |

Shared on every page: announcement ticker, sticky header, slide-out cart drawer (localStorage cart), footer.

## Catalog (8 products, in `assets/js/store.js`)
- **Gummies:** Eye Gummies (Advanced Carotenoid), Lung Health Gummies (Respiratory Care), Liver Health Gummies (Liver Care), Sleep Gummies (Sleep Care)
- **Effervescent Tablets:** NAC 600 mg, Glutathione + Vitamin C, Biotin + Antioxidants Lipids, Gut Health

All product copy (taglines, descriptions, key benefits, active ingredients, feature tags, suggested usage)
comes verbatim from `soken/human formulations final website.docx`.
Edit the `PRODUCTS` array in `assets/js/store.js` to change names, prices, images or copy —
every page (cards, PDP, cart, drawer, checkout) renders from that single array, exactly like Shopify product objects.

## Design tokens
All colors/fonts are CSS variables at the top of `assets/css/style.css` (`--cream`, `--ink`, `--mauve`, `--blush`, `--sage`, `--honey`, …) — change once, applies everywhere.
