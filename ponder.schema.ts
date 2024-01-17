import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
    Account: p.createTable({
        id: p.string(),
        balance: p.bigint(),
        isOwner: p.boolean(),
        approvals: p.many("Approval.ownerId"),
        transferFromEvents: p.many("TransferEvent.fromId"),
        transferToEvents: p.many("TransferEvent.toId"),
    }),
    Approval: p.createTable({
        id: p.string(),
        amount: p.bigint(),
        spender: p.string(),
        ownerId: p.string().references("Account.id"),
        owner: p.one("ownerId"),
    }),
    TransferEvent: p.createTable({
        id: p.string(),
        amount: p.bigint(),
        fromId: p.string().references("Account.id"),
        toId: p.string().references("Account.id"),
        timestamp: p.int(),
        from: p.one("fromId"),
        to: p.one("toId"),
    }),
}));
