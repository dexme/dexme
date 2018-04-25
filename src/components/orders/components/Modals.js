import React, { PropTypes } from 'react';
import TradeConfirm from './TradeConfirm'
import Detail from './Detail'
import Fills from './Fills'
import PlaceOrderSuccess from './PlaceOrderSuccess'
import PlaceOrderError from './PlaceOrderError'
import ModalContainer from '../../../modules/modals/container'
import Sockets from '../../../modules/socket/containers'

function Modals(props){
  return (
    <div>
     <ModalContainer id="trade/confirm">
       <Sockets.Assets>
         <TradeConfirm />
       </Sockets.Assets>
     </ModalContainer>
     <ModalContainer id="trade/place-order-success">
         <PlaceOrderSuccess />
     </ModalContainer>
     <ModalContainer id="trade/place-order-error">
         <PlaceOrderError />
     </ModalContainer>
     <ModalContainer id="order/detail" width="60%">
         <Detail />
     </ModalContainer>
      <ModalContainer id="order/detail/fills" width="60%">
        <Fills />
      </ModalContainer>
    </div>
  );
}

export default Modals;
