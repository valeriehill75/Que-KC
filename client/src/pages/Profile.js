import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import TableArea from '../components/TableArea/index';
import ProfileInfo from '../components/ProfileInfo/index';
import YelpAPI from '../util/YelpAPI';
import { YelpContext } from '../util/YelpContext';


export default function Profile() {

    const [restaurant, setRestaurant] = useState({});

    // get restaurant info from yelp and set state equal to res
    useEffect(() => {
        YelpAPI.getRestaurants()
            .then(({ data }) => {
                console.log(data)
                setRestaurant(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Navbar />
            {/* pass in length of rated restaurants to ProfileInfo */}
            <ProfileInfo />
            {/* pass in new state to TableArea */}
            <YelpContext.Provider value={restaurant}>
                <TableArea />
            </YelpContext.Provider>

            <Footer />
        </>
    )
}