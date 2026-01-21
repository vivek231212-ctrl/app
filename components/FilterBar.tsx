
import React from 'react';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  const filters = ['All', 'High Protein', 'Low Kcal', 'Gluten Free'];

  return (
    <div style={{ display: 'flex', width: '350px', alignItems: 'flex-start', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }} className="no-scrollbar">
      {filters.map(filter => {
        const isActive = activeFilter === filter;
        return (
          <div 
            key={filter}
            onClick={() => onFilterChange(filter)}
            style={{ 
              display: 'flex', 
              height: '32px', 
              padding: isActive ? '8px 12px' : '10px 12px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '10px', 
              borderRadius: '16px', 
              border: isActive ? '0.4px solid #00C600' : 'none',
              background: isActive ? '#0C180C' : '#222328',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            <span style={{ 
                color: isActive ? '#FFF' : '#CDCDCD', 
                fontFamily: 'Quicksand', 
                fontSize: '12px', 
                fontWeight: '500' 
            }}>{filter}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FilterBar;
