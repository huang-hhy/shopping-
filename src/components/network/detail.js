import {request} from './request'

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.realPrice = itemInfo.lowNowPrice;   
      this.discountBgColor = itemInfo.discountBgColor;     
    }
  }

  export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo; //字符串
      this.score = shopInfo.score; //数组
      this.fans = shopInfo.cFans;
      this.goods = shopInfo.cGoods;
      this.sells = shopInfo.cSells;
      this.name = shopInfo.name;
    }
  }