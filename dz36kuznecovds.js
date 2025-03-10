// На 8-ку: написать таблицу сложения

function createAdditionTable() {
    const table = document.createElement('table');
    
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement('td');
            cell.textContent = `${i} + ${j} = ${i + j}`;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    document.body.appendChild(table);
}

createAdditionTable();

// а 10-ку Написать таблицу, заполненную самоуничтожающимися кнопками

function createSelfDestructingButtonTable() {
    const table = document.createElement('table');

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');

        const button = document.createElement('button');
        button.textContent = `Кнопка ${i + 1}`;
        
        button.onclick = function() {
            this.parentNode.removeChild(this); // Удалить кнопку
        };

        cell.appendChild(button);
        row.appendChild(cell);
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

createSelfDestructingButtonTable();

// На 12-ку Написать таблицу товаров, с ценами, подсчитывающую сумму заказа.

const products = [
    ['хлеб', 25, 2],
    ['клубника', 2000, 1]
];

function createProductTable() {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['Товар', 'Цена', 'Количество', 'Сумма'];

    headers.forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });

    table.appendChild(headerRow);

    let totalPrice = 0;

    products.forEach(product => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = product[0];
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = product[1];
        row.appendChild(priceCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = product[2];
        row.appendChild(quantityCell);

        const sumCell = document.createElement('td');
        const productSum = product[1] * product[2];
        sumCell.textContent = productSum;
        totalPrice += productSum;
        row.appendChild(sumCell);

        table.appendChild(row);
    });

    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 3;
    totalCell.textContent = 'Итого:';
    totalRow.appendChild(totalCell);

    const totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = totalPrice;
    totalRow.appendChild(totalPriceCell);

    table.appendChild(totalRow);

    document.body.appendChild(table);
}

createProductTable();
