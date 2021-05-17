import * as cartActions from './shopping-cart.actions';

export interface IProduct {
    sno : string;
    name : string;
    image : string;
    price : number;
    qty : number;
}
export interface CartState {
    products : IProduct[]
}

let initialState:CartState = {
    products : [
        {
            sno : 'AA00AB12',
            name : 'Mi Watch',
            image : 'data:image/jpeg;base64,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',
            price : 2500,
            qty : 2
        },
        {
            sno : 'AA00AB13',
            name : 'Apple Watch',
            image : 'data:image/jpeg;base64,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',
            price : 8500,
            qty : 2
        },
        {
            sno : 'AA00AB14',
            name : 'Oppo Watch',
            image : 'data:image/jpeg;base64,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',
            price : 3500,
            qty : 2
        }
    ]
}

export const reducer = (state = initialState , action:cartActions.ActionType):CartState => {
    switch(action.type) {
        case cartActions.INCR_PRODUCT_QTY:
            let incrItems:IProduct[] = state.products.map(product => {
                if(product.sno === action.payload.id){
                    return {
                        ...product,
                        qty : product.qty + 1
                    }
                }
                else{
                    return product;
                }
            });
            return {
                products : [...incrItems]
            };
        case cartActions.DECR_PRODUCT_QTY:
            let decrItems:IProduct[] = state.products.map(product => {
                if(product.sno === action.payload.id){
                    return {
                        ...product,
                        qty : (product.qty - 1 > 0) ? product.qty - 1 : 1
                    }
                }
                else{
                    return product;
                }
            });
            return {
                products : [...decrItems]
            };
        default: return state;
    }
};