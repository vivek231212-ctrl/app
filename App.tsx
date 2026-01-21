
import React, { useState, useEffect } from 'react';
import { FoodItem } from './types';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import FoodCard from './components/FoodCard';
import { getSmartRecommendation } from './services/geminiService';

const FOOD_DATA: FoodItem[] = [
  {
    id: '1',
    name: 'Grilled Paneer Tikka',
    price: '240',
    nutrients: { protein: '25g', carb: '13g', fat: '52g', kcal: '634 kcal' },
    tag: 'Rich Calcium',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/cd5de1ef1f42243c430cc5372280dca47ed6264b?width=160',
    isVeg: true,
    category: 'Starter'
  },
  {
    id: '2',
    name: 'Hyderabadi Biryani',
    price: '240',
    originalPrice: '240',
    discount: '25% OFF',
    nutrients: { protein: '24g', carb: '24g', fat: '24g', fiber: '24g', kcal: '158 kcal' },
    tag: 'Rich Calcium',
    image: 'https://picsum.photos/200/200?random=1',
    isVeg: true,
    isBestMatch: true,
    category: 'Main Course'
  },
  {
    id: '3',
    name: 'Mix Special Fruits',
    price: '240',
    originalPrice: '240',
    discount: '25% OFF',
    nutrients: { protein: '24g', carb: '24g', fat: '24g', fiber: '24g', kcal: '340 kcal' },
    tag: 'High Protein',
    image: 'https://picsum.photos/200/200?random=2',
    isVeg: true,
    isBestMatch: true,
    description: 'Our Mix Fruit is made from the finest ingredients and veggie...',
    category: 'Starter'
  }
];

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [aiRecommendation, setAiRecommendation] = useState("''Tap to see what's best for you ''");
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleAiAsk = async () => {
    setIsAiLoading(true);
    const rec = await getSmartRecommendation("I need a high protein snack");
    setAiRecommendation(rec || "Focus on protein-rich options!");
    setIsAiLoading(false);
  };

  const filteredItems = FOOD_DATA.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeFilter === 'All') return matchesSearch;
    if (activeFilter === 'High Protein') return matchesSearch && parseInt(item.nutrients.protein) >= 24;
    return matchesSearch;
  });

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div style={{ width: '390px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '40px' }}>
        {/* Header Section */}
        <div className="px-4 pt-4">
          <Header />
        </div>

        {/* Search and Veg Toggle Section */}
        <div className="px-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* AI Banner Section */}
        <div className="px-4 cursor-pointer" onClick={handleAiAsk}>
            <AiBanner text={isAiLoading ? "Asking AI..." : aiRecommendation} />
        </div>

        {/* Filter Section */}
        <div className="px-4">
          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        {/* Sorting Header */}
        <div className="px-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <span className="text-[18px] font-semibold">High protein</span>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=40" className="w-6 h-6 invert" alt="sort" />
            </div>
            <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="white" fillOpacity="0.2" />
                    <path d="M6 3V9M3 6H9" stroke="white" strokeWidth="1.2" />
                </svg>
                <span className="text-[10px] text-[#EFEFEF]">Sorted by highest protein</span>
            </div>
        </div>

        {/* Food Items List */}
        <div className="flex flex-col gap-4">
          {filteredItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        {/* Category Header: Starter */}
        <div style={{ background: '#1B1B1B', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="text-[18px] font-semibold">Starter</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12.5L10 7.5L15 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      </div>
    </div>
  );
};

const AiBanner: React.FC<{ text: string }> = ({ text }) => (
    <div style={{ position: 'relative', height: '38px', width: '100%' }}>
         <svg width="358" height="38" viewBox="0 0 358 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H346C352.627 0 358 5.37258 358 12V24C358 30.6274 352.627 36 346 36H12C5.37259 36 0 30.6274 0 24V12Z" fill="#8FFC86"/>
            <text fill="black" x="12" y="24" style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Quicksand' }}>{text}</text>
            <path d="M337.975 21.8547L341.767 18.496C342.069 18.1972 342.087 17.8237 341.767 17.5637L337.975 14.1453C337.727 13.9271 337.323 13.96 337.105 14.208C336.801 14.5905 337.01 14.976 337.168 15.0776L339.762 17.3785L329.426 17.3785C329.085 17.3785 328.804 17.6593 328.804 18C328.804 18.3407 329.052 18.6215 329.396 18.6215L339.759 18.6215L337.165 20.9224C336.917 21.1704 336.884 21.544 337.102 21.792C337.353 22.04 337.727 22.0729 337.975 21.8547Z" fill="black"/>
        </svg>
    </div>
);

export default App;
