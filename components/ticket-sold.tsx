const TicketSold = () => {
    return ( 
        <div className="container-ticket">
            <div className="item">
                <div className="item-right">
                    <h2 className="num">23</h2>
                    
                    <span className="up-border"></span>
                    <span className="down-border"></span>
                </div>

                <div className="item-left">
                    <p className="event"></p>
                    <h2 className="title">Sorteo por un pura sangre</h2>

                    <div className="sce">
                        <p className=""><b>Sorteo:</b> octubre 26, 2023</p>
                        <br />
                        <p><b>Precio:</b> $65,000cop</p>
                    </div>
                    <div className="fix"></div>
                    
                </div>
            </div>
        </div>
         
    );
}
 
export default TicketSold;