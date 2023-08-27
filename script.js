'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModal = function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
};

const closeModal = function () {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
});

const openPopUp = [document.querySelector('.openAccount'), document.querySelector('.register')];
const closePopUp = [document.querySelector('.modalClose'), document.querySelector('.modalSubmit'), overlay];
openPopUp.forEach(btn => btn.addEventListener('click', openModal));
closePopUp.forEach(btn => btn.addEventListener('click', closeModal))





















document.querySelector('.buttonTwo').addEventListener('click', function () {
    console.log("clicked");
    document.querySelector('.buttonTwo').classList.remove('activeButton');
    document.querySelector('.buttonOne').classList.remove('activeButton');
    document.querySelector('.buttonThree').classList.remove('activeButton');
    document.querySelector('.buttonTwo').classList.add('activeButton');
    document.querySelector('.containerDataTwo').classList.add('inactiveContainer');
    document.querySelector('.containerDataOne').classList.add('inactiveContainer');
    document.querySelector('.containerDataThree').classList.add('inactiveContainer');
    document.querySelector('.containerDataTwo').classList.remove('inactiveContainer');
});

document.querySelector('.buttonThree').addEventListener('click', function () {
    console.log("clicked");
    document.querySelector('.buttonTwo').classList.remove('activeButton');
    document.querySelector('.buttonOne').classList.remove('activeButton');
    document.querySelector('.buttonThree').classList.remove('activeButton');
    document.querySelector('.buttonThree').classList.add('activeButton');
    document.querySelector('.containerDataTwo').classList.add('inactiveContainer');
    document.querySelector('.containerDataOne').classList.add('inactiveContainer');
    document.querySelector('.containerDataThree').classList.add('inactiveContainer');
    document.querySelector('.containerDataThree').classList.remove('inactiveContainer');
});

document.querySelector('.buttonOne').addEventListener('click', function () {
    console.log("clicked");
    document.querySelector('.buttonTwo').classList.remove('activeButton');
    document.querySelector('.buttonOne').classList.remove('activeButton');
    document.querySelector('.buttonThree').classList.remove('activeButton');
    document.querySelector('.buttonOne').classList.add('activeButton');
    document.querySelector('.containerDataTwo').classList.add('inactiveContainer');
    document.querySelector('.containerDataOne').classList.add('inactiveContainer');
    document.querySelector('.containerDataThree').classList.add('inactiveContainer');
    document.querySelector('.containerDataOne').classList.remove('inactiveContainer');
});

document.querySelector('.modalSubmit').addEventListener('click', function (e) {
    e.preventDefault();
});
