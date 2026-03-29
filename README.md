# 🌳 Dynamic Organizational Chart Fragment for Liferay

## 🧩 About the Project

The **Organizational Chart** is a visual component designed to display organizational structures within **Liferay DXP**.

Its goal is to enable the creation of dynamic, editable, and visually intuitive organograms directly through a **no-code approach**.

---

## ✨ Features

* 🧑‍💼 Hierarchical structure (President → Director → Team)
* 🖼️ Support for member images
* 📝 Editable name and role
* 🎨 Configurable number of cards per level
* ⚡ Lightweight rendering (no external libraries)

---

## 🖼️ Usage Example

> Upload images or GIFs here to demonstrate the organogram in action.

---

## ⚙️ Fragment Structure

```
organogram-fragment/
├── index.html
├── main.js
├── styles.css
└── configuration.json
```

---

## 🚀 How to Use

1. In Liferay, go to **Fragments**
2. Create a new fragment
3. Add the project files:

   * HTML
   * CSS
   * JavaScript
  
4. Configure editable fields in the HTML:

   * Name
   * Role
   * Image
  
5. Publish and use it on your pages

---

## 🧠 How It Works

The organogram is built based on:

* Hierarchical HTML structure (`<ul>`, `<li>`)
* Use of `data-lfr-editable` to allow content editing directly within the Liferay page editor

---

## 🧩 Example Structure

```html
<ul>
  <li>
    <div class="node presidente">President</div>
    <ul>
      <li>
        <div class="node diretor">Director</div>
      </li>
    </ul>
  </li>
</ul>
```

---

## 🔧 Future Improvements

* [ ] Define the number of supported hierarchy levels
* [ ] Integration with dynamic data (Liferay Objects)
* [ ] Advanced responsiveness

---
