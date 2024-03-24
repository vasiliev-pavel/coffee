<template>
    <h1>Reports</h1>
    <DateBar />
    <div class="menu-reports gap-6">
        <div class="section-reports">
            <h2>Sales Trends</h2>
        </div>
        <div class="block-reports">
            <h2>Revenue Summary</h2>
            <div>
                <span>Net Sales</span>
                <span>$200.54</span>
            </div>
            <div>
                <span>Tax Amount</span>
                <span>$21.03</span>
            </div>
            <div>
                <span>Discounts</span>
                <span>$2.00</span>
            </div>
            <div>
                <span>Tips</span>
                <span>$25.50</span>
            </div>
            <div>
                <span>Total Amount</span>
                <span>$247.07</span>
            </div>
        </div>
        <div class="block-reports">
            <h2>Orders</h2>
            <div>
                <span>Cappuccino</span>
                <span>13</span>
            </div>
            <div>
                <span>Mocha</span>
                <span>7</span>
            </div>
            <div>
                <span>Chai Latte</span>
                <span>6</span>
            </div>
            <div>
                <span>Iced Latte</span>
                <span>5</span>
            </div>
            <div>
                <span>Total Sales</span>
                <span>31</span>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "panel",
});
</script>

<style>
.menu-reports {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2rem;

    &>div {
        display: grid;
        background-color: #fff;
        color: #0a246b;
        padding: 15px 20px;
        border-radius: 0.25rem;
        box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;
        transition: 0.3s all;
        cursor: pointer;

        &>div {
            display: flex;
            justify-content: space-between;
            padding: 15px 3px;
        }

        &>div:last-child {
            font-weight: bold;
            border-top: 1px solid #0a246b;
        }


        &>hover {
            box-shadow: rgba(6, 5, 50, 0.15) 0px 0px 12px -4px;
        }

        &>h2 {
            font-weight: bold;
            font-size: 2rem;
        }

    }

    &>.section-reports {
        grid-column: span 2;
    }

    &>.block-reports {
        grid-column: span 1;
    }
}
</style>