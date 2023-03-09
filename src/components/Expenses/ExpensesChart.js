import React from "react";


import Chart from "../Chart/Chart";


const ExpensesChart = props => {
    const chartDataPoints = [
        {label:'jan',value:0},
        {label:'feb',value:0},
        {label:'mar',value:0},
        {label:'apr',value:0},
        {label:'may',value:0},
        {label:'jun',value:0},
        {label:'jul',value:0},
        {label:'aug',value:0},
        {label:'sept',value:0},
        {label:'oct',value:0},
        {label:'nov',value:0},
        {label:'dec',value:0},
    
    ]
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();//jan=0 to dec=11
        chartDataPoints[expenseMonth].value += expense.amount;
    }
        


    return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;