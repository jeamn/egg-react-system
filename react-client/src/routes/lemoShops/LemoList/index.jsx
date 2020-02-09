import React from 'react'
import { connect } from 'react-redux'
import actions from '../../../redux/actions/lemoShops'
import './style.scss'

class LemoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shopList: []
    }
  }
  componentDidMount = () => {
    let res = this.props.getShops().payload
    if (res.code !== 0) return
    let shopList = this.state.shopList
    shopList = res.data
    this.setState({
      shopList
    })
  }
  render() {
    return (
      <div>
        乐墨店铺列表
          {this.state.shopList.map((i, index) => ((
            <div style={{'border-bottom': '2px solid gray'}} key={index}>
              <div>店铺名称：{i.name}</div>
              <div>店铺 ID：{i.id}</div>
              <div>创建时间：{i.created}</div>
              <div>店铺地址：{i.address}</div>
              <div>店铺 LOGO：{i.logo}</div>
              <div>店铺二维码：{i.qrcode}</div>
              <div>店铺类型：{i.shopType}</div>
              <div>店铺版本：{i.version}</div>
            </div>
        )))}
      </div>
    )
  }
}
let mapStateToProps = state => state.lemoShops
export default connect(mapStateToProps, actions)(LemoList)