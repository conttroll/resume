let kazLang = document.getElementById('kz'),
    rusLang = document.getElementById('ru');

let language = {
            ru: {
                nameSurname: 'Асхат Айтуганов',
                school43: 'Средняя школа №43',
                school37: 'Средняя школа №37',
                univercity: 'КАЗАХСКО-РУССКИЙ<br>МЕЖДУНАРОДНЫЙ УНИВЕРСИТЕТ<br>',
                specialty: "<b>БАКАЛАВР</b> ТЕХНИКИ И ТЕХНОЛОГИИ<br><b>СПЕЦИАЛЬНОСТЬ</b> АВТОМАТИЗАЦИЯ И<br>УПРАВЛЕНИЕ",
                job1: 'АО Актюбинский завод хромовых соединений<br>',
                job1Text: '<b>учебная практика</b><br>наблюдение измеряемой величины на отчетном устройстве контрольно измерительных приборов (шкале с цифровым указателем, пере с диаграммой)',
                job2: 'Телекомпания нур',
                job2Text: '<b>видео-инженер</b><br>нарезка, монтаж, дизайн видеоданных разной сложности <b>работа в программах:</b> edius 7.0, adobe premiere pro, photoshop',
                skills: 'навыки',
                aboutMe: 'о себе',
                aboutMeText: '<b><i>ДАТА РОЖДЕНИЯ:</i></b> 14 МАЯ 1995<br><b><i>СЕМЕЙНОЕ ПОЛОЖЕНИЕ:</i></b> НЕ ЖЕНАТ<br><b><i>ЦЕЛЬ:</i></b> УСТРОИТСЯ НА РАБОТУ В СФЕРЕ IT, А ТОЧЕЕ ВЕБ-ПРОГРАММИСТОМ<br><b><i>ЛИЧНЫЕ КАЧЕСТВА:</i></b> ОТВЕТСТВЕННОСТЬ, АККУРАТНОСТЬ, ЧЕСТНОСТЬ, БЫСТОЕ ОСВОЕНИЕ НОВЫХ ЗНАНИЙ И НАВЫКОВ',
                drawing: 'рисование',
                reading: 'чтение',
                knowLanguages: 'знание языков',
                contact: 'контакты',
                city: 'Актобе',
                education: 'образование',
                experience: 'опыт работы',
                mainTitle: 'Асхат Айтуганов || Резюме',
                showAboutMe: 'о себе',
                goMain: 'главная'
            },
            kz: {
                nameSurname: 'Айтуғанов Асхат',
                school43: '№43 орта мектебі',
                school37: '№37 орта мектебі',
                univercity: 'қазақ-орыс халықаралық<br>универститеті<br>',
                specialty: "<b>БАКАЛАВРИАТ</b> ТЕХНИКА ЖӘНЕ ТЕХНОЛОГИЯ<br><b>мамандық</b> АВТОМАТтандыру және<br>басқару",
                job1: 'АҚ Ақтөбе хром қосындылары зауыты<br>',
                job1Text: '<b>жаттығу практикасы</b><br>бақылау-өлшеу аспаптарының есептік құрылғысында өлшенетін шаманы бақылау (сандық көрсеткіші бар шкала)',
                job2: 'нұр телекомпаниясы',
                job2Text: '<b>бейне-инженер</b><br>әр түрлі қиындықтағы бейнематериалдарды қию, монтаждау, дизайнын келтіру <b><br>жұмыс істеген программалар:</b> edius 7.0, adobe premiere pro, photoshop',
                skills: 'дағдылар',
                aboutMe: 'өзім туралы',
                aboutMeText: '<b><i>туылған күн:</i></b> 14 мамыр 1995<br><b><i>отбасылық жағдай:</i></b> үйленбеген<br><b><i>мақсат:</i></b> IT облысында жұмысқа кіру, дәлірек веб-программист<br><b><i>жеке қасиеттер:</i></b> жауапкершілік, ұқыптылық, адалдық, ЖАҢА БІЛІМ ЖӘНЕ БІЛІКТІЛІКТІ тез арада дамыту',
                drawing: 'сурет салу',
                reading: 'оқу',
                knowLanguages: 'білетін тілдер',
                contact: 'байланыс мәліметтері',
                city: 'Ақтөбе',
                education: 'білім',
                experience: 'жұмыс тәжірибесі',
                mainTitle: 'Айтуғанов Асхат || Резюме',
                showAboutMe: 'өзім туралы',
                goMain: 'басты бет'
            }
        };

