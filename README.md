# Supermarket Billing

> **From a basket of items to a calculated checkout.**

**Classic console C++** · **Inventory & billing** · **Algorithm & state practice**

---

## The program

Maintain product records and generate detailed customer invoices.

**Explore:** Follow item entry, totals and printed billing logic.

## Files

| Path | Purpose |
|:--|:--|
| [`OUTPUT SCREEN.doc`](./OUTPUT%20SCREEN.doc) | Additional project resources |
| [`SHOP.DAT`](./SHOP.DAT) | Additional project resources |
| [`docs`](./docs) | Additional project resources |
| [`run-in-browser.html`](./run-in-browser.html) | Additional project resources |
| [`super-market-billing.CPP`](./super-market-billing.CPP) | Original C++ source file |


## Running it

Read the C++ entry point in the source file, then compile using an appropriate C++ toolchain. Some original source variants target Turbo C++/DOS and may need compatibility adjustments before modern compilation.

## What to study

- Input validation and console output.
- State transitions and termination conditions.
- Porting older compiler-specific code without changing game or business rules.

## Usage boundary

This is an educational console program. Use invented data for testing, not personal records or real financial information.

<details><summary><strong>Original project guide (preserved)</strong></summary>

# Supermarket Billing

Maintain product records and generate detailed customer invoices.

## Run in your browser (no setup)

**Open [`run-in-browser.html`](run-in-browser.html)** or double-click [`docs/index.html`](docs/index.html) after extracting the repository. You can also deploy the `docs/` folder to any static host.

> The browser playground is an independently written **JavaScript adaptation** of this repository's original C++ logic. It is not a C++ interpreter or WebAssembly binary. Original C++ sources are retained unchanged, and the HTML, CSS and JS demo is immediately usable offline.

### Static GitHub Pages

Go to **Settings → Pages → Build and deployment → Deploy from a branch**; choose `main` and `/docs`, then Save. Your site's intended address is `https://sharanyapal.github.io/cpp-supermarket-billing/` after GitHub confirms a successful deployment.

The previous WebAssembly GitHub Actions workflow is not required for this standalone browser build. The included bulk upload script removes just that previous demo workflow and the superseded `web/` adapter from the **eight named repositories**, without deleting other project files.

### Original C++ source

- [super-market-billing.CPP](super-market-billing.CPP)
- All other historical C++, data and document files are kept unchanged.

### Browser features

- Interactive terminal-style output with keyboard input, restart, and downloadable transcript
- Games follow the original scoring, turns and rule logic
- Data apps use `localStorage` for records within the same browser, replacing local `.DAT` files; records can be cleared explicitly
- Files: `docs/index.html`, `docs/style.css`, `docs/terminal.js`, `docs/program.js`

### Note

This repository contains archived, third-party classroom-style C++ examples from a previously supplied collection. Review attribution and redistribution rights before publishing as your own original work.

</details>

---

<sub>Browse [all C++ and engineering repositories](https://github.com/sharanyapal?tab=repositories).</sub>
