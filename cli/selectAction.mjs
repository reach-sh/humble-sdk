import { Blue, Yellow, exitWithMsgs, answerOrDie } from "./utils.mjs";

/** Select and perform an action from a list */
export async function selectAction(opts, acc) {
  Yellow(`Select an option:\n`);
  opts.map(({ title }, i) => Blue(`${i + 1}. ${title}`));
  console.log();
  const sIndex = await answerOrDie("Enter number for selection:");
  const index = Number(sIndex) - 1;
  if (index >= opts.length || index < 0) {
    return exitWithMsgs("Exit: Invalid option selected");
  }

  const { action } = opts[index];
  return action(acc);
}

export default selectAction;
