import React from 'react';

const brands = [
  { name: 'The British Bed Company', logo: ' ' },
  { name: 'Dunlopillo', logo: ' ' },
  { name: 'Hypnos', logo: ' ' },
  { name: 'Silentnight', logo: ' ' },
  { name: 'Sealy', logo: ' ' },
  { name: 'Relyon', logo: ' ' },
  { name: 'SleepSoul', logo: ' ' },
  { name: 'Emma', logo: ' ' },
  { name: 'Simba', logo: ' ' },
  { name: 'Relyon', logo: ' ' },
  { name: 'Hypnos', logo: ' ' },
  { name: 'The British Bed Company', logo: ' ' },
];

const BrandSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Brand</h2>
        <p className="text-gray-500">The biggest brands stocked with next day delivery.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center max-w-6xl mx-auto">
        {brands.map((brand, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-lg shadow-md flex justify-center items-center">
            <img src={brand.logo} alt={brand.name} className="h-16 object-contain" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-orange-600">
          View All
        </button>
      </div>
    </section>
  );
};

export default BrandSection;