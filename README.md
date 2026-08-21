# 📦 shizu_store.json — Developer Reference
> **Overview:** This guide explains how to add the shizu_store.json file to your GitHub repository to enhance your application's appearance on the **Shizu CoreFetch** store — a decentralized application hub dedicated to Shizuku-powered Android apps.
> 
## Table of Contents
 1. What is Shizu CoreFetch Store?
 2. What is shizu_store.json?
 3. File Placement
 4. Required Fields
 5. Extended Fields — Full Reference
   * 5.1 App Metadata
   * 5.2 Versioning & Technical Requirements
   * 5.3 Ads & Monetization
   * 5.4 Media & Community
   * 5.5 Developer Portfolio
   * 5.6 Locales Object
 6. Supported Languages
 7. Validation
 8. Common Mistakes
 9. Architecture & Disclaimer
 10. Security Notice
 11. Full Example: shizu_store.json (Live Reference — ShizuCoreFetch)
 12. Quick Checklist

## 1. What is Shizu CoreFetch Store?
**Shizu CoreFetch** is an advanced, decentralized Android application hub designed specifically for apps built on top of Shizuku. Shizuku grants apps ADB-level system permissions without requiring root access, enabling powerful system-level operations.
The Shizu CoreFetch store uses these Shizuku permissions to **silently install APKs** — meaning users can install and update apps without the standard Android installation dialog appearing each time.

## 2. What is shizu_store.json?
shizu_store.json is a **JSON manifest file** that you can add to the root of your GitHub repository. It acts as an optional configuration file that tells the Shizu CoreFetch store how to display your application with custom branding and advanced UI elements.
**Important Note:** Your application will be discovered and listed in the store automatically via your GitHub repository data regardless of whether this file exists. Adding shizu_store.json is purely a way to override default data and unlock a tailored UI/UX experience, including:
 * Custom names, categories, and descriptions
 * Version, SDK, and licensing metadata
 * Custom Ad Banners (monetization)
 * Developer Portfolio (socials, website, donations, other apps)
 * Translated strings for up to 11 languages
The store parses a file named **exactly** shizu_store.json at the root of your repository.

## 3. File Placement
The file **must** be placed at the **root** of your GitHub repository — the same level as your README.md.
```text
my-shizuku-app/
├── shizu_store.json      ← ✅ Correct location
├── README.md
├── app/
│   └── src/...
└── build.gradle
```
**The file will NOT be discovered if placed in a subdirectory:**
```text
my-shizuku-app/
├── docs/
│   └── shizu_store.json  ← ❌ Wrong — will not be found
└── ...
```

## 4. Required Fields
Your shizu_store.json **must** include these four fields if you choose to use it. If any of these are missing or invalid, the store will ignore your custom file and fall back to your default GitHub repository data.
| Field | Type | Description |
|---|---|---|
| app_name | string | Display name of your application. Max 100 characters. |
| package_name | string | Android package name (e.g. xyz.siwane.myapp). |
| short_description | string | A single-line description shown in app listings. Max 200 characters. |
| icon_url | string (URL) | Absolute HTTPS URL to your app's icon image. |

## 5. Extended Fields — Full Reference

### 5.1 App Metadata
| Field | Type | Description |
|---|---|---|
| schema_version | integer | Schema version. Must be `1` for the current specification. |
| category | string | Store category (e.g., "System Tools", "Developer"). |
| detailed_description | string | Detailed description. Supports \n line breaks and **bold** formatting. |
| developer_message | string | A personal message to your users displayed in a dedicated card. |
| changelog | string | Changelog for the current version. Supports \n line breaks and Markdown-style formatting (headings, bold, lists, emoji). |
| repo_url | string (URL) | Direct link to the GitHub repository. |
| app_website | string (URL) | Official website for your app. |
| download_url | string (URL) | **Absolute URL to the APK file.** Must end in .apk. |
| donate_url | string (URL) | Absolute URL to a donation page for the app (root-level; see also `developer.donate_url` in §5.5). |
| tags | array of string | Keyword tags used for search and discovery. Max 15 items. |
| license | string | Software license identifier (e.g. "GPL-3.0", "MIT"). |
| open_source | boolean | Whether the app's source code is publicly available. |

### 5.2 Versioning & Technical Requirements
| Field | Type | Description |
|---|---|---|
| version_name | string | Human-readable version string (e.g. "1.4.2"). |
| version_code | integer | Integer version code used internally by Android. |
| min_sdk | integer | Minimum Android SDK version required to install the app. |
| target_sdk | integer | Target Android SDK version the app was built against. |
| min_shizuku_version | integer | Minimum Shizuku version code required to run the app. |
| requires_shizuku | boolean | Whether the app requires Shizuku to function. Defaults to `true`. |

