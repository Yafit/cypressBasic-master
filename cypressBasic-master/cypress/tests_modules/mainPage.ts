
import main from '../pages/mainPage';
import * as url from "url";


const pageTest = (): void => {
  it(`Should load main Page`, () => {
    main.load();
    console.log("this is a log ");
    main.ShopBtn.should('exist').click();
    main.FilterInput.should('exist');
  });

  it(`Should search an item`, () => {
    main.load();
    main.ShopBtn.should('exist').click();
    main.FilterInput.should('exist');
    main.FilterInput.type('jeans').should('have.value', 'jeans');
    main.FilterButton.should('exist').click();
    cy.url().should('equal','https://atid.store/?s=jeans&post_type=product');
  });

  it(`Should sort by increasing price`, () => {
    main.load('product-category/women/');
    main.SortInput.should('exist').select('price');
    cy.url().should ('include', '?orderby=price')
  });

  it(`Should add item to cart`, () => {
    main.load('store');
    main.ItemButton.should('exist').click();
    main.AddToCartButton.should('exist').click();
    main.ViewCartButton.should('exist').click();
    main.load('cart-2');
    cy.window().contains('ATID Black Shoes');

  });
};

export { pageTest };
