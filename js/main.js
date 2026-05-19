const DB_KEY = 'juniorCV'
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchResumeFromBeckend() {
    await delay(500);
    const stored = localStorage.getItem(DB_KEY);
    if (stored) {
        return JSON.parse(stored)
    }
    return {
        fullname: '',
        position: '',
        email: '',
        phone: '',
        city: '',
        technologies : [],
        projects: [],
        education: ''
    };
}

async function fetchTemplatesFromBackend() {
    await delay(400);
    return {
        frontend: {
            fullname: 'Алексей Смирнов',
            position: 'Junior Frontend Developer',
            email: 'alexey@example.com',
            phone: '+7 999 111-22-33',
            city: 'Санкт-Петербург',
            technologies: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Git'],
            projects: [
                { name: 'Погодное приложение', link: 'https://github.com/alex/weather', desc: 'React + API OpenWeather, адаптивный дизайн.' },
                { name: 'Todo-лист', link: 'https://github.com/alex/todo', desc: 'Чистый JS, localStorage.' }
            ],
            education: 'ИТМО, Программная инженерия, 2023–2027'
        },
        analyst: {
            fullname: 'Екатерина Петрова',
            position: 'Junior Data Analyst',
            email: 'katya@example.com',
            phone: '+7 912 345-67-89',
            city: 'Москва',
            technologies: ['Python', 'Pandas', 'SQL', 'Tableau', 'Excel'],
            projects: [
                { name: 'Анализ продаж', link: 'https://github.com/katya/sales', desc: 'Анализ датасета retail, построение дашборда.' }
            ],
            education: 'ВШЭ, Экономика и статистика, 2022–2026'
        },
        qa: {
            fullname: 'Дмитрий Козлов',
            position: 'Trainee QA Engineer',
            email: 'dmitry@example.com',
            phone: '+7 921 555-66-77',
            city: 'Казань',
            technologies: ['Ручное тестирование', 'Postman', 'Jira', 'Charles', 'bug reports'],
            projects: [
                { name: 'Тестирование интернет-магазина', link: '', desc: 'Составлено 30 тест-кейсов, заведено 10 багов.' }
            ],
            education: 'КФУ, Информационные системы, 2021–2025'
        }
    };
}