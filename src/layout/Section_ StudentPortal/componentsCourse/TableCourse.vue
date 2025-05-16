<script setup lang="ts">
import { defineProps } from 'vue';
import { getImageUrl_icon } from '../../../utils/imageHelper';

interface Course {
    id: number;
    title: string;
    description: string;
    timeCourse: string;
    category: string;
    pathImageCourse: string;
    progress: string
}

const props = defineProps({
    DataCreateCourse: {
        type: Array as () => Course[],
        required: true
    }
})


</script>

<template>
    <table id="containerTable">
        <thead>
            <tr>
                <th>Conteudo</th>
                <th>Tipo</th>
                <th>Status</th>
                <th>Ultima atualização</th>
            </tr>

        </thead>

        <tbody v-for="item in props.DataCreateCourse" :key="item.id">
            <tr>
                <td class="item_one">
                    <img :src="getImageUrl_icon('icone_courses.png')" alt="icone">
                    {{ item.title }}
                </td>
                <td>Curso</td>
                <td>{{ item.progress }} %</td>
                <td>17, mar. 2025</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
#containerTable {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    font-family: 'Segoe UI', sans-serif;
}

#containerTable thead {
    background-color: #f5f5f5;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: #555;
}

#containerTable th,
#containerTable td {
    padding: 1rem;
    text-align: left;
}

#containerTable tbody tr {
    background-color: #fff;
    transition: background-color 0.3s ease;
}

#containerTable tbody tr:hover {
    background-color: #f9f9f9;
}

#containerTable td {
    font-size: 0.95rem;
    color: #333;
    border-top: 1px solid #eee;
}

@media (max-width: 768px) {

    #containerTable,
    #containerTable thead,
    #containerTable tbody,
    #containerTable th,
    #containerTable td,
    #containerTable tr {
        display: block;
        width: 100%;
    }

    #containerTable thead {
        display: none;
    }

    #containerTable td {
        position: relative;
        padding-left: 50%;
        text-align: right;
        border: none;
        border-bottom: 1px solid #eee;
    }

    #containerTable td::before {
        content: attr(data-label);
        position: absolute;
        left: 1rem;
        top: 1rem;
        font-weight: bold;
        color: #777;
        text-transform: uppercase;
        font-size: 0.75rem;
    }
}

.item_one {
    display: flex;
    align-items: center;
    gap: 20px;
    /* border: 1px solid red; */
}
</style>