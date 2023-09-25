import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/donations.json')
            },
            {
                path:'/donation',
                element:<Donation></Donation>,
                loader:()=>fetch('/donations.json')

            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/donationDetails/:id',
                element:<DonationDetails></DonationDetails>,
                loader:()=>fetch('/donations.json')
            }
        ]
    },

])


export default router;