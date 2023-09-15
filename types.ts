export interface Ticket {
    id: string;
    name: string;
    ticketNumber: string;
  };
  
  export interface GiveWay {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    price:string;
    giveawayDate:string;
    tickets: Ticket[]
  };

  export interface Transaction {
    id: string;
    code: string;
    gatewayId?: string;
    fullname?: string;
    email?: string;
    isPaid: boolean;
    total: string;
    tickets?: Ticket[]
  }
  
  