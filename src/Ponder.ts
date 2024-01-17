import { ponder } from "@/generated";

ponder.on("Ponder:Approval", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("Ponder:OwnershipTransferred", async ({ event, context }) => {
  console.log(event.args);
});
