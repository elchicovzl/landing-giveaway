import TicketSold from "@/components/ticket-sold";

const BoletasPage = () => {
    return ( 
        <div className="p-4">
            <h2 className="text-white">tus boletas</h2>
            <div className="grid grid-rows-4 grid-flow-col gap-2">
                <TicketSold />
                <TicketSold />
                <TicketSold />
                <TicketSold />
            </div>
            
        </div>
     );
}
 
export default BoletasPage;