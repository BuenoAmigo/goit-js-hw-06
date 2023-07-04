const categoriesElements = document.querySelectorAll("#categories > li.item");

const totalElements = categoriesElements.length;
console.log(`Number of categories: ${totalElements}`);

categoriesElements.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("li").length;
    console.log(`Category : ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
}
);