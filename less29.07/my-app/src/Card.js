import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card mx-auto col-3 mt-5 me-3"> 
  <img className="mx-auto img-thumbnail" src="https://istore.kg/media/products/iphone-12-pro-max-gold-hero.webp" />
  <div className="card-body text-center mx-auto">
    <div className="cvp">
      <h5 className="card-title font-weight-bold">{this.props.productTitle}</h5> 
      <button data-id="{{id}}" data-name="{{name}}" data-price="{{price}}" className="btn cart px-auto add-cart">Добавить в корзину</button>
    </div>
  </div>
</div>
        )
    }
}
export default Card;
