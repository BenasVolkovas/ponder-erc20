import { ponder } from "@/generated";
import { ZeroAddress } from "ethers";

ponder.on("Ponder:Transfer", async ({ event, context }) => {
    const { Account } = context.db;

    if (event.args.from !== ZeroAddress) {
        const sender = await Account.update({
            id: event.args.from,
            data: ({ current }) => ({
                balance: current.balance - event.args.value,
            }),
        });
    }

    if (event.args.to !== ZeroAddress) {
        const receiver = await Account.upsert({
            id: event.args.to,
            create: {
                balance: event.args.value,
                isOwner: false,
            },
            update: ({ current }) => ({
                balance: current.balance + event.args.value,
            }),
        });
    }
});
