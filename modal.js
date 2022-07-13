'use strict';

var messageModal = document.querySelector('.modal textarea');
var showModal = document.querySelectorAll('.order-modal');
var modal = document.querySelector('.modal');
var closeModal = document.querySelector('.modal-close');
var titleModal = document.querySelector('.modal h2');

for (var i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', function (e) {
        modal.classList.add('modal_active');
        var idSend = e.target.id;
        switch (idSend) {
            case 'send-1':
                messageModal.value = 'Калиброванный прокат:';
                break;
            case 'send-2':
                messageModal.value = 'Проволока стальная:';
                break;
            case 'send-3':
                messageModal.value = 'Сварочные материалы:';
                break;
            case 'send-4':
                messageModal.value = 'Канаты стальные:';
                break;
            case 'send-5':
                messageModal.value = 'Лента стальная:';
                break;
            case 'send-6':
                messageModal.value = 'Профиль фасонный:';
                break;
            case 'send-7':
                messageModal.value = 'Сетка стальная:';
                break;
            case 'send-8':
                messageModal.value = 'Крепёж:';
                break;
            case 'price-1':
                titleModal.textContent = "Узнать цену:";
                messageModal.value = 'Интересует цена на:';
                break;
            case 'price-2':
                titleModal.textContent = "Заявка:";
                messageModal.value = 'Заявка на:';
                break;
            default:
                alert("Нет таких значений");
        }
    });
}

// showModal.forEach(function (button) {
//     return button.addEventListener('click', function (e) {
//         modal.classList.add('modal_active');
//         var idSend = e.target.id;
//         switch (idSend) {
//             case 'send-1':
//                 messageModal.value = 'Калиброванный прокат:';
//                 break;
//             case 'send-2':
//                 messageModal.value = 'Проволока стальная:';
//                 break;
//             case 'send-3':
//                 messageModal.value = 'Сварочные материалы:';
//                 break;
//             case 'send-4':
//                 messageModal.value = 'Канаты стальные:';
//                 break;
//             case 'send-5':
//                 messageModal.value = 'Лента стальная:';
//                 break;
//             case 'send-6':
//                 messageModal.value = 'Профиль фасонный:';
//                 break;
//             case 'send-7':
//                 messageModal.value = 'Сетка стальная:';
//                 break;
//             case 'send-8':
//                 messageModal.value = 'Крепёж:';
//                 break;
//             case 'price-1':
//                 titleModal.textContent = "Узнать цену:";
//                 messageModal.value = 'Интересует цена на:';
//                 break;
//             case 'price-2':
//                 titleModal.textContent = "Заявка:";
//                 messageModal.value = 'Заявка на:';
//                 break;
//             default:
//                 alert("Нет таких значений");
//         }
//     });
// });

closeModal.addEventListener('click', function () {
    modal.classList.remove('modal_active');
});

window.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.modal_active')) {
        modal.classList.remove('modal_active');
    }
});