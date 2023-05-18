const migrate_1 = {
    toVersion: 1,
    steps: [
      {
        type: 'create_table',
        name: 'kategoriji',
        columns: [
          { name: '_id', type: 'string', isIndexed: true },
          { name: 'word', type: 'string' },
          { name: 'normalised_word', type: 'string' },
          { name: 'category', type: 'string' },
          { name: 'is_hidden', type: 'boolean' },
        ],
      },
      {
        type: 'create_table',
        name: 'unigrams',
        columns: [
          { name: '_id', type: 'string', isIndexed: true },
          { name: 'word', type: 'string' },
          { name: 'normalised_word', type: 'string' },
          { name: 'category', type: 'string' },
          { name: 'root', type: 'string', isOptional: true },
          { name: 'is_hidden', type: 'boolean' },
          { name: 'is_core', type: 'boolean' },
        ],
      },
    ],
  };
  
  export default migrate_1;
  