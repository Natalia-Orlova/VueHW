"use strict";

// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки должен перевернуться и отобразиться в обратном порядке.

// 2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".

// 3. *Дополнительное задание: При клике на элемент списка он должен быть удален. (по желанию)

 const app = new Vue({
    el: "#app",
    data: {
        reverse: false,
        buttonText: "Разверни текст",
        newItem: "",
        items: [
            "First",
            "Second",
        ]
    },
    methods: {
        //задание 2
        addElem() {
            if (this.newItem !== "") {
                this.items.push(this.newItem);
            }
        },
        //задание 3
        removeElem(index) {
            this.items.splice(index, 1);
        }
    },
    computed: {
        //задание 1
        btnText: function() {
            if (this.reverse) {
                return this.buttonText.split("").reverse().join("");
            }
            return this.buttonText;
        }
    }
 });







// v-for="(item, index) in items"