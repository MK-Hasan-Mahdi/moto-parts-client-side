import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import PurchaseForm from './PurchaseForm';
import swal from 'sweetalert';

const ProductPurchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    // console.log(product);
    const { _id, name, description, price, minOrderQty, availableQty, img } = product;
    const [quantity, setQuantity] = useState(minOrderQty);
    const [user] = useAuthState(auth);
    const [userInputData, setuserInputData] = useState({});
    const [disable, setDisable] = useState(false);
    const [newInputQuantityValue, setnewInputQuantityValue] = useState(0);

    const setInputValue = (e) => {
        const newQuanty = e.target.value;
        const minimumOrderQuantiy = parseInt(minOrderQty);
        const stock = parseInt(availableQty);
        if (minimumOrderQuantiy < newQuanty && stock > newQuanty) {
            setDisable(true);
            setQuantity(newQuanty)
            setnewInputQuantityValue(newQuanty);
        }
        else {
            setDisable(false);
        }
    }

    useEffect(() => {
        const url = `https://peaceful-dusk-44249.herokuapp.com/product/${productId}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId, product]);


    const handleQuantity = (e) => {
        e.preventDefault();
        const inputQuantity = parseInt(newInputQuantityValue);

        const newAvailableQty = availableQty - inputQuantity;
        const newProduct = {
            name: name,
            description: description,
            price: price,
            availableQty: newAvailableQty,
            minOrderQty: minOrderQty,
            img: img
        };
        setProduct(newProduct);
        // console.log(newProduct);
        const url = `https://peaceful-dusk-44249.herokuapp.com/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);
            });
    }

    const handlePurchaseForm = (data, event) => {
        const name = user?.displayName;
        const productName = product.name;
        const userInput = {
            name,
            email: user?.email,
            number: data?.number,
            address: data?.address,
            quantity: quantity,
            price: quantity * price,
            product: productName
        }
        setuserInputData(userInput)

        //post quantity to database
        if (!quantity) {
            alert("Quantity field can't be empty.");
        } else {
            const newQuantity = parseInt(availableQty) - parseInt(quantity)
            const newQuantityObj = { newQuantity }
            //post order to database
            fetch('https://peaceful-dusk-44249.herokuapp.com/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInput)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                })
            // success msg
            swal({
                title: "Congratulation!",
                text: "Purchase Complete",
                icon: "success",
                button: "OK",
            });
            event.target.reset();
        }
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mb-20 py-16 mt-10">
            <div className='md:w-1/2 md:px-10'>
                <figure><img className='w-2/3' src={img} alt="Album" /></figure>
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Available Qty: {availableQty}</p>
                <p>Min Order Qty: {minOrderQty}</p>
                <form onSubmit={handleQuantity}>
                    <input type="number" onChange={setInputValue} placeholder="Minimum Quantity 10" name='quantity' className="input input-bordered input-secondary w-full max-w-xs"
                        required=""
                    />
                    <button disabled={!disable} type='submit' className=" btn btn-primary ml-2"> Purchase</button>
                </form>
            </div>

            <div className="card-body">
                <PurchaseForm handlePurchaseForm={handlePurchaseForm} product={product} quantity={quantity}></PurchaseForm>

            </div>
        </div>
    );
};

export default ProductPurchase;


