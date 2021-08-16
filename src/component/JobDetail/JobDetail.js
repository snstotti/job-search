import React from 'react'
import { Container } from 'react-bootstrap'
import TitleComponent from '../../secondaryFunc/TitleComponent/TitleComponent'
import ContentBlock from './ContentBlock/ContentBlock'
import JobDescription from './JobDescription/JobDescription'
import './JobDetail.scss'

export default function JobDetail() {
    return (
        <div className="job-detail">
            <Container>
                <div className="job-detail__block">
                    <TitleComponent
                        // title={'Browse jobs'}
                        // description={'Use following search box to find jobs that fits you better'}
                        component={<JobDescription />}
                    />
                </div>
                <main>
                    <ContentBlock
                        title='Обязанности'
                        content='Настройка страниц и компонентов. Кастомизация внешнего вида страниц и компонентов с помощью HTML + CSS;
                        Управление элементами страницы. Фиксация элементов страницы при поддержке наставника и команды;
                        Помощь в организации прочих элементов системы. Сборка и настройка других элементов.' />
                    <ContentBlock
                        title='Ожидаемый набор навыков и знаний'
                        content='понимание основ и идеологии React.js и компонентной структуры;
                        понимание react + redux;
                        опыт кроссбраузерной вёрстки (будет являться преимуществом);
                        опыт с TypeScript или желание научиться;
                        GIT и работа в команде;
                        стремление к росту;
                        навыки самоорганизации;
                        английский на уровне чтения документации (идеально если у тебя есть еще разговорная практика);
                        если в твоем опыте отсутствует один из критериев все равно присылай свое резюме, мы очень гибко подходим к процессу набора команды.' />
                    <ContentBlock
                        title='У нас:'
                        content='Возможность работать полностью удаленно или в офисе. График работы - полный рабочий день.
                        Мы заботимся о своих сотрудниках и соблюдаем все социальных гарантий в соответствии с ТК РФ.
                        Достойная заработная плата. Итоговый уровень дохода обсуждается с успешным кандидатом на собеседовании.
                        Возможность работать в стабильной продуктовой компании и принять участие в разработке продукта, который уже 20 лет является лидером рынка инженерного ПО.
                        Дружная команда профессионалов - мы открыты к обсуждениям и обратной связи;
                        Возможность предлагать свои идеи и влиять на результат.' />
                   
                </main>

            </Container>
            
        </div>
    )
}
