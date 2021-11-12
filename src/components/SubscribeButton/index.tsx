import styled from './styles.module.scss';
import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

export function SubscribeButton() {

    const [session] = useSession();

    async function handleSubscribe(){
        if (!session){
            signIn('github')
            return;
        }

        try{
            const response = await api.post('/subscribe')

            const { sessionId } = response.data;

            const stripe = await getStripeJs( )

            await stripe.redirectToCheckout({sessionId})
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <button 
        type="button"
        className={styled.signInButtonContent}
        onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    );
}