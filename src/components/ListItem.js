import { Component } from '../core/Component';

export class ListItem extends Component {
    setup(props) {
        this.state = {
            id: Date.now(),
            amount: props,
            date() {
                const date = new Date();
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();
                const formattedDate = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
                return formattedDate;
            },
        };

        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donate-item';
        this.$rootElement.setAttribute('id', this.state.id);
        this.$rootElement.setAttribute('amount', this.state.amount);
        this.$rootElement.textContent = `${this.state.date()} -  `;
        const descDonateItem = document.createElement('b');
        descDonateItem.textContent = `$${this.state.amount}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-button');
        deleteBtn.textContent = 'Удалить';

        this.$rootElement.append(descDonateItem, deleteBtn);
    }
}