### 5.3 Ads & Monetization
Shizu CoreFetch empowers developers to display their own custom ads directly inside their app's details page.
| Field | Type | Description |
|---|---|---|
| has_ads | boolean | Set to true to enable custom ad banners. **Replaces the deprecated `ad` field.** |
| ads | array | Array containing ad configurations (requires position, image_url, target_url). |
**Ad Policy:** Gambling, Alcohol, Drugs, Pornography, and Religious disparities are **strictly prohibited**. Violating this will result in immediate blacklisting.

### 5.4 Media & Community
| Field | Type | Description |
|---|---|---|
| banner_url | string (URL) | Absolute HTTPS URL to a banner graphic (16:9 recommended). |
| screenshots | array of string | Up to 20 absolute HTTPS URLs pointing to screenshot images. |
| store_issue_number | integer | The GitHub Issue number used to fetch and display user comments natively. |

### 5.5 Developer Portfolio
The developer object powers the developer dashboard in the store.
```json
{
  "developer": {
    "name": "Jamal El Hizazi",
    "banner_url": "https://domain.com/coverture.jpg",
    "account_url": "https://github.com/elhizazi1",
    "email": "jamal@elhizazi.me",
    "website": "https://siwane.xyz",
    "portfolio": "https://jamal.elhizazi.me",
    "donate_url": "https://paypal.me/yourname",
    "socials": {
      "github": "https://github.com/elhizazi1",
      "x": "https://x.com/elhizazi1",
      "telegram": "https://t.me/username",
      "youtube": "https://youtube.com/@username",
      "facebook": "https://fb.com/username",
      "instagram": "https://instagram.com/username"
    }
  }
}
```
| Field | Type | Description |
|---|---|---|
| developer.name | string | Developer or maintainer's display name. |
| developer.username | string | Developer's handle/username. |
| developer.banner_url | string (URL) | Cover/banner image for the developer dashboard. |
| developer.account_url | string (URL) | Link to the developer's main GitHub (or other) account. |
| developer.email | string (email) | Contact email address. |
| developer.website | string (URL) | Developer's personal or company website. |
| developer.portfolio | string (URL) | Link to the developer's app portfolio. |
| developer.donate_url | string (URL) | Absolute URL to the developer's personal donation page (e.g. PayPal). |
| developer.socials | object | Social links: github, x, telegram, youtube, facebook, instagram. |

### 5.6 Locales Object
The locales object contains translated strings. Keys are BCP 47 language codes.
Supported translatable fields: `app_name`, `category`, `short_description`, `detailed_description`, `developer_message`, `developer_name`, `banner_url`, `changelog`.

## 6. Supported Languages
The Shizu CoreFetch Store natively supports the following 11 languages:
| Code | Language | Native Name |
|---|---|---|
| ar | Arabic | العربية |
| en | English | English |
| fr | French | Français |
| es | Spanish | Español |
| pt | Portuguese | Português |
| ru | Russian | Русский |
| hi | Hindi | हिन्दी |
| zh | Chinese | 中文 |
| ja | Japanese | 日本語 |
| tr | Turkish | Türkçe |
| cs | Czech | Čeština |

You may also add any other BCP 47 language code under `locales` — the schema does not restrict the key set. Additional languages beyond the 11 listed above may be surfaced by the store if support is added later.

## 7. Validation
Always validate your JSON file before committing it.
 1. Open jsonschemavalidator.net
 2. Paste the contents of schema.json into the left (Schema) panel.
 3. Paste your shizu_store.json into the right (Input JSON) panel.

## 8. Common Mistakes
 * **Duplicate keys:** JSON does not allow duplicate keys. Check your locales carefully.
 * **Trailing commas:** Remove commas after the last item in an object or array.
 * **Relative URLs:** All URLs (icon_url, banner_url, download_url, etc.) must be **absolute** HTTPS URLs.
 * **Wrong filename:** Must be exactly shizu_store.json at the repository root.
 * **Using the deprecated `ad` field:** Use `has_ads` instead — `ad` is no longer part of the schema.
 * **download_url not ending in `.apk`:** The store validates that `download_url` points directly to an `.apk` file.

## 9. Architecture & Disclaimer
**Decentralized Fetching:** The Shizu CoreFetch store acts as a bridge. It fetches application metadata and APK releases directly from developers' GitHub repositories. There is no direct hosting by the store.
**Disclaimer:** The creator of Shizu CoreFetch (Jamal El Hizazi) is not responsible for the functionality or safety of third-party apps. However, the administration reserves the absolute right to blacklist any application or advertisement that contradicts store policies.

## 10. Security Notice
> ⚠️ **Apps running under Shizuku can perform sensitive operations. Developers are responsible for the safety of their apps.**
> 
 * **Never distribute malware or spyware.**
 * **Publish your source code** when possible — consider setting `open_source: true`.
 * **Sign your APKs** consistently.

