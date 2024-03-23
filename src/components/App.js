import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
    setup(props) {
        this.state = {
            total: 0,
            donates: [],
        };

        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'app';

        const heading = document.createElement('h1');
        heading.classList.add('total-amount');
        heading.textContent = 'Итого: ';

        const headingContent = document.createElement('span');
        headingContent.textContent = `$${this.state.total}`;

        heading.append(headingContent);
        this.$rootElement.appendChild(heading);

        this.$total = headingContent;

        const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
        this.$rootElement.appendChild(donateForm.$rootElement);
        const donateList = new List();
        this.$rootElement.appendChild(donateList.$rootElement);

        this.donateList = donateList;
    }

    onItemCreate(amount) {
        const item = new ListItem(amount);
        this.state.donates.push(item);
        this.donateList.addItem(item);

        this.state.total += amount;
        this.$total.textContent = this.state.total;

        // console.log(this.state);
    }

    // onRemoveItem() {
    //     const item = new ListItem(amount);
    //     this.donateList.addItem(item);
    // }
}
