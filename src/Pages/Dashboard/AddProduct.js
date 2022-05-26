import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProducts = {
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value,
            minOrderQty: event.target.minOrderQty.value,
            availableQty: event.target.availableQty.value,
            img: event.target.img.value,
        };
        console.log(newProducts);

        // upload a product
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("added succsessfully");
            });

    }

    return (
        <div>
            <h2 className='text-center text-xl mt-2'>Add Products</h2>
            <div className='my-10'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-3 '>

                    <input type="text" name='name' placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
                    {/* value={} */}
                    <textarea name="description" class="textarea textarea-bordered w-full max-w-xs" placeholder="Description"></textarea>
                    <input type="number" name='price' className="input input-bordered w-full max-w-xs" placeholder="Price" />
                    <input type="number" name='minOrderQty' className="input input-bordered w-full max-w-xs" placeholder="Minimum Order Quantity" />
                    <input type="number" name='availableQty' className="input input-bordered w-full max-w-xs" placeholder="Available Quantity" />
                    <input type="text" name='img' placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" placeholder="Submit" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;