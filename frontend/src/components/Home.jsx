import React from 'react';
import logo from './logo.jpg'
import axios from 'axios';
import { useState, useEffect } from 'react';





const Categories = (props) => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});
    // const [nana, setNana] = useState('63cfad2d07dffe46b40cf2c4')
    // const [dodo, setDodo] = useState('63d978aa0e4f648cbb478e20')

    const fetchCategories = async (resto_Id) => {
        try {
            const response = await axios.get(`http://localhost:3000/categories?resto_id=63cfad2d07dffe46b40cf2c4`);
            setCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchItems = async (cat_Id) => {
        console.log("zeinab ",cat_Id)
        try {
            let response = await axios.get(`http://localhost:3000/categories/items?cat_id=63d978aa0e4f648cbb478e20`);
            // http://localhost:3000/categories/items?cat_id=63d978aa0e4f648cbb478e20
            console.log("response ",response)
            setItems(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (category) => {
        console.log("handlesub,it ",category)
        setSelectedCategory(category);
        console.log("handlesub,it22 ",category)
        fetchItems(category._id);
        console.log("handlesub,it333 ",category)
    };

    useEffect(() => {
        fetchCategories(props.resto_Id);
    }, []);

    useEffect(() => {
        fetchItems(props.cat_Id);
    }, []);




    // function Home() {
    //     const[data, setData] = useState();
    //     const [am,setam]=useState();
    //     const [meme,setmeme]=useState();

    //     const [nana,setnana]=useState('63d27dca5e79a7c3ea468aaa')
    // const dodo={resto_id:nana}
    //     const getthecat_id=(_id)=>{
    //         console.log(_id)
    //     }


    // const amira = async()=>{
    //     const dol=`http://localhost:3000/categories?resto_id=63cfad2d07dffe46b40cf2c4`

    //     const { data }=await axios.get(dol);

    //     setam(data)


    // }
    // const getitems=async()=>{
    //     const uritems=`http://localhost:3000/categories/items?cat_id=63d978aa0e4f648cbb478e20`
    //     const {itemsdada}=await axios.get(uritems,)
    // }

    // useEffect(() => {
    //     amira()
    //   },[]);









    //   const [mero,setmero]=useState('63d978aa0e4f648cbb478e20')
    //   const amora={cat_id:mero}
    //   const [itemName, setitemName] =useState('')
    //   const [itemDesc, setitemDesc] =useState('')
    //   const [itemPrice, setitemPrice] =useState('')
    //   const [itemTag, setitemTag] =useState([''])

    //   useEffect(() => {
    //     axios.get("http://localhost:3000/categories/items?cat_id=63d978aa0e4f648cbb478e20")
    //     .then((res) =>{
    //         setData(res, data);
    //     });
    //   }, [meme]);





    return (
        <>
            <img src={logo} alt='logo for rest'></img><br></br>


            <h1>Restaurant</h1>





            <nav>

                <div className='rowed'>

                    {categories.map((category, index) => (
                        <button key={index} onClick={() => handleSubmit(category)}>{category.category_name}</button>
                    ))}
                </div>


            </nav>
            <>


                <div className='item'>
                    {items.map((item, index) => (



                        <div key={index} className='dish'>
                            <h3>{item.item_name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
                            <b>{item.item_price}</b>
                            <p>{item.item_description}</p>
                            <p>◉{item.item_tags.join(', ')}</p>
                        </div>


                    ))}





                </div>



            </>


        </>

    );
}

export default Categories;

















{/* <nav>
                {am.map(({ resto_id, category_name }) => (


                    <div key={resto_id} className='wrapper'>
                        <button type='submit'  >{category_name}</button>


                    </div>
                )
                )}
            </nav> */}




{/* 
// am?.map((hourframe,index)=>(
    //     <div key={hourframe._id} className='wrapper'>
    //                     <button onClick={console.log(hourframe._id)}>{hourframe.category_name} {hourframe._id}</button>


    //                 </div>  
    // )) */}



{/* { id, item_name, item_price, item_description, item_tags } */ }

      // {meme?.map((itemss, index) => (