import React from 'react';

const ManfaatUtsukushhi = () => {
  return (
    <div className="mt-6">
      <h1 className="mb-6 font-bold">Manfaat yang terkandung dalam UTSUKUSHHI :</h1>
      <div className="grid lg:grid-cols-2 md:gap-4 text-[14px]">
        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">usus</p>
          <ul className="list-disc list-inside">
            <li>memperlancar pencernaan</li>
            <li>mencegah kanker usus</li>
            <li>menstabilkan berat badan</li>
            <li>detox awal proses diet</li>
          </ul>
        </div>

        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">hati</p>
          <ul className="list-disc list-inside">
            <li>membuang racun/toxin dari dalam hati</li>
            <li>mencegah dan memperbaiki hepatitis</li>
          </ul>
        </div>

        <div className="bg-slate-200 px-2 py-1 rounded-xl mb-2">
          <p className="font-bold uppercase mb-2">kulit</p>
          <ul className="list-disc list-inside">
            <li>meremajakan dan melembabkan kulit</li>
            <li>mencerahkan kulit</li>
            <li>mengencangkan kulit</li>
            <li>memperbaiki struktur kulit</li>
            <li>memudarkan bintik hitam / pigmentasi </li>
            <li>mengurangi produksi sebum</li>
            <li>mengecilkan pori pori</li>
            <li>mengurangi hitam pada kantung mata</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManfaatUtsukushhi;
