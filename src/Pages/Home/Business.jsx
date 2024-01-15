import { FaUtensils, FaIndustry, FaLeaf, FaSitemap } from "react-icons/fa6";
const Business = () => {
    const cards = [
        { id: 1, title: 'Our Food Division', icon: <FaUtensils /> },
        { id: 2, title: 'Our Textile Division', icon: <FaIndustry /> },
        { id: 3, title: 'Our Agro Division', icon: <FaLeaf /> },
        { id: 4, title: 'Our Diversified Division', icon: <FaSitemap /> },

    ]
    return (
        <div className="bg-[#EAEAEA] p-20">
            <h2 className="text-5xl font-extrabold text-center"><span className="text-[#005da9]">Our</span>  Business Segments</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                {
                    cards?.map(card => <>
                        <div key={card.id} className="card bg-base-100">
                            <div className="card-body mx-auto ">
                                <div className="text-5xl mx-auto">{card.icon}</div>
                                <h2 className="card-title">{card.title}</h2>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Business;