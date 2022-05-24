import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import PurchaseForm from './PurchaseForm';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const { image, name, availableQuantity, price, details, minOrderQuantity, _id } = tool;
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const [quantity, setQuantity] = useState(minOrderQuantity);
    const [user] = useAuthState(auth);
    const [userInputData, setuserInputData] = useState({});

    useEffect(() => {
        fetch(`http:localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id, tool])

    //handle quantity change
    const handleQuantity = e => {
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        if (inputQuantity > availableQuantity) {
            alert('We dont have enough quantity');
        } else if (inputQuantity < minOrderQuantity) {
            alert(`Minimum order quantity is ${minOrderQuantity}`);
        } else {

            setQuantity(inputQuantity)

        }
        e.target.quantity.value = '';

    }

    //handle submit
    const handleSubmitParam = data => {
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
            const newQuantity = parseInt(availableQuantity) - parseInt(quantity)
            const newQuantityObj = { newQuantity }
            fetch(`http: localhost:5000/tools/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantityObj)
            })
                .then(res => res.json())
                .then(data => {

                    alert('Purchase Successful')
                })
            reset()
        }
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mb-20 py-16 mt-10">
            <div className='md:w-1/2 md:px-10'>
                <figure><img className='w-2/3' src={image} alt="Album" /></figure>
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Price: ${price}</p>
                <p>Stock: {availableQuantity}</p>
                <form onSubmit={handleQuantity}>
                    <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered input-secondary w-full max-w-xs"
                        required=""
                    />
                    <button type='submit' className=" text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Proceed</button>
                </form>
            </div>

            <div className="card-body">
                <div className='w-full mx-auto custom-shadow bg-[#e8eaec] pt-10 pb-10 px-10 rounded-lg'>
                    <h1 className='text-2xl md:text-3xl font-medium text-slate-500 text-center mb-10'>Please Register to Continue</h1>
                    <form onSubmit={handleSubmit(handleSubmitParam)}>

                        <div className="">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    value={user?.displayName} disabled
                                />


                                <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                            </div>


                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                value={user?.email} disabled
                            />

                            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="number" name="floating_quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                    {...register('quantity', {
                                        required: 'Quantity is required',
                                    })}
                                    onKeyUp={() => {
                                        trigger('quantity')
                                    }}
                                />

                                <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="number" name="floating_total" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={quantity?.price} disabled
                                // {...register('total', {
                                //     required: 'Total is required',
                                // })}
                                // onKeyUp={() => {
                                //     trigger('total')
                                // }}
                                />

                                <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Price</label>
                            </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_address" id="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                {...register('address', {
                                    required: 'Address is required',
                                    minLength: {
                                        value: 6, message: 'Minimum 6 character required'
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger('address')
                                }}
                            />
                            <p className='text-red-500 text-sm'>{errors?.address?.message}</p>

                            <label htmlFor="floating_address" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="number" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                                {...register('number', {
                                    required: 'Number is required',
                                    pattern: {
                                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                        message: "Not a valid US number"
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger('number')
                                }}
                            />
                            <p className='text-red-500 text-sm'>{errors?.number?.message}</p>

                            <label htmlFor="floating_repeat_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number</label>
                        </div>
                        <input className='text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2 cursor-pointer' type="submit" value="Purchases" />
                    </form>

                </div>

                <PurchaseForm handleSubmitParam={handleSubmitParam} tool={tool} quantity={quantity}></PurchaseForm>

            </div>
        </div>
    );
};

export default Purchase;