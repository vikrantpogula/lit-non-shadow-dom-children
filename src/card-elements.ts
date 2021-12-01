import { LitElement, html, HTMLTemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementBase } from "./base-elements";

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
export class SimpleCardShadow extends ElementBase {
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
