import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center text-orange-600 p-10 text-center font-medium text-xl ">
                Hi, I was unable to implement User auth for now due to time
                constraints and lack of user auth experience (as I have mostly
                worked on the frontend side of team projects)
                <br />
                <br />
                As User Auth is not implemented, upvotes features is still
                pending as without auth, a user will be able to upvote multiple
                times.
                <br />
                <br />
                Current features are create/delete Post, create/delete/update
                Comment, create/delete/update nested Comments with basic styling
                asthetics. The website is fully responsive.
            </div>
            <div className="flex justify-center items-center text-orange-600 p-10 text-center font-medium text-xl ">
                <Link to="/posts">
                    Click to see posts (Current user is Prath)
                </Link>
            </div>
        </>
    );
};

export default Home;
