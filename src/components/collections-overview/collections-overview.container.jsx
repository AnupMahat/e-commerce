import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'

import {selectIsCollectionFetcing} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import collectionsOverview from './collections-overview'


const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetcing
})

//alternate way
// const CollectionOverviewContiner = connect(mapStateToProps)(WithSpinner(collectionsOverview))

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverview)


export default CollectionsOverviewContainer

