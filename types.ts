export interface Ticket {
    id: string;
    name: string;
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
  
  