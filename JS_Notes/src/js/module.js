const getMonday = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(date.setDate(diff));
    console.log(date.setDate(diff));
    console.log (monday);
    return monday;
};

const getDayOfWeek = (day) => {
    switch (day) {
        case 0:
            return 'ВС';        
        case 1:
            return 'ПН';
        case 2:
            return 'ВТ';
        case 3:
            return 'СР';
        case 4:
            return 'ЧТ';
        case 5:
            return 'ПТ';
        case 6:
            return 'СБ';
    }
}

const getClassForDayOfWeek = (day) => {
    switch (day) {
        case 0:
            return 'week__sun';        
        case 1:
            return 'week__mon';
        case 2:
            return 'week__tues';
        case 3:
            return 'week__wed';
        case 4:
            return 'week__thurs';
        case 5:
            return 'week__fri';
        case 6:
            return 'week__sat';
    }
}

const storage = [];

// Week days
{
    const week = document.getElementById('week');
    const arr = [1, 2, 3, 4, 5, 6, 0];
    const monday = getMonday(new Date());
    const dates = [];

    for (let i = 0; i < arr.length; i++) {
        if(i === 0) {
            dates.push({
                dayOfWeek: monday.getDay(),
                date: monday.getDate(),
                month: monday.getMonth() + 1
            });
        } else {
            const date = new Date(monday);  
            const newDate = new Date(date.setDate(date.getDate() + i));

            dates.push({
                dayOfWeek: newDate.getDay(),
                date: newDate.getDate(),
                month: newDate.getMonth() + 1
            });
        }
    }

    let weekDays = '';

    for (let i = 0; i < dates.length; i++) {
        const dateObj = dates[i];
        const dayClass = dateObj.date <= new Date().getDate() 
            ? getClassForDayOfWeek(dateObj.dayOfWeek) 
            : '';
        
        weekDays += `<li class="week__item ${dayClass}">
							<div class="week__day">${getDayOfWeek(dateObj.dayOfWeek)}</div>
							<div class="week__wont">${dateObj.date}/${dateObj.month}</div>
						</li>`;
    }

    week.insertAdjacentHTML('afterbegin', weekDays);    
}

{
    const addHabitBtn = document.getElementById('addHabit');
    const habitText = document.getElementById('habitText');
    const habitTextInput = document.getElementById('habitTextInput');
    const habitWrapper = document.getElementById('habitWrapper');
    let isInputMode = false;

    const parseHabit = (value) => {
        const habit = `<label class="btn--habit habit-init">
            <input type="checkbox" name="habit" class="_hidden">
            <span class="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14">
                    <path d="M17.462.585a2.125 2.125 0 0 1 0 2.826l-9.193 10a1.734 1.734 0 0 1-2.6 0L.536 7.826A2.125 2.125 0 0 1 .536 5a1.733 1.733 0 0 1 2.6 0L6.97 9.172l7.894-8.59a1.734 1.734 0 0 1 2.598.003z"/>
                </svg>
            </span>
            ${value}
        </label>`;
        habitWrapper.insertAdjacentHTML('afterbegin', habit);
    }

    const addNewHabit = () => { 
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;

        

        habitText.style.display = 'block';
        habitTextInput.style.display = 'none';

        const todayHabits = storage.find((habit) => habit.day === day && habit.month === month);

        if(todayHabits) {
            todayHabits.habits.push(value);
            console.log('1', todayHabits, Array.isArray(todayHabits));
        } else {
            storage.push({
                day,
                month,
                habits: [value]
            });
            console.log('2', storage, Array.isArray(storage));

        }

        
        
        isInputMode = false;

        

        saveData(storage);

        // habitTextInput.value = '';
    }

    function saveData (storage = []) {
        if (!storage.length) {
            return
        };
        localStorage.setItem('habitsMemory', JSON.stringify(storage));
    }
    
    const loadData = () => {
        let dataBank = localStorage.getItem('habitsMemory');
        if (!dataBank) {
            return
        }
        let data = JSON.parse(dataBank);
               data.forEach((obj) => {
                if (obj.day === new Date().getDate() && obj.month === new Date().getMonth()) {
                    parseHabit(obj.habits);
                }
               });          
    }

    addHabitBtn.onclick = (event) => {
        if(!isInputMode) {
            habitText.style.display = 'none';
            habitTextInput.style.display = 'block';
            habitTextInput.focus();
            isInputMode = true;
        } else {
            parseHabit(habitTextInput.value);
        }
    }
    loadData();
}


    console.log(storage);
