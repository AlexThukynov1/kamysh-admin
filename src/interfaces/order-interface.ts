export interface IOrder {
    id: number,
    clientId: number,
    itemsId: number[],
    orderStatus: orderStatus,
    info?: string,
    managerId: number,
}

 export enum orderStatus {
    toDo,
    inProgres,
    paid,
    delivery,
    done,
    reset
}