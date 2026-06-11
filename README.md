# 📦 shizu_store.json — Developer Reference

> **Overview:** This guide explains how to add the `shizu_store.json` file to your GitHub repository to publish your application on the **Shizu CoreFetch** store — a decentralized application hub dedicated to Shizuku-powered Android apps.

---

## Table of Contents

1. [What is Shizu CoreFetch Store?](#1-what-is-shizu-corefetch-store)
2. [What is shizu_store.json?](#2-what-is-shizu_storejson)
3. [File Placement](#3-file-placement)
4. [Required Fields](#4-required-fields)
5. [Extended Fields — Full Reference](#5-extended-fields--full-reference)
   - [5.1 App Metadata](#51-app-metadata)
   - [5.2 Ads & Monetization](#52-ads--monetization)
   - [5.3 Media & Community](#53-media--community)
   - [5.4 Developer Portfolio](#54-developer-portfolio)
   - [5.5 Locales Object](#55-locales-object)
6. [Supported Languages](#6-supported-languages)
7. [Validation](#7-validation)
8. [Common Mistakes](#8-common-mistakes)
9. [Architecture & Disclaimer](#9-architecture--disclaimer)
10. [Security Notice](#10-security-notice)
11. [Full Example: shizu_store.json](#11-full-example-shizu_storejson)
12. [Quick Checklist](#12-quick-checklist)

---

## 1. What is Shizu CoreFetch Store?

**Shizu CoreFetch** is an advanced, decentralized Android application hub designed specifically for apps built on top of [Shizuku](https://shizuku.rikka.app/). Shizuku grants apps ADB-level system permissions without requiring root access, enabling powerful system-level operations.

The Shizu CoreFetch store uses these Shizuku permissions to **silently install APKs** — meaning users can install and update apps without the standard Android installation dialog appearing each time. 

---

## 2. What is shizu_store.json?

`shizu_store.json` is a **JSON manifest file** that you add to your GitHub repository. It acts as the bridge between your repository and the Shizu CoreFetch store. It tells the store everything it needs to know:

- Basic metadata (name, package name, descriptions)
- Custom Ad Banners (monetization)
- Developer Portfolio (socials, website, other apps)
- Translated strings for up to 9 languages

The store parses a file named **exactly** `shizu_store.json` at the root of your repository. 

---

## 3. File Placement

The file **must** be placed at the **root** of your GitHub repository — the same level as your `README.md`.

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

---

## 4. Required Fields

Your `shizu_store.json` **must** include these four fields. The store will not process your app without them.

| Field | Type | Description |
|---|---|---|
| `app_name` | `string` | Display name of your application. Max 100 characters. |
| `package_name` | `string` | Android package name (e.g. `xyz.siwane.myapp`). |
| `short_description` | `string` | A single-line description shown in app listings. Max 200 characters. |
| `icon_url` | `string` (URL) | Absolute HTTPS URL to your app's icon image. |

---

## 5. Extended Fields — Full Reference

### 5.1 App Metadata

| Field | Type | Description |
|---|---|---|
| `detailed_description` | `string` | Detailed description. Supports `\n` line breaks and `**bold**` formatting. |
| `developer_message` | `string` | A personal message to your users displayed in a dedicated card. |
| `category` | `string` | Store category (e.g., `"Tools"`, `"Developer"`). |
| `download_url` | `string` (URL) | **Absolute URL to the APK file.** Must end in `.apk`. |
| `repo_url` | `string` (URL) | Direct link to the GitHub repository. |
| `app_website` | `string` (URL) | Official website for your app. |

### 5.2 Ads & Monetization

Shizu CoreFetch empowers developers to display their own custom ads directly inside their app's details page.

| Field | Type | Description |
|---|---|---|
| `ad` | `boolean` | Set to `true` to enable custom ad banners. |
| `ads` | `array` | Array containing ad configurations (requires `position`, `image_url`, `target_url`). |

**Ad Policy:** Gambling, Alcohol, Drugs, Pornography, and Religious disparities are **strictly prohibited**. Violating this will result in immediate blacklisting.

### 5.3 Media & Community

| Field | Type | Description |
|---|---|---|
| `banner_url` | `string` (URL) | Absolute HTTPS URL to a banner graphic (16:9 recommended). |
| `screenshots` | `array of string`| Up to 20 absolute HTTPS URLs pointing to screenshot images. |
| `store_issue_number` | `integer` | The GitHub Issue number used to fetch and display user comments natively. |

### 5.4 Developer Portfolio

The `developer` object powers the developer dashboard in the store.

```json
{
  "developer": {
    "name": "Jamal El Hizazi",
    "banner_url": "[https://domain.com/coverture.jpg](https://domain.com/coverture.jpg)",
    "account_url": "[https://github.com/elhizazi1](https://github.com/elhizazi1)",
    "email": "jamal@elhizazi.me",
    "website": "[https://siwane.xyz](https://siwane.xyz)",
    "portfolio": "[https://jamal.elhizazi.me](https://jamal.elhizazi.me)",
    "socials": {
      "github": "[https://github.com/elhizazi1](https://github.com/elhizazi1)",
      "x": "[https://x.com/elhizazi1](https://x.com/elhizazi1)"
    }
  }
}
```

### 5.5 Locales Object

The `locales` object contains translated strings. Keys are BCP 47 language codes.
Supported translatable fields: `app_name`, `short_description`, `detailed_description`, `developer_message`, `developer_name`, `banner_url`, `changelog`.

---

## 6. Supported Languages

The Shizu CoreFetch Store natively supports the following 9 languages:

| Code | Language | Native Name |
|------|----------|-------------|
| `ar` | Arabic | العربية |
| `en` | English | English |
| `fr` | French | Français |
| `es` | Spanish | Español |
| `pt` | Portuguese | Português |
| `ru` | Russian | Русский |
| `hi` | Hindi | हिन्दी |
| `zh` | Chinese | 中文 |
| `ja` | Japanese | 日本語 |

---

## 7. Validation

Always validate your JSON file before committing it.

1. Open [jsonschemavalidator.net](https://www.jsonschemavalidator.net)
2. Paste the contents of `schema.json` into the left (Schema) panel.
3. Paste your `shizu_store.json` into the right (Input JSON) panel.

---

## 8. Common Mistakes

- **Duplicate keys:** JSON does not allow duplicate keys. Check your `locales` carefully.
- **Trailing commas:** Remove commas after the last item in an object or array.
- **Relative URLs:** All URLs (`icon_url`, `banner_url`, etc.) must be **absolute** HTTPS URLs.
- **Wrong filename:** Must be exactly `shizu_store.json` at the repository root.

---

## 9. Architecture & Disclaimer

**Decentralized Fetching:** The Shizu CoreFetch store acts as a bridge. It fetches application metadata and APK releases directly from developers' GitHub repositories. There is no direct hosting by the store.

**Disclaimer:** The creator of Shizu CoreFetch (Jamal El Hizazi) is not responsible for the functionality or safety of third-party apps. However, the administration reserves the absolute right to blacklist any application or advertisement that contradicts store policies.

---

## 10. Security Notice

> ⚠️ **Apps running under Shizuku can perform sensitive operations. Developers are responsible for the safety of their apps.**

- **Never distribute malware or spyware.**
- **Publish your source code** when possible.
- **Sign your APKs** consistently.

---

## 11. Full Example: shizu_store.json

```json
{
  "app_name": "Example Shizuku App",
  "package_name": "xyz.siwane.myapp",
  "short_description": "A short, catchy description of your app.",
  "detailed_description": "Welcome to My Shizuku App! This tool helps you manage your device efficiently.\n\n**Features:**\n- Silent installation.\n- Background tasks.",
  
  "ad": true,
  "ads": [
    {
      "position": "top",
      "image_url": "[https://example.com/assets/ad_top.webp](https://example.com/assets/ad_top.webp)",
      "target_url": "[https://sponsored-link.com](https://sponsored-link.com)"
    }
  ],
  
  "developer_message": "Thank you for using my app!",
  "icon_url": "[https://raw.githubusercontent.com/username/repo/main/icon.png](https://raw.githubusercontent.com/username/repo/main/icon.png)",
  "banner_url": "[https://raw.githubusercontent.com/username/repo/main/banner.png](https://raw.githubusercontent.com/username/repo/main/banner.png)",
  "app_website": "[https://myapp-website.com](https://myapp-website.com)",
  "store_issue_number": 1,
  
  "developer": {
    "name": "Developer Name",
    "banner_url": "[https://example.com/assets/dev_coverture.jpg](https://example.com/assets/dev_coverture.jpg)",
    "account_url": "[https://github.com/username](https://github.com/username)",
    "email": "contact@example.com",
    "website": "[https://developer-website.com](https://developer-website.com)",
    "portfolio": "[https://portfolio.example.com](https://portfolio.example.com)",
    "socials": {
      "github": "[https://github.com/username](https://github.com/username)",
      "telegram": "[https://t.me/username](https://t.me/username)"
    }
  },
  
  "repo_url": "[https://github.com/username/repo](https://github.com/username/repo)",
  "screenshots": [
    "[https://raw.githubusercontent.com/username/repo/main/screen1.png](https://raw.githubusercontent.com/username/repo/main/screen1.png)"
  ],
  
  "locales": {
    "ar": {
      "app_name": "اسم التطبيق",
      "short_description": "وصف قصير وجذاب لتطبيقك.",
      "detailed_description": "مرحباً بك في تطبيقي! يعمل عبر Shizuku.",
      "developer_message": "شكراً لاستخدامكم تطبيقي!",
      "developer_name": "اسم المطور"
    }
  }
}
```

---

## 12. Quick Checklist

- [ ] File is named exactly `shizu_store.json`
- [ ] File is at the root of the repository
- [ ] JSON is syntactically valid (no trailing commas, no duplicate keys)
- [ ] `app_name`, `package_name`, `short_description`, and `icon_url` are present
- [ ] All URLs are absolute HTTPS URLs
- [ ] Ad banners strictly comply with the store policy
- [ ] File has been validated against `schema.json`
