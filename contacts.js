import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const result = contacts.find((item) => item.id === contactId);
  return result;
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const index = contacts.findIndex((item) => item.id === contactId);
  contacts.splice(index, 1);
  return contacts;
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  return contacts;
}
const action = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
export default action;
