const input = document.querySelector('input') as HTMLInputElement;
const ul    = document.querySelector('ul')    as HTMLUListElement;

interface item {
    id: number;
    text: string;
}

class Todo {

    private items: item[] = [];

    constructor() {
        const items = localStorage.getItem('items');
        this.items  = items ? JSON.parse(items) : [];

        this.show();

        input.addEventListener('keypress', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                this.add(input.value);
                input.value = '';
            }
        });
    }

    private add(text: string): void {
        const newItem: item = {
            id   : Date.now(),
            text : text
        };

        this.items.unshift(newItem);
        localStorage.setItem('items', JSON.stringify(this.items));
        this.show();
    }

    private delete(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
        localStorage.setItem('items', JSON.stringify(this.items));
        this.show();
    }

    private show(): void {
        ul.innerHTML = '';
        this.items.forEach((item) => {
            const li = document.createElement('li') as HTMLLIElement;
            li.textContent = item.text;
            const button = document.createElement('button') as HTMLButtonElement;
            button.textContent = 'X';
            button.addEventListener('click', () => this.delete(item.id));
            li.appendChild(button);
            ul.appendChild(li);
        });
    }
}

new Todo();