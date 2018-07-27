import React, { Component } from 'react';
import LineItem from './LineItem';
import { map, max, filter, sum } from 'lodash';
import lineItems from '../constants/Products';

class CashVoucher extends Component {
  constructor(props) {
    super(props);

    this.state = { lineItems };
  }

  maxId() {
    const { lineItems } = this.state;

    return max(map(lineItems, 'id'));
  }

  nextId() {
    return (this.maxId() + 1 || 1);
  }

  addLineItem() {
    const { lineItems } = this.state;
    const nextId = this.nextId();

    const newLineItem = {
      id: nextId,
      title: `New product ${nextId}`,
      price: 10 + nextId
    };

    this.setState({ lineItems: [...lineItems, newLineItem] });
  }

  deleteLineItem(id) {
    const { lineItems } = this.state;
    const newLineItems = filter(lineItems, (lineItem) => lineItem.id !== id);
    this.setState({ lineItems: newLineItems });
  }

  render() {
    return (
      <div>
        {
          map(this.state.lineItems, (lineItem) => (
            <LineItem
              key={lineItem.id}
              deleteFunc={() => this.deleteLineItem(lineItem.id)}
              {...lineItem}
            />
          ))
        }
        <hr />
        <span>TOTAL: {sum(map(this.state.lineItems, 'price'))} USD</span>
        <hr />
        <a href="#" title="Add line item" onClick={() => this.addLineItem()}>
          Add line item
        </a>
      </div>
    );
  }
}

export default CashVoucher;
