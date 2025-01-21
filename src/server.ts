import schedule from "node-schedule";

const job = schedule.scheduleJob("56 * * * * *", () => {
  console.log("job", new Date().toISOString());
});
