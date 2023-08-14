import React from 'react';

const ManfaatSubarashi = () => {
  return (
    <div className="mb-10">
      <h1 className="mb-6 font-bold">Manfaat yang terkandung dalam SOP SUBARASHI :</h1>
      <div className="grid lg:grid-cols-2 md:gap-4 text-[14px]">
        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">jantung</p>
          <ul className="list-disc list-inside">
            <li>memperlancar sirkulasi darah</li>
            <li>membantu menurunkan tekanan darah</li>
            <li>mencegah penyakit jantung</li>
          </ul>
        </div>

        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">pembuluh darah</p>
          <ul className="list-disc list-inside">
            <li>anti hipertensi dan mencegah pembekuan darah</li>
            <li>mencegah kolestrol</li>
            <li>mencegah terjadinya agregasi trombosit</li>
          </ul>
        </div>

        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">otak</p>
          <ul className="list-disc list-inside">
            <li>mengurangi resiko terjadinya stroke</li>
            <li>membantu menjaga kestabilan aliran darah dan oksigen</li>
          </ul>
        </div>

        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">pankreas</p>
          <ul className="list-disc list-inside">
            <li>mengurangi resiko diabetes</li>
            <li>membantu memperbaiki toleransi tubuh terhadap glukosa</li>
          </ul>
        </div>
        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">sendi</p>
          <ul className="list-disc list-inside">
            <li>asam hialuronat dan kolagen berfungsi sebagai pelumas sendi</li>
            <li>mengurangi kadar air dalam sendi</li>
            <li>mengurangi resiko peradangan</li>
          </ul>
        </div>
        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">tulang</p>
          <ul className="list-disc list-inside">
            <li>memperkuat tulang dan anti kropos tulang</li>
            <li>mencegah osteoporosis</li>
          </ul>
        </div>
        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">rambut</p>
          <ul className="list-disc list-inside">
            <li>memperkuat akar rambut</li>
            <li>membantu pertumbuhan rambut</li>
          </ul>
        </div>
        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">ginjal</p>
          <ul className="list-disc list-inside">
            <li>mencegah eksresi albumin pada urin (ginjal bocor)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManfaatSubarashi;
