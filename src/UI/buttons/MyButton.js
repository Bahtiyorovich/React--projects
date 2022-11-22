import React from 'react';

const MyButton = ({children, ...props}) => {
    /* 'Spred operatori  ...props' o'zidan oldingiz barcha atributlarni chaqiradi.
     Buni ishlatishdan maqsad misol uchun
     shu button ni istalgan joyda ishlatish 
     mumkin va istalgancha stil berish mumkin,
     bir-biriga umuman tasir ko'rsatmaydi
    */
    return (
        <button {...props} className="btn btn-primary w-100">
            {children}
        </button >
    );
};

export default MyButton;