<template>
    <table class="table-init">
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td v-for="(column, colIndex) in columns" :key="colIndex">
                    <div class="table-cell">
                        <span>{{ item[column.key] }}</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    computed: {},
    props: {
        columns: {
            type: Array
        },
        data: {
            type: Array
        },
        height: {
            type: Number
        }
    }
};
</script>
