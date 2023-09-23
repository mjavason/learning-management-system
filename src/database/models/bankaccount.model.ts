// import { Schema, model } from "mongoose";
// import { IBankAccount } from "../interfaces/BankAccount";

// const BankAccountModal = new Schema<IBankAccount>(
//     {
//         accountReference: String,
//         accountFor: {
//             type: String,
//             enum: ["admin", "mda", "user"],
//         },
//         userId: String,
//         balance: {
//             type: Number,
//             default: 0,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// export const BankAccount = model<IBankAccount>("BankAccount", BankAccountModal);
