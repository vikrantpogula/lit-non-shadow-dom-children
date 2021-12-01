import { LitElement, html, HTMLTemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

export class ElementBase extends LitElement {
  protected readonly contentFragment = document.createDocumentFragment();
  protected override createRenderRoot(): LitElement {
    this.contentFragment.append(...Array.from(this.children));
    return this;
  }
}

export class ShadowRootElementBase extends LitElement {}

@customElement("wc-simple-card")
export class SimpleCard extends ElementBase {
  @property()
  public readonly cardTitle?: string;

  override render(): HTMLTemplateResult {
    return html`
      <div>
        <h2>${this.cardTitle || `Title`}</h2>
        <div>${this.contentFragment}</div>
        <hr />
      </div>
    `;
  }
}

@customElement("wc-simple-card-shadow")
export class SimpleCardShadow extends ShadowRootElementBase {
  @property()
  public readonly cardTitle?: string;

  override render(): HTMLTemplateResult {
    return html`
      <div>
        <h2>${this.cardTitle || `Title`}</h2>
        <div>${this.children}</div>
        <hr />
      </div>
    `;
  }
}
