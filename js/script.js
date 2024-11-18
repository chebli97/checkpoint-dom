document.addEventListener('DOMContentLoaded' , () => {
    const products = document.querySelectorAll('.card')
    products.forEach((product) => {
        let plusButton = product.querySelector('.fa-plus-circle')
        let minusButton = product.querySelector('.fa-minus-circle')
        let heartButton = product.querySelector('.fa-heart')
        let deleteButton = product.querySelector('.fa-trash-alt')
        let quantityElement = product.querySelector('.quantity')
        let totalPriceElement = document.querySelector('.total')
       
        let quantity = Number(quantityElement.textContent)


        const updateTotal = () => {
            let total = 0;
                         products.forEach(prod => {
            const prodQuantity = parseInt(prod.querySelector('.quantity').textContent);
                             const prodUnitPrice = parseFloat(prod.querySelector('.unit-price').textContent.replace('$', '').trim());
                             total += prodQuantity * prodUnitPrice;
                         });
                         totalPriceElement.textContent = total.toFixed(2) + ' $';
        }

        //Quantity from Plus Btn
        plusButton.addEventListener('click' , ()=>{
            quantity++
            quantityElement.textContent = quantity
            updateTotal()
        })

         //Quantity from Minus Btn
         minusButton.addEventListener('click' , ()=>{
            if(quantity > 0){
                quantity--
                quantityElement.textContent = quantity
                updateTotal()
            }
        })

        //Like Button
        heartButton.addEventListener('click' , () =>{
            heartButton.classList.toggle('liked')
        })

        // Delete Button
        deleteButton.addEventListener('click' , () =>{
            product.remove()
            updateTotal()
        })




    } )
})































































































