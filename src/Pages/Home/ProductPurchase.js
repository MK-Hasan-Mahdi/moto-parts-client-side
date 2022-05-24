import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import PurchaseForm from './PurchaseForm';
import { useForm } from 'react-hook-form';

const ProductPurchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    // console.log(product);
    const { _id, name, description, price, minOrderQty, availableQty, img } = product;

    // const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const [quantity, setQuantity] = useState(minOrderQty);
    const [user] = useAuthState(auth);
    const [userInputData, setuserInputData] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);


    const handleQuantity = e => {
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        // minORder < inputValue > stock
        if (inputQuantity < minOrderQty) {
            alert(`Minimum order quantity ${minOrderQty}`);
        }
        else if (inputQuantity > availableQty) {
            alert(`Minimum order quantity is ${minOrderQty}`);
        } else {
            setQuantity(inputQuantity)
        }
        e.target.quantity.value = '';

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
        const url = `http://localhost:5000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            });
    }


    const handlePurchaseForm = data => {
        const name = user?.displayName;
        const userInput = {
            name,
            email: user?.email,
            number: data?.number,
            address: data?.address,
            quantity: quantity,
            price: quantity * price
        }
        setuserInputData(userInput)

        //post quantity to database
        if (!quantity) {
            alert("Quantity field can't be empty.");
        } else {
            const newQuantity = parseInt(availableQty) - parseInt(quantity)
            const newQuantityObj = { newQuantity }

            //post order to database
            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInput)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })



        }

        //     fetch(`http: localhost:5000/product/${productId}`, {
        //         method: 'PUT',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(newQuantityObj)
        //     })
        //         .then(res => res.json())
        //         .then(data => {

        //             alert('Purchase Successful')
        //         })
        //     reset()
        // }
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
                    <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered input-secondary w-full max-w-xs"
                        required=""
                    />
                    <button type='submit' className=" btn btn-primary ml-2"> Purchase</button>
                </form>
            </div>

            <div className="card-body">
                <PurchaseForm handlePurchaseForm={handlePurchaseForm} product={product} quantity={quantity}></PurchaseForm>

            </div>
        </div>
    );
};

export default ProductPurchase;


