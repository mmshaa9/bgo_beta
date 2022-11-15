import { useEffect } from 'react';
import {useQuery} from '@apollo/client';
import {AUTOMATIZATION} from 'GraphQL/Queries';
import clsx from 'clsx';
import styles from './style.module.scss';
import {Link} from "react-router-dom";
import Form from "../../components/Form";
import Button from "../../components/Button";

const Avtomatizachia = ({offsetY}) => {
    const {error, loading, data} = useQuery(AUTOMATIZATION)

    useEffect(() => {}, [data])
    return (
        <div className={clsx(styles ['avtomatizachia'])}>
            <div className={clsx(styles['avtomatizachia__block1'])}>
                <div className={clsx(styles['avtomatizachia__block1__content1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.automatization_content.block1.title}</h2>
                        <p>{data.page.automatization_content.block1.subtitle.split('\n').map((x, key) => <span key={key}>{x}</span>)}</p>
                    </>
                )}
            </div>
                <div className={clsx(styles['avtomatizachia__block1__image1'], styles['img1'])}>
                    {!loading &&  (
                        <img src={data.page.automatization_content.block1.image.sourceUrl} alt="" />
                    )}
                </div>
            </div>

            <div className={clsx(styles['avtomatizachia__block2'])}>
                <div className={clsx(styles['avtomatizachia__block2__content2'])}>
                {!loading &&  (
                        <>
                            <h3>{data.page.automatization_content.block2.title}</h3>
                            <ul className={clsx(styles['avtomatizachia__block2__content2__list1'])}>
                                {data.page.automatization_content.block2.list1.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                            </ul>
                            <ul className={clsx(styles['avtomatizachia__block2__content2__list2'])}>
                                {data.page.automatization_content.block2.list2.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                            </ul>
                            {<h4><Link to={data.page.automatization_content.block2.link.url}>{data.page.automatization_content.block2.link.text}</Link></h4>}
                            <Form className={clsx(styles['form'])}>
                                {/*<Input placeholder='Имя'/>*/}
                                {/*<Input placeholder='Контакт' />*/}
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                                <Button>Получить консультацию</Button>
                            </a>
                            </Form>
                        </>
                )}
            </div>
                <div className={clsx(styles['avtomatizachia__block2__content3'])}>
                    {!loading &&  (
                        <>
                            <h3>{data.page.automatization_content.block3.title}</h3>
                            <ul className={clsx(styles['avtomatizachia__block2__content3__list1'])}>
                                {data.page.automatization_content.block3.list1.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                            </ul>
                            <p>{data.page.automatization_content.block3.paragraph1}</p>
                            <ul className={clsx(styles['avtomatizachia__block2__content3__list2'])}>
                                {data.page.automatization_content.block3.list2.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                            </ul>
                            <p>{data.page.automatization_content.block3.paragraph2}</p>
                            <p>{data.page.automatization_content.block3.paragraph3}</p>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Avtomatizachia;