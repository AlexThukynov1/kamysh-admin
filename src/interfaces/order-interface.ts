export default interface IOrder {
    id: number,
    clientId: number,
    itemsId: number[],
    orderStatus: orderStatus,
    info?: string,
    managerId: number,
}

 export enum orderStatus {
    toDo = 'Новий',
    inProgres = 'В роботі',
    paid =  'Оплачено',
    delivery = 'Доставка',
    done = 'Виконано',
    reset = 'Відмінений'
}