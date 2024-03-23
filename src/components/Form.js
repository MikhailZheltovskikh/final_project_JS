import { Component } from '../core/Component';

export class Form extends Component {
    get isValid() {
        if (this.state.amount >= 1 && this.state.amount <= 100) {
            return true;
        } else {
            return false;
        }
    }

    setup(props) {
        this.state = {
            amount: '',
        };

        this.$rootElement = document.createElement('form');
        this.$rootElement.className = 'donate-form';

        const label = document.createElement('label');
        label.classList.add('donate-form__input-label');
        label.textContent = 'Введите сумму в $';

        const input = document.createElement('input');
        input.classList.add('donate-form__donate-input');
        input.setAttribute('name', 'amount');
        input.setAttribute('type', 'number');
        input.setAttribute('max', '100');
        input.setAttribute('min', '1');
        input.setAttribute('required', 'true');

        const button = document.createElement('button');
        button.classList.add('donate-form__submit-button');
        button.setAttribute('type', 'submit');
        button.textContent = 'Задонатить';
        button.setAttribute('disabled', 'true');

        label.appendChild(input);
        this.$rootElement.appendChild(label);
        this.$rootElement.appendChild(button);

        this.$input = input;
        this.$button = button;

        this.$input.addEventListener('input', this.handleInput.bind(this));
        this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleInput(event) {
        this.state.amount = event.target.value;

        if (this.isValid) {
            this.$button.disabled = false;
        } else {
            this.$button.disabled = true;
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.isValid) {
            this.props.onSubmit(Number(this.state.amount));
            this.$input.value = '';
        }
    }
}
