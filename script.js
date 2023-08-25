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