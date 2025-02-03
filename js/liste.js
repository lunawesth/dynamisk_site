console.log("script hentet");

const category = "Apparel";
const listContainer = document.querySelector(".productList");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) =>
        `
      <section class="produkter">
      <article>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="trøje">
        <p><b>${product.productdisplayname}</b><br>DK ${product.price},- </p>
        <a class="read_more" href="product.html">Gå til produkt</a>
      </article>
      </section>
      `
    )
    .join("");

  if (listContainer) {
    listContainer.innerHTML = markup;
  }
}
