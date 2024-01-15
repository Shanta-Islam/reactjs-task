import { FaPlay } from "react-icons/fa6";
import img1 from '../../assets/gallery/atpml_intro.jpg';
import img2 from '../../assets/gallery/corporate_doc.jpg';
import img3 from '../../assets/gallery/covid_banner.jpg';
const Gallery = () => {
    const lists = [
        { id: 1, img: img1, icon: <FaPlay></FaPlay>, title: 'An Introduction to Apex Textile Complex of Apex Holdings Limited' },
        { id: 2, img: img2, icon: <FaPlay></FaPlay>, title: 'Apex Holdings Limited - Corporate Documentary' },
        { id: 3, img: img3, icon: <FaPlay></FaPlay>, title: 'Covid19 Safety Measurement at Apex Holdings Limited' }
    ]
    return (
        <div className="p-20 bg-[#242424]">
            <h2 className="text-5xl font-extrabold text-center text-white"><span className="text-[#005da9]">Video</span>  Gallery</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
                {
                    lists?.map(list => <>
                        <div key={list.id} className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={list.img}
                                className="max-w-xs"
                                alt="Louvre" />
                            <div
                                className="absolute bottom-0 left-0 right-0 top-0 w-full overflow-hidden  bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
                            <div className="relative bottom-0 left-36 right-0 -top-24 text-5xl cursor-pointer">
                                <a href="https://www.youtube.com/watch?v=fT5NoRSHkRI">{list.icon}</a>
                            </div>
                            <div><p className="text-[#afafaf]">{list.title}</p></div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Gallery;