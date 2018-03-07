import React from 'react';
import { Modal,Collapse,Button,Input,Steps,Popover,Alert,Card,Icon} from 'antd';
import iconSuccess from '../../../assets/images/icon-success.png'

const PlaceOrderSuccess = ({
  }) => {
  const MetaItem = (props)=>{
    const {label,value}=props
    return (
      <div className="row zb-b-b pt10 pb10 no-gutters">
        <div className="col">
          <div className="fs14 color-grey-500">{label}</div>
        </div>
        <div className="col-auto">
          <div className="fs14 color-grey-900">{value}</div>
        </div>
      </div>
    )
  }
  const gotoReceive = ()=>{

  }
  const gotoConvert = ()=>{

  }
  const gotoBuy = ()=>{

  }
  return (
    <Card title="Placing Order">
      <div className="text-center p15 zb-b-b">
        <Icon type="close-circle" className="color-red-500" style={{fontSize:'72px'}}/>
        <div className="fs24 color-grey-900 mb10">Place Order Failed !</div>
        <div className="fs14 color-grey-500">
          Some Tip Some Tip Some Tip Some Tip
        </div>
      </div>
      <div className="p15 bg-grey-100" style={{borderRadius:'6px'}}>
        <div className="fs12 color-grey-500 mb10">
          You should do things followed: (<a href="">Why</a>)
        </div>
        <div className="">
          <Icon className="color-red-500 mr10" type="close-circle-o" />ETH blance is not enough
          <a onClick="" className="ml15 color-blue-500">Receive <Icon type="right" /></a>
          <a onClick="" className="ml15 color-blue-500">Buy <Icon type="right" /></a>
        </div>
        <div className="">
          <Icon className="color-red-500 mr10" type="close-circle-o" />LRC blance is not enough
          <a onClick="" className="ml15 color-blue-500">Receive <Icon type="right" /></a>
          <a onClick="" className="ml15 color-blue-500">Buy <Icon type="right" /></a>
        </div>
      </div>
    </Card>
  )
}

export default PlaceOrderSuccess

