import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs';

export async function POST(
    req: Request,
  ) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const store = process.env.NEXT_PUBLIC_LANDING_STORE;

        const { userId } = auth();
        const body = await req.json();

        const { transactionId, qtyTickets, price, gatewayId, giveawayId } = body;
        const {  username, emailAddresses, firstName, lastName } = await currentUser();
        
        const fullname = `${firstName} ${lastName}`;
        const emailObj = emailAddresses[0];

        console.log("fullname:", fullname);
        console.log("que es:", emailObj);
        console.log("email:", emailObj.emailAddress);
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 403 });
        }
        
        if (!giveawayId) {
          return new NextResponse("Sorteo es requerido", { status: 400 });
        }
  
        if (!transactionId) {
            return new NextResponse("Transaccion es requerida", { status: 400 });
        }

        const res = await fetch(`${apiUrl}/api/${store}/giveways/${giveawayId}/transactions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            transactionId,
            qtyTickets,
            total:price,
            user:userId,
            email:emailObj.emailAddress,
            fullname,
            gatewayId
          }),
        })
       
        const data = await res.json()
    
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 });
    }
};