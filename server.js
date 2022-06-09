import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// Use JSON file for storage
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);
// Read data from JSON file, this will set db.data content
await db.read();
db.data ||= { posts: [] };
// Alternatively, you can also use this syntax if you prefer
const { posts } = db.data;
posts.push("hello world");
await db.write();
