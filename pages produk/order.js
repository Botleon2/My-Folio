function openOrder(name, desc, price) {
    document.getElementById('productname').innerText = name;
    document.getElementById('productdesc').innerText = desc;

    document.getElementById('totalPrice').setAttribute('data-baseprice', price);

    document.getElementById('quantity').value = 1;

    updateTotal();

    document.getElementById('overlay').style.display = 'block';
    document.getElementById('orderModal').style.display = 'block';
}

function updateTotal() {
    const basePrice = document.getElementById('totalPrice').getAttribute('data-baseprice') || 0;
    const qty = document.getElementById('quantity').value;
    const total = basePrice * qty;
    
    document.getElementById('totalPrice').innerText = 'Rp ' + total.toLocaleString('id-ID');
}

function closeOrder() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('orderModal').style.display = 'none';
}

// blm ada sumbit order no wa 6285891729388

function sumbitOrder() {
    const productName = document.getElementById('productname').innerText;
    const quantity = document.getElementById('quantity').value;
    const totalPrice = document.getElementById('totalPrice').innerText;

    const message = `Saya ingin memesan ${quantity} ${productName} dengan total harga ${totalPrice}. Apakah produk ini masih tersedia?`;
    const whatsappNumber = '6285891729388';
    const url = `https://wa.me/6285891729388?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
