# K15t Documentation Page Recreation

This project recreates the K15t Scroll PDF Exporter documentation page using HTML, CSS, and JavaScript with a modular data structure.

## Files Structure

- **index.html** - Main HTML structure
- **styles.css** - Complete styling with responsive design
- **script.js** - JavaScript functionality for dynamic content loading and interactions
- **data.js** - Data configuration file containing all page content and navigation structure

## Features

✅ **Responsive Design**

- Desktop layout with sidebar and table of contents
- Mobile-friendly with collapsible sidebar
- Smooth transitions and animations

✅ **Dynamic Content**

- All content loaded from `data.js`
- Easy to update and maintain
- Modular section structure

✅ **Interactive Navigation**

- Expandable/collapsible sidebar sections
- Active state tracking
- Breadcrumb navigation
- Table of contents with scroll spy

✅ **Modern UI**

- Clean, professional design
- Info boxes and callouts
- Smooth scrolling
- Hover effects and transitions

## How to Use

1. **Open the page**: Simply open `index.html` in a web browser
2. **Customize content**: Edit `data.js` to change navigation items, page content, and text
3. **Style adjustments**: Modify `styles.css` for design changes
4. **Functionality**: Update `script.js` for behavior modifications

## Customizing Content

### Navigation Structure

Edit the `navigationData` object in `data.js`:

```javascript
const navigationData = {
  sections: [
    {
      id: "section-id",
      title: "Section Title",
      expanded: true,
      items: [{ id: "item-id", title: "Item Title", active: false }],
    },
  ],
};
```

### Page Content

Edit the `pageContent` object in `data.js`:

```javascript
const pageContent = {
  breadcrumbs: [...],
  title: 'Page Title',
  description: 'Page description',
  sections: [
    { type: 'info-box', title: '...', content: '...' },
    { type: 'text', content: '...' },
    { type: 'image', src: '...', alt: '...' }
  ],
  tableOfContents: [...]
};
```

### Header Navigation

Edit the `headerNav` array in `data.js`:

```javascript
const headerNav = [{ title: "Link Title", link: "#" }];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Desktop: > 1200px (full layout with sidebar and TOC)
- Tablet: 768px - 1200px (sidebar + content, no TOC)
- Mobile: < 768px (content only, toggleable sidebar)

## Color Scheme

The page uses CSS custom properties for easy theme customization:

- Primary: `#0052CC`
- Text Dark: `#172B4D`
- Background: `#FFFFFF`
- Light Background: `#F4F5F7`
- Info Blue: `#DEEBFF`

## License

This is a recreation for educational/demonstration purposes.
