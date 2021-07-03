import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions'
import { shopActionTypes } from './shop.types'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = yield firestore.collection('collections')
    const snapShot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapShot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStartSaga() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStartSaga)])
}