function kzTranslate() {
    document.querySelector('.name_surname').textContent = language.kz.nameSurname;
    document.getElementById('school43').textContent = language.kz.school43;
    document.getElementById('school37').textContent = language.kz.school37;
    document.getElementById('univercity').innerHTML = language.kz.univercity;
    document.getElementById('specialty').innerHTML = language.kz.specialty;
    document.getElementById('job1').innerHTML = language.kz.job1;
    document.getElementById('job1Text').innerHTML = language.kz.job1Text;
    document.querySelector('.skills_title').innerHTML = language.kz.skills;
    document.getElementById('job2').innerHTML = language.kz.job2;
    document.getElementById('job2Text').innerHTML = language.kz.job2Text;
    document.querySelector('.about_me__title').innerHTML = language.kz.aboutMe;
    document.querySelector('.about_me__text').innerHTML = language.kz.aboutMeText;
    document.querySelector('.draw').innerHTML = language.kz.drawing;
    document.querySelector('.reading').innerHTML = language.kz.reading;
    document.querySelector('.know_languages__title').innerHTML = language.kz.knowLanguages;
    document.querySelector('.contact_title').innerHTML = language.kz.contact;
    document.querySelector('.city').innerHTML = language.kz.city;
    document.getElementById('education').innerHTML = language.kz.education;
    document.getElementById('experience').innerHTML = language.kz.experience;
    document.title = language.kz.mainTitle;
    document.querySelector('.showRightSide').innerHTML = language.kz.showAboutMe;
    document.querySelector('.showMain').innerHTML = language.kz.goMain;
}
function ruTranslate() {
    document.querySelector('.name_surname').textContent = language.ru.nameSurname;
    document.getElementById('school43').textContent = language.ru.school43;
    document.getElementById('school37').textContent = language.ru.school37;
    document.getElementById('univercity').innerHTML = language.ru.univercity;
    document.getElementById('specialty').innerHTML = language.ru.specialty;
    document.getElementById('job1').innerHTML = language.ru.job1;
    document.getElementById('job1Text').innerHTML = language.ru.job1Text;
    document.querySelector('.skills_title').innerHTML = language.ru.skills;
    document.getElementById('job2').innerHTML = language.ru.job2;
    document.getElementById('job2Text').innerHTML = language.ru.job2Text;
    document.querySelector('.about_me__title').innerHTML = language.ru.aboutMe;
    document.querySelector('.about_me__text').innerHTML = language.ru.aboutMeText;
    document.querySelector('.draw').innerHTML = language.ru.drawing;
    document.querySelector('.reading').innerHTML = language.ru.reading;
    document.querySelector('.know_languages__title').innerHTML = language.ru.knowLanguages;
    document.querySelector('.contact_title').innerHTML = language.ru.contact;
    document.querySelector('.city').innerHTML = language.ru.city;
    document.getElementById('education').innerHTML = language.ru.education;
    document.getElementById('experience').innerHTML = language.ru.experience;
    document.title = language.ru.mainTitle;
    document.querySelector('.showRightSide').innerHTML = language.ru.showAboutMe;
    document.querySelector('.showMain').innerHTML = language.ru.goMain;
}


        if (window.location.hash) {
            if (window.location.hash === '#kz') {
                kzTranslate();
            }
            if (window.location.hash === '#ru') {
                ruTranslate();
            }
        }


