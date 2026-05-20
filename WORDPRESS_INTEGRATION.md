# BarberKing — WordPress Integration Guide

This project is a **complete frontend** for the BarberKing barber shop. Below are instructions for converting and deploying it into WordPress so you can automatically insert the design into a WordPress site.

---

## ✅ What's Included in This Demo

- **5 Pages:** Home, About, Services, Contact, Privacy Policy
- **Professional royal design** (dark theme + gold accents)
- **Mobile-responsive** layout with mobile nav
- **Working contact form** (frontend only — wire to WP backend)
- **Floating WhatsApp button**
- **Google Maps embed**
- **Cookie consent banner**
- **SEO meta tags** + Open Graph + Twitter Cards
- **Structured data** (JSON-LD for local business)
- **Google Analytics placeholder** (replace `G-XXXXXXX`)

---

## 🚀 Option 1 — Install as a Custom WordPress Theme (Recommended)

### Step 1: Build the production bundle

```bash
npm run build
```

This creates a `dist/` folder with static HTML/CSS/JS.

### Step 2: Create a WordPress theme folder

```bash
mkdir -p wp-content/themes/barberking
cd wp-content/themes/barberking
```

### Step 3: Create `style.css` (theme header)

```css
/*
Theme Name: BarberKing
Theme URI: https://barberking.example.com
Author: Your Name
Description: Royal grooming, master craftsmen — premium barber shop theme.
Version: 1.0.0
License: GPL v2 or later
*/
```

### Step 4: Create `index.php`

```php
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="root"></div>
<script>
  window.wpConfig = {
    siteUrl: <?php echo json_encode(home_url()); ?>,
    adminAjax: <?php echo json_encode(admin_url('admin-ajax.php')); ?>,
    nonce: <?php echo json_encode(wp_create_nonce('bk_nonce')); ?>,
  };
</script>
<?php wp_footer(); ?>
</body>
</html>
```

### Step 5: Create `functions.php`

```php
<?php
function bk_enqueue_assets() {
  // Enqueue built Vite bundle from dist/
  wp_enqueue_style('bk-main', get_template_directory_uri() . '/dist/assets/index.css', [], '1.0');
  wp_enqueue_script('bk-app', get_template_directory_uri() . '/dist/assets/index.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'bk_enqueue_assets');

// Contact form handler
add_action('wp_ajax_bk_submit', 'bk_handle_contact');
add_action('wp_ajax_nopriv_bk_submit', 'bk_handle_contact');
function bk_handle_contact() {
  check_ajax_referer('bk_nonce', 'nonce');
  $to = get_option('admin_email');
  $subject = 'BarberKing — New Booking Request';
  $body = "Name: {$_POST['name']}\nEmail: {$_POST['email']}\nPhone: {$_POST['phone']}\nService: {$_POST['service']}\nMessage: {$_POST['message']}";
  wp_mail($to, $subject, $body);
  wp_send_json_success(['message' => 'Received']);
}

// SEO + security plugins recommended
function bk_theme_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'bk_theme_support');
```

### Step 6: Copy `dist/` into the theme

Copy the `dist/` folder from this project into the theme root so it's at `wp-content/themes/barberking/dist/`.

### Step 7: Activate the theme

WordPress admin → **Appearance → Themes → Activate "BarberKing"**.

---

## 🚀 Option 2 — Embed via a Page Builder (Elementor / Gutenberg / WPBakery)

If you want to insert the design into **existing** WordPress pages:

1. Build: `npm run build`
2. Install the plugin **"Insert Headers and Footers"** (or similar)
3. Paste the CSS from `dist/assets/index.css` into the site's custom CSS
4. For each page, add a **Custom HTML block** and paste:

```html
<div id="bk-root"></div>
<script type="module" src="/path/to/dist/assets/index.js"></script>
```

You can also use the **HTML widget** or the **Code Embed** plugin for cleaner injection.

---

## 📋 WordPress Plugin Checklist (from your requirements)

| Requirement | Plugin |
|---|---|
| Contact form working | WPForms / Contact Form 7 (AJAX handler included above) |
| SSL active | Let's Encrypt via host + Really Simple SSL plugin |
| Cookie notice | Complianz or CookieYes (or use the built-in banner) |
| Google Analytics | Site Kit by Google (paste `G-XXXXXXX`) |
| Sitemap submitted | Yoast SEO or Rank Math (auto-generates sitemap.xml) |
| Meta titles/descriptions | Yoast SEO or Rank Math |
| Security plugin active | Wordfence or Sucuri |
| Backups configured | UpdraftPlus (scheduled daily to cloud) |
| Performance | WP Rocket or LiteSpeed Cache + image optimization |

---

## 🔧 Customize

- **Phone number:** Search & replace `15551234567` and `+1 (555) 123-4567`
- **Address:** Search & replace `123 Crown Street, Los Angeles`
- **Analytics ID:** Replace `G-XXXXXXX` in `index.html`
- **WhatsApp:** Update the phone in `src/components/WhatsAppButton.tsx`
- **Google Maps:** Replace the iframe `src` in `src/pages/Contact.tsx` with your embed URL from Google Maps → Share → Embed

---

## 🎨 Brand Colors

- **Gold:** `#d4af37`
- **Ink (dark):** `#0a0a0a`
- **Cream (text):** `#f5f0e6`

Edit in `src/index.css` under `@theme`.

---

## 📱 Performance Notes

- Images are lazy-loaded (`loading="lazy"`) except the hero
- Tailwind CSS is purged automatically in the build (small CSS bundle)
- Code-split by route for fast initial load
- Use a CDN (Cloudflare) and cache plugin in WordPress for 90+ PageSpeed scores

---

Enjoy your royal site 👑
