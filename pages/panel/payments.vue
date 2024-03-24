<template>
    <h1>Payments</h1>
    <DateBar />
    <div class="payments-reports">
        <table>
            <thead>
                <tr class="payments-header">
                    <th># Order</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Tip</th>
                    <th>Discount</th>
                    <th>Total</th>
                    <th>Type</th>
                    <th>Receipt</th>
                </tr>
            </thead>
            <tbody>
                <tr class="payment-item" v-for="(item, index) in payments" :key="index">
                    <td>{{ item.orderId }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.tip }}</td>
                    <td>{{ item.discount }}</td>
                    <td>{{ item.total }}</td>
                    <td>{{ item.type }}</td>
                    <td>
                        <select @click="viewReceipt(item.receiptId)">
                            <option>Receipt</option>
                            <option value="email">Email</option>
                            <option value="show">Show</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script setup>
definePageMeta({
    layout: "panel",
});
const viewReceipt = (receiptId) => {
    // Implement receipt viewing logic here
    alert(`Viewing receipt: ${receiptId}`);
};
const payments = ref([
    {
        "orderId": "873",
        "date": '03-24-2024',
        "amount": "$41.88",
        "tip": "$15.71",
        "discount": "$0.81",
        "total": "$64.55",
        "type": "Credit Card",
        "receiptId": "R864"
    },
    {
        "orderId": "232",
        "date": '03-24-2024',
        "amount": "$24.00",
        "tip": "$2.44",
        "discount": "$1.69",
        "total": "$33.19",
        "type": "Cash",
        "receiptId": "R831"
    },
    {
        "orderId": "921",
        "date": '03-24-2024',
        "amount": "$99.00",
        "tip": "$2.78",
        "discount": "$4.87",
        "total": "$117.28",
        "type": "Online",
        "receiptId": "R527"
    },
    {
        "orderId": "986",
        "date": '03-24-2024',
        "amount": "$71.08",
        "tip": "$14.18",
        "discount": "$0.85",
        "total": "$66.49",
        "type": "Online",
        "receiptId": "R593"
    },
    {
        "orderId": "615",
        "date": '03-24-2024',
        "amount": "$60.82",
        "tip": "$19.45",
        "discount": "$2.52",
        "total": "$29.13",
        "type": "Cash",
        "receiptId": "R624"
    },
    {
        "orderId": "600",
        "date": '03-24-2024',
        "amount": "$38.71",
        "tip": "$17.52",
        "discount": "$1.47",
        "total": "$109.33",
        "type": "Credit Card",
        "receiptId": "R132"
    },
]);
</script>
<style>
.payments-reports {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    color: #0a246b;
    background-color: #fff;
}

th,
td {
    text-align: left;
    padding: 8px 15px;
    border-bottom: 1px solid #ddd;
}

.payment-item {
    &:hover {
        background-color: #ddd;
        cursor: pointer;
    }
}
</style>