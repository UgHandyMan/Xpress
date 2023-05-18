import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import pouchdbAdapterMemory from 'pouchdb-adapter-memory'; // Use a specific adapter for your target platform

// Add necessary plugins
addRxPlugin(pouchdbAdapterMemory);

// Define the schema for the 'deposits' collection
const depositsSchema = {
  title: 'Deposits Schema',
  description: 'Schema for the deposits collection',
  version: 0,
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      primary: true,
    },
    name: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    amount: {
      type: 'number',
    },
    notes: {
      type: 'string',
    },
  },
  required: ['name', 'date', 'amount'],
};

// Create and export the RxDatabase instance
export async function createDatabase() {
  const db: RxDatabase = await createRxDatabase({
    name: 'my-database', // Provide a name for your database
    adapter: 'memory', // Use the appropriate adapter for your target platform
  });

  // Add the 'deposits' collection to the database
  await db.collection({
    name: 'deposits',
    schema: depositsSchema,
  });

  return db;
}
