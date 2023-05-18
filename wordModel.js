import { Q } from '@nozbe/watermelondb';

export const getWordsByCategory = async (database, category) => {
  const unigramsCollection = database.collections.get('unigrams');
  const words = await unigramsCollection
    .query(Q.where('category', category))
    .fetch();
  return words;
};
