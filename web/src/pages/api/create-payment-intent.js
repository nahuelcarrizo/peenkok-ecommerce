import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {

});

const calculateOrderAmount = () => {
  
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};


export default async function handler(req, res) {
  
  const { parsedtotalPrice } = req.body;

const total = JSON.stringify(parsedtotalPrice)

  if (req.method === 'POST') {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total*100,
        currency: "eur",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });

  // Create Checkout Sessions from body params.


    } catch (error) {

      return res.status(400).send({
        error: {
          message: error.message,
        },
      });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    }
  // Create a PaymentIntent with the order amount and currency
  }



//   if (req.method === 'POST') {

//     try {
//       const params = {
//         submit_type: 'pay',
//         mode: 'payment',
//         payment_method_types: ['card'],
//         billing_address_collection: 'auto',
//         shipping_options: [
//           { shipping_rate: 'shr_1NzmFdKcsRirMXX9F9HX9wpZ' },
//           { shipping_rate: 'shr_1NzmDzKcsRirMXX9LtwSD8qx' }
//         ],
//         line_items: req.body.map((item) => {
//             console.log(item.image[0].asset._ref)
//         //   const img = item.image[0].asset._ref;
//         //   const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vvhlk67r/development/').replace('-webp', '.webp');

//           return {
//             price_data: { 
//               currency: 'eur',
//               product_data: { 
//                 name: item.name,
//                 // images: [newImage],
//               },
//               unit_amount: item.price * 100,
//             },
//             adjustable_quantity: {
//               enabled:true,
//               minimum: 1,
//             },
//             quantity: item.quantity
//           }
//         }),
//         success_url: `${req.headers.origin}/succed`,
//         cancel_url: `${req.headers.origin}/`,
//       }

//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create(params);

//       res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
