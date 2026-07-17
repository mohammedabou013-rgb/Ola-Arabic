import fs from 'node:fs';
import path from 'node:path';

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  securityQuestion: string;
  securityAnswerHash: string;
  createdAt: string;
}

const dataDir = path.join(process.cwd(), '.data');
const usersFile = path.join(dataDir, 'users.json');

function ensureFile() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(usersFile)) fs.writeFileSync(usersFile, '[]', 'utf-8');
}

export function getUsers(): User[] {
  ensureFile();
  return JSON.parse(fs.readFileSync(usersFile, 'utf-8')) as User[];
}

export function saveUsers(users: User[]) {
  ensureFile();
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
}

export function findUserByEmail(email: string): User | undefined {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function addUser(user: User) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}

export function updateUser(id: string, updates: Partial<User>) {
  const users = getUsers();
  const idx = users.findIndex(u => u.id === id);
  if (idx >= 0) { users[idx] = { ...users[idx], ...updates }; saveUsers(users); }
}
