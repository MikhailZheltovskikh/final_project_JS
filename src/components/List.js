import { Component } from '../core/Component';

export class List extends Component {
    setup(props) {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donates-container';

        const heading = document.createElement('h2');
        heading.classList.add('donates-container__title');
        heading.textContent = 'Список донатов';

        const listContainer = document.createElement('div');
        listContainer.classList.add('donates-container__donates');

        this.$rootElement.appendChild(heading);
        this.$rootElement.appendChild(listContainer);

        this.listContainer = listContainer;

        this.listContainer.addEventListener('click', this.deleteItem.bind(this));
    }

    addItem(item) {
        this.listContainer.appendChild(item.$rootElement);
    }

    deleteItem(event) {
        if (event.target.classList.contains('delete-button')) {
            const parentElement = event.target.closest('.donate-item');
            if (parentElement) {
                const clickItemId = Number(parentElement.getAttribute('id'));
                parentElement.remove();
                this.props.onDelete(clickItemId);
            }
        }
    }
}
