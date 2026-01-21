
import React from 'react';

const Header: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '56px', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', position: 'relative' }}>
        <div style={{ display: 'flex', width: '245.454px', alignItems: 'flex-start', gap: '2px', position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', flex: '1 0 0', position: 'relative' }}>
            <svg width="246" height="20" viewBox="0 0 246 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text fill="white" style={{ whiteSpace: 'pre' }} fontFamily="Quicksand" fontSize="16" fontWeight="600"><tspan x="0" y="16">Boketto</tspan></text>
              <path d="M74.2351 3.19259C75.3965 3.63973 76.6235 3.92858 77.8581 4.07906C77.881 4.08187 77.9038 4.08468 77.9274 4.08757C78.0377 4.10103 78.1479 4.11384 78.2584 4.12573C78.713 4.17863 79.0543 4.32066 79.3491 4.6801C79.518 4.90939 79.6215 5.14875 79.6224 5.43462" fill="#AFCC1E"/>
            </svg>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
        <div style={{ width: '30px', height: '30px', overflow: 'hidden', position: 'relative' }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ position: 'absolute', left: '2px', top: '2px' }}>
            <path d="M13 -0.5C20.4558 -0.5 26.5 5.54416 26.5 13C26.5 20.4558 20.4558 26.5 13 26.5C5.54416 26.5 -0.5 20.4558 -0.5 13C-0.5 5.54416 5.54416 -0.5 13 -0.5Z" fill="#86A788" stroke="#2F2F2F"/>
          </svg>
          <div style={{ color: '#000', textAlign: 'center', fontFamily: 'Quicksand', fontSize: '12px', fontWeight: '600', position: 'absolute', left: '11px', top: '11px', width: '8px', height: '8px' }}>K</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
