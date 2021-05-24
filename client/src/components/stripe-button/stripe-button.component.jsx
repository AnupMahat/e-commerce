import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51IQ457BMYXCB1EePhKq017BEYZqB880Ien8K3fR5Tus8wyIwnnsWMePdMuwkKxk9EYpFhfQ06phLfzXpMRD56c3800P0hKyY6w'

   const onToken = token =>{
       axios({
           url:'payment',
           method:'post',
           data:{
               amount:priceForStripe,
               token
           }
       }).then(response => {
           alert('Payment Successful')
       }).catch(error=>{
           console.log('payment error:', JSON.parse(error))
           alert('There was an issue with the payment. Please make sure you use the provided credit card')
       })
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton