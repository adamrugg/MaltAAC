// schema.js
import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'kategoriji',
      columns: [
        { name: 'word', type: 'string' },
        { name: 'normalised_word', type: 'string' },
        { name: 'category', type: 'string' },
        { name: 'is_hidden', type: 'boolean' },
      ],
    }),
    tableSchema({
      name: 'unigrams',
      columns: [
        { name: 'word', type: 'string' },
        { name: 'normalised_word', type: 'string' },
        { name: 'category', type: 'string' },
        { name: 'root', type: 'string', isOptional: true },
        { name: 'is_hidden', type: 'boolean' },
        { name: 'is_core', type: 'boolean' },
      ],
    }),
  ],
});
