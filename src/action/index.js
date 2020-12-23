export const addRow =  (row) => {
    return {
        type: 'addRow',
        payload:row
    };
};

export const removeRow =  (index) => {
    return {
        type: 'removeRow',
        payload:index
    };
};

export const createCard =  (index) => {
    return {
        type: 'createCard',
        payload:index
    };
};

export const updateCard =  (index) => {
    return {
        type: 'updateCard',
        payload:index
    };
};

  