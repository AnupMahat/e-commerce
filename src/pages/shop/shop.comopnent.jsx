import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.comopnent'
import {connect} from 'react-redux'
import CollectionsOverview from '../../components/collections-overview/collections-overview'

import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectiosnPageWithspinner = WithSpinner(CollectionPage)

class  ShopPage extends Component{  
    state = {
        loading:true
    }
    unsubscribeFromSnapshot = null
    
    componentDidMount(){
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')

        collectionRef.get()
        .then(shapshot =>{
            const collectionsMap = convertCollectionSnapshotToMap(shapshot)
            console.log(collectionsMap)
            updateCollections(collectionsMap)
            this.setState({loading:false})
        } )
    }

    render(){
        const {match} = this.props
        return(
            <div className='shop-page'>
                <Route exact path = {`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={this.state.loading}{...props}/>}/>
                <Route path={`${match.path}/:CollectionId`} render={(props)=><CollectiosnPageWithspinner isLoading={this.state.loading}{...props}/>}/>
            </div>
)
    }
}

const mapDispatchToProps=(dispatch)=>({
    updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})
    

export default connect(null,mapDispatchToProps)(ShopPage)