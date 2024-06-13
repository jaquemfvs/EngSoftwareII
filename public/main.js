const dailyData = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [{
        label: 'Consumo Diário (kWh)',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const monthlyData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [{
        label: 'Consumo Mensal (kWh)',
        data: [120, 150, 170, 210, 160, 190, 220, 240, 180, 200, 210, 230],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

// Configuração dos gráficos
const dailyCtx = document.getElementById('dailyConsumptionChart').getContext('2d');
const monthlyCtx = document.getElementById('monthlyConsumptionChart').getContext('2d');

const dailyConsumptionChart = new Chart(dailyCtx, {
    type: 'line',
    data: dailyData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const monthlyConsumptionChart = new Chart(monthlyCtx, {
    type: 'bar',
    data: monthlyData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});