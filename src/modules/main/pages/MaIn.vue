<template>
    <section>
        <header>
            <img src="/public/icons/cashFlow-paisaje.svg" alt="LogoReload" @click="reload" />
            <p class="f-medium">Cash<span>Flow</span></p>
            <div />
        </header>

        <boDy
            :title="title"
            :titeDate="titleSelect"
            :amount="amount"
            :fullAmount="fullAmount"
        >
            <template #graphic>
                <graPhic />
            </template>
            <template #action>
                <Action @action="openModalMovement" />
            </template>
        </boDy>
        <fooTer @showFooter="showHistory = !showHistory">
            <template #cards>
                <div class="transition-footer" :class="{ 'content-history': showHistory }">
                    <template v-if="showHistory">
                        <moVements
                            v-for="(movimiento, i) in movimientos"
                            :key="i"
                            :data="movimiento"
                        />
                    </template>
                </div>
            </template>
        </fooTer>
        <teleport to="#app">
            <modalMovement v-if="showModal" @closeModal="openModalMovement">
                <Form class="d-flex flex-column gap-3 p-2" @submit="sendForm" :validation-schema="mainSchema">
                    <Field name="title" v-slot="{ field, errorMessage }">
                        <label for="title">
                            Titulo
                        </label>
                        <el-input v-model="valuesForm.titleForm" placeholder="Titulo" id="title" v-bind="delete field.value && field" />
                        <label class="text-danger">{{ errorMessage }}</label>
                    </Field>
                    <Field name="amount" rules="required" v-slot="{ field, errorMessage }" >
                        <label for="amount">
                            Monto
                        </label>
                        <el-input type="number" v-model="valuesForm.amountForm" placeholder="Amount" v-bind="delete field.value && field" />
                        <span class="text-danger">{{ errorMessage }}</span>
                    </Field>
                    <Field name="description" rules="required" v-slot="{ field, errorMessage }">
                        <label for="description">
                            Descripcion
                        </label>
                        <el-input type="textarea" :rows="3" v-model="valuesForm.description" placeholder="Descripcion" v-bind="delete field.value && field" />
                        <span class="text-danger">{{ errorMessage }}</span>
                    </Field>
                    <el-radio-group v-model="valuesForm.radioValue" class="flex-column align-items-baseline">
                        <el-radio :label="1">
                            Ingreso
                        </el-radio>
                        <el-radio :label="2">
                            Gasto
                        </el-radio>
                    </el-radio-group>
                    <Action type="submit" />
                </Form>
            </modalMovement>
        </teleport>
    </section>
</template>

<script>
import { ref } from 'vue';
import { Form, Field } from 'vee-validate';
import boDy from '../partials/boDy.vue';
import fooTer from '../partials/fooTer.vue';
import moVements from '../components/moVements.vue';
import Action from '../../../shared/components/aCtion.vue';
import modalMovement from '../partials/modalMovement.vue';
import graPhic from '../partials/graPhic.vue';

export default {
    components: {
        boDy,
        fooTer,
        moVements,
        Action,
        modalMovement,
        Form,
        Field,
        graPhic
    },
    setup(){
        const movimientos = ref([
            { id: 1, title: "Movimiento", description: "Deposito de salarios", amount: "1000", },
            { id: 2, title: "Movimiento 1", description: "Deposito de honorarios", amount: "500", },
            { id: 3, title: "Movimiento 3", description: "Comida", amount: "-100", },
            { id: 4, title: "Movimiento 4", description: "Colegiatura", amount: "1000", },
            { id: 5, title: "Movimiento 5", description: "Reparación equipo", amount: "1000", },
        ])

        const showModal = ref(false)

        const valuesForm = ref({
            titleForm: '',
            amountForm: 0,
            description: '',
            radioValue: 1
        })

        const error = 'Campo vacio';

        const mainSchema = {
            title(value){
                if(value && value.trim()){
                    return true
                }
                return error
            },
            amount(value){
                if(Number(value) < 0){
                    return 'Solo numeros positivos'
                }
                else if(Number(value) >= 0 && Number(value)){
                    return true
                }

                return error
            },
            description(value){
                if(value && value.trim()){
                    return true
                }
                return error
            }
        }

        function openModalMovement(){
            valuesForm.value.titleForm = ''
            valuesForm.value.amountForm = 0
            valuesForm.value.description = ''
            valuesForm.value.radioValue = 1
            showModal.value = !showModal.value
        }

        function sendForm(){
            valuesForm.value.titleForm = ''
            valuesForm.value.amountForm = 0
            valuesForm.value.description = ''
            valuesForm.value.radioValue = 1
            openModalMovement()
        }


        return {
            movimientos,
            valuesForm,
            mainSchema,
            openModalMovement,
            sendForm,
            showModal
        }
    },
    data: () => ({
        showHistory: false,
        amount: 0,
        fullAmount: 6000000,
        title: 'Ahorro total',
        titleSelect: '13/6/2023',
    }),
    methods: {
        reload() {
            location.reload();
        },
    }
}

</script>

<style lang="scss" scoped>
section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        font-size: 20px;
        width: 100vw;

        img {
            width: 50px;
        }

        p {
            margin: 0;
            color: var(--brand-green);

            span {
                color: var(--brand-blue);
            }
        }

        div {
            width: 30px;
        }
    }


    .transition-footer {
        transition: height 0.3s ease-in-out;
        height: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow-y: auto;

        &.content-history {
            height: 500px;
            transition: height 0.3s ease-in-out;
        }
    }
    .transition-footer::-webkit-scrollbar{
        width: 0;
    }
}
</style>
