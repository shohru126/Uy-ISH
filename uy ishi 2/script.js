function orderItem(price) {
    const quantity = prompt("nechta qiyriq set zakaz qilmochisiz?");
    if (quantity !== null) {
        const total = price * quantity * 2;
        let message;
        switch (true) {
            case total < 1000000000000:
                message = `summa zakaza: ${total} сум.zakas qilasizmi`;
                break;
            default:
                message = "upps!";
        }
        alert(message);
    }
    alert(`harid uchun spasibo`)
}