import Navbar from './Navbar';
import Product from './Product';
import utsukushhi from '../assets/images/product-utsukushhi-hd.png';
import subarashi from '../assets/images/product-subarashi-hd.png';

const LandingPage = () => {
  return (
    <>
      <div className="h-screen bg-white mx-8 md:mx-20">
        {/* NAVBAR */}
        <Navbar />

        <div className="md:grid grid-cols-2 gap-5 items-center ">
          {/* UTSUKUSHHI */}
          <div className="mt-6 mb-6">
            <div className="flex flex-col justify-center items-center mb-2 md:text-[20px]">
              <h1 className="tracking-[5px]">UTSUKUSHHI</h1>
              <p>ふとろ貝味</p>
            </div>
            <img src={utsukushhi} />
          </div>

          {/* SOP SUBARASHI */}
          <div>
            <div className="flex flex-col justify-center items-center mb-2 md:text-[20px]">
              <h1 className="tracking-[5px]">SOP SUBARASHI</h1>
              <p>マリンプラセンタ</p>
            </div>
            <img src={subarashi} />
          </div>
        </div>

        {/* PRODUCT */}
        <Product />
      </div>
    </>
  );
};

export default LandingPage;
