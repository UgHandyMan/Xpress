import { createRxDatabase, addRxPlugin } from 'rxdb';
import SQLiteAdapter from 'react-native-sqlite-adapter';

// Import collection schemas
import { depositsSchema } from './schemas';

// Add the SQLite adapter to RxDB
addRxPlugin(SQLiteAdapter);

// Database configuration
const dbConfig = {
  name: 'expressdb',               // Name of the database
  adapter: 'react-native-sqlite',  // SQLite adapter
  password: 'password',            // Optional: encryption password
};

// Function to create the RxDatabase instance
export const createDatabase = async () => {
  const db = await createRxDatabase(dbConfig);

  // Create collections
  await Promise.all([
    db.collection({
      name: 'deposits',
      schema: depositsSchema,
    }),
    // Add more collections here if needed
  ]);

  return db;
};

