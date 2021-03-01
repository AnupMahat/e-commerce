import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51IQ457BMYXCB1EePhKq017BEYZqB880Ien8K3fR5Tus8wyIwnnsWMePdMuwkKxk9EYpFhfQ06phLfzXpMRD56c3800P0hKyY6w'

   const onToken = token =>{
        console.log(token)
      alert('Payment Successfull')
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