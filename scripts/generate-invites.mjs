import { createHash } from "node:crypto";

const entries = process.argv.slice(2);

if (!entries.length) {
  console.error("Usage: npm run invites -- Alex=RIVER-482 Blake=FALLS-913");
  process.exit(1);
}

function cleanName(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.#$\[\]\/]/g, "")
    .slice(0, 20)
    .trim();
}

function cleanCode(value) {
  return String(value || "").trim().replace(/\s+/g, "").toUpperCase();
}

function hashCode(value) {
  return createHash("sha256").update(cleanCode(value)).digest("hex");
}

const invitedNames = {};
const inviteCodes = {};

for (const entry of entries) {
  const [rawName, ...codeParts] = entry.split("=");
  const name = cleanName(rawName);
  const code = cleanCode(codeParts.join("="));
  if (!name || !code) {
    console.error(`Invalid invite entry: ${entry}`);
    process.exit(1);
  }
  invitedNames[name] = true;
  inviteCodes[name] = { hash: hashCode(code) };
}

console.log(JSON.stringify({ invitedNames, inviteCodes }, null, 2));
