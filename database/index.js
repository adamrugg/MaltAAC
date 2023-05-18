import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import { Kategoriji, Unigrams } from './models';

const adapter = new SQLiteAdapter({
    schema,
});

const database = new Database({
    adapter,
    modelClasses: [Kategoriji, Unigrams],
    actionsEnabled: true,
});

export default database;
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
