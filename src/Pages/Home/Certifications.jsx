import img1 from '../../assets/certifications/bsci.png';
import img2 from '../../assets/certifications/fsc.jpg';
import img3 from '../../assets/certifications/gots.png';
import img4 from '../../assets/certifications/gsv.png';
const Certifications = () => {
    const lists = [
        { id: 1, icon: img1 },
        { id: 2, icon: img2 },
        { id: 3, icon: img3 },
        { id: 4, icon: img4 },


    ]
    return (
        <div>
            <div className="p-20">
                <h2 className="text-5xl font-extrabold text-center"><span className="text-[#005da9]">Our</span>   Certifications</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                    {
                        lists?.map(card => <>
                            <div key={card.id} className="card bg-base-100">
                                <div className="card-body mx-auto ">
                                    <img src={card.icon} alt="" />
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Certifications;