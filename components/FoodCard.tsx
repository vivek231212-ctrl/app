
import React, { useState } from 'react';
import { FoodItem } from '../types';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div style={{ display: 'flex', padding: '12px 16px', flexDirection: 'column', gap: '12px', alignSelf: 'stretch', borderBottom: '0.7px dashed #1B1B1B', background: '#18191B', position: 'relative' }}>
      
      {item.isBestMatch && (
         <div style={{ display: 'flex', height: '26px', padding: '4px 8px', justifyContent: 'center', alignItems: 'center', gap: '6px', borderRadius: '4px', border: '1.6px solid #83B4D6', background: '#303A40', width: 'fit-content', marginBottom: '8px' }}>
            <span style={{ color: '#FFF', textAlign: 'center', fontFamily: 'Quicksand', fontSize: '10px', fontWeight: '700' }}>Best Match 💪</span>
         </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', alignSelf: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: '1 0 0' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             {/* Veg Icon */}
             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect width="12" height="12" rx="2" fill="white" />
                <circle cx="6" cy="6" r="3" fill={item.isVeg ? "#23A323" : "#D50A0D"} />
                <rect x="0.5" y="0.5" width="11" height="11" rx="1.5" stroke={item.isVeg ? "#23A323" : "#D50A0D"} strokeWidth="1" />
             </svg>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
             <span style={{ color: '#FFF', fontFamily: 'Quicksand', fontSize: '16px', fontWeight: '500' }}>{item.name}</span>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#FFF', fontFamily: 'Quicksand', fontSize: '14px', fontWeight: '700' }}>₹{item.price}</span>
                {item.originalPrice && <span style={{ color: '#EFEFEF', textDecoration: 'line-through', fontSize: '10px' }}>{item.originalPrice}</span>}
                {item.discount && (
                    <div style={{ padding: '2px 4px', borderRadius: '2px', background: '#D50A0D' }}>
                        <span style={{ color: '#FFF', fontSize: '10px' }}>{item.discount}</span>
                    </div>
                )}
             </div>
          </div>

          {item.tag && (
            <div style={{ display: 'flex', padding: '4px 6px', justifyContent: 'center', alignItems: 'center', borderRadius: '6px', border: '0.2px solid #807348', background: '#2B2413', width: 'fit-content' }}>
                <span style={{ color: '#F9E39E', fontFamily: 'Quicksand', fontSize: '10px', fontWeight: '500' }}>{item.tag}</span>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ color: '#26D326', fontSize: '12px', fontWeight: '500' }}>{item.nutrients.kcal}</span>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Nutrient label="Protein" value={item.nutrients.protein} color="#FEFFC4" />
                <Nutrient label="Carb" value={item.nutrients.carb} color="#AED2FF" />
                <Nutrient label="Fat" value={item.nutrients.fat} color="#BCA2FF" />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <img src={item.image} style={{ width: '80px', height: '80px', borderRadius: '12px', border: '1px solid #2F2F2F', objectFit: 'cover' }} alt={item.name} />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
            {quantity === 0 ? (
                <div 
                  onClick={() => setQuantity(1)}
                  style={{ display: 'flex', width: '80px', height: '38px', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', border: '1px solid #2F2F2F', background: '#222328', boxShadow: '0 4px 26px rgba(0,0,0,0.45)', cursor: 'pointer' }}
                >
                    <span style={{ color: '#00C600', fontSize: '16px', fontWeight: '600' }}>Add</span>
                </div>
            ) : (
                <div style={{ display: 'flex', width: '80px', height: '38px', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px', borderRadius: '8px', background: '#8FFC86' }}>
                    <button onClick={() => setQuantity(q => q - 1)} className="text-black font-bold">-</button>
                    <span className="text-black font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="text-black font-bold">+</button>
                </div>
            )}
            <span style={{ color: '#EFEFEF', fontSize: '10px' }}>Customisable</span>
          </div>
        </div>
      </div>
      
      {item.description && (
          <div style={{ color: '#EFEFEF', fontSize: '10px', marginTop: '4px' }}>
              {item.description} <span style={{ fontWeight: '600' }}>More</span>
          </div>
      )}
    </div>
  );
};

const Nutrient: React.FC<{ label: string, value: string, color: string }> = ({ label, value, color }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: color }} />
        <span style={{ color: '#FFF', fontSize: '12px', fontWeight: '700' }}>{value.replace('g', '')}</span>
        <span style={{ color: '#FFF', fontSize: '10px' }}>g</span>
        <span style={{ color: '#EFEFEF', fontSize: '12px', marginLeft: '2px' }}>{label}</span>
    </div>
);

export default FoodCard;
