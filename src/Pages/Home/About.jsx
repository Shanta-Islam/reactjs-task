
import img1 from '../../assets/about/srimp-002.jpg';
import img2 from '../../assets/about/agriscience_001.jpg';
import img3 from '../../assets/about/chemical.jpg';
import img4 from '../../assets/about/abbl_002.jpg';
import img5 from '../../assets/about/textile_line.jpg';
import img6 from '../../assets/about/yarn_001.jpg';
const About = () => {
    return (
        <div className="mt-10">
            <h2 className="text-5xl font-extrabold text-center"><span className="text-[#005da9]">ABOUT</span> US</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-[28px] text-[#555] font-normal uppercase">Who <strong>We</strong> Are</h1>
                        <p className="py-6 text-sm text-[#666] text-justify font-normal">Apex Holdings Limited (AHL) is a holding company for the management of a wide range of manufacturing and export-oriented enterprises, ranging from Frozen & Convenience Foods, Textiles & Apparels, Chemicals & Agro businesses. The company was formed and registered in Bangladesh in 1998. The sponsors of AHL had set up its first export-oriented manufacturing enterprise in 1980 and have ever since grown into a sizable group of companies. As the number of companies under the management increased, the need for a management company to facilitate coordination and to maintain control over the individual company became necessary. </p>
                        <button className='btn rounded-[40px] bg-[#005da9] text-white px-6'>Learn More About Us</button>
                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className='grid grid-cols-3 gap-[1.5px]'>
                            <a href="#" target="_blank">
                                <img src={img1} alt="A photo of a fox" className='w-full max-w-xs transition duration-300 ease-in-out hover:scale-110' />
                            </a>
                            <a href="#" target="_blank">
                                <img src={img2} alt="A photo of a fox" className='w-full max-w-xs transition duration-300 ease-in-out hover:scale-110' />
                            </a>
                            <a href="#" target="_blank">
                                <img src={img3} alt="A photo of a fox" className='w-full max-w-xs transition duration-300 ease-in-out hover:scale-110'  />
                            </a>
                            <a href="#" target="_blank">
                                <img src={img4} alt="A photo of a fox" className='w-full max-w-xs transition duration-300 ease-in-out hover:scale-110' />
                            </a>
                            <a href="#" target="_blank">
                                <img src={img5} alt="A photo of a fox" className='w-full max-w-xs transition duration-300 ease-in-out hover:scale-110' />
                            </a>
                            <a href="#" target="_blank">
                                <img src={img6} alt="A photo of a fox" className='w-full max-w-xs transition duration-300 ease-in-out hover:scale-110' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;