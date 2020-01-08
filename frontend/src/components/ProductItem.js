import React from 'react';

function ProductionItem({ item }) {

  return (
    <div>
      <div style={{ border: '1px solid #e0e0e0' }}>
        <img src={item.img} style={{ padding: '20px' }} width="250px" height="250px" />
      </div>
      <div style={{ fontSize: '18px', color: '#111' }}>
        {item.title}
      </div>
      <div style={{ fontSize: '16px', color: '#ae0000', fontWeight: 'bold' }}>
        {item.price} 원
      </div>
    </div>
  );
}

export default ProductionItem;