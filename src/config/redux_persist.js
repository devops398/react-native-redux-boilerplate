import immutablePersistenceTransform from '../core/store/immutable_persistence_transform'
import { persistentStoreBlacklist, persistentStoreWhitelist } from '../core/reducers'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: persistentStoreBlacklist,
    whitelist: persistentStoreWhitelist,
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
