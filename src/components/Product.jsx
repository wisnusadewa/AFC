import efsa from '../assets/images/int-efsa-hd.png';
import mims from '../assets/images/int-mims-hd.png';
import ministry from '../assets/images/int-ministry-hd.png';
import halal from '../assets/images/halal-hd.png';
import subarashi_bronze from '../assets/images/subarashi-bronze-hd.png';
import subrashi_sertifikat from '../assets/images/subarashi-sertifikat-hd.png';
import utsukushhi from '../assets/images/product-utsukushhi-hd.png';
import ManfaatSubarashi from './manfaatSubarashi';

// image sop subarashi
import fruit from '../assets/images/komp_subarashi/ing-fruit-hd.png';
import glutathione from '../assets/images/komp_subarashi/ing-glutathione-hd.png';
import marine from '../assets/images/komp_subarashi/ing-marine-hd.png';
import pearl from '../assets/images/komp_subarashi/ing-pearl-barley-hd.png';
import sardine from '../assets/images/komp_subarashi/ing-sardine-hd.png';
import vitc from '../assets/images/komp_subarashi/ing-vit-c-hd.png';

// image utsukushhii
import salmon from '../assets/images/komp_utsukushhii/ing-salmon-hd.png';
import takara from '../assets/images/komp_utsukushhii/ing-takara-hd.png';
import resveratrol from '../assets/images/komp_utsukushhii/ing-resveratrol-hd.png';
import pineapple from '../assets/images/komp_utsukushhii/ing-pineapple-hd.png';
import lactic from '../assets/images/komp_utsukushhii/ing-lactic-acid-hd.png';
import kiwised from '../assets/images/komp_utsukushhii/ing-kiwised-hd.png';
import collagen from '../assets/images/komp_utsukushhii/ing-fish-collagen-hd.png';
import bifido from '../assets/images/komp_utsukushhii/ing-bifido-hd.png';
import ManfaatUtsukushhi from './manfaatUtsukushhi';

const Product = () => {
  return (
    <div className="h-screen mt-16 mx-2">
      {/*  */}
      <div className="grid grid-cols-3 gap-4 items-center mb-6 md:gap-10">
        <img src={efsa} />
        <img src={mims} />
        <img src={ministry} />
      </div>

      {/*  */}
      <div className="flex mb-20">
        <p className="text-justify text-[13px] md:text-[15px]">
          AFC Life Science semakin memperkuat posisinya di dunia kesehatan dan ilmiah. Salah satunya dengan terdaftarnya produk AFC Life Science (SOP Subarashi dan Utsukushhii) di Buku MIMS. MIMS atau Monthly Index of Medical Specialities,
          merupakan buku yang berisi daftar obat dan suplemen kesehatan yang telah diakui secara international dan direferensikan secara ilmiah di dunia kesehatan atau medis.
        </p>
      </div>

      {/* HALAL */}
      <div className="mb-20">
        <img src={halal} />
        <p className="text-justify text-[13px] md:text-[15px]">
          SOP Subarashi dan Utsukushhii telah memenuhi syarat Halal menurut Syariat Islam, sehingga kedua produk ini mendapatkan sertifikat Halal Aunthetication dari NAHA (Nippon Asia Halan Association).
        </p>
      </div>

      {/* Kandungan Product Subarashi */}
      <div>
        <div className="flex items-center justify-center bg-yellow-300 mb-10 h-10">
          <h1 className="text-[16px] font-bold">Kandungan Product Subarashi</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 items-center">
          <img src={subarashi_bronze} className="col-span-2" />
          <img src={subrashi_sertifikat} />
        </div>
        <p className="text-justify text-[13px] md:text-[15px]">SOP Subarashi telah memenangkan International Award Monde Selection.</p>

        <div className="mt-4">
          <p className="text-justify text-[13px] md:text-[15px]">
            SOP Subarashi adalah produk Triple Peptide pertama di Jepang yang memiliki bahan aktif utama yaitu Marine Placenta dari ikan Oncorhynthus Keta Salmon di Hokkaido, Sardine Peptide dan Vegan Peptide (Fruit Flow) dan juga 7 bahan
            aktif lainnya.
          </p>
          <div className="grid grid-cols-3 gap-2 mt-4 mb-10">
            {/* isi kandungan  */}
            <img src={fruit} />
            <img src={glutathione} />
            <img src={marine} />
            <img src={pearl} />
            <img src={sardine} />
            <img src={vitc} />
          </div>
        </div>

        <div>
          <ManfaatSubarashi />
        </div>

        {/* ============== */}

        {/* KANDUNGAN PRODUCT UTSUKUSHHI */}
        <div className="flex items-center justify-center bg-yellow-300 mb-10 h-10">
          <h1 className="text-[16px] font-bold">Kandungan Product Utsukushhii</h1>
        </div>
        <div className="mb-10">
          <img src={utsukushhi} alt="Utsukushhii" />
          <p className="text-justify text-[13px] md:text-[15px]">UTSUKUSHHII adalah produk yang memiliki bahan utama dari Salmon Milt DNA dari ikan Oncorhyntus Keta Salmon dari Hokkaido, dan dilengkapi dengan 11 bahan aktif lainnya.</p>
        </div>
        {/* isi kandungan */}
        <div className="pb-20">
          <div className="grid grid-cols-4 ">
            <img className="col-start-2 col-span-2" src={salmon} alt="salmon" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <img src={takara} alt="" />
            <img src={resveratrol} alt="" />
            <img src={pineapple} alt="" />
            <img src={lactic} alt="" />
            <img src={kiwised} alt="" />
            <img src={collagen} alt="" />
            <img src={bifido} alt="" />
            <img src={glutathione} alt="" />
          </div>

          <div>
            <ManfaatUtsukushhi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
