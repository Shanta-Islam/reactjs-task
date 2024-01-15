import { FaUsers, FaShip, FaChartLine   } from "react-icons/fa6";
import { FaUniversity  } from "react-icons/fa";
const Strength = () => {
    const lists = [
        { id: 1, title: 'TOTAL EMPLOYEE', total: '22,000+', icon: <FaUsers /> },
        { id: 2, title: 'TOTAL BUSINESS CONCERNS', total: '15+', icon: <FaUniversity /> },
        { id: 3, title: 'EXPORT ORIENTED COMPANIES',total: '6', icon: <FaShip /> },
        { id: 4, title: 'PUBLIC LISTED COMPANIES', total: '2', icon: <FaChartLine /> },

    ]
    return (
        <div className="p-20">
            <h2 className="text-5xl font-extrabold text-center"><span className="text-[#005da9]">KEY</span> STRENGTHS</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                {
                    lists?.map(card => <>
                        <div key={card.id} className="card bg-base-100">
                            <div className="card-body mx-auto ">
                                <div className="text-6xl mx-auto text-[#555]">{card.icon}</div>
                                <div className="text-5xl mx-auto text-[#005da9] font-bold text-[48px]">{card.total}</div>
                                <h2 className="text-[15px] mx-auto text-[#555]">{card.title}</h2>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Strength;