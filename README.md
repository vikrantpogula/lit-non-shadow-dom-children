# Install and run (vite)

1. `npm install`
2. `npm run dev`

# Description

This repo showcases how to save a ref an arbritrarily "project" child nodes without shadow dom slots.


![Example](/lit-no-shadow-children.png)


## Caveats
Children is saved as a initial reference at mount. This means that *children* must be enclosed in a single *STATIC* DOM node. Nodes inside that can be dynamically controlled by the parent but the root node itself should be static.

```html
<!-- "SLOT" WORKS -->
<wc-simple-card>
    <div>
        <!--  the enclosing div is static so we can create a fragment and hold on to it -->
        <!--  EVERTHING HERE CAN BE DYNAMIC -->
    </div>
</wc-simple-card>


<!-- "SLOT" WONT WORK CORRECTLY -->
<wc-simple-card>
    <!--  the children arent static so we will lose our reference between renders -->
    {condition ? <div></div>: <span></span>}
</wc-simple-card>
```