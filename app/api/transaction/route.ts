import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

export async function POST(
    req: Request,
  ) {
    try {
        const { userId } = auth();
        const body = await req.json();
        
        const { transactionId, qtyTickets, imageSrc, price } = body;
  
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 403 });
        }
  
        if (!transactionId) {
            return new NextResponse("Transaccion es requeridaa", { status: 400 });
        }

      /* if (!imageSrc) {
        return new NextResponse("imagen es requerida", { status: 400 });
      } */

        const res = await fetch(`http://localhost:3001/api/6d14edb4-57a6-4f68-a4a5-cce446224cf6/giveways/c163b39a-9290-4ac6-a69f-9bff5b4d9951/transactions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            transactionId,
            qtyTickets,
            imageSrc,
            total:price,
            user:userId
          }),
        })
       
        const data = await res.json()

        console.log("respuesta")
        console.log(data)


      /* const store = await prismadb.profile.create({
        data: {
          name:fullname,
          email,
          role,
          userId,
          storeId:'asdsa' 
        }
      }); */
    
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 });
    }
};