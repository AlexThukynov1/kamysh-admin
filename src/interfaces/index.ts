export interface IClient {
    id: number,
    firstName: string,
    lastName?: string,
    email: string,
    phone: string, 
}

export interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    imgSrc: string,
    availible: boolean
}

export interface IOrder {
    id: number,
    clientId: number,
    itemsId: number[],
    orderStatus: orderStatus,
    info?: string
}

export interface Admin {
    id: number;
    username: string;
    email: string;
    role: 'admin'; 
  }  
export interface Manager {
    id: number;
    username: string;
    email: string;
    role: 'manager';     
  }

 export enum orderStatus {
    toDo,
    inProgres,
    paid,
    delivery,
    done,
    reset
}