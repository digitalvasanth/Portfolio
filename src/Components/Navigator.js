import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navigator = () => {
    const [backToTop, setBackToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200)
                setBackToTop(true);
            else
                setBackToTop(false)
        })
    }, []);
    if (backToTop)
        return (
            <div className="flex justify-end w-screen fixed  bottom-0 cursor-pointer animate-bounce h-3 lg:h-7">
                <Link to="sectionHome"
                    spy={true}
                    smooth={true}
                    duration={500}>
                    <div className="lg:-mt-20 -mt-16 lg:mr-10 mr-3 text-center animate-pulse bg-lime-500 text-4xl pt-1 lg:pt-3 h-10 w-10 lg:h-14 lg:w-14 rounded-full">
                        <img alt="top" src="https://cdn-icons-png.flaticon.com/512/44/44603.png" />
                    </div></Link>
            </div>
        );
}

export default Navigator;