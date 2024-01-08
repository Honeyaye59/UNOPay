import { TransferHistory } from '../models/transferHistoryModel'

export const transferHistories: TransferHistory[] = [
    {id: 1, groupId: 1, senderId: 1, receiverId: 3, amount: 300, date: new Date()},
    {id: 2, groupId: 2, senderId: 3, receiverId: 1, amount: 200, date: new Date()},
    {id: 3, groupId: 2, senderId: 1, receiverId: 2, amount: 1000, date: new Date()},
    {id: 4, groupId: 5, senderId: 1, receiverId: 10, amount: 300, date: new Date()},
    {id: 4, groupId: 5, senderId: 1, receiverId: 6, amount: 700, date: new Date()},
    {id: 4, groupId: 5, senderId: 1, receiverId: 7, amount: 450, date: new Date()},
    {id: 4, groupId: 5, senderId: 1, receiverId: 8, amount: 200, date: new Date()},
]