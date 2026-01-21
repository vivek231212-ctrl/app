
import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div style={{ display: 'flex', width: '358px', alignItems: 'flex-start', gap: '12px', position: 'relative' }}>
      <div style={{ display: 'flex', width: '316px', height: '46px', alignItems: 'flex-start', gap: '12px', flexShrink: 0, position: 'relative' }}>
        <div style={{ display: 'flex', padding: '10px 12px', alignItems: 'center', gap: '8px', flex: '1 0 0', alignSelf: 'stretch', borderRadius: '24px', background: '#222328', position: 'relative' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#ABB7C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.75 15.75L12.525 12.525" stroke="#ABB7C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text"
            placeholder="Search ..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ background: 'transparent', border: 'none', outline: 'none', color: '#FFF', fontFamily: 'Quicksand', fontSize: '14px', width: '100%' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', position: 'relative' }}>
        <div style={{ width: '24px', height: '14px', color: '#FFF', textAlign: 'center', fontFamily: 'Quicksand', fontSize: '12px', fontWeight: '700' }}>VEG</div>
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6" width="26" height="12" rx="6" fill="#1F9653"/>
          <circle cx="20.7266" cy="12" r="8" fill="white" stroke="#1F9653" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
