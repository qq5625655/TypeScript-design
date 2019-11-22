<template>
    <table class="table-init">
        <thead>
            <tr>
                <th v-for="(column, index) in columns" :key="index">
                    <div class="table-cell">
                        <span>{{ column.title }}</span>
                    </div>
                </th>
            </tr>
        </thead>
    </table>
</template>
<script>
export default {
    props: {
        columns: {
            type: Array
        },
        data: {
            type: Array
        },
        fixed: {
            type: [Boolean, String],
            default: false
        }
    }
};
</script>
