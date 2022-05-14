
export default class BasePage {
  baseURL: string;
  shopBtn: string;
  filerInput: string;
  filterButton: string;
  sortInput: string;
  itemButton: string;
  addToCartButton: string;
  viewCartButton: string;

  constructor(url: string) {
    this.baseURL = `${url}`;
    this.shopBtn = '.elementor-element-78ab79a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link';
    this.filerInput = '#wc-block-search__input-1';
    this.filterButton = '.wc-block-product-search__button';
    this.sortInput = '.orderby';
    this.itemButton = '.post-375 > .astra-shop-thumbnail-wrap > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail';
    this.addToCartButton = '.single_add_to_cart_button';
    this.viewCartButton = '.woocommerce-message > .button';
  }

    get ShopBtn(){
    return cy.get(this.shopBtn)
  }

  get FilterInput(){
    return cy.get(this.filerInput)
  }

  get FilterButton(){
    return cy.get(this.filterButton)
  }

  get SortInput(){
    return cy.get(this.sortInput)
  }

  get ItemButton(){
    return cy.get(this.itemButton)
  }

  get AddToCartButton(){
    return cy.get(this.addToCartButton)
  }

  get ViewCartButton(){
    return cy.get(this.viewCartButton)
  }

  load(path: string = ''): void {
    cy.visit(`${this.baseURL}/${path}`);
  }


}
