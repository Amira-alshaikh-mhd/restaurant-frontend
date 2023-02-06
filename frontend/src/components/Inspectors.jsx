import React from "react";

import { useState } from "react";


import axios from "axios";
import { useEffect } from "react";


function Inspectors() {


    // const data = location.state;
    const [categories, setcategories] = useState(null);

    const [resto_name, setresto_name] = useState(null);
    const [resto_logo, setresto_logo] = useState(null)
    const [category_id, setcategory_id] = useState(null)
    const [itemgetter, setitemgetter] = useState(null);















    const getrestoname = () => {

        axios.get(`https://gogo-ls5k.onrender.com/restaurants/restaurant_name?_id=63dc47ca3db728f30e995843`)
            .then(res => {
                console.log("the precss is working")
                console.log("Successful: ", res.data);
                setresto_name(res.data)
            })
            .catch(err => {
                console.error("Update : ", err);
            });
    }




    const getRestoLogo = async () => {

        await axios.get(`https://gogo-ls5k.onrender.com/restaurants/logos?_id=63dc47ca3db728f30e995843`)

            .then(res => {

                console.log(res.data)
                setresto_logo(res.data);
            })
            .catch(err => {

                console.error(err);

            })
    };



    const getcategories = async () => {
        await axios.get(`https://gogo-ls5k.onrender.com/categories/?resto_id=63dc47ca3db728f30e995843`)

            .then(res => {

                console.log(res.data)
                setcategories(res.data);
            })
            .catch(err => {

                console.error(err);

            })
    }


    const gofetchitems = async () => {
        if (category_id) {

            await axios.get(`https://gogo-ls5k.onrender.com/categories/items/?cat_id=${category_id}`)
                .then(res => {

                    console.log(res.data)
                    setitemgetter(res.data);
                })
                .catch(err => {

                    console.error(err);

                })

        }
        else {
            console.log("fawaz nothing is here ")
        }
    }
























    useEffect(() => {
        getrestoname()
        getRestoLogo()
        getcategories()

    }, [resto_name, category_id])






    return (
        <>



            <div className='container'>
                <img src={`https://gogo-ls5k.onrender.com/${resto_logo}`} alt='logo for rest'></img>

            </div>


            <div className='container2'>
                <h1 className='h11'>{resto_name} </h1>


            </div>





            <nav>
                <div className='wrapper'>
                    <div className='navbtn'></div>
                    {
                        categories?.map((hourframe, index) =>
                        (
                            <button onClick={() => { setcategory_id(hourframe._id); gofetchitems() }} >{hourframe.category_name}</button>
                        ))

                    }








                </div>
            </nav>













            {itemgetter?.map((hourframe, index) => (


                <div className='item'>



                    <div className='dish'>
                        <div className='editbtn1'>
                            <h3>{hourframe.item_name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   </h3>











                        </div>

                        <b>{hourframe.item_price}</b>
                        <p>{hourframe.item_description}</p>
                        <p>◉{hourframe.item_tags.join(', ')}</p>
                    </div>
                </div>


            ))}






        </>

    );

    ;
}

export default Inspectors;
