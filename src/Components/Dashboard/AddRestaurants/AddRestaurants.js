import React from 'react';

// const restaurants = [
//     {
//         id:'1',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/qMm3d8dd/res1.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'2',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/L43yL0jB/res2.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {   
//         id:'3',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/CxzmyhXm/res3.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'4',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/m2rSMZLB/res4.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'5',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/SsFh2tcb/res5.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'6',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/X7H6cv98/res6.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'7',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/MZYSH5Tg/res7.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'8',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/Jnc9y71j/res8.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'9',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/CL69nQVr/res9.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'10',
//         name: 'Sultans Dine',
//         Location: 'uttara', 
//         type:'cafe',
//         image: 'https://i.postimg.cc/W3nHN9nn/res10.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'11',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/rFzPTNt1/res11.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]

//     },
//     {
//         id:'12',
//         name: 'Sultans Dine',
//         Location: 'uttara',
//         type:'cafe',
//         image: 'https://i.postimg.cc/7L4953bQ/res12.jpg',
//         menu: [
//             {
//                 dishName: 'kachchi platter',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice: 890,
//             },
//             {
//                 dishName:'Morog Polao',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:990,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//             {
//                 dishName:'Badam sharbat',
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi recusandae, quidem odio earum vero?',
//                 dishPrice:70,
//             },
//         ]
//     }
// ]

const AddRestaurants = () => {


    const handleSubmit = async () => {

        // const settings = {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },body: JSON.stringify({restaurants})

        // };
        // try {
        //     const fetchResponse = await fetch(`http://localhost:4040/addRestaurants`, settings);
        //     const data = await fetchResponse.json();
        //     console.log(data);
        // } catch (error) {
        //     console.log(error);
        // }  

        // fetch('http://localhost:4040/addRestaurants',{
        //     method: 'POST',
        //     headers:{'Content-type':'application/json'},
        //     body: JSON.stringify({restaurants})
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
    }


    return (
        <div>
            {/* <button onClick={handleSubmit}>Add Restarant</button> */}
        </div>
    );
};

export default AddRestaurants;