## 11. Full Example: shizu_store.json (Live Reference — ShizuCoreFetch)
This is the **live, production manifest** used by the ShizuCoreFetch app itself — the reference implementation for everything documented above. `locales` is abbreviated here to the `ar` block for readability; the full file (all 11 languages) ships as [`shizu_store.json`](shizu_store.json) in this repository.
```json
{
  "schema_version": 1,

  "app_name": "ShizuCoreFetch",
  "package_name": "xyz.siwane.shizucorefetch",
  "category": "System Tools",
  "short_description": "An advanced Shizuku-based Android app manager and installer.",
  "detailed_description": "ShizuCoreFetch is a powerful tool designed to manage and install Android applications seamlessly. Utilizing the Shizuku API, it allows you to bypass standard installation restrictions and manage your apps like a pro.\n\n**Key Features:**\n- Silent and background APK installations via Shizuku.\n- Fetch and download the latest app releases directly from GitHub.\n- Local APK wallet for managing, extracting, and sharing apps.\n- Fast and responsive Material Design UI.",
  "developer_message": "Crafting smart tools that give users full control over their devices. Thank you for your trust and support!",

  "min_sdk": 24,
  "target_sdk": 37,
  "license": "GPL-3.0",
  "requires_shizuku": true,
  "open_source": true,

  "store_issue_number": 1,
  "changelog": "### 🚀 Major Update | The UI Revolution\n\n...",

  "tags": ["shizuku", "app-manager", "apk-installer", "apk", "github", "system-tools", "android"],

  "icon_url": "https://shizucorefetch.siwane.xyz/assets/icon.png",
  "banner_url": "https://shizucorefetch.siwane.xyz/assets/banner_main.png",
  "app_website": "https://shizucorefetch.siwane.xyz",
  "repo_url": "https://github.com/elhizazi1/ShizuCoreFetch",
  "download_url": "https://github.com/elhizazi1/ShizuCoreFetch/releases/latest/download/app-release-sign.apk",

  "screenshots": [
    "https://shizucorefetch.siwane.xyz/assets/screen/screen1.png",
    "https://shizucorefetch.siwane.xyz/assets/screen/screen2.png"
  ],

  "has_ads": true,
  "ads": [
    {
      "position": "top",
      "image_url": "https://shizucorefetch.siwane.xyz/assets/adsi1xyzdrk.webp",
      "target_url": "https://www.siwane.xyz/"
    },
    {
      "position": "bottom",
      "image_url": "https://shizucorefetch.siwane.xyz/assets/adbotom.jpeg",
      "target_url": "https://wa.me/si1xyz"
    }
  ],

  "developer": {
    "name": "Jamal El Hizazi",
    "banner_url": "https://shizucorefetch.siwane.xyz/assets/coverture.jpg",
    "account_url": "https://github.com/elhizazi1",
    "email": "jamal@elhizazi.me",
    "website": "https://siwane.xyz",
    "portfolio": "https://jamal.elhizazi.me",
    "donate_url": "https://paypal.me/Elhizazi",
    "socials": {
      "facebook": "https://fb.com/elhizazi2",
      "instagram": "https://instagram.com/elhizazi1",
      "x": "https://x.com/elhizazi1",
      "youtube": "https://youtube.com/@si1xyz",
      "github": "https://github.com/elhizazi1",
      "telegram": "https://t.me/elhizazi1"
    }
  },

  "locales": {
    "ar": {
      "category": "أدوات النظام",
      "short_description": "أداة متقدمة لإدارة وتثبيت التطبيقات عبر صلاحيات Shizuku.",
      "detailed_description": "تطبيق ShizuCoreFetch هو أداتك الشاملة لإدارة وتثبيت تطبيقات أندرويد بسلاسة...",
      "banner_url": "https://shizucorefetch.siwane.xyz/assets/banner_main.png",
      "developer_message": "أسعى لصناعة أدوات ذكية تمنح المستخدم تحكماً كاملاً في هاتفه. شكراً لدعمكم وثقتكم!",
      "developer_name": "جمال الحزازي",
      "changelog": "### 🚀 سجل التحديثات | الإصدار الميجر\n\n..."
    }
  }
}
```
> 📄 The complete, unabridged file — including all 11 locale blocks — is available at [`shizu_store.json`](shizu_store.json).

## 12. Quick Checklist
 * [ ] File is named exactly shizu_store.json
 * [ ] File is at the root of the repository
 * [ ] JSON is syntactically valid (no trailing commas, no duplicate keys)
 * [ ] app_name, package_name, short_description, and icon_url are present
 * [ ] All URLs (including download_url and donate_url) are absolute HTTPS URLs
 * [ ] download_url ends in .apk
 * [ ] has_ads is used instead of the deprecated ad field
 * [ ] Ad banners strictly comply with the store policy
 * [ ] File has been validated against schema.json
