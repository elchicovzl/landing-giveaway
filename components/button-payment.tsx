"use client";

import { Ticket, GiveWay } from "@/types";
import { format } from "date-fns";
import { es } from 'date-fns/locale';
import { sha256 } from 'js-sha256';
import { useEffect } from "react";

interface ButtonPaymentProps {
    total: string;
    reference: string;
    giveaway: string;
    userId: string;
}

const ButtonPayment : React.FC<ButtonPaymentProps> = ({
    total,
    reference,
    giveaway,
    userId
  }) => {
    const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
    const integrity = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
    const redirectUrl2 = process.env.NEXT_PUBLIC_WOMPI_REDIRECT_URL
    const widgerUrl = process.env.NEXT_PUBLIC_WOMPI_WIDGET_URL

    const integrationKey = sha256(`${reference}${total}COP${integrity}`);

    useEffect(() => {         
                
        let element = document.getElementById('scrp')

        if (element !== null) {
            element.remove()
        }

        let buttonPay = document.getElementsByClassName('waybox-button')

        if (buttonPay.length > 0) {
            console.log(buttonPay);
            buttonPay[0].remove()
        }

        const script = document.createElement("script");

        let cents = parseInt(total) * 100;

        script.src = widgerUrl;
        script.setAttribute('id', "scrp");
        script.setAttribute('data-render', "button");
        script.setAttribute('data-public-key', publicKey);
        script.setAttribute('data-currency', "COP");
        script.setAttribute('data-amount-in-cents', cents.toString());
        script.setAttribute('data-reference', reference);
        script.setAttribute('data-signatureintegrity', integrationKey);
        script.setAttribute('data-redirect-url', `${redirectUrl2}/transaccion/${reference}`)

        document.getElementById("form1").appendChild(script);
        
        return () => {
            let element = document.getElementById('scrp')
            if (element !== null) {
                element.remove()
            }
        }
      }, [total, publicKey, integrationKey, reference, redirectUrl2, widgerUrl])


    return ( 
        <form id="form1"></form>
    );
}
 
export default ButtonPayment;
