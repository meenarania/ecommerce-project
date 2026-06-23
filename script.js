
fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => {
        const productBox = document.getElementById("products");

        productBox.innerHTML = "";

        data.forEach(product => {
            productBox.innerHTML += `
                <div>
                    <h2>${product.name}</h2>
                    <p>₹${product.price}</p>
                </div>
            `;
        });
    });