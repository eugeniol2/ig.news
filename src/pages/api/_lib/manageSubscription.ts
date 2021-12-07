import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  console.log("função saveSubscription");
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };
  console.log("subscription");
  console.log(subscription);
  if (createAction) {
    console.log("createAction");
    console.log(createAction);
    await fauna.query(
      q.Create(q.Collection("subscription"), { data: subscriptionData })
    );
  } else {
    try {
      await fauna.query(
        q.Replace(
          q.Select(
            "ref",
            q.Get(q.Match(q.Index("subscription_by_id"), subscriptionId))
          ),
          { data: subscriptionData }
        )
      );
    } catch (err) {
      console.log("manageSubsCatch");
      console.log(err);
      // console.log(err)
    }
  }
}